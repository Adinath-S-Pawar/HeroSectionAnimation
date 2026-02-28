"use client";

import { useEffect } from "react";

/** Resets scroll to top on every page load to prevent GSAP animation mismatch. */
export default function ScrollReset() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Force scroll reset after paint to handle static prerender delay on production
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);
  return null;
}