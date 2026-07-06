"use client";

import { ReactNode } from "react";
import { cn } from "@/utils/helper";

type HeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  light?: boolean;
  className?: string;
  children?: ReactNode;
};

const titleSizes = {
  sm: "text-3xl md:text-4xl",
  md: "text-4xl md:text-5xl",
  lg: "text-5xl md:text-6xl",
  xl: "text-6xl md:text-7xl",
};

const alignment = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

export default function Heading({
  badge,
  title,
  subtitle,
  description,
  align = "center",
  size = "lg",
  light = false,
  className,
  children,
}: HeadingProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-6",
        alignment[align],
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-5 py-2 text-sm font-bold uppercase tracking-[0.2em]",
            light
              ? "bg-white/10 text-amber-300 ring-1 ring-white/10"
              : "bg-amber-100 text-amber-700"
          )}
        >
          {badge}
        </span>
      )}

      {/* Title */}
      <h2
        className={cn(
          "max-w-5xl font-black leading-tight tracking-tight",
          titleSizes[size],
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <h3
          className={cn(
            "max-w-3xl text-xl font-semibold md:text-2xl",
            light ? "text-amber-300" : "text-amber-600"
          )}
        >
          {subtitle}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p
          className={cn(
            "max-w-4xl text-lg leading-8 md:text-xl",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}

      {/* Optional Content */}
      {children && (
        <div className="mt-4 flex flex-wrap gap-4">
          {children}
        </div>
      )}
    </section>
  );
}