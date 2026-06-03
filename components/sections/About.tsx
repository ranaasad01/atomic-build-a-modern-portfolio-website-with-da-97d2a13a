"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Code2, Award, Users } from 'lucide-react';
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from "@/lib/motion-variants";

const stats = [
  { icon: Code2, value: "30+", label: "Projects Built", color: "text-indigo-400" },
  { icon: Calendar, value: "5+", label: "Years Experience", color: "text-violet-400" },
  { icon: Users, value: "20+", label: "Happy Clients", color: "text-blue-400" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee", color: "text-amber-400" },
];

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Engineer",
    company: "TechVentures Inc.",
    description: "Leading development of AI-powered SaaS products serving 50,000+ users.",
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    company: "Pixel & Code Agency",
    description: "Built high-performance web applications for Fortune 500 clients.",
  },
  {
    year: "2020",
    title: "Frontend Developer",
    company: "StartupHub",
    description: "Developed React applications and design systems from the ground up.",
  },
  {
    year: "2019",
    title: "B.Sc. Computer Science",
    company: "MIT",
    description: "Graduated with honors, specializing in distributed systems and HCI.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full uppercase tracking-wider mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Crafting Digital Experiences
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Passionate developer with a love for clean code, thoughtful design, and solving complex problems.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left — bio */}
          <motion.div variants={fadeInLeft}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-slate-800">
                <img
                  src="https://hls.harvard.edu/wp-content/uploads/2023/04/2023_04_04_Last-Lecture-Alex-Chen_LGranger004-2400.jpg"
                  alt="Alex Chen working"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.style.background = "linear-gradient(135deg, #1e1b4b, #312e81)";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin size={14} className="text-indigo-400" />
                  <span className="text-white text-sm font-medium">San Francisco, CA</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/30 transition-colors"
                  >
                    <stat.icon size={20} className={stat.color + " mb-2"} />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-slate-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — text + timeline */}
          <motion.div variants={fadeInRight}>
            <div className="space-y-4 mb-8">
              <p className="text-slate-300 leading-relaxed">
                Hey there! I&apos;m Alex, a full-stack developer based in San Francisco with over 5 years of experience building web applications that people love to use. I specialize in the JavaScript ecosystem — React, Next.js, Node.js — and I&apos;m deeply passionate about performance, accessibility, and developer experience.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My journey started with a Computer Science degree from MIT, where I fell in love with the intersection of design and engineering. Since then, I&apos;ve worked with startups and enterprises alike, shipping products used by hundreds of thousands of people worldwide.
              </p>
              <p className="text-slate-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me contributing to open source, writing technical articles, exploring the latest in AI/ML, or hiking the trails around the Bay Area. I believe great software is built by curious people who never stop learning.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Award size={16} className="text-indigo-400" />
                Experience &amp; Education
              </h3>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-slate-700/50 mt-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <p className="text-indigo-300 text-xs mb-1">{item.company}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
