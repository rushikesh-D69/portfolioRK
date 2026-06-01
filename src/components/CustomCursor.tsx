"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  
  const mouse          = useRef({ x: -100, y: -100 });
  const ring           = useRef({ x: -100, y: -100 });
  const isMagnetic     = useRef(false);
  const magneticTarget = useRef({ x: 0, y: 0 });
  const raf            = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ringEl = ringRef.current;
    if (!cursor || !ringEl) return;

    document.body.classList.add("custom-cursor-enabled");

    // Initialize off-screen
    cursor.style.transform = "translate3d(-100px, -100px, 0) translate(-50%, -50%)";
    ringEl.style.transform = "translate3d(-100px, -100px, 0) translate(-50%, -50%)";

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      const targetX = isMagnetic.current ? magneticTarget.current.x : mouse.current.x;
      const targetY = isMagnetic.current ? magneticTarget.current.y : mouse.current.y;

      ring.current.x += (targetX - ring.current.x) * 0.18;
      ring.current.y += (targetY - ring.current.y) * 0.18;
      
      ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
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

    // Event delegation for magnetic interactive elements (handles dynamic nodes)
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, .btn-magnetic");
      if (target) {
        const r = target.getBoundingClientRect();
        isMagnetic.current = true;
        magneticTarget.current = {
          x: r.left + r.width / 2,
          y: r.top + r.height / 2,
        };
        ringEl.classList.add("magnetic");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, .btn-magnetic");
      const related = e.relatedTarget ? (e.relatedTarget as HTMLElement).closest("a, button, .btn-magnetic") : null;
      if (target && target !== related) {
        isMagnetic.current = false;
        ringEl.classList.remove("magnetic");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll",    onScroll, { passive: true });
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout",  onMouseOut);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll",    onScroll);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout",  onMouseOut);
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
