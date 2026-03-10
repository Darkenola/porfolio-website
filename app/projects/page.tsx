import type { Metadata } from "next";
import { ProjectFilterGrid } from "@/components/interactive/project-filter-grid";
import { PageHero } from "@/components/sections/page-hero";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Projects",
  "Selected software, AI, SaaS, and automation projects by Emirhan Atıcı.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A portfolio of premium web applications, AI products, and automation systems."
        description="A curated view of products built with a focus on performance, product clarity, and technical depth."
      />

      <section className="container-shell py-16">
        <ProjectFilterGrid />
      </section>
    </>
  );
}
