"use client";

import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({
  quote,
  name,
  role
}: TestimonialCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="glass-panel h-full p-6">
      <div className="space-y-5">
        <p className="text-base leading-8 text-slate-200">&ldquo;{quote}&rdquo;</p>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </motion.article>
  );
}
