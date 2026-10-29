import type { CSSProperties } from "react";
import { site } from "@/lib/content";

/**
 * The Google Maps embed for Valora Construction & Remodeling (supplied embed URL, lazy loading,
 * fullscreen, and strict-origin-when-cross-origin referrer policy). It fills its parent, so the
 * parent sets the size; width/height stay as the supplied 600x450 fallback.
 */
export function MapEmbed({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <iframe
      title={`Google Map: ${site.legalName}, ${site.address.street}, ${site.address.city}, ${site.address.region}`}
      src={site.mapEmbed}
      width={600}
      height={450}
      className={`block h-full w-full border-0 ${className}`}
      style={{ border: 0, ...style }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
