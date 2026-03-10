import { testimonials } from "@/data/content";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <section className="container-shell py-16">
      <div className="space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Credibility"
            title="Trusted for high-standard execution and thoughtful technical leadership."
            description="A premium build is not only about code quality. It requires product judgment, communication, and delivery discipline."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
