import type { MetadataRoute } from "next";
import { cities, commercial, services, site } from "@/lib/content";

const updated = new Date("2026-10-25");

function entry(path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly"): MetadataRoute.Sitemap[number] {
  return {
    url: `${site.url}${path}`,
    lastModified: updated,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("", 1, "weekly"),
    entry("/services", 0.9, "weekly"),
    entry("/locations", 0.9, "weekly"),
    entry("/projects", 0.7, "monthly"),
    entry("/why-choose-us", 0.7, "monthly"),
    entry("/contact", 0.7, "monthly"),
    entry(commercial.href, 0.8, "monthly"),
    ...services.map((service) => entry(`/services/${service.slug}`, 0.8, "monthly")),
    ...cities.map((city) => entry(`/locations/${city.slug}`, 0.8, "monthly")),
    entry("/privacy", 0.3, "yearly"),
    entry("/terms", 0.3, "yearly"),
  ];
}
