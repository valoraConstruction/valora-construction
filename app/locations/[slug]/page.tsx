import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/CallToAction";
import { LocationsSection } from "@/components/home/LocationsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { JsonLd, PageHero } from "@/components/ui";
import { cities, cityBySlug, site } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export const instant = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const city = cityBySlug(slug);
  if (!city) return { title: "Location", robots: { index: false, follow: false } };
  return pageMeta({
    title: `${city.name}, FL Remodeling`,
    description: `Kitchen, bathroom, and home renovation in ${city.name}, Florida. Valora Construction serves ${city.name} within 45 miles of Tampa. License ${site.license}.`,
    path: `/locations/${city.slug}`,
    image: "/gallery/hero-kitchen.jpg",
    imageAlt: "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
  });
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const city = cityBySlug(slug);
  if (!city) notFound();

  const nearby = city.nearby
    .map((item) => cityBySlug(item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const area = city.county.replace(/ County$/, "").toUpperCase();
  const longWord = area.length > 8;
  const facts = [
    { label: "Services", value: "Kitchens, baths, floors" },
    { label: "From Tampa", value: site.radius },
    { label: "License", value: site.license },
    { label: "Hours", value: site.hours },
  ];
  const faqs = [
    {
      n: "01",
      title: `Do you remodel kitchens in ${city.name}?`,
      text: `Yes. Kitchen remodeling is our signature service in ${city.name} and across Tampa Bay. ${city.focus}`,
    },
    {
      n: "02",
      title: `Do you remodel bathrooms in ${city.name}?`,
      text: `Yes. A ${city.name} bathroom remodel includes layout, demolition, plumbing, electrical, waterproofing, tile, cabinetry, countertops, fixtures, and final finishes.`,
    },
    {
      n: "03",
      title: `Is ${city.name} inside your service area?`,
      text: city.primary
        ? `Tampa is our home city. We are licensed in Florida (${site.license}) and also work within about ${site.radius}, including ${nearby.map((item) => item.name).join(", ")}.`
        : `${city.name} is part of our regular service area, about ${site.radius} from Tampa. If you are close to the edge of that radius, call and we will tell you directly.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service areas", path: "/locations" },
          { name: city.name, path: `/locations/${city.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs.map((faq) => ({ question: faq.title, answer: faq.text })))} />
      <PageHero
        word={city.name}
        eyebrow={city.primary ? `${city.county} · Primary city` : city.county}
        title={`Remodeling in ${city.name}.`}
        lede={city.blurb}
        image="/gallery/hero-kitchen.jpg"
        imageAlt="Light oak kitchen with a marble island, glass pendants, and a black-framed window"
        priority
      />

      <section className="overflow-hidden bg-white text-ink">
        <div className="mx-auto flex w-full max-w-full flex-col items-start px-6 pb-10 pt-20 sm:px-10 sm:pt-24 lg:w-fit lg:flex-row lg:items-stretch lg:px-8 lg:pb-0 lg:pt-28">
          <div className="flex w-full flex-col lg:w-max">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="h-px w-14 shrink-0 bg-gold sm:w-24" aria-hidden="true" />
              <p
                className="about-word"
                style={longWord ? { letterSpacing: "0.05em" } : undefined}
              >
                {area}
              </p>
            </div>
            <div className="mt-7 lg:mb-10">
              <h2 className="max-w-[16ch] font-display text-[clamp(1.7rem,3.5vw,2.45rem)] font-medium leading-[1.22] text-ink">
                Remodeling kitchens, baths, and homes in {city.name}.
              </h2>
              <div className="mt-8 max-w-[34rem] space-y-4 text-[13px] leading-[1.7] text-stone sm:text-sm">
                {city.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8">
                <span className="block font-display text-2xl text-ink">{site.license}</span>
                <span className="mt-1 block text-sm text-stone">Licensed in Florida</span>
              </p>
            </div>
          </div>
          <div className="relative mt-8 h-[26rem] w-[min(100%,18rem)] shrink-0 self-start overflow-hidden sm:h-[30rem] sm:w-[22rem] lg:ml-8 lg:mt-0 lg:h-auto lg:w-[24rem] lg:self-stretch">
            <Image
              src="/gallery/location-kitchen.webp"
              alt="Kitchen island with a waterfall quartz counter, dark cabinets, and light wood-look flooring"
              fill
              quality={90}
              sizes="(min-width: 1024px) 30rem, 22rem"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full px-6 pb-16 sm:px-10 lg:px-[11vw] lg:pb-24">
          <ul className="grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <li key={fact.label} className="border-b border-ink/10 py-6 sm:px-6">
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-gold">{fact.label}</span>
                <span className="mt-2 block font-display text-2xl text-ink sm:text-3xl">{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="w-full px-6 py-20 sm:px-10 lg:px-[11vw] lg:py-24">
          <p className="kicker">Neighborhoods</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Where we work in {city.name}.</h2>
          <ul className="mt-12 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {city.neighborhoods.map((areaName) => (
              <li
                key={areaName}
                className="flex items-center gap-3 border-b border-ink/10 py-6 font-display text-2xl leading-none text-ink sm:px-6 sm:text-3xl"
              >
                <svg viewBox="0 0 24 24" className="h-[0.72em] w-[0.72em] shrink-0 text-gold" aria-hidden="true">
                  <path
                    d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="12" cy="10" r="2.15" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <span>{areaName}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection
        kicker="Questions"
        title="What homeowners ask"
        steps={faqs}
        image="/gallery/hero-kitchen.jpg"
        imageAlt="Light oak kitchen with a marble island, glass pendants, and a black-framed window"
      />

      <ServicesSection title={<>Services in {city.name}</>} />
      <LocationsSection excludeSlug={city.slug} map />

      <CallToAction />
    </>
  );
}
