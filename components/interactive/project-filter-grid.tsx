"use client";

import { useMemo, useState } from "react";
import { featuredProjects } from "@/data/content";
import { ProjectCard } from "@/components/cards/project-card";

const categories = ["All", "Web Apps", "AI Products", "Automation", "SaaS"];

const projectCatalog = [
  ...featuredProjects,
  {
    title: "Northstar SaaS Suite",
    summary:
      "A multi-tenant product workspace for onboarding, billing, and customer analytics with polished executive reporting.",
    category: "SaaS",
    stack: ["Next.js", "tRPC", "PostgreSQL", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Signal Web Platform",
    summary:
      "A brand-led web application experience combining editorial UX, account systems, and high-conversion content architecture.",
    category: "Web Apps",
    stack: ["React", "TypeScript", "CMS", "Edge Functions"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Atlas Copilot",
    summary:
      "An AI assistant for internal knowledge retrieval, summarization, and support triage across distributed teams.",
    category: "AI Products",
    stack: ["OpenAI", "LangChain", "Next.js", "Redis"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export function ProjectFilterGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projectCatalog
        : projectCatalog.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "rounded-full border border-cyan-300/30 bg-cyan-400/15 px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
