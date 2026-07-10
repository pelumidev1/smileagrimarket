import type { MetadataRoute } from "next";
import { legalPolicies } from "@/lib/legal";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalPolicies.map((policy) => ({
      url: `${siteConfig.url}/legal/${policy.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
