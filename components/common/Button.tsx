"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success";

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface BaseButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  rounded?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

type ButtonProps =
  | (BaseButtonProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (BaseButtonProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20",

  secondary:
    "bg-gray-900 text-white hover:bg-black shadow-lg shadow-black/20",

  outline:
    "border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white",

  ghost:
    "bg-transparent text-gray-800 hover:bg-gray-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  success:
    "bg-green-600 text-white hover:bg-green-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",

  md: "px-6 py-3 text-base",

  lg: "px-8 py-4 text-lg",

  xl: "px-10 py-5 text-xl",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    rounded = true,
    loading = false,
    leftIcon,
    rightIcon,
    className,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "font-semibold transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-amber-400",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    rounded ? "rounded-full" : "rounded-lg",
    fullWidth && "w-full",
    className
  );

  if ("href" in props) {
    return (
      <Link
        href={props.href}
        className={classes}
        {...(props as any)}
      >
        {leftIcon}

        <span>{children}</span>

        {rightIcon}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={loading || rest.disabled}
      {...(rest as any)}
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-100"
              fill="currentColor"
              d="M12 2a10 10 0 0110 10h-4a6 6 0 00-6-6V2z"
            />
          </svg>

          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon}

          <span>{children}</span>

          {rightIcon}
        </>
      )}
    </button>
  );
}