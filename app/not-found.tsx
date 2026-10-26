import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { ButtonPair, PageHero } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on the Valora Construction site. Call the Tampa office or go back to the homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        word="404"
        eyebrow="Missing page"
        title="This page is not on the site."
        lede="The link may be old, or the address may be mistyped. The work is still in Tampa."
        cta="Back home"
        href="/"
        image="/gallery/hero-kitchen.jpg"
        imageAlt="Light oak kitchen with a marble island, glass pendants, and a black-framed window"
      />
      <div className="bg-ivory px-6 pb-16 sm:px-10 lg:px-[7vw]">
        <ButtonPair row>
          <Link href="/services" className="btn-ghost">
            View services
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn-ghost">
            Call {site.phoneDisplay}
          </a>
        </ButtonPair>
      </div>
      <CallToAction />
    </>
  );
}
