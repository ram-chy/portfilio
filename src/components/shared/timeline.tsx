import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
  year?: string;
  title?: string;
  description?: string;
}

export function Timeline({ children, className = "" }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />
      {children}
    </div>
  );
}

export function TimelineItem({
  children,
  className = "",
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className={cn("relative mb-12 md:mb-16", className)}>
      <div className="md:w-1/2 md:pr-12 md:text-right">
        {year && (
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            {year}
          </span>
        )}
        {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
        {children}
      </div>
      <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2" />
    </div>
  );
}