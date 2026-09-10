import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-12 w-12 text-sm",
  lg: "h-16 w-16 text-base",
  xl: "h-24 w-24 text-lg",
};

export function Avatar({
  src,
  alt = "Avatar",
  fallback,
  className = "",
  size = "md",
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full overflow-hidden bg-muted",
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="96px"
          className="object-cover"
        />
      ) : (
        <span className="font-medium text-muted-foreground">
          {fallback || alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}