import { CallToAction } from "@/components/CallToAction";
import { JsonLd, PageHero } from "@/components/ui";
import { site } from "@/lib/content";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Valora Construction collects, uses, and shares information submitted through valora-construction.com.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy policy", path: "/privacy" }])} />
      <PageHero
        word="Privacy"
        eyebrow="Your information"
        title="Privacy policy"
        lede="This policy explains what Valora Construction collects through this website and how we use it. It was last updated on October 20, 2026."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-[1.02rem] leading-relaxed text-ink md:py-20">
        <section>
          <h2 className="font-display text-3xl">Who we are</h2>
          <p className="mt-3 text-stone">
            {site.legalName} (“Valora,” “we”) operates {site.domain}. You can reach us at {site.email} or {site.phoneDisplay}. We are based in Tampa, Florida, and licensed as {site.license}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">What we collect</h2>
          <p className="mt-3 text-stone">
            If you call, email, or submit a contact or quote form, we collect the details you give us: your name, phone number, email address, project city, the service you are asking about, and whatever you write about the house. Quote requests may also include property type and timeline. We also receive routine technical data that a web host logs, such as browser type and the page requested.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">How we use it</h2>
          <p className="mt-3 text-stone">
            We use this information to answer you, decide whether the project is inside our service area, prepare an estimate or a design appointment, and keep a record of that conversation. We do not sell your information. We do not use it for unrelated advertising lists.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Who else sees it</h2>
          <p className="mt-3 text-stone">
            People at Valora who handle inquiries can see what you sent. The form is stored by our website host, Netlify. If notification email is turned on, Netlify sends a copy to {site.email}. Netlify processes the message only to store it and send that notice. We may also share information if the law requires it.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">How long we keep it</h2>
          <p className="mt-3 text-stone">
            We keep inquiry records for as long as we need them to respond, to document an estimate, or to meet ordinary business and legal record-keeping. You can ask us to delete a message that did not become a project by emailing {site.email}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Calls and messages</h2>
          <p className="mt-3 text-stone">
            If you give us a phone number, we may call or text you about the project you described. You can tell us to stop. Hours are {site.hours}; that does not mean every message is answered by an automated system.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Your choices</h2>
          <p className="mt-3 text-stone">
            You can use the phone or email instead of a form. You can ask what we have stored from a form you submitted. This website does not require an account.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl">Contact</h2>
          <p className="mt-3 text-stone">
            Privacy questions go to {site.email} or {site.phoneDisplay}. This policy is a plain explanation of our practices. It is not a contract for legal services.
          </p>
        </section>
      </article>
      <CallToAction />
    </>
  );
}
