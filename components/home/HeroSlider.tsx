"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";
import { ButtonPair } from "@/components/ui";
import { useHorizontalSwipe } from "@/lib/useHorizontalSwipe";

const slides = [
  {
    src: "/gallery/hero-kitchen.jpg",
    alt: "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
    position: "object-center",
  },
  {
    src: "/gallery/hero-bath.jpg",
    alt: "Oak double vanity, a glass shower in marble tile, and black-framed mirrors",
    position: "object-left md:object-center",
  },
  {
    src: "/gallery/hero-living-oak.webp",
    alt: "Wide oak floor in a bright living room with tall windows and a fireplace",
    position: "object-[82%_center]",
  },
] as const;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const indexRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  indexRef.current = index;

  const go = useCallback((next: number) => {
    setIndex((next + count) % count);
  }, [count]);

  function at(slideIndex: number, dx = 0) {
    const base = `-${(slideIndex * 100) / count}%`;
    return dx ? `translate3d(calc(${base} + ${dx}px), 0, 0)` : `translate3d(${base}, 0, 0)`;
  }

  const swipe = useHorizontalSwipe({
    onStart() {
      dragging.current = true;
    },
    onMove(dx) {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = "none";
      track.style.transform = at(indexRef.current, dx);
    },
    onEnd(direction) {
      const track = trackRef.current;
      const next = indexRef.current + direction;
      if (track) {
        track.style.transition = "";
        void track.offsetWidth;
        track.style.transform = at((next + count) % count);
      }
      go(next);
    },
    onCancel() {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = "";
      void track.offsetWidth;
      track.style.transform = at(indexRef.current);
    },
    onFinish() {
      dragging.current = false;
    },
  });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (dragging.current ? current : (current + 1) % count));
    }, 7000);
    return () => window.clearInterval(timer);
  }, [count, index]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = event.target instanceof HTMLElement ? event.target.tagName : "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (event.key === "ArrowLeft") go(index - 1);
      if (event.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  return (
    <section
      className="relative min-h-[100svh] touch-pan-y overflow-hidden bg-black text-cream"
      aria-roledescription="carousel"
      aria-label="Valora project photos"
      {...swipe.handlers}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{
            width: `${count * 100}%`,
            transform: `translate3d(-${(index * 100) / count}%, 0, 0)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.src}
              className="relative h-full overflow-hidden"
              style={{ width: `${100 / count}%` }}
              aria-hidden={slideIndex !== index}
            >
              <Image
                src={slide.src}
                alt={slideIndex === index ? slide.alt : ""}
                fill
                priority={slideIndex === 0}
                loading={slideIndex === 0 ? "eager" : "lazy"}
                quality={80}
                sizes="100vw"
                draggable={false}
                className={`hero-still touch-pan-y object-cover ${slide.position}`}
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
      </div>

      <div className="absolute bottom-8 left-6 z-20 flex items-center gap-2 sm:bottom-10 sm:left-10 lg:left-[11vw]">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => go(index - 1)}
          className="grid h-11 w-11 place-items-center border border-cream/80 bg-black/40 text-cream backdrop-blur-sm transition hover:bg-black/60"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => go(index + 1)}
          className="grid h-11 w-11 place-items-center border border-cream/80 bg-black/40 text-cream backdrop-blur-sm transition hover:bg-black/60"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <div className="hero-copy pointer-events-none relative flex min-h-[100svh] w-full flex-col justify-end px-6 pb-28 pt-28 sm:px-10 lg:px-[11vw] wide:justify-center wide:pb-24 wide:pt-28">
        <p className="kicker">Build</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          Kitchen And Bath Remodeling From Valora
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
          Layouts, cabinetry, stone, tile, and the trades behind the walls. Designed and built for homes across Tampa Bay.
        </p>
        <ButtonPair row className="pointer-events-auto mt-8">
          <Link href="/contact" className="btn-gold">
            Get an Estimate
          </Link>
          <a href={`tel:${site.phoneTel}`} className="btn-ghost-light">
            Call {site.phoneDisplay}
          </a>
        </ButtonPair>
      </div>
    </section>
  );
}
