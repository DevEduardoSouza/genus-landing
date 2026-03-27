"use client";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáéíóúãõçêâ";
const STEPS = 15;
const DURATION = 400;

export function scrambleText(
  el: HTMLElement,
  finalText: string,
  onComplete?: () => void,
) {
  let frame = 0;

  const interval = setInterval(() => {
    el.textContent = finalText
      .split("")
      .map((char, i) => {
        if (frame / STEPS > i / finalText.length) return char;
        if (char === " ") return " ";
        return CHARSET[Math.floor(Math.random() * CHARSET.length)];
      })
      .join("");

    if (++frame >= STEPS) {
      el.textContent = finalText;
      clearInterval(interval);
      onComplete?.();
    }
  }, DURATION / STEPS);

  return () => clearInterval(interval);
}
