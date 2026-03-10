import { Sparkles, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { CTAButtons } from "@/components/ui/cta-buttons";
import { Reveal } from "@/components/ui/reveal";

export function HomeHero() {
  return (
    <section className="container-shell pt-12 md:pt-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Software Engineer, AI Specialist, Product Builder
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
              <span className="text-gradient">{siteConfig.heroHeadline}</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {siteConfig.shortIntro}
            </p>
          </div>

          <CTAButtons primaryHref="/projects" secondaryHref="/contact" />

          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Zap className="h-4 w-4 text-cyan-300" />
              Applied AI systems
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Full-stack architecture
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Premium digital products
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.2),transparent_35%)]" />
            <div className="relative grid gap-4">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Profile</p>
                    <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                      {siteConfig.displayName}
                    </p>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-300 to-indigo-400" />
                </div>
                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      Scalable web systems, AI products, automation pipelines, and
                      polished product delivery.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Based
                      </p>
                      <p className="mt-2 text-sm text-white">Remote / Global</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Availability
                      </p>
                      <p className="mt-2 text-sm text-white">Open for select work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
