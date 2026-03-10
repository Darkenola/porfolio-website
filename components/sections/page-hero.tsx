import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="container-shell pt-14 md:pt-20">
      <Reveal className="glass-panel relative overflow-hidden px-6 py-12 md:px-10 md:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.16),transparent_28%)]" />
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Reveal>
    </section>
  );
}
