"use client";

import Image from "next/image";
import { useCallback } from "react";

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
  const handleMouseEnter = useCallback(() => {
    onHoverStart?.(name, type);
  }, [name, type, onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    onHoverEnd?.();
  }, [onHoverEnd]);

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
      </div>
      <div className="project-card__info">
        <span className="project-card__name">{name}</span>
        <span className="project-card__type">{type}</span>
      </div>
    </Wrapper>
  );
}
