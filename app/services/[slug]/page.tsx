import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/CallToAction";
import { LocationsSection } from "@/components/home/LocationsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { JsonLd, PageHero } from "@/components/ui";
import { getService, services } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const instant = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service", robots: { index: false, follow: false } };
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
    imageAlt: service.imageAlt,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const heroes: Record<string, { image: string; imagePosition: string; imageAlt: string; imageFlip?: boolean }> = {
    flooring: {
      image: "/gallery/hero-living-oak.webp",
      imagePosition: "82% center",
      imageAlt: "Wide oak floor in a bright living room with tall windows and a fireplace",
    },
    "bathroom-remodel": {
      image: "/gallery/hero-bathroom.jpg",
      imagePosition: "78% 62%",
      imageAlt:
        "Freestanding white soaking tub with a champagne-gold floor filler, plantation shutters, and patterned sand tile",
    },
    "home-renovation": {
      image: "/gallery/hero-home-coastal.png",
      imagePosition: "center 58%",
      imageAlt:
        "Open living room and kitchen with a linen sectional, light wood floors, and sliding doors to a waterfront patio",
    },
    "cabinet-countertop": {
      image: "/gallery/cabinet-hero.jpg",
      imagePosition: "72% 58%",
      imageAlt: "Cream shaker island with a quartz counter, brass pulls, and a plaster range hood",
    },
    "tile-installation": {
      image: "/gallery/hero-bath.jpg",
      imagePosition: "left center",
      imageAlt: "Stone-tiled walk-in shower beside an oak vanity",
      imageFlip: true,
    },
  };
  const hero = heroes[service.slug] ?? {
    image: "/gallery/hero-kitchen.jpg",
    imagePosition: "center",
    imageAlt: "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
  };

  const word = service.slug === "home-renovation" ? "RENOVATION" : service.category.toUpperCase();
  const longWord = word.length > 8;
  const faqs = service.faqs.map((faq, index) => ({
    n: String(index + 1).padStart(2, "0"),
    title: faq.q,
    text: faq.a,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(service.faqs.map((faq) => ({ question: faq.q, answer: faq.a })))} />
      <PageHero
        word={service.name}
        eyebrow={service.eyebrow}
        title={service.headline}
        lede={service.summary}
        image={hero.image}
        imagePosition={hero.imagePosition}
        imageAlt={hero.imageAlt}
        imageFlip={hero.imageFlip}
      />

      <section className="overflow-hidden bg-white text-ink">
        <div className="mx-auto flex w-full max-w-full flex-col items-start px-6 pb-16 pt-20 sm:px-10 sm:pt-24 lg:w-fit lg:flex-row lg:items-stretch lg:px-8 lg:pb-20 lg:pt-28">
          <div className="flex w-full flex-col lg:w-max">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="h-px w-14 shrink-0 bg-gold sm:w-24" aria-hidden="true" />
              <p
                className="about-word"
                style={longWord ? { letterSpacing: "0.06em" } : undefined}
              >
                {word}
              </p>
            </div>
            <div className="mt-7 lg:mb-10">
              <h2 className="max-w-[16ch] font-display text-[clamp(1.7rem,3.5vw,2.45rem)] font-medium leading-[1.22] text-ink">
                {service.summary}
              </h2>
              <p className="mt-8 max-w-[34rem] text-[13px] leading-[1.7] text-stone sm:text-sm">{service.description}</p>
            </div>
          </div>
          <div className="relative mt-8 aspect-[4/5] w-[min(100%,18rem)] shrink-0 self-start overflow-hidden sm:w-[22rem] lg:ml-8 lg:mt-0 lg:h-auto lg:w-[24rem] lg:self-stretch">
            <Image
              src={service.slug === "bathroom-remodel" ? "/gallery/hero-bath.jpg" : service.image}
              alt={
                service.slug === "bathroom-remodel"
                  ? "Stone-tiled walk-in shower beside an oak double vanity"
                  : service.imageAlt
              }
              fill
              quality={80}
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-cover"
              style={{ objectPosition: service.slug === "bathroom-remodel" ? "22% center" : "center" }}
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ivory py-16 text-ink sm:py-20 lg:py-24">
        <div className="px-6 sm:px-10 lg:px-[11vw]">
          <h2 className="max-w-[14ch] font-display text-[clamp(2.15rem,4.2vw,4rem)] font-medium leading-[1.05] md:max-w-none">
            What the project includes
          </h2>
          <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
            {service.includes.map((item, index) => (
              <li key={item.title}>
                <p className="text-[1.05rem] font-medium leading-none text-stone sm:text-[1.2rem]">{String(index + 1).padStart(2, "0")}</p>
                <div className="mt-3 flex min-h-[13.5rem] flex-col bg-white px-5 pb-5 pt-5 shadow-[0_12px_30px_rgba(36,31,26,0.08)] sm:min-h-[14.5rem] sm:px-6 sm:pb-6 sm:pt-6">
                  <h3 className="text-sm font-medium uppercase leading-snug tracking-[0.06em] text-[#111]">{item.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.5] text-[#6a6a6a]">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSection
        kicker="Questions"
        title="Questions we hear"
        steps={faqs}
        image={
          service.slug === "tile-installation"
            ? "/gallery/hero-bath.jpg"
            : service.slug === "cabinet-countertop"
              ? "/gallery/cabinet-questions.jpg"
              : hero.image
        }
        imageAlt={
          service.slug === "tile-installation"
            ? "Stone tile shower wall with a lit niche, a handheld shower, and a black glass pull"
            : service.slug === "cabinet-countertop"
              ? "Speckled quartz counter between white shaker doors, a brass cup pull, and oak open shelves"
              : hero.imageAlt
        }
        imagePosition={
          service.slug === "tile-installation" ? "18% center" : service.slug === "cabinet-countertop" ? "center" : hero.imagePosition
        }
      />

      <ServicesSection excludeHref={`/services/${service.slug}`} />
      <LocationsSection />
      <CallToAction />
    </>
  );
}
