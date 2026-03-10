import type { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

const baseUrl = "https://emirhanatici.dev";
const defaultTitle = "Emirhan Atıcı | Software Engineer & AI Specialist";
const defaultDescription =
  "Premium portfolio of Emirhan Atıcı, a software engineer and AI specialist building scalable applications, intelligent systems, and modern product experiences.";

export function buildMetadata(
  title?: string,
  description: string = defaultDescription,
  path = ""
): Metadata {
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: defaultTitle,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}
