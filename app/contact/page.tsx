import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/content";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/ui";

export const metadata = pageMeta({
  title: "Contact",
  description: `Contact Valora Construction in Tampa. Call (813) 240-5570, ${site.hours}, or email office@valora-construction.com.`,
  path: "/contact",
  image: "/gallery/hero-kitchen.jpg",
  imageAlt: "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
});

const contacts = [
  {
    label: site.phoneDisplay,
    text: `Call or text — open ${site.hours}`,
    href: `tel:${site.phoneTel}`,
    icon: "phone",
  },
  {
    label: site.email,
    text: "We reply within 24 hours",
    href: `mailto:${site.email}`,
    icon: "mail",
  },
  {
    label: "Tampa, Florida",
    text: `${site.radius} of Tampa`,
    href: "",
    icon: "pin",
  },
  {
    label: `License ${site.license}`,
    text: "Fully licensed & insured",
    href: "",
    icon: "doc",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <section className="relative mt-20 overflow-hidden bg-[#f7f3ea] text-ink">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] min-[90rem]:block" aria-hidden="true">
          <Image
            src="/gallery/hero-kitchen.jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="56vw"
            className="object-cover object-[70%_32%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f3ea_0%,rgba(247,243,234,0.9)_16%,rgba(247,243,234,0.42)_34%,transparent_50%)]" />
        </div>
        <div className="relative min-[90rem]:hidden" aria-hidden="true">
          <div className="relative h-72">
            <Image
              src="/gallery/hero-kitchen.jpg"
              alt=""
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-[70%_32%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[#f7f3ea]" />
          </div>
        </div>

        <div className="relative w-full px-6 pb-8 pt-8 sm:px-10 min-[90rem]:px-[7vw] min-[90rem]:pb-10 min-[90rem]:pt-14">
          <p className="kicker">Contact us</p>
          <div className="mt-4 grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_max-content] md:gap-x-10 md:gap-y-10 min-[90rem]:max-w-[62rem] min-[90rem]:grid-cols-[minmax(0,40rem)_15.5rem] min-[90rem]:gap-x-12 min-[90rem]:gap-y-10">
            <div className="max-w-lg md:col-start-1 md:row-start-1 min-[90rem]:col-span-2">
              <h1 className="font-[family-name:var(--font-cormorant),_'Times_New_Roman',_serif] text-[3.15rem] font-medium leading-[0.92] text-ink sm:text-[4.6rem]">
                Let&apos;s
                <br />
                Build
                <br />
                <span className="italic text-gold">Together.</span>
              </h1>
              <p className="mt-5 max-w-sm text-[15px] leading-[1.65] text-stone">
                Tell us about your project and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="md:col-span-2 md:row-start-2 min-[90rem]:col-span-1 min-[90rem]:col-start-1 min-[90rem]:row-start-2">
              <LeadForm intent="contact" appearance="panel" />
            </div>

            <ul className="space-y-6 md:col-start-2 md:row-start-1 md:justify-self-end min-[90rem]:col-start-2 min-[90rem]:row-start-2 min-[90rem]:justify-self-stretch min-[90rem]:self-center min-[90rem]:pt-8">
              {contacts.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/80 text-gold">
                    <ContactIcon name={item.icon} />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    {item.href ? (
                      <a href={item.href} className="block text-[0.98rem] text-ink hover:text-gold-deep">
                        {item.label}
                      </a>
                    ) : (
                      <span className="block text-[0.98rem] text-ink">{item.label}</span>
                    )}
                    <span className="mt-0.5 block text-sm leading-snug text-stone">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="overflow-x-clip bg-[#f7f3ea] text-ink">
        <div className="grid items-center gap-10 px-6 pb-16 pt-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-[8vw] lg:pb-24 lg:pt-8">
          <div>
            <p className="kicker">Our service area</p>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-cormorant),_'Times_New_Roman',_serif] text-4xl font-medium leading-[1.05] text-ink sm:text-5xl">
              Proudly Serving Tampa and Surrounding Areas
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-stone">
              We provide kitchen, bathroom, and full home remodeling services throughout Tampa and within a 45-mile radius.
            </p>
            <Link href="/locations" className="btn-line mt-8">
              View all service areas
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ServiceAreaMap />
        </div>
      </section>

      <CallToAction />
    </>
  );
}

function ContactIcon({ name }: { name: "phone" | "mail" | "pin" | "doc" }) {
  const common = { viewBox: "0 0 24 24", className: "size-[1.15rem]", fill: "none", stroke: "currentColor", strokeWidth: 1.5, "aria-hidden": true } as const;
  if (name === "phone") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3.8h2.1c.4 0 .8.3.9.7l.7 2.4a1 1 0 0 1-.3 1L9.2 9a12.4 12.4 0 0 0 5.8 5.8l1.1-1.2a1 1 0 0 1 1-.3l2.4.7c.4.1.7.5.7.9V17a1.6 1.6 0 0 1-1.7 1.6A15.2 15.2 0 0 1 5.4 5.5 1.6 1.6 0 0 1 7 3.8Z" />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.2 7.2 7.8 5.6 7.8-5.6" />
      </svg>
    );
  }
  if (name === "pin") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
        <circle cx="12" cy="11" r="1.8" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.8h6.2L18.5 8.4V19a1.6 1.6 0 0 1-1.6 1.6H7.5A1.6 1.6 0 0 1 5.9 19V5.4c0-.9.7-1.6 1.6-1.6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.2 3.9V8.4h4.6M8.4 12.6h7.2M8.4 16h4.6" />
    </svg>
  );
}

function ServiceAreaMap() {
  return (
    <div className="relative h-[24rem] w-full sm:h-[28rem] lg:h-[30rem] min-[90rem]:w-[128%]">
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 92% 78% at 50% 50%, #000 58%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 92% 78% at 50% 50%, #000 58%, transparent 100%)",
        }}
      >
        <iframe
          title="Valora Construction & Remodeling on Google Maps"
          src={site.mapEmbed}
          className="h-full w-full border-0"
          style={{
            filter: "grayscale(0.2) sepia(0.28) saturate(0.75) brightness(1.05)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
