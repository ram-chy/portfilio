"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface SlideRightProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export function SlideRight({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 30,
}: SlideRightProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -distance,
      }}
      animate={{
        opacity: 1,
        x: 0,
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