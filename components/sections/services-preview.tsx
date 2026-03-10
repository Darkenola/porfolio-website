import Link from "next/link";
import { services } from "@/data/content";
import { ServiceCard } from "@/components/cards/service-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesPreview() {
  return (
    <section className="container-shell py-16">
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Engineering support for teams building smarter digital systems."
              description="From AI integration to full-stack product delivery, the work is structured to create leverage, clarity, and strong product outcomes."
            />
            <Link href="/services" className="button-secondary w-fit">
              View Services
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
