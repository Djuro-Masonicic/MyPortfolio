"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

/**
 * ScrollDownArrow (JSX)
 * - Shows only when page content overflows the viewport
 * - Click => scrolls to the next matching section
 * - Hides on the last section
 *
 * Props (all optional):
 * - sectionSelector: CSS selector for scrollable sections (default: "section")
 * - offset: sticky header offset in px (default: 0)
 * - className: extra classes for the button
 */
export default function ScrollDownArrow({
  sectionSelector = "section",
  offset = 0,
  className = "",
}) {
  const [sections, setSections] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isOverflow, setIsOverflow] = useState(false);

  const visible = useMemo(
    () => isOverflow && sections.length > 1 && currentIdx < sections.length - 1,
    [isOverflow, sections.length, currentIdx]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = Array.from(
      document.querySelectorAll(sectionSelector)
    );
    setSections(els);

    const checkOverflow = () => {
      const doc = document.documentElement;
      setIsOverflow(doc.scrollHeight - 1 > window.innerHeight);
    };
    checkOverflow();

    // Track which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = els.indexOf(e.target);
            if (idx !== -1) setCurrentIdx(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    els.forEach((el) => observer.observe(el));

    // Re-check on resize (and after layout shifts)
    const onResize = () => checkOverflow();
    window.addEventListener("resize", onResize);
    const raf = requestAnimationFrame(checkOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [sectionSelector]);

  const scrollToNext = () => {
    const next = sections[currentIdx + 1];
    if (!next) return;
    const rect = next.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - (offset || 0);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to next section"
      onClick={scrollToNext}
      className={[
        "fixed left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 z-40",
        "rounded-full border border-accent/60 bg-background/70 backdrop-blur",
        "w-12 h-12 flex items-center justify-center",
        "shadow-md hover:shadow-lg transition-all",
        "hover:bg-accent hover:text-primary",
        "animate-bounce",
        className,
      ].join(" ")}
    >
      <FiChevronDown className="text-2xl" />
    </button>
  );
}
