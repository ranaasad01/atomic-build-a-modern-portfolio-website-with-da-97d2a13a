"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion-variants";

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const customVariants: Variants = {
    hidden: variants.hidden as Record<string, unknown>,
    visible: {
      ...(variants.visible as Record<string, unknown>),
      transition: {
        ...((variants.visible as { transition?: Record<string, unknown> })?.transition ?? {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
