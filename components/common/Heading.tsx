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
  children?: ReactNode;
  className?: string;
};

export default function Heading({
  badge,
  title,
  subtitle,
  description,
  align = "center",
  size = "lg",
  light = false,
  children,
  className,
}: HeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const titleSize = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
    xl: "text-6xl md:text-7xl",
  };

  return (
    <div
      className={cn(
        "mx-auto flex max-w-4xl flex-col",
        alignment[align],
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <span
          className={cn(
            "mb-6 inline-flex items-center rounded-full px-5 py-2 text-sm font-bold tracking-wide",
            light
              ? "bg-white/10 text-amber-300 ring-1 ring-white/20"
              : "bg-amber-100 text-amber-700"
          )}
        >
          ✨ {badge}
        </span>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mb-4 text-lg font-semibold uppercase tracking-[0.25em]",
            light ? "text-amber-300" : "text-amber-600"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h2
        className={cn(
          "font-black leading-tight tracking-tight",
          titleSize[size],
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>

      {/* Decorative Line */}
      <div
        className={cn(
          "mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500",
          align === "center"
            ? "mx-auto"
            : align === "right"
            ? "ml-auto"
            : ""
        )}
      />

      {/* Description */}
      {description && (
        <p
          className={cn(
            "mt-8 max-w-3xl text-lg leading-8",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}

      {/* Extra Content */}
      {children && <div className="mt-10">{children}</div>}
    </div>
  );
}