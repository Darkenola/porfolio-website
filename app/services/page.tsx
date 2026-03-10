import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards/service-card";
import { CTABanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/content";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Services",
  "AI integration, full-stack product development, automation systems, and technical consulting services from Emirhan Atıcı.",
  "/services"
);

const process = [
  {
    step: "Discovery",
    description:
      "Understand the product, the constraints, and where engineering effort creates the highest leverage."
  },
  {
    step: "Strategy",
    description:
      "Shape the technical approach, architecture, and execution plan around business goals and delivery realities."
  },
  {
    step: "Build",
    description:
      "Implement the product with clean systems, premium UI detail, and clear communication throughout delivery."
  },
  {
    step: "Launch",
    description:
      "Ship with confidence, refine based on usage, and create a maintainable path forward for the team."
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technical services designed for ambitious teams building modern digital products."
        description="The work spans product architecture, AI enablement, full-stack delivery, and workflow automation with a premium execution standard."
      />

      <section className="container-shell py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="glass-panel p-8 md:p-10">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-white">
            Process
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                    {item.step}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need engineering support that feels strategic, not transactional?"
        description="I partner best with teams that want thoughtful implementation, strong product instincts, and durable technical decisions."
      />
    </>
  );
}
