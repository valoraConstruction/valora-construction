"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content";
import { ButtonPair } from "@/components/ui";
import { useHorizontalSwipe } from "@/lib/useHorizontalSwipe";

const quotes: { text: string; name: string; role: string; image?: string }[] = [
  {
    text: "Valora Construction completely transformed our outdated kitchen. The new cabinets, countertops, and layout look incredible. The team was professional, kept us updated throughout the project, and paid attention to every detail. We couldn't be happier with the results!",
    name: "Jessica M.",
    role: "Tampa, FL",
  },
  {
    text: "We hired Valora Construction to remodel our master bathroom, and the difference is night and day. From the beautiful walk-in shower to the new tile and vanity, everything turned out exactly how we envisioned. Great communication, quality workmanship, and a team that genuinely cares.",
    name: "Michael R.",
    role: "Brandon, FL",
  },
  {
    text: "We worked with Valora Construction on a major home renovation, including new flooring throughout the house, kitchen updates, and bathroom improvements. They made the entire process feel manageable, and the finished home looks amazing. Highly recommend them to anyone planning a renovation!",
    name: "Amanda T.",
    role: "Wesley Chapel, FL",
  },
];

const circles = [
  {
    kicker: "More than",
    value: "1K+",
    label: "Happy clients",
    className: "left-0 top-0 z-0 h-40 w-40 bg-white text-ink shadow-[0_10px_28px_rgba(36,31,26,0.08)] sm:h-52 sm:w-52",
  },
  {
    value: "15+",
    label: "Years of experience",
    className: "left-[6.4rem] top-[4.6rem] z-10 h-36 w-36 bg-gold text-ink sm:left-[8.6rem] sm:top-[6.2rem] sm:h-48 sm:w-48",
  },
  {
    value: "Tampa, FL",
    label: "and surrounding areas",
    valueClass: "text-[1.35rem] leading-none sm:text-[1.7rem]",
    className: "left-3 top-[10.2rem] z-20 h-40 w-40 bg-white text-ink sm:left-5 sm:top-[13.4rem] sm:h-52 sm:w-52",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const quote = quotes.length > 0 ? quotes[index % quotes.length] : null;

  function step(direction: number) {
    if (quotes.length < 2) return;
    setIndex((current) => (current + direction + quotes.length) % quotes.length);
  }

  const swipe = useHorizontalSwipe({
    onEnd(direction) {
      step(direction);
    },
  });

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#f6f1e7] text-ink" aria-labelledby="testimonials-heading">
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20 lg:py-24">
        <div className="text-center">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.34em] text-gold-deep">Testimonials</p>
          <h2 id="testimonials-heading" className="mt-3 whitespace-nowrap font-display text-[clamp(1.15rem,4.4vw,3.75rem)] leading-none">
            What Our Clients Say
          </h2>
          <p className="mt-4 font-display text-[clamp(1.05rem,2vw,1.75rem)] leading-tight">5 stars review on Google</p>
          {quotes.length > 1 ? (
            <div className="mt-6 flex justify-center gap-1">
              <button
                type="button"
                className="grid h-9 w-9 place-items-center border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-ivory"
                aria-label="Previous testimonial"
                onClick={() => step(-1)}
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M14.5 6 9 12l5.5 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <button
                type="button"
                className="grid h-9 w-9 place-items-center border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-ivory"
                aria-label="Next testimonial"
                onClick={() => step(1)}
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M9.5 6 15 12l-5.5 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          ) : null}
        </div>

        <div
          className="mx-auto mt-12 flex w-full max-w-5xl touch-pan-y flex-col-reverse items-center justify-center gap-12 lg:mt-16 lg:flex-row lg:items-center lg:justify-center lg:gap-16"
          {...swipe.handlers}
        >
          <div className="relative h-[20.5rem] w-[17.5rem] shrink-0 sm:h-[26.5rem] sm:w-[22.5rem]">
            {circles.map((circle) => (
              <p key={circle.label} className={`absolute grid place-items-center rounded-full px-5 text-center shadow-[0_16px_40px_rgba(0,0,0,0.28)] ${circle.className}`}>
                <span>
                  {circle.kicker ? (
                    <span className="mb-1 block text-[0.62rem] font-medium uppercase tracking-[0.16em] sm:text-[0.68rem]">{circle.kicker}</span>
                  ) : null}
                  <span className={`block font-display text-4xl leading-none sm:text-5xl ${circle.valueClass ?? ""}`}>{circle.value}</span>
                  <span className="mt-2 block text-[0.68rem] leading-tight sm:text-xs">{circle.label}</span>
                </span>
              </p>
            ))}
          </div>

          {quote ? (
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-x-4 -top-4 bottom-4 rounded-sm bg-sand/80" aria-hidden="true" />
            <div className="absolute inset-x-2 -top-2 bottom-2 rounded-sm bg-white/80" aria-hidden="true" />
            <blockquote className="relative border border-sand bg-white px-6 py-7 shadow-[0_16px_40px_rgba(36,31,26,0.06)] sm:px-8 sm:py-9" aria-live="polite">
              <div className="flex gap-1 text-gold" aria-label="5 stars">
                {Array.from({ length: 5 }, (_, star) => (
                  <svg key={star} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d="m10 1.6 2.1 5.3 5.7.4-4.4 3.6 1.4 5.5L10 13.6 5.2 16.4 6.6 10.9 2.2 7.3l5.7-.4L10 1.6Z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 max-w-[28rem] text-[1.02rem] leading-[1.65] text-ink/85 sm:text-lg">“{quote.text}”</p>
              <footer className="mt-8 flex items-center gap-4">
                {quote.image ? (
                  <Image
                    src={quote.image}
                    alt={quote.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover object-top"
                  />
                ) : null}
                <div>
                  <p className="font-medium text-ink">{quote.name}</p>
                  <p className="mt-0.5 text-sm text-stone">{quote.role}</p>
                </div>
              </footer>
              <svg viewBox="0 0 80 64" className="pointer-events-none absolute bottom-6 right-5 h-16 w-20 text-gold/35 sm:bottom-8 sm:right-7 sm:h-20 sm:w-24" aria-hidden="true">
                <path
                  d="M18 8c-8 6-14 16-14 28 0 10 6 16 14 16 6 0 10-4 10-10 0-5-3-8-8-8-1 0-2 0-3 .2C18 26 24 18 32 12L18 8Zm40 0c-8 6-14 16-14 28 0 10 6 16 14 16 6 0 10-4 10-10 0-5-3-8-8-8-1 0-2 0-3 .2C58 26 64 18 72 12L58 8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </blockquote>
          </div>
          ) : null}
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <ButtonPair row>
            <Link href="/contact" className="btn-gold">
              Get an Estimate
            </Link>
            <a href={site.maps} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Read Google reviews
            </a>
          </ButtonPair>
        </div>
      </div>
    </section>
  );
}
