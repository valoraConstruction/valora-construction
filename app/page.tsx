import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Estimate } from "@/components/home/Estimate";
import { HeroSlider } from "@/components/home/HeroSlider";
import { LatestWorks } from "@/components/home/LatestWorks";
import { LocationsSection } from "@/components/home/LocationsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MapEmbed } from "@/components/MapEmbed";
import { Reviews } from "@/components/Reviews";
import { Block } from "@/components/service/DetailServicePage";
import { RichText } from "@/components/service/RichText";
import { ButtonPair, JsonLd } from "@/components/ui";
import { projects, site } from "@/lib/content";
import { home } from "@/lib/homeContent";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: home.metaTitle,
    description: home.metaDescription,
    path: "/",
    absolute: true,
  }),
  verification: { google: "EPeJYlPgKlUbcW220tkMg86rrc0RQGdU_2WxL8DTrVU" },
};

const faqs = home.faqs.map((faq, index) => ({ n: String(index + 1).padStart(2, "0"), title: faq.q, text: faq.a }));

export default function HomePage() {
  return (
    <>
      <JsonLd data={{ ...faqJsonLd(home.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))), "@id": `${site.url}/#faq` }} />
      <HeroSlider title={home.h1} lede={home.subtitle} />

      <section className="bg-white text-ink">
        <div className="w-full px-6 pt-16 sm:px-10 sm:pt-20 lg:px-[11vw] lg:pt-24">
          <p className="kicker">{site.legalName}</p>
          <p className="mt-6 max-w-4xl text-lg leading-[1.7] text-ink/85 sm:text-xl">{home.intro}</p>
          <ButtonPair row className="mt-8">
            <a href={`tel:${site.phoneTel}`} className="btn-gold">
              Call {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-ghost">
              Get an estimate
            </Link>
          </ButtonPair>
        </div>
        <div className="w-full px-6 pb-16 pt-12 sm:px-10 lg:px-[11vw] lg:pb-20">
          <ul className="grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {home.trust.map((fact) => (
              <li key={fact} className="flex gap-4 border-b border-ink/10 py-5 text-sm leading-snug text-ink sm:pr-6">
                <span className="mt-[0.55rem] h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Estimate title={home.estimate.title} text={home.estimate.text} />

      <Reviews />

      <section className="bg-white text-ink">
        <div className="w-full px-6 sm:px-10 lg:px-[11vw] grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="kicker">Our promise</p>
            <blockquote className="mt-6 text-xl leading-relaxed text-ink sm:text-2xl">{site.promise}</blockquote>
            <div className="mt-8">
              <p className="font-display text-3xl tracking-wide text-gold sm:text-4xl">{site.license}</p>
              <p className="mt-3 text-sm text-stone">License</p>
              <p className="mt-3 text-sm text-stone">Tampa, Florida</p>
            </div>
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <Image
              src="/brand/logo.png"
              alt="Valora Construction & Remodeling"
              width={1024}
              height={682}
              className="h-40 w-auto sm:h-52"
            />
          </div>
        </div>
      </section>

      <ServicesSection title={home.services.title} lede={home.services.lede} overrides={home.services.overrides} />

      <Block block={home.definition} tone="white" />
      <Block block={home.moving} tone="ivory" />
      <Block block={home.oneProject} tone="white" />

      <ProcessSection kicker="The process" title={home.process.title} steps={home.process.steps} />

      <section id="about" className="overflow-hidden bg-white text-ink">
        <div className="mx-auto flex w-full max-w-full flex-col items-start px-6 pt-20 sm:px-10 sm:pt-24 lg:w-fit lg:flex-row lg:items-stretch lg:px-8 lg:pt-28">
          <div className="flex w-full flex-col lg:w-max">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="h-px w-14 shrink-0 bg-gold sm:w-24" aria-hidden="true" />
              <p className="about-word text-[clamp(2.35rem,6.2vw,6.75rem)]" aria-hidden="true">
                ABOUT US
              </p>
            </div>
            <div className="mt-7 lg:mb-10">
              <h2 className="max-w-[20ch] font-display text-[clamp(1.6rem,3.4vw,2.45rem)] font-medium leading-[1.22] text-ink">
                {home.about.title}
              </h2>
              <div className="mt-8 max-w-[28rem] space-y-4 text-[13px] leading-[1.7] text-stone sm:text-sm">
                {home.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8">
                <span className="block font-display text-2xl text-ink">Amanda Neve</span>
                <span className="mt-1 block text-sm text-stone">Owner, Valora Construction</span>
              </p>
            </div>
          </div>
          <div className="relative -mx-6 mt-8 aspect-[5/6] w-[calc(100%+3rem)] shrink-0 overflow-hidden sm:-mx-10 sm:w-[calc(100%+5rem)] lg:mx-0 lg:ml-8 lg:mt-0 lg:aspect-auto lg:h-auto lg:w-[24rem] lg:self-stretch">
            <Image
              src="/brand/amanda-figure.webp"
              alt="Amanda Neve, owner of Valora Construction"
              fill
              quality={80}
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="!right-auto object-cover object-top max-lg:!left-[8%] max-lg:!w-[84%] max-lg:!max-w-none"
            />
          </div>
        </div>
      </section>

      <Block block={home.why} tone="ivory" />

      <LatestWorks items={projects} title={home.projects.title} lede={<RichText text={home.projects.lede} />} />

      <Block block={home.tampaBay} tone="ivory" />

      <section id="visit" className="bg-white text-ink">
        <div className="grid w-full gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-[11vw] lg:py-24">
          <div>
            <p className="kicker">Visit</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{home.visit.title}</h2>
            <p className="mt-6 text-[15px] leading-[1.7] text-stone">
              {site.legalName} is located at {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}.
              We&apos;re open every day from 6:00 AM to 11:00 PM. Call us at{" "}
              <a href={`tel:${site.phoneTel}`} className="text-gold-deep underline underline-offset-4 hover:text-gold">
                {site.phoneDisplay}
              </a>
              , email{" "}
              <a href={`mailto:${site.email}`} className="text-gold-deep underline underline-offset-4 hover:text-gold">
                {site.email}
              </a>
              , or find us on{" "}
              <a href={site.maps} target="_blank" rel="noopener noreferrer" className="text-gold-deep underline underline-offset-4 hover:text-gold">
                Google Maps
              </a>
              .
            </p>
            <ButtonPair row className="mt-8">
              <a href={`tel:${site.phoneTel}`} className="btn-gold">
                Call {site.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-ghost">
                Get an estimate
              </Link>
            </ButtonPair>
          </div>
          <div className="relative h-[22rem] w-full overflow-hidden border border-ink/10 bg-[#f6f1e7] sm:h-[28rem]">
            <MapEmbed
              className="absolute inset-0"
              style={{ filter: "grayscale(0.35) sepia(0.42) hue-rotate(12deg) saturate(0.7) brightness(1.08) contrast(0.92)" }}
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#e4dccb] opacity-60 mix-blend-soft-light" />
          </div>
        </div>
      </section>

      <LocationsSection title={home.areas.title} lede={home.areas.lede} label={home.areas.label} />

      <ProcessSection
        kicker="Questions"
        title={home.faqTitle}
        steps={faqs}
        image="/gallery/quartz-island-pendants.webp"
        imageAlt="White shaker kitchen with a marble-look island, stainless appliances, and three brass pendant lights"
        imagePosition="center 62%"
      />

      <CallToAction title={home.final.title} text={home.final.text} closing={home.final.closing} estimate />
    </>
  );
}
