"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const calc = () => {
      const top    = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setPct(height > 0 ? (top / height) * 100 : 0);
    };
    window.addEventListener("scroll", calc, { passive: true });
    return () => window.removeEventListener("scroll", calc);
  }, []);

  return (
    <div
      style={{ width: `${pct}%` }}
      className="fixed top-0 left-0 h-[3px] bg-grad-main z-[9999] transition-[width] duration-100 pointer-events-none"
    />
  );
}
