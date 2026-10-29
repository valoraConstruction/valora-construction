import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/content";

const contacts = [
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phoneTel}`,
    icon: (
      <svg viewBox="0 0 24 24" className="size-[1.15rem]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3.8h2.1c.4 0 .8.3.9.7l.7 2.4a1 1 0 0 1-.3 1L9.2 9a12.4 12.4 0 0 0 5.8 5.8l1.1-1.2a1 1 0 0 1 1-.3l2.4.7c.4.1.7.5.7.9V17a1.6 1.6 0 0 1-1.7 1.6A15.2 15.2 0 0 1 5.4 5.5 1.6 1.6 0 0 1 7 3.8Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className="size-[1.15rem]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.2 7.2 7.8 5.6 7.8-5.6" />
      </svg>
    ),
  },
  {
    label: "License",
    value: site.license,
    href: "",
    icon: (
      <svg viewBox="0 0 24 24" className="size-[1.15rem]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.8h6.2L18.5 8.4V19a1.6 1.6 0 0 1-1.6 1.6H7.5A1.6 1.6 0 0 1 5.9 19V5.4c0-.9.7-1.6 1.6-1.6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.2 3.9V8.4h4.6M8.4 12.6h7.2M8.4 16h4.6" />
      </svg>
    ),
  },
] as const;

export function Estimate({
  title = "Start With the Room You Care About.",
  text = "Send a few details and we'll follow up. If you'd rather talk now, give us a call.",
}: {
  title?: string;
  text?: string;
} = {}) {
  return (
    <section id="estimate" className="relative overflow-hidden bg-[#f6f1e7] text-ink">
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <Image
          src="/gallery/estimate-counter.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[left_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_14%,#f6f1e7_36%)]" />
      </div>

      <div className="relative grid items-center gap-8 px-6 pb-12 sm:px-8 sm:pb-14 lg:grid-cols-[minmax(0,22rem)_30rem] lg:justify-start lg:gap-x-20 lg:py-12 lg:pl-[22%] lg:pr-6 xl:grid-cols-[minmax(0,26rem)_34rem] xl:gap-x-36 xl:pl-[24%] xl:pr-6">
        <div className="relative z-10 min-w-0">
          <div className="relative -mx-6 flex h-64 items-center px-6 sm:-mx-8 sm:h-72 sm:px-8 lg:mx-0 lg:block lg:h-auto lg:px-0">
            <div className="absolute inset-0 lg:hidden" aria-hidden="true">
              <Image
                src="/gallery/estimate-counter.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-[20%_24%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_64%,#f6f1e7_100%)]" />
            </div>
            <div className="relative pl-20 sm:pl-24 lg:pl-0">
              <p className="kicker">Estimate</p>
              <h2
                className="mt-4 max-w-[11em] text-[clamp(2.4rem,2.8vw,3.15rem)] font-normal leading-[1.12] text-ink"
                style={{ fontFamily: 'Palatino, "Palatino Linotype", "Iowan Old Style", Georgia, "Times New Roman", serif' }}
              >
                {title}
              </h2>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-[1.02rem] leading-relaxed text-stone lg:mt-5">
            {text}
          </p>
          <ul className="mt-6 space-y-4">
            {contacts.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/75 text-gold">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.68rem] font-medium uppercase tracking-[0.2em] text-gold">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="mt-0.5 block text-[1.02rem] text-ink hover:text-gold-deep">
                      {item.value}
                    </a>
                  ) : (
                    <span className="mt-0.5 block text-[1.02rem] text-ink">{item.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <LeadForm intent="contact" appearance="card" />
      </div>
    </section>
  );
}
