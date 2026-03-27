"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { scrambleText } from "@/lib/text-scramble";
import "@/styles/hover-cursor.css";

interface HoverCursorProps {
  visible: boolean;
  name: string;
  type: string;
}

export default function HoverCursor({ visible, name, type }: HoverCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const typeRef = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const prevNameRef = useRef("");

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  // Scramble text when name changes and cursor becomes visible
  useEffect(() => {
    if (visible && name && name !== prevNameRef.current) {
      prevNameRef.current = name;
      if (nameRef.current) scrambleText(nameRef.current, name);
      if (typeRef.current) scrambleText(typeRef.current, type);
    }
  }, [visible, name, type]);

  return (
    <div
      ref={containerRef}
      className={`hover-cursor ${visible ? "hover-cursor--on" : ""}`}
      style={{ left: pos.x + 15, top: pos.y }}
    >
      <div className="hover-cursor__inner">
        <span className="hover-cursor__text-group">
          <span className="hover-cursor__text" ref={nameRef}>
            {name}
          </span>
          <span className="hover-cursor__text" ref={typeRef}>
            {type}
          </span>
        </span>
        <span className="hover-cursor__arrow">
          <span>&rarr;</span>
        </span>
      </div>
    </div>
  );
}
