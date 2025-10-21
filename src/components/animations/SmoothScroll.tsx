// app/layout.tsx or pages/_app.tsx if using pages dir
'use client'

import { useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';

export default function RootLayout({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();
    lenisRef.current = scroller;

    const raf = (time: number) => {
      scroller.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
