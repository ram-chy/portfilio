import * as React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "subtle";
}

const variantClasses = {
  default: "bg-primary/10 text-primary border-primary/20",
  outline: "border border-border bg-background",
  subtle: "bg-muted text-muted-foreground",
};

export function TechBadge({
  children,
  className = "",
  variant = "default",
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}