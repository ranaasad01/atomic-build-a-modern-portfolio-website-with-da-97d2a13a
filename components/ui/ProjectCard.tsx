"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import { Project } from "@/lib/projects-data";
import { TechBadge } from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/30 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            if (target.parentElement) {
              target.parentElement.style.background = "linear-gradient(135deg, #1e1b4b, #312e81)";
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium bg-slate-900/80 text-slate-300 rounded-full border border-slate-700/50">
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-white text-lg leading-tight group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <TechBadge key={tag} name={tag} size="sm" />
          ))}
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
          <Link
            href={"/projects/" + project.slug}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-400 hover:text-white hover:bg-indigo-600 rounded-lg transition-all duration-200 border border-indigo-500/30 hover:border-indigo-500"
          >
            View Details
            <ArrowRight size={14} />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-200"
              aria-label="Live Demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
