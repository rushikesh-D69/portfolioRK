"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export default function Typewriter({
  phrases,
  className = "",
  typingSpeed = 55,
  deletingSpeed = 32,
  pauseMs = 2200,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        deletingSpeed
      );
    } else {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <p
      className={`subtitle-lg gradient-text font-semibold min-h-[1.5em] ${className}`}
      aria-live="polite"
    >
      <span>{displayed}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </p>
  );
}
