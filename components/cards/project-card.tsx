"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  summary: string;
  category: string;
  stack: string[];
  demoUrl: string;
  githubUrl: string;
};

export function ProjectCard({
  title,
  summary,
  category,
  stack,
  demoUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="glass-panel overflow-hidden"
    >
      <div className="h-52 bg-gradient-to-br from-cyan-400/30 via-slate-900 to-indigo-500/20 p-6">
        <div className="flex h-full items-end rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
            {category}
          </span>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm leading-7 text-slate-300">{summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={demoUrl}
            className="button-primary text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href={githubUrl}
            className="button-secondary text-sm"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <Github className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
