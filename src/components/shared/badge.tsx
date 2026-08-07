import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "danger";
}

const variantClasses = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border border-border bg-background",
  success: "bg-green-500/10 text-green-500 border border-green-500/20",
  warning: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
  danger: "bg-red-500/10 text-red-500 border border-red-500/20",
};

export function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}