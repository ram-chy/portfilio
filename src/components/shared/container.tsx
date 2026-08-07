import * as React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses = {
  sm: "max-w-720px", // Article width
  md: "max-w-780px", // Content width
  lg: "max-w-1200px", // Hero width
  xl: "max-w-1280px", // Desktop container
  full: "max-w-full",
};

export function Container({
  children,
  className = "",
  size = "xl",
}: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}