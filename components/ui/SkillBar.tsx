"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  delay?: number;
}

export function SkillBar({ name, level, color = "#6366f1", delay = 0 }: SkillBarProps) {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const barWidth = isVisible ? level + "%" : "0%";
  const barBg = "linear-gradient(90deg, " + color + ", " + color + "99)";

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: barBg }}
          initial={{ width: 0 }}
          animate={{ width: barWidth }}
          transition={{ duration: 1.2, delay: delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
