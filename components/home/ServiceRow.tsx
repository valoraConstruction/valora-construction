"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { ButtonPair } from "@/components/ui";
import { useHorizontalSwipe } from "@/lib/useHorizontalSwipe";

export type ServiceCard = {
  n: string;
  title: string;
  text: string;
  href: string;
  image: string;
  alt: string;
};

export function ServiceRow({ title, lede, items }: { title: ReactNode; lede?: ReactNode; items: ServiceCard[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const origin = useRef(0);

  function cardDistance() {
    const node = scroller.current;
    if (!node) return 360;
    const card = node.querySelector("article");
    const gap = Number.parseFloat(getComputedStyle(node).columnGap || "0") || 0;
    return card ? card.getBoundingClientRect().width + gap : 360;
  }

  function scrollBehavior(): ScrollBehavior {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  }

  function scrollByCard(direction: number) {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: direction * cardDistance(), behavior: scrollBehavior() });
  }

  const swipe = useHorizontalSwipe({
    onStart() {
      origin.current = scroller.current?.scrollLeft ?? 0;
    },
    onMove(dx) {
      const node = scroller.current;
      if (!node) return;
      node.scrollLeft = origin.current - dx;
    },
    onEnd(direction) {
      const node = scroller.current;
      if (!node) return;
      const step = cardDistance();
      const moved = Math.abs(node.scrollLeft - origin.current);
      const cards = Math.max(1, Math.round(moved / step));
      const max = node.scrollWidth - node.clientWidth;
      const left = Math.min(max, Math.max(0, origin.current + direction * cards * step));
      node.scrollTo({ left, behavior: scrollBehavior() });
    },
    onCancel() {
      scroller.current?.scrollTo({ left: origin.current, behavior: scrollBehavior() });
    },
  });

  return (
    <div className="px-6 sm:px-10 lg:px-[11vw]">
      <div className="flex items-start justify-between gap-8 lg:items-center">
        <h2 className="min-w-0 max-w-[18ch] font-display text-[clamp(2.15rem,4.2vw,4rem)] font-medium leading-[1.05] text-ink md:max-w-none">
          {title}
        </h2>
        <div className="mt-1 flex shrink-0 flex-col gap-1">
          <button
            type="button"
            className="grid h-9 w-9 place-items-center border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-ivory"
            aria-label="Previous services"
            onClick={() => scrollByCard(-1)}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M14.5 6 9 12l5.5 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-ivory"
            aria-label="Next services"
            onClick={() => scrollByCard(1)}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M9.5 6 15 12l-5.5 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {lede ? <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-stone">{lede}</p> : null}

      <div
        ref={scroller}
        className="mt-10 flex touch-pan-y items-start gap-4 overflow-x-auto overscroll-x-contain pb-2 sm:mt-12 sm:gap-6 lg:mt-14 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        {...swipe.handlers}
      >
        {items.map((item, index) => (
          <article
            key={item.n}
            className={`w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)] wide:w-[calc((100%-4.5rem)/4)] ${index % 2 === 1 ? "mt-8 sm:mt-12 lg:mt-16" : ""}`}
          >
            <p className="text-[1.05rem] font-medium leading-none text-stone sm:text-[1.2rem]">{item.n}</p>
            <div className="relative mt-3">
              <div className="relative aspect-[4/3] bg-sand">
                <Image src={item.image} alt={item.alt} fill quality={75} draggable={false} sizes="(min-width: 1400px) 22vw, (min-width: 768px) 30vw, 82vw" className="pointer-events-none object-cover" />
              </div>
              <div className="relative z-10 mx-3.5 -mt-5 flex min-h-[13.5rem] flex-col bg-white px-5 pb-5 pt-5 shadow-[0_12px_30px_rgba(36,31,26,0.08)] sm:mx-4 sm:-mt-6 sm:min-h-[14.5rem] sm:px-6 sm:pb-6 sm:pt-6">
                <h3 className="text-sm font-medium uppercase leading-snug tracking-[0.06em] text-[#111]">{item.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-[1.5] text-[#6a6a6a]">{item.text}</p>
                <div className="mt-auto pt-5">
                  <Link href={item.href} className="btn-line px-4 py-2.5 text-[0.62rem] tracking-[0.16em]">
                    Learn more<span className="sr-only"> about {item.title}</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ButtonPair row className="mt-6 sm:mt-8">
        <Link href="/contact" className="btn-gold">
          Get an Estimate
        </Link>
        <Link href="/services" className="btn-ghost">
          All services
        </Link>
      </ButtonPair>
    </div>
  );
}
