"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail } from 'lucide-react';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/motion-variants";

const roles = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "AI/ML Explorer",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/alexdev", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/alexdev", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexdev", label: "LinkedIn" },
  { icon: Mail, href: "mailto:alex@alexdev.io", label: "Email" },
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const handleScrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left content */}
          <div>
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Alex Chen</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6 h-10">
              <span className="typewriter-cursor">{displayText}</span>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              I build exceptional digital experiences that live at the intersection of beautiful design and robust engineering. Specializing in React, Next.js, and modern full-stack development.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={handleScrollToProjects}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download CV
              </a>
              <button
                onClick={handleScrollToContact}
                className="flex items-center gap-2 px-6 py-3 text-indigo-400 hover:text-white font-semibold rounded-xl border border-indigo-500/30 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Find me on</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right content — profile visual */}
          <motion.div variants={fadeInRight} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-xl animate-pulse-slow" />
              {/* Profile image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Alex Chen - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.style.background = "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)";
                      const initials = document.createElement("div");
                      initials.className = "absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/80";
                      initials.textContent = "AC";
                      target.parentElement.appendChild(initials);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-3 py-2 bg-slate-800/90 border border-slate-700/50 rounded-xl backdrop-blur-sm shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <div className="text-white text-xs font-bold">5+ Years</div>
                    <div className="text-slate-400 text-xs">Experience</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-3 py-2 bg-slate-800/90 border border-slate-700/50 rounded-xl backdrop-blur-sm shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <div>
                    <div className="text-white text-xs font-bold">30+ Projects</div>
                    <div className="text-slate-400 text-xs">Delivered</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-16 px-3 py-2 bg-slate-800/90 border border-slate-700/50 rounded-xl backdrop-blur-sm shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⭐</span>
                  <div>
                    <div className="text-white text-xs font-bold">100% Client</div>
                    <div className="text-slate-400 text-xs">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-indigo-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
