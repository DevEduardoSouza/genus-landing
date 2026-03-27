"use client";

import { useState, useEffect, useCallback } from "react";
import "@/styles/loader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  const animateProgress = useCallback(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15 + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setHidden(true), 300);
        setTimeout(() => setRemoved(true), 800);
      }
      setProgress(Math.min(current, 100));
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = animateProgress();
    return cleanup;
  }, [animateProgress]);

  if (removed) return null;

  return (
    <div className={`loader ${hidden ? "loader--hidden" : ""}`}>
      <div className="loader__text">Genus Tech</div>
      <div className="loader__bar-container">
        <div className="loader__bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="loader__percentage">{Math.round(progress)}%</div>
    </div>
  );
}
