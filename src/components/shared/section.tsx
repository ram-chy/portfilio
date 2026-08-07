import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "muted" | "accent";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const backgroundClasses = {
  default: "",
  muted: "bg-muted/50",
  accent: "bg-accent",
};

const spacingClasses = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-20",
  xl: "py-20 md:py-32",
};

export function Section({
  children,
  className = "",
  background = "default",
  spacing = "lg",
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-4 sm:px-6 lg:px-8",
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}