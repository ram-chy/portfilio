"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface SlideLeftProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export function SlideLeft({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 30,
}: SlideLeftProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: distance,
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