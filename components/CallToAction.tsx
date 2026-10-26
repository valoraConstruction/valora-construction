import Image from "next/image";
import { site } from "@/lib/content";

export function CallToAction() {
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
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Ready to Transform Your Home? So Are We.</h2>
          <p className="mt-4 max-w-md text-stone">Open {site.hours}. A person answers.</p>
          <a href={`tel:${site.phoneTel}`} className="btn-gold mt-8">
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
