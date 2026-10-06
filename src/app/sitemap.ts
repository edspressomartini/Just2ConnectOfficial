import type { MetadataRoute } from "next";

import { allAreas } from "@/content/areas";
import { business } from "@/content/business";
import { pageLastModified } from "@/content/last-modified";
import { allServices } from "@/content/services";

interface SitemapRoute {
  readonly path: string;
  readonly priority: number;
  readonly changeFrequency: "monthly" | "yearly";
}

const staticRoutes: readonly SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/digital-switchover", priority: 0.9, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact-us", priority: 0.9, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.1, changeFrequency: "yearly" },
];

/**
 * The day the page at `path` last changed.
 *
 * Throws rather than defaulting, because a missing date silently became
 * "today" in the previous version of this file, which is exactly the
 * inaccuracy that makes Google stop trusting `lastmod` altogether. Failing the
 * build is noisy, but it is noise at the only moment anyone can act on it.
 */
function lastModifiedFor(path: string): string {
  const entry = pageLastModified.find((page) => page.path === path);
  if (!entry) {
    throw new Error(
      `No last-modified date for "${path}". Add one to src/content/last-modified.ts.`,
    );
  }
  return entry.date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries = allServices.map((service) => ({
    url: `${business.siteUrl}/${service.slug}`,
    lastModified: lastModifiedFor(`/${service.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaEntries = allAreas.map((area) => ({
    url: `${business.siteUrl}/areas/${area.slug}`,
    lastModified: lastModifiedFor(`/areas/${area.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticEntries = staticRoutes.map((route) => ({
    url: `${business.siteUrl}${route.path}`,
    lastModified: lastModifiedFor(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...serviceEntries, ...areaEntries];
}
