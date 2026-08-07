import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  onClick?: () => void;
}

const variantClasses = {
  default: "bg-card border border-border",
  outlined: "bg-transparent border-2 border-border",
  elevated: "bg-card shadow-lg",
};

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  variant = "default",
  padding = "md",
  hover = false,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl transition-all duration-300",
        variantClasses[variant],
        paddingClasses[padding],
        hover && "hover:shadow-xl hover:scale-[1.02] cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}