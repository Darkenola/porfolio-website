import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HomeHero } from "@/components/sections/home-hero";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { ServicesPreview } from "@/components/sections/services-preview";
import { StatsGrid } from "@/components/sections/stats-grid";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTABanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsGrid />
      <FeaturedProjects />
      <ServicesPreview />
      <TestimonialsSection />
      <InsightsPreview />
      <CTABanner
        title="Ready to build something modern, intelligent, and durable?"
        description="I work with teams that care about product quality, strong engineering decisions, and execution that feels calm under complexity."
      />
    </>
  );
}
