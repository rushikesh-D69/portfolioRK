"use client";

import type { ReactNode } from "react";
import FadeUp from "./FadeUp";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-left max-w-4xl" : "text-center mx-auto";

  return (
    <FadeUp className={`mb-20 md:mb-32 space-y-6 ${alignClass} ${className}`}>
      <p className="section-label">{label}</p>
      <h2 className="section-title text-white">{title}</h2>
      {description && (
        <p className={`subtitle-lg text-text-2 font-light leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </FadeUp>
  );
}
