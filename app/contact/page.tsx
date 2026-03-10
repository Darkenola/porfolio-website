import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata(
  "Contact",
  "Contact Emirhan Atıcı for software engineering, AI implementation, automation systems, and product consulting engagements.",
  "/contact"
);

const contactCards = [
  { title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { title: "Availability", value: "Open for select freelance and consulting work" },
  { title: "Location", value: siteConfig.location }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s build something intelligent, high-quality, and useful."
        description="Share your product, challenge, or roadmap. I’m available for select collaborations involving web platforms, AI integrations, and modern engineering systems."
      />

      <section className="container-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            {contactCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <div className="glass-panel p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    {card.title}
                  </p>
                  {card.href ? (
                    <a href={card.href} className="mt-3 block text-lg font-semibold text-white">
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-lg font-semibold text-white">{card.value}</p>
                  )}
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="glass-panel p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Collaboration note
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Best fit: founders, startups, and product teams who want a calm
                  execution partner for premium web builds, AI features, automation,
                  or technical direction.
                </p>
                <div className="mt-5 inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                  Remote-first engagement
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
