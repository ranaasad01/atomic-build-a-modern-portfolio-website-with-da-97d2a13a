"use client";

import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md";
  className?: string;
}

export function TechBadge({ name, variant = "default", size = "sm", className }: TechBadgeProps) {
  const baseClass = "inline-flex items-center font-medium rounded-full transition-colors";

  const sizeClass = size === "sm"
    ? "px-2.5 py-0.5 text-xs"
    : "px-3 py-1 text-sm";

  const variantClass =
    variant === "outline"
      ? "border border-indigo-500/40 text-indigo-300 bg-indigo-500/5 hover:bg-indigo-500/10"
      : variant === "filled"
      ? "bg-indigo-600 text-white hover:bg-indigo-500"
      : "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20";

  return (
    <span className={cn(baseClass, sizeClass, variantClass, className)}>
      {name}
    </span>
  );
}
