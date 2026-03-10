import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-shell py-12">
        <div className="glass-panel grid gap-10 px-6 py-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-white">
              Building intelligent systems with clarity and polish.
            </p>
            <p className="max-w-lg text-sm leading-7 text-slate-300">
              Emirhan Atıcı partners with founders and teams to design scalable
              software, AI-powered workflows, and modern digital products.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Insights</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <p>{siteConfig.location}</p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email"
                  className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
