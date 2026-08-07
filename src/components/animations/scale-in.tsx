"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scale?: number;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  scale = 0.95,
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}