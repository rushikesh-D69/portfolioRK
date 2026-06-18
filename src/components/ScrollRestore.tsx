"use client";

import { useEffect } from "react";

export default function ScrollRestore() {
  useEffect(() => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, []);

  return null;
}
