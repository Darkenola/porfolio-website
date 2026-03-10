"use client";

import { useMemo, useState } from "react";
import { blogPosts } from "@/data/content";
import { BlogCard } from "@/components/cards/blog-card";

const tags = [
  "All",
  "AI Trends",
  "Software Architecture",
  "Product Engineering",
  "Developer Workflows"
];

export function BlogFilterGrid() {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesTag = activeTag === "All" || post.tag === activeTag;
      const matchesQuery =
        query.length === 0 ||
        `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase());

      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  return (
    <div className="space-y-8">
      <div className="glass-panel flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search insights"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40 md:max-w-sm"
        />
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={
                activeTag === tag
                  ? "rounded-full border border-cyan-300/30 bg-cyan-400/15 px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
              }
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {filteredPosts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
}
