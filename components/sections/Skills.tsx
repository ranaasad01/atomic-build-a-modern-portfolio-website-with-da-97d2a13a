"use client";

import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/SkillBar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillCategories, techIcons } from "@/lib/skills-data";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion-variants";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full uppercase tracking-wider mb-4">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tools &amp; Technologies
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A curated set of technologies I use to build fast, scalable, and maintainable software.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill bars by category */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: category.color + "20", border: "1px solid " + category.color + "40" }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: category.color }} />
                </div>
                <h3 className="text-white font-bold text-lg">{category.category}</h3>
              </div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={catIndex * 0.1 + skillIndex * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Tech icon grid */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-slate-300 font-semibold text-lg mb-2">Also proficient in</h3>
            <p className="text-slate-500 text-sm">Technologies I work with regularly</p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techIcons.map((tech) => (
            <motion.div
              key={tech.name}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all duration-200 cursor-default"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-slate-300 text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
            <h3 className="text-white font-bold text-xl mb-2">Always Learning</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Technology evolves fast. I dedicate time each week to exploring new tools, reading research papers, and building side projects to stay at the cutting edge.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
