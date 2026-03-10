import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type CTABannerProps = {
  title: string;
  description: string;
};

export function CTABanner({ title, description }: CTABannerProps) {
  return (
    <section className="container-shell py-16">
      <Reveal className="glass-panel overflow-hidden px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-white md:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-7 text-slate-300">{description}</p>
          </div>
          <Link href="/contact" className="button-primary w-fit">
            Start a Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
