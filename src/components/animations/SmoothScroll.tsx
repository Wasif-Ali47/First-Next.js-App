"use client";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let current = window.scrollY;

    const onScroll = () => {
      current = window.scrollY;
    };

    const smooth = () => {
      const target = window.scrollY;
      const delta = (target - current) * 0.1; // easing factor
      if (Math.abs(delta) > 0.5) {
        window.scrollTo(0, current + delta);
        requestAnimationFrame(smooth);
      } else {
        current = target;
        requestAnimationFrame(smooth);
      }
    };

    requestAnimationFrame(smooth);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <>{children}</>;
}
