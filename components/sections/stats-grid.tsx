import { stats } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";

export function StatsGrid() {
  return (
    <section className="container-shell py-16">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <div className="glass-panel p-6">
              <p className="font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-slate-400">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
