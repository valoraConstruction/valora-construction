import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";
import { ProcessSection } from "@/components/home/ProcessSection";
import { JsonLd, PageHero } from "@/components/ui";
import { process, reasons, site } from "@/lib/content";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Why Valora",
  description:
    "Why Tampa Bay homeowners hire Valora Construction. Licensed CBC1270738. One team for kitchens, baths, floors, and whole-home renovation.",
  path: "/why-choose-us",
  image: "/gallery/hero-kitchen.jpg",
  imageAlt: "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
});

const letter = [
  "My journey started back in 2020, flipping homes in Knoxville, Tennessee. With a background in interior design, I quickly fell in love with the process of turning ordinary spaces into something truly special. What began as a creative passion soon grew into a deep appreciation for construction, quality craftsmanship, and the details that make a house feel like home.",
  "After moving to Tampa, Florida, I knew I wanted to build something of my own. That's how Valora Construction came to life — a local, family-owned company built on hard work, trust, and a commitment to creating beautiful homes.",
  "To me, luxury isn't just about beautiful finishes or expensive materials. It's about thoughtful design, exceptional craftsmanship, and making sure every detail feels just right.",
  "Whether we're transforming a kitchen, remodeling a bathroom, or renovating an entire home, I want every client to feel confident, heard, and genuinely excited about the process.",
  "As a family-owned business, we take every project personally. Your home matters to us, and so does the trust you place in our hands.",
  "Thank you for considering Valora Construction. I can't wait to help bring your vision to life!",
];

const facts = [
  { label: "License", value: site.license },
  { label: "Hours", value: site.hours },
  { label: "Based in", value: "Tampa, FL" },
  { label: "Radius", value: site.radius },
];

export default function WhyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Why Valora", path: "/why-choose-us" }])} />
      <PageHero
        word="Why Valora"
        wordClassName="why-valora-outline"
        eyebrow="Our story"
        title="Built on passion. Driven by people."
        lede="We design and build kitchens, bathrooms, floors, and whole-home renovations for homeowners in Tampa Bay who want the work handled, and explained."
        image="/gallery/hero-kitchen.jpg"
        imageAlt="Light oak kitchen with a marble island, glass pendants, and a black-framed window"
      />

      <section className="overflow-hidden bg-white text-ink">
        <div className="mx-auto flex w-full max-w-full flex-col items-start px-6 pt-20 sm:px-10 sm:pt-24 lg:w-fit lg:flex-row lg:items-stretch lg:px-8 lg:pt-28">
          <div className="flex w-full flex-col lg:w-max">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="h-px w-14 shrink-0 bg-gold sm:w-24" aria-hidden="true" />
              <p
                className="about-word"
                style={{
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "1px #c6a15b",
                }}
              >
                Why Valora
              </p>
            </div>
            <div className="mt-7 lg:mb-10">
              <h2 className="whitespace-nowrap font-display text-[clamp(0.92rem,4.05vw,2.45rem)] font-medium leading-[1.22] text-ink">
                Hi, I’m Amanda Neve,
                <br />
                the owner and heart
                <br />
                behind Valora Construction!
              </h2>
              <div className="mt-8 max-w-[34rem] space-y-4 text-[13px] leading-[1.7] text-stone sm:text-sm">
                {letter.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8">
                <span className="block font-display text-2xl text-ink">Amanda Neve</span>
                <span className="mt-1 block text-sm text-stone">Owner, Valora Construction</span>
              </p>
            </div>
          </div>
          <div className="relative mt-8 h-[26rem] w-[min(100%,18rem)] shrink-0 self-center overflow-hidden sm:h-[30rem] sm:w-[22rem] lg:ml-8 lg:mt-0 lg:h-auto lg:w-[24rem] lg:self-stretch">
            <Image
              src="/brand/amanda-figure.webp"
              alt="Amanda Neve, owner of Valora Construction"
              fill
              quality={80}
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="w-full px-6 pb-16 sm:px-10 lg:px-[11vw] lg:pb-24">
          <ul className="grid border-t border-ink/10 sm:grid-cols-2 md:flex md:items-start md:justify-between md:gap-x-6 md:border-b">
            {facts.map((fact) => (
              <li key={fact.label} className="border-b border-ink/10 py-6 sm:px-6 md:shrink-0 md:border-b-0 md:px-0">
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-gold">{fact.label}</span>
                <span className="mt-2 block whitespace-nowrap font-display text-2xl text-ink sm:text-3xl md:text-[clamp(1.45rem,3.35vw,1.875rem)]">
                  {fact.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden bg-ivory py-16 text-ink sm:py-20 lg:py-24">
        <div className="px-6 sm:px-10 lg:px-[11vw]">
          <h2 className="max-w-[14ch] font-display text-[clamp(2.15rem,4.2vw,4rem)] font-medium leading-[1.05] md:max-w-none">
            Why homeowners choose Valora
          </h2>
          <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <li key={reason.title}>
                <p className="text-[1.05rem] font-medium leading-none text-stone sm:text-[1.2rem]">0{index + 1}</p>
                <div className="mt-3 flex min-h-[13.5rem] flex-col bg-white px-5 pb-5 pt-5 shadow-[0_12px_30px_rgba(36,31,26,0.08)] sm:min-h-[14.5rem] sm:px-6 sm:pb-6 sm:pt-6">
                  <h3 className="text-sm font-medium uppercase leading-snug tracking-[0.06em] text-[#111]">{reason.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.5] text-[#6a6a6a]">{reason.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSection
        kicker="The process"
        title="Bring your vision to life in five steps."
        steps={process}
      />

      <section className="bg-white text-ink">
        <div className="grid w-full gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 md:py-28 lg:px-[11vw]">
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

      <CallToAction />
    </>
  );
}
