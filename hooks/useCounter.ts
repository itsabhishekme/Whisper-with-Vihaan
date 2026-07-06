"use client";

import { useEffect, useRef, useState } from "react";

interface UseCounterOptions {
  /** Final value to count up to */
  end: number;

  /** Starting value */
  start?: number;

  /** Duration of animation in milliseconds */
  duration?: number;

  /** Start animation immediately */
  startOnMount?: boolean;

  /** Decimal places */
  decimals?: number;
}

export function useCounter({
  end,
  start = 0,
  duration = 2000,
  startOnMount = true,
  decimals = 0,
}: UseCounterOptions) {
  const [count, setCount] = useState(start);
  const [isRunning, setIsRunning] = useState(startOnMount);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease Out Cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const value = start + (end - start) * eased;

      setCount(Number(value.toFixed(decimals)));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [start, end, duration, decimals, isRunning]);

  const reset = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setCount(start);
    setIsRunning(false);
  };

  const startCounter = () => {
    setCount(start);
    setIsRunning(true);
  };

  return {
    count,
    reset,
    startCounter,
    isRunning,
  };
}

export default useCounter;