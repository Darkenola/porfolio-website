import type { Metadata } from "next";
import { BlogFilterGrid } from "@/components/interactive/blog-filter-grid";
import { PageHero } from "@/components/sections/page-hero";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata(
  "Insights",
  "Articles and insights on AI, software architecture, product engineering, and developer workflows by Emirhan Atıcı.",
  "/blog"
);

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thoughts on AI, software architecture, and premium product engineering."
        description="A clean reading space for ideas around building intelligent software, modern engineering teams, and resilient digital systems."
      />

      <section className="container-shell py-16">
        <BlogFilterGrid />
      </section>
    </>
  );
}
