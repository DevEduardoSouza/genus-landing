"use client";

import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import {
  createPixelState,
  loadImage,
  startHover,
  endHover,
  renderFrame,
} from "@/lib/canvas-renderer";

interface ProjectCardProps {
  name: string;
  type: string;
  image: string;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  onHoverStart?: (name: string, type: string) => void;
  onHoverEnd?: () => void;
}

export default function ProjectCard({
  name,
  type,
  image,
  size = "md",
  href,
  onHoverStart,
  onHoverEnd,
}: ProjectCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef(createPixelState());
  const rafRef = useRef<number>(0);

  useEffect(() => {
    loadImage(stateRef.current, image);
  }, [image]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Match canvas resolution to display size
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const needsMore = renderFrame(ctx, stateRef.current, w, h);

    if (needsMore) {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    startHover(stateRef.current);
    onHoverStart?.(name, type);

    cancelAnimationFrame(rafRef.current);
    const loop = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      const needsMore = renderFrame(ctx, stateRef.current, w, h);
      if (needsMore || stateRef.current.progress > 0) {
        rafRef.current = requestAnimationFrame(loop);
      }
    };
    rafRef.current = requestAnimationFrame(loop);
  }, [name, type, onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    endHover(stateRef.current);
    onHoverEnd?.();

    cancelAnimationFrame(rafRef.current);
    const loop = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      renderFrame(ctx, stateRef.current, w, h);

      if (stateRef.current.progress > 0) {
        rafRef.current = requestAnimationFrame(loop);
      }
    };
    rafRef.current = requestAnimationFrame(loop);
  }, [onHoverEnd]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      className={`project-card project-card--${size}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...wrapperProps}
    >
      <div className="project-card__image-wrapper">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
          className="project-card__image"
        />
        <canvas ref={canvasRef} className="project-card__canvas" />
      </div>
      <div className="project-card__info">
        <span className="project-card__name">{name}</span>
        <span className="project-card__type">{type}</span>
      </div>
    </Wrapper>
  );
}
