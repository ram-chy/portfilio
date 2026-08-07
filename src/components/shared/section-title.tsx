import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function SectionTitle({
  title,
  subtitle,
  className = "",
  align = "center",
  size = "md",
}: SectionTitleProps) {
  return (
    <div className={cn("space-y-4 mb-12", alignClasses[align], className)}>
      <h2 className={cn("font-bold tracking-tight", sizeClasses[size])}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}