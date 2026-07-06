"use client";

import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const isLight = mounted && resolvedTheme === "light";

  const toggleTheme = () => {
    if (!mounted) return;

    setTheme(isDark ? "light" : "dark");
  };

  return {
    mounted,
    theme,
    resolvedTheme,
    systemTheme,
    isDark,
    isLight,
    setTheme,
    toggleTheme,
  };
}