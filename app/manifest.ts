import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: "Kitchen, bathroom, and whole-home remodeling in Tampa Bay.",
    start_url: "/",
    display: "browser",
    background_color: "#f6f1e7",
    theme_color: "#f6f1e7",
    lang: "en",
    icons: [{ src: "/brand/logo.png", sizes: "1024x682", type: "image/png", purpose: "any" }],
  };
}
