"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  scrollY: number;
  scrollX: number;
  isScrolled: boolean;
  scrollDirection: "up" | "down";
  scrollProgress: number;
}

export default function useScroll(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollX: 0,
    isScrolled: false,
    scrollDirection: "up",
    scrollProgress: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? (currentScrollY / documentHeight) * 100
          : 0;

      setScrollState({
        scrollY: currentScrollY,
        scrollX: currentScrollX,
        isScrolled: currentScrollY > 20,
        scrollDirection:
          currentScrollY > lastScrollY ? "down" : "up",
        scrollProgress: Math.min(progress, 100),
      });

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollState;
}