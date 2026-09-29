import type { MetadataRoute } from "next";

import { business } from "@/content/business";
import { allServices } from "@/content/services";

interface SitemapRoute {
  readonly path: string;
  readonly priority: number;
  readonly changeFrequency: "monthly" | "yearly";
}

const staticRoutes: readonly SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/digital-switchover", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact-us", priority: 0.9, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.1, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const serviceEntries = allServices.map((service) => ({
    url: `${business.siteUrl}/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticEntries = staticRoutes.map((route) => ({
    url: `${business.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...serviceEntries];
}
