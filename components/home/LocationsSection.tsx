import Link from "next/link";
import { cities, site } from "@/lib/content";

export function LocationsSection({ excludeSlug, map = false }: { excludeSlug?: string; map?: boolean }) {
  const items = cities.filter((city) => city.slug !== excludeSlug);

  return (
    <section id="service-area" className="bg-ivory text-ink">
      <div className="w-full px-6 pb-20 pt-14 sm:px-10 md:pb-28 md:pt-20 lg:px-[11vw]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Service area</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
              Tampa, and about 45 miles around it.
            </h2>
          </div>
          <Link href="/locations" className="btn-ghost shrink-0">
            All service areas
          </Link>
        </div>
        <ul className="mt-12 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((city) => (
            <li key={city.slug} className="border-b border-ink/10">
              <Link
                href={`/locations/${city.slug}`}
                className="group flex h-full items-end justify-between gap-4 py-6 pr-4 transition-colors hover:text-gold sm:px-6"
              >
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-gold">{city.county}</span>
                  <span className="mt-2 block font-display text-2xl text-ink group-hover:text-gold-deep sm:text-3xl">
                    {city.name}
                  </span>
                </span>
                <span aria-hidden="true" className="mb-1 text-sm tracking-[0.16em] text-gold">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {map ? (
          <div className="relative mt-14 h-[22rem] w-full overflow-hidden border border-ink/10 bg-[#f6f1e7] sm:h-[30rem]">
            <iframe
              title="Valora Construction & Remodeling on Google Maps"
              src={site.mapEmbed}
              className="absolute inset-0 h-full w-full border-0"
              style={{
                filter:
                  "grayscale(0.35) sepia(0.42) hue-rotate(12deg) saturate(0.7) brightness(1.08) contrast(0.92)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#e4dccb] opacity-60 mix-blend-soft-light" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
