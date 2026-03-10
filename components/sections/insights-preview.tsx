import Link from "next/link";
import { insights } from "@/data/content";
import { BlogCard } from "@/components/cards/blog-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function InsightsPreview() {
  return (
    <section className="container-shell py-16">
      <div className="space-y-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Ideas on AI, software architecture, and modern product execution."
              description="Thoughtful writing on what it takes to build intelligent, durable, and user-focused software."
            />
            <Link href="/blog" className="button-secondary w-fit">
              Read Insights
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {insights.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <BlogCard {...post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
