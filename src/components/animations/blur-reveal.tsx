"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  blurAmount?: number;
}

export function BlurReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  blurAmount = 10,
}: BlurRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: `blur(${blurAmount}px)`,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
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