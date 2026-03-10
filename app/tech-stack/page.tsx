import type { Metadata } from "next";
import { Cpu, Database, Layers3, ServerCog, Wrench } from "lucide-react";
import { CTABanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { expertise } from "@/data/content";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Tech Stack",
  "Frontend, backend, AI, cloud, database, and tooling expertise used by Emirhan Atıcı to build real-world products.",
  "/tech-stack"
);

const icons = [Layers3, ServerCog, Cpu, ServerCog, Database, Wrench];

export default function TechStackPage() {
  return (
    <>
      <PageHero
        eyebrow="Tech Stack"
        title="Technology choices shaped by product outcomes, not trend-chasing."
        description="A practical stack for building performant interfaces, reliable services, AI-powered capabilities, and maintainable production systems."
      />

      <section className="container-shell py-16">
        <div className="grid gap-6 xl:grid-cols-2">
          {expertise.map((group, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={group.category} delay={index * 0.06}>
                <div className="glass-panel h-full p-8">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                        {group.category}
                      </h2>
                      <p className="text-sm leading-7 text-slate-300">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="min-w-[160px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-white">{skill}</span>
                          <span className="text-xs text-slate-400">
                            {92 - skillIndex * 4}%
                          </span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400"
                            style={{ width: `${92 - skillIndex * 4}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-shell py-16">
        <Reveal className="glass-panel p-8 md:p-10">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-white">
            Real-world application
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
            The stack is used selectively depending on the product. Frontend tools
            shape premium interfaces, backend services handle business logic and
            integrations, and AI layers are introduced where they create concrete
            value such as retrieval, summarization, automation, or decision support.
            The goal is always the same: faster delivery, stronger maintainability,
            and a cleaner user experience.
          </p>
        </Reveal>
      </section>

      <CTABanner
        title="Need the right stack for a product that has to scale?"
        description="I help teams choose and implement technology based on reliability, speed of execution, and long-term product leverage."
      />
    </>
  );
}
