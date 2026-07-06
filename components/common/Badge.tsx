import { cn } from "../../lib/utils";
import { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default:
    "bg-gray-100 text-gray-800 border border-gray-200",

  primary:
    "bg-amber-100 text-amber-800 border border-amber-300",

  secondary:
    "bg-slate-100 text-slate-800 border border-slate-300",

  success:
    "bg-green-100 text-green-800 border border-green-300",

  warning:
    "bg-yellow-100 text-yellow-800 border border-yellow-300",

  danger:
    "bg-red-100 text-red-800 border border-red-300",

  outline:
    "bg-transparent text-gray-800 border border-gray-300",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}