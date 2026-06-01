"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActive]  = useState("home");
  const pathname = usePathname();
  const isProjects = pathname === "/projects";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border-c transition-all duration-300 ${
        scrolled ? "bg-bg-1/98 shadow-lg" : "bg-bg-1/95"
      } backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold gradient-text no-underline"
        >
          Rushikesh D
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex list-none gap-8">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = !isProjects && activeSection === sectionId;
            return (
              <li key={label}>
                {isProjects ? (
                  <Link
                    href={`/${href}`}
                    className={`nav-link-item ${label === "Projects" ? "text-white" : "text-text-2"}`}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className={`relative text-sm font-medium transition-colors duration-300 no-underline pb-1 group ${
                      isActive ? "text-white" : "text-text-2 hover:text-white"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-grad-main transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden p-1 text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-bg-1/98 backdrop-blur-md border-b border-border-c py-6 flex flex-col items-center gap-6">
          {navLinks.map(({ label, href }) =>
            isProjects ? (
              <Link
                key={label}
                href={`/${href}`}
                onClick={() => setMenuOpen(false)}
                className="text-text-2 hover:text-white font-medium text-lg transition-colors no-underline"
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                className="text-text-2 hover:text-white font-medium text-lg transition-colors no-underline"
              >
                {label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
