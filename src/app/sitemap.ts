import type { MetadataRoute } from "next";
import { legalPolicies } from "@/lib/legal";
import { siteConfig } from "@/lib/site";

// Bump when the landing page content meaningfully changes.
const HOME_LAST_MODIFIED = new Date("2026-07-10");

// Policy dates are human-readable strings ("July 9, 2026") that would
// otherwise parse in the build machine's local timezone and can shift
// the calendar day; pin them to UTC midnight.
function toUtcDate(dateString: string): Date {
  const d = new Date(dateString);
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalPolicies.map((policy) => ({
      url: `${siteConfig.url}/legal/${policy.slug}`,
      lastModified: toUtcDate(policy.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
