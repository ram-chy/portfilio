"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface CursorGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  size?: number;
}

export function CursorGlow({
  children,
  className = "",
  glowColor = "rgba(16, 185, 129, 0.15)",
  size = 300,
}: CursorGlowProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            background: `radial-gradient(circle ${size}px at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {children}
    </div>
  );
}