"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function TextReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
}: TextRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
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