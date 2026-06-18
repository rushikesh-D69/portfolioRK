"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/nav";
import { Menu, X } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActive] = useState("home");
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isProjects = pathname.startsWith("/projects");
  const mounted = useMounted();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 48);

      if (y <= 8) {
        setVisible(true);
      } else if (y > lastScrollY.current + 6) {
        setVisible(false);
        setMenuOpen(false);
      } else if (y < lastScrollY.current - 6) {
        setVisible(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isProjects) return;
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [isProjects]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!mounted) {
    return <header className="fixed top-5 left-0 right-0 z-50 h-14 pointer-events-none" />;
  }

  return (
    <motion.header
      className="fixed top-4 md:top-5 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`pointer-events-auto max-w-5xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full border ${
          scrolled
            ? "h-12 px-4 md:px-5 bg-[rgba(8,8,8,0.82)] backdrop-blur-[12px] border-[rgba(255,255,255,0.1)] shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_0_1px_rgba(59,130,246,0.06)]"
            : "h-14 px-5 md:px-6 bg-[rgba(8,8,8,0.55)] backdrop-blur-[10px] border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
        }`}
      >
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-white no-underline hover:text-primary transition-colors shrink-0"
        >
          Rushikesh
        </Link>

        <ul className="hidden lg:flex list-none gap-5 xl:gap-6">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = !isProjects && activeSection === sectionId;
            return (
              <li key={label}>
                {isProjects ? (
                  <Link
                    href={`/${href}`}
                    className={`text-[0.65rem] xl:text-xs font-semibold uppercase tracking-widest transition-colors no-underline ${
                      label === "Projects" ? "text-primary" : "text-text-2 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className={`relative text-[0.65rem] xl:text-xs font-semibold uppercase tracking-widest transition-colors no-underline ${
                      isActive ? "text-white" : "text-text-2 hover:text-white"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute -bottom-2 left-0 right-0 h-px bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <button
          className="lg:hidden p-2 text-text-2 hover:text-white transition-colors"
          suppressHydrationWarning
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto lg:hidden mt-3 max-w-sm mx-auto rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(8,8,8,0.92)] backdrop-blur-[12px] py-6 px-4 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-5">
              {navLinks.map(({ label, href }) =>
                isProjects ? (
                  <Link
                    key={label}
                    href={`/${href}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-text-2 hover:text-white text-sm font-medium no-underline"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className="text-text-2 hover:text-white text-sm font-medium no-underline"
                  >
                    {label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
