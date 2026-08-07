"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 30,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: distance,
      }}
      animate={{
        opacity: 1,
        y: 0,
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