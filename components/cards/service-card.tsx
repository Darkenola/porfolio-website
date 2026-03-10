"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="glass-panel h-full p-6"
    >
      <div className="space-y-4">
        <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
          <ArrowRight className="h-5 w-5" />
        </div>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </motion.article>
  );
}
