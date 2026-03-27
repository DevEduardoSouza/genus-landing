"use client";

const ENTER_DURATION = 780;
const EXIT_DURATION = 60;
const PIXEL_STEPS = 6;
const MAX_BLOCK = 8;
const CHAR_CELL = 4;

// ASCII characters by luminance (sparse → dense)
const GLYPHS = " .:-=+*#%@";

interface PixelState {
  progress: number; // 0..1
  target: number; // 0 or 1
  startTime: number;
  duration: number;
  image: HTMLImageElement | null;
  loaded: boolean;
}

export function createPixelState(): PixelState {
  return {
    progress: 0,
    target: 0,
    startTime: 0,
    duration: ENTER_DURATION,
    image: null,
    loaded: false,
  };
}

export function loadImage(state: PixelState, src: string) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    state.image = img;
    state.loaded = true;
  };
  img.src = src;
}

export function startHover(state: PixelState) {
  state.target = 1;
  state.startTime = performance.now();
  state.duration = ENTER_DURATION;
}

export function endHover(state: PixelState) {
  state.target = 0;
  state.startTime = performance.now();
  state.duration = EXIT_DURATION;
}

export function renderFrame(
  ctx: CanvasRenderingContext2D,
  state: PixelState,
  width: number,
  height: number,
): boolean {
  const now = performance.now();
  const elapsed = now - state.startTime;
  const t = Math.min(elapsed / state.duration, 1);

  if (state.target === 1) {
    state.progress = t;
  } else {
    state.progress = 1 - t;
  }

  state.progress = Math.max(0, Math.min(1, state.progress));

  if (!state.image || !state.loaded) return state.progress > 0;

  ctx.clearRect(0, 0, width, height);

  if (state.progress <= 0) return false;

  const k = state.progress;
  const stepK = Math.floor(k * PIXEL_STEPS) / PIXEL_STEPS;

  if (k < 0.85) {
    // Phase 1: Progressive pixelation
    renderPixelated(ctx, state.image, width, height, stepK);
  } else {
    // Phase 2: ASCII character rendering
    renderASCII(ctx, state.image, width, height, k);
  }

  return state.progress > 0 && state.progress < 1;
}

function renderPixelated(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
  stepK: number,
) {
  const blockSize = Math.max(1, Math.round(1 + stepK * (MAX_BLOCK - 1)));

  // Draw image at reduced resolution, then scale up
  const tempCanvas = document.createElement("canvas");
  const sw = Math.max(1, Math.floor(width / blockSize));
  const sh = Math.max(1, Math.floor(height / blockSize));
  tempCanvas.width = sw;
  tempCanvas.height = sh;

  const tempCtx = tempCanvas.getContext("2d")!;
  tempCtx.imageSmoothingEnabled = false;
  tempCtx.drawImage(img, 0, 0, sw, sh);

  // Scale back up with no smoothing = pixelated
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(tempCanvas, 0, 0, sw, sh, 0, 0, width, height);
  ctx.imageSmoothingEnabled = true;
}

function renderASCII(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
  k: number,
) {
  // Sample image at cell resolution
  const cols = Math.floor(width / CHAR_CELL);
  const rows = Math.floor(height / CHAR_CELL);

  const sampleCanvas = document.createElement("canvas");
  sampleCanvas.width = cols;
  sampleCanvas.height = rows;
  const sampleCtx = sampleCanvas.getContext("2d")!;
  sampleCtx.drawImage(img, 0, 0, cols, rows);
  const imageData = sampleCtx.getImageData(0, 0, cols, rows);
  const pixels = imageData.data;

  // White background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  // Render characters
  ctx.fillStyle = "#000000";
  ctx.font = `${CHAR_CELL}px monospace`;
  ctx.textBaseline = "top";

  // Random reveal based on progress (k goes from 0.85 to 1.0)
  const revealProgress = (k - 0.85) / 0.15; // 0..1

  // Seed-based pseudo-random per cell
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const i = (y * cols + x) * 4;
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const luma = (r + g + b) / 3 / 255;

      // Random threshold per cell
      const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      const threshold = seed - Math.floor(seed);

      if (threshold > revealProgress) continue;

      const charIndex = Math.floor((1 - luma) * (GLYPHS.length - 1));
      const char = GLYPHS[charIndex];

      if (char !== " ") {
        ctx.fillText(char, x * CHAR_CELL, y * CHAR_CELL);
      }
    }
  }
}
