"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const mouse     = useRef({ x: 0, y: 0 });
  const ring      = useRef({ x: 0, y: 0 });
  const raf       = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ringEl = ringRef.current;
    if (!cursor || !ringEl) return;

    document.body.classList.add("custom-cursor-enabled");

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = e.clientX + "px";
      cursor.style.top  = e.clientY + "px";
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;
      ringEl.style.left = ring.current.x + "px";
      ringEl.style.top  = ring.current.y + "px";
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      ringEl.classList.add("scrolling");
      cursor.classList.add("scrolling");
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        ringEl.classList.remove("scrolling");
        cursor.classList.remove("scrolling");
      }, 300);
    };

    // Magnetic effect on interactive elements
    const addMagnetic = () => {
      document.querySelectorAll<HTMLElement>(".btn-magnetic, a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const r = el.getBoundingClientRect();
          ringEl.classList.add("magnetic");
          ringEl.style.left = r.left + r.width / 2 + "px";
          ringEl.style.top  = r.top  + r.height / 2 + "px";
        });
        el.addEventListener("mouseleave", () => ringEl.classList.remove("magnetic"));
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll",    onScroll, { passive: true });
    addMagnetic();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll",    onScroll);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} />
      <div className="cursor-ring"   ref={ringRef}   />
    </>
  );
}
