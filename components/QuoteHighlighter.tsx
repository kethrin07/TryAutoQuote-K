"use client";

import { useEffect } from "react";

export default function QuoteHighlighter() {
  useEffect(() => {
    const handler = () => {
      const inputs = document.querySelectorAll<HTMLElement>(
        "button:not([data-no-highlight]):not([aria-label='Continue']), input[type='text'], input[type='number']"
      );
      inputs.forEach((el) => {
        el.style.transition = "box-shadow 0.3s ease";
        el.style.boxShadow = "0 0 0 2px rgba(56, 182, 201, 0.6)";
        setTimeout(() => {
          el.style.boxShadow = "0 0 0 2px rgba(56, 182, 201, 0)";
        }, 900);
      });
    };

    window.addEventListener("highlight-quote-input", handler);
    return () => window.removeEventListener("highlight-quote-input", handler);
  }, []);

  return null;
}