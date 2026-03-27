"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { scrambleText } from "@/lib/text-scramble";

interface ScrambleLinkProps {
  href: string;
  text: string;
  className?: string;
  external?: boolean;
}

export default function ScrambleLink({
  href,
  text,
  className,
  external,
}: ScrambleLinkProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (!spanRef.current) return;
    cleanupRef.current?.();
    cleanupRef.current = scrambleText(spanRef.current, text);
  }, [text]);

  const handleMouseLeave = useCallback(() => {
    cleanupRef.current?.();
    cleanupRef.current = null;
    if (spanRef.current) spanRef.current.textContent = text;
  }, [text]);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span ref={spanRef}>{text}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={spanRef}>{text}</span>
    </Link>
  );
}
