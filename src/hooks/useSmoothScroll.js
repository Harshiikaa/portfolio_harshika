// src/hooks/useSmoothScroll.js
import { useCallback } from "react";

export default function useSmoothScroll() {
  return useCallback((ref, yOffset = -80) => {
    if (!ref?.current) return;
    const startY = window.pageYOffset;
    const targetY = ref.current.getBoundingClientRect().top + startY + yOffset;
    const distance = targetY - startY;
    const duration = 1000;
    const startTime = performance.now();

    const ease = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * ease(progress));
      if (elapsed < duration) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);
}
