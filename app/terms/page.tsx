import { CallToAction } from "@/components/CallToAction";
import { JsonLd, PageHero } from "@/components/ui";
import { site } from "@/lib/content";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "Terms for using the Valora Construction website, requesting an estimate, and understanding our Tampa Bay service area.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Terms and conditions", path: "/terms" }])} />
      <PageHero
        word="Terms"
        eyebrow="The agreement"
        title="Terms and conditions"
        lede="These terms cover use of valora-construction.com and what a quote request means. They were last updated on October 20, 2026."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-[1.02rem] leading-relaxed md:py-20">
        <section>
          <h2 className="font-display text-3xl">The website</h2>
          <p className="mt-3 text-stone">
            This site is published by {site.legalName} so you can learn about our remodeling work and contact the office. You may use it for that purpose. You may not misuse the forms, attempt to break the site, or copy it for another business.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Estimates and appointments</h2>
          <p className="mt-3 text-stone">
            A form, email, or phone call is a request. It is not a contract, a reserved start date, or a guaranteed price. An estimate becomes binding only when both sides have agreed to a written scope. A design appointment is a meeting to measure and talk. It is not a promise that we will take every project.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Where we work</h2>
          <p className="mt-3 text-stone">
            We remodel kitchens, bathrooms, and homes within about {site.radius} of Tampa, Florida, in the cities listed on this site. Being able to submit a form does not place a property inside the service area.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">License</h2>
          <p className="mt-3 text-stone">
            Valora Construction holds Florida contractor license {site.license}. Licensing does not, by itself, promise a particular price or schedule. Those live in the written scope for your house.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Photographs</h2>
          <p className="mt-3 text-stone">
            Gallery photographs show kitchens, baths, and finished rooms. They illustrate materials and composition. They are not a promise that your house will match a specific picture. Your own project is photographed when it is yours, and only with your permission if we want to publish it.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">The name and the logo</h2>
          <p className="mt-3 text-stone">
            The Valora name, the shield mark, and the words “Build | Renovate | Elevate” belong to Valora Construction. Please do not use them without written permission.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Limits</h2>
          <p className="mt-3 text-stone">
            The site is provided as a way to reach us. We work to keep the information accurate and do not promise that every page is free of error or that the site will never be unavailable. To the extent the law allows, we are not liable for losses that come only from using the website, as distinct from a signed construction agreement.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Contact</h2>
          <p className="mt-3 text-stone">
            Questions about these terms: {site.email} or {site.phoneDisplay}. These terms are governed by the laws of the State of Florida.
          </p>
        </section>
      </article>
      <CallToAction />
    </>
  );
}
