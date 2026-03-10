import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { timeline } from "@/data/content";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "About",
  "About Emirhan Atıcı, a software engineer and AI specialist focused on product architecture, scalable applications, and intelligent digital systems.",
  "/about"
);

const expertiseAreas = [
  "Full-stack development",
  "AI solutions",
  "Automation systems",
  "API integrations",
  "Product architecture"
];

const values = [
  "Build for long-term maintainability, not short-term spectacle.",
  "Let product clarity guide technical decisions.",
  "Use AI where it creates leverage, not noise.",
  "Keep delivery disciplined, collaborative, and measurable."
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A software engineer shaped by product thinking, systems design, and applied AI."
        description="I work at the intersection of engineering execution and business clarity, building products that are elegant on the surface and disciplined underneath."
      />

      <section className="container-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="glass-panel p-8">
            <div className="space-y-5">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-white">
                Personal story
              </h2>
              <p className="text-base leading-8 text-slate-300">
                My work began with frontend engineering and gradually expanded into
                backend systems, product architecture, and AI-enabled workflows.
                That progression shaped a balanced approach: interfaces should feel
                premium, but the underlying system has to be dependable, clear, and
                designed for change.
              </p>
              <p className="text-base leading-8 text-slate-300">
                Today I help businesses turn product ideas into polished digital
                systems, combining software engineering discipline with practical AI
                thinking to create tools people actually want to use.
              </p>
            </div>
          </Reveal>

          <Reveal className="glass-panel p-8" delay={0.08}>
            <div className="space-y-5">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-white">
                Mission
              </h2>
              <p className="text-base leading-8 text-slate-300">
                Build software that feels thoughtful, scales confidently, and uses
                intelligence in a way that improves the user experience instead of
                complicating it.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {expertiseAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="glass-panel p-8">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-white">
              Career timeline
            </h2>
            <div className="mt-8 space-y-6">
              {timeline.map((item) => (
                <div key={item.title} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-full w-px bg-white/10" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-cyan-300" />
                  <p className="text-sm font-semibold text-cyan-200">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass-panel p-8" delay={0.08}>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-white">
              Work philosophy
            </h2>
            <div className="mt-8 space-y-4">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-300"
                >
                  {value}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Looking for an engineer who can think beyond implementation?"
        description="I bring product judgment, system design discipline, and a premium execution standard to each engagement."
      />
    </>
  );
}
