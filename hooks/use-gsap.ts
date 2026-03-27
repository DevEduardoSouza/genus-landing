"use client";

import { useEffect } from "react";
import { registerGSAP, gsap, ScrollTrigger } from "@/lib/gsap-config";

export function useGSAP() {
  useEffect(() => {
    registerGSAP();
  }, []);

  return { gsap, ScrollTrigger };
}
