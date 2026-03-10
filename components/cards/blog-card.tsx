"use client";

import { motion } from "framer-motion";

type BlogCardProps = {
  title: string;
  excerpt: string;
  tag: string;
  date?: string;
};

export function BlogCard({ title, excerpt, tag, date }: BlogCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="glass-panel h-full p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
            {tag}
          </span>
          {date ? <span className="text-xs text-slate-400">{date}</span> : null}
        </div>
        <div className="space-y-3">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm leading-7 text-slate-300">{excerpt}</p>
        </div>
      </div>
    </motion.article>
  );
}
