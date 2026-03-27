"use client";

import { useEffect } from "react";
import { registerGSAP, gsap, ScrollTrigger } from "@/lib/gsap-config";

export function useSmoothScroll() {
  useEffect(() => {
    registerGSAP();

    // Smooth scroll via CSS (simpler, no extra deps)
    document.documentElement.style.scrollBehavior = "smooth";

    // Refresh ScrollTrigger on resize
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("resize", onResize);
    };
  }, []);
}
