import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { LocationsSection } from "@/components/home/LocationsSection";
import { JsonLd, PageHero } from "@/components/ui";
import { commercial, services } from "@/lib/content";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services",
  description:
    "Kitchen remodeling, bathroom remodeling, cabinets, countertops, tile, flooring, and home renovation by Valora Construction in Tampa Bay.",
  path: "/services",
  image: "/gallery/hero-kitchen.jpg",
  imageAlt: "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        word="Services"
        eyebrow="What we build"
        title="Kitchens, baths, and the rest of the house."
        lede="Kitchens, baths, floors, and whole-home renovations. One standard. We design the work, coordinate the trades, and stay through the last detail."
        image="/gallery/hero-kitchen.jpg"
        imageAlt="Light oak kitchen with a marble island, glass pendants, and a black-framed window"
      />
      <section className="bg-cream text-ink">
        <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-[11vw] lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold sm:w-10" aria-hidden="true" />
              Our services
              <span className="h-px w-8 bg-gold sm:w-10" aria-hidden="true" />
            </p>
            <h2 className="mx-auto mt-5 whitespace-nowrap font-display text-[clamp(0.98rem,3.55vw,3.15rem)] font-medium leading-[1.2] text-ink">
              Remodeling Services Designed
              <br />
              Around the Way You Live.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.7] text-stone sm:text-base">
              From kitchens and baths to floors and whole-home renovations, we design the work, coordinate the trades, and stay through the last detail.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5 sm:mt-14 lg:mt-16 lg:gap-6">
            {cards.map((card) => (
              <ServiceCard key={card.href} card={card} />
            ))}
          </div>
        </div>
      </section>
      <LocationsSection />
      <CallToAction />
    </>
  );
}

const imageFocus: Record<string, string> = {
  "kitchen-remodel": "center 62%",
  flooring: "center 68%",
};

const cards = [
  ...services.map((service) => ({
    href: `/services/${service.slug}`,
    image: service.image,
    alt: service.imageAlt,
    title: service.headline,
    summary: service.summary,
    focus: imageFocus[service.slug] ?? "center",
  })),
  {
    href: commercial.href,
    image: "/gallery/commercial-lobby.jpg",
    alt: "Commercial reception with a light oak desk, a quartz counter, and a wood floor continuing toward glass offices",
    title: "Commercial general contractor",
    summary: "Tenant interiors, restrooms, break rooms, flooring, and tile, with a written scope before demolition.",
    focus: "center 48%",
  },
];

function ServiceCard({ card }: { card: (typeof cards)[number] }) {
  return (
    <article className="flex w-full border border-sand bg-white sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)]">
      <Link href={card.href} className="group flex h-full w-full flex-col">
        <div className="p-3 pb-0 sm:p-3.5 sm:pb-0">
          <div className="relative aspect-[16/10] overflow-hidden bg-sand">
            <Image
              src={card.image}
              alt={card.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: card.focus }}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
          <h3 className="text-[0.78rem] font-medium uppercase leading-snug tracking-[0.14em] text-ink">{card.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-[1.6] text-stone">{card.summary}</p>
          <span className="mt-auto inline-flex items-center gap-3 pt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            Learn more
            <CardArrow />
          </span>
        </div>
      </Link>
    </article>
  );
}

function CardArrow() {
  return (
    <svg viewBox="0 0 32 12" className="h-2.5 w-6 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
      <path d="M0 6h28M23 1l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
