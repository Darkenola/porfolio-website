import type { MetadataRoute } from "next";

const baseUrl = "https://emirhanatici.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/contact",
    "/projects",
    "/services",
    "/blog",
    "/tech-stack"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
