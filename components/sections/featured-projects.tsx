import Link from "next/link";
import { featuredProjects } from "@/data/content";
import { ProjectCard } from "@/components/cards/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjects() {
  return (
    <section className="container-shell py-16">
      <div className="flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Products and systems built to perform under real-world complexity."
              description="A cross-section of premium interfaces, AI implementations, and automation systems designed for scale."
            />
            <Link href="/projects" className="button-secondary w-fit">
              Explore All Projects
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
