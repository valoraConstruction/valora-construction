import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/service/RichText";
import { ButtonPair } from "@/components/ui";
import { site } from "@/lib/content";

export function CallToAction({
  title = "Ready to Transform Your Home? So Are We.",
  text,
  closing,
  estimate = false,
}: {
  title?: string;
  text?: string;
  /** Extra line under the text; supports [anchor](href) links. */
  closing?: string;
  /** Adds a "Get an estimate" button next to "Call now". */
  estimate?: boolean;
} = {}) {
  return (
    <section id="call-now" className="relative overflow-hidden bg-[#f6f1e7] text-ink">
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <Image
          src="/gallery/estimate-counter.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-left-bottom -scale-x-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_78%,#f6f1e7_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f6f1e7_0%,#f6f1e7_12%,transparent_36%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
        <Image
          src="/gallery/estimate-counter.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[6%_bottom]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,249,242,0.62)_0%,rgba(255,249,242,0.48)_34%,rgba(255,249,242,0.16)_62%,transparent_84%)]" />
      </div>

      <div className="relative flex w-full flex-col items-start py-12 pl-[20%] pr-6 text-left sm:py-14 sm:pl-[16%] sm:pr-10 lg:min-h-[24rem] lg:justify-center lg:px-[11vw] lg:py-14">
        <div className="max-w-xl">
          <p className="kicker">Call now</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
          {text ? <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-ink/80">{text}</p> : null}
          {closing ? (
            <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-ink/80">
              <RichText text={closing} />
            </p>
          ) : null}
          <p className="mt-4 max-w-md text-stone">Open {site.hours}. A person answers.</p>
          {estimate ? (
            <ButtonPair row className="mt-8">
              <a href={`tel:${site.phoneTel}`} className="btn-gold">
                Call {site.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-ghost">
                Get an estimate
              </Link>
            </ButtonPair>
          ) : (
            <a href={`tel:${site.phoneTel}`} className="btn-gold mt-8">
              Call now
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
