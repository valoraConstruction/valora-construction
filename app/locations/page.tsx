import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { ServicesSection } from "@/components/home/ServicesSection";
import { JsonLd, PageHero } from "@/components/ui";
import { cities, site } from "@/lib/content";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Service Areas",
  description:
    "Valora Construction remodels kitchens, bathrooms, and homes within 45 miles of Tampa, including Clearwater, St. Pete, Wesley Chapel, Brandon, and Riverview.",
  path: "/locations",
  image: "/gallery/hero-kitchen.jpg",
  imageAlt: "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Service areas", path: "/locations" }])} />
      <PageHero
        word="Locations"
        eyebrow="Where we work"
        title="Tampa Bay, within 45 miles."
        lede="Kitchen remodeling, bathroom remodeling, flooring, and home renovation for the cities below. If you are near the edge of that circle, call and we will tell you plainly whether we can take the project."
        image="/gallery/hero-kitchen.jpg"
        imageAlt="Light oak kitchen with a marble island, glass pendants, and a black-framed window"
      />

      <section className="bg-ivory text-ink">
        <div className="w-full px-6 py-20 sm:px-10 md:py-28 lg:px-[11vw]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="kicker">Service area</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">The cities we remodel in.</h2>
            </div>
            <a href={site.maps} className="btn-ghost shrink-0" target="_blank" rel="noreferrer">
              Open our Google Map
            </a>
          </div>
          <ul className="mt-12 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <li key={city.slug} className="border-b border-ink/10">
                <Link
                  href={`/locations/${city.slug}`}
                  className="group flex h-full items-end justify-between gap-4 py-6 pr-4 transition-colors hover:text-gold sm:px-6"
                >
                  <span>
                    <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-gold">
                      {city.primary ? `Primary city · ${city.county}` : city.county}
                    </span>
                    <span className="mt-2 block font-display text-2xl text-ink group-hover:text-gold-deep sm:text-3xl">{city.name}</span>
                  </span>
                  <span aria-hidden="true" className="mb-1 text-sm tracking-[0.16em] text-gold">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-[15px] leading-[1.7] text-stone sm:text-base">
            Outside the list, we still work about {site.radius} from Tampa. Communities near the cities above are often inside that radius. Call {site.phoneDisplay} and we will answer directly.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CallToAction />
    </>
  );
}
