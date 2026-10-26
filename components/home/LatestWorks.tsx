"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type TransitionEvent } from "react";
import Image from "next/image";
import { PhotoLightbox } from "@/components/PhotoLightbox";
import type { Project } from "@/lib/content";
import { useHorizontalSwipe } from "@/lib/useHorizontalSwipe";

const accent = "#c6a15b";

type Filter = "All" | Project["category"];

type Metrics = { slide: number; gap: number; view: number };

export function LatestWorks({ items }: { items: Project[] }) {
  const filters: Filter[] = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState(items.length);
  const [offset, setOffset] = useState(0);
  const [ready, setReady] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const metrics = useRef<Metrics>({ slide: 0, gap: 0, view: 0 });
  const indexRef = useRef(index);
  const dragging = useRef(false);
  const paused = useRef(false);
  const lastMove = useRef(0);
  const [lightbox, setLightbox] = useState<Project | null>(null);
  const lightboxRef = useRef<Project | null>(null);
  lightboxRef.current = lightbox;

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );
  const count = visible.length;
  const looped = useMemo(() => (count < 2 ? visible : [...visible, ...visible, ...visible]), [visible, count]);
  const active = count === 0 ? 0 : ((index % count) + count) % count;
  indexRef.current = index;

  const readMetrics = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const second = track?.children[1] as HTMLElement | undefined;
    if (!viewport || !first) return;
    const slide = first.offsetWidth;
    const gap = second ? second.offsetLeft - first.offsetLeft - slide : 0;
    metrics.current = { slide, gap, view: viewport.clientWidth };
  }, []);

  const offsetFor = useCallback((slideIndex: number) => {
    const { slide, gap, view } = metrics.current;
    if (!slide || !view) return 0;
    return view / 2 - (slideIndex * (slide + gap) + slide / 2);
  }, []);

  const withoutMotion = useCallback((update: () => void) => {
    const track = trackRef.current;
    if (track) track.style.transition = "none";
    update();
    window.setTimeout(() => {
      if (track) track.style.transition = "";
    }, 50);
  }, []);

  useLayoutEffect(() => {
    readMetrics();
    const track = trackRef.current;
    if (track) track.style.transition = "none";
    setOffset(offsetFor(indexRef.current));
    setReady(true);
    const id = window.setTimeout(() => {
      if (track) track.style.transition = "";
    }, 60);
    return () => window.clearTimeout(id);
  }, [readMetrics, offsetFor, count, filter]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let last = metrics.current.view;
    const observer = new ResizeObserver(() => {
      readMetrics();
      if (Math.abs(metrics.current.view - last) < 2) return;
      last = metrics.current.view;
      withoutMotion(() => setOffset(offsetFor(indexRef.current)));
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [readMetrics, offsetFor, withoutMotion]);

  useEffect(() => {
    if (count < 2) return;
    if (index >= count && index < count * 2) return;
    const timer = window.setTimeout(() => {
      const normalized = (index % count) + count;
      withoutMotion(() => {
        setIndex(normalized);
        setOffset(offsetFor(normalized));
      });
    }, 800);
    return () => window.clearTimeout(timer);
  }, [index, count, offsetFor, withoutMotion]);

  function go(direction: -1 | 1) {
    if (count < 2) return;
    lastMove.current = Date.now();
    const track = trackRef.current;
    if (track) track.style.transition = "";
    const next = indexRef.current + direction;
    setIndex(next);
    setOffset(offsetFor(next));
  }

  function showInLightbox(project: Project) {
    setLightbox(project);
    const next = visible.findIndex((item) => item.image === project.image);
    if (next < 0 || count < 2) return;
    const target = count + next;
    if (target === indexRef.current) return;
    lastMove.current = Date.now();
    withoutMotion(() => {
      setIndex(target);
      setOffset(offsetFor(target));
    });
  }

  const goRef = useRef(go);
  goRef.current = go;

  useEffect(() => {
    if (!ready || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const tick = () => {
      timer = window.setTimeout(() => {
        const idle = Date.now() - lastMove.current > 2500;
        if (!paused.current && !dragging.current && !lightboxRef.current && !document.hidden && idle) goRef.current(1);
        tick();
      }, 4200);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, [ready, count, filter]);

  function selectFilter(next: Filter) {
    const nextCount = next === "All" ? items.length : items.filter((item) => item.category === next).length;
    withoutMotion(() => {
      setFilter(next);
      setIndex(nextCount < 2 ? 0 : nextCount);
    });
  }

  function settleLoop(event: TransitionEvent<HTMLUListElement>) {
    if (event.target !== trackRef.current || event.propertyName !== "transform" || count < 2) return;
    const current = indexRef.current;
    if (current >= count && current < count * 2) return;
    const normalized = (current % count) + count;
    withoutMotion(() => {
      setIndex(normalized);
      setOffset(offsetFor(normalized));
    });
  }

  const swipe = useHorizontalSwipe({
    onStart() {
      dragging.current = true;
      lastMove.current = Date.now();
    },
    onMove(dx) {
      const track = trackRef.current;
      if (!track || count < 2) return;
      track.style.transition = "none";
      track.style.transform = `translate3d(${offsetFor(indexRef.current) + dx}px, 0, 0)`;
    },
    onEnd(direction) {
      const track = trackRef.current;
      const next = indexRef.current + direction;
      if (track) {
        track.style.transition = "";
        void track.offsetWidth;
        track.style.transform = `translate3d(${offsetFor(next)}px, 0, 0)`;
      }
      go(direction);
    },
    onCancel() {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = "";
      void track.offsetWidth;
      track.style.transform = `translate3d(${offsetFor(indexRef.current)}px, 0, 0)`;
    },
    onFinish() {
      dragging.current = false;
      lastMove.current = Date.now();
    },
  });

  return (
    <section className="overflow-hidden bg-white pb-0 pt-16 text-ink sm:pt-20 md:pt-24" aria-labelledby="latest-works-heading">
      <div className="px-6 text-center">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.34em]" style={{ color: accent }}>
          Projects
        </p>
        <h2 id="latest-works-heading" className="mt-4 font-display text-[2.7rem] font-medium leading-none text-ink sm:text-6xl">
          Latest Works
        </h2>
      </div>

      <div className="mt-10 flex justify-center px-6 sm:mt-12" role="group" aria-label="Filter projects">
        <div className="relative flex items-end gap-7 sm:gap-11">
          <span className="pointer-events-none absolute inset-x-[-1.4rem] bottom-0 h-px bg-ink/15" />
          {filters.map((item) => {
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => selectFilter(item)}
                className={`relative z-10 pb-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] sm:text-[0.72rem] ${
                  selected ? "" : "text-ink/60 hover:text-ink"
                }`}
                style={selected ? { color: accent } : undefined}
              >
                {item}
                {selected ? (
                  <span className="absolute -bottom-px -left-3 right-0 h-px" style={{ background: accent }} />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="relative mt-12 w-full min-w-0 sm:mt-14"
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
        }}
        onFocus={() => {
          paused.current = true;
        }}
        onBlur={() => {
          paused.current = false;
        }}
      >
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => go(-1)}
          disabled={count < 2}
          className="absolute left-0 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center bg-white text-ink shadow-sm transition-colors hover:bg-ivory disabled:opacity-40 sm:size-10"
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => go(1)}
          disabled={count < 2}
          className="absolute right-0 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center bg-white text-ink shadow-sm transition-colors hover:bg-ivory disabled:opacity-40 sm:size-10"
        >
          <Chevron direction="right" />
        </button>

        <div ref={viewportRef} className="w-full touch-pan-y overflow-hidden" {...swipe.handlers}>
          <ul
            ref={trackRef}
            onTransitionEnd={settleLoop}
            className={`relative flex w-max items-stretch gap-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-4 lg:gap-5 ${ready ? "" : "opacity-0"}`}
            style={{ transform: `translate3d(${offset}px, 0, 0)` }}
          >
            {looped.map((project, slideIndex) => {
              const current = slideIndex === index;
              return (
                <li key={`${project.title}-${slideIndex}`} className="w-[62vw] max-w-[18rem] shrink-0 sm:w-[34vw] sm:max-w-[20rem] lg:w-[22vw] lg:max-w-[22rem]" aria-hidden={current ? undefined : true}>
                  <article className="relative aspect-[4/5]">
                    <button
                      type="button"
                      className={`absolute inset-0 touch-pan-y ${current ? "cursor-zoom-in" : ""}`}
                      aria-label={current ? `Open ${project.title}` : `Show ${project.title}`}
                      tabIndex={current ? 0 : -1}
                      onClick={() => {
                        if (!current) {
                          lastMove.current = Date.now();
                          const track = trackRef.current;
                          if (track) track.style.transition = "";
                          setIndex(slideIndex);
                          setOffset(offsetFor(slideIndex));
                          return;
                        }
                        setLightbox(project);
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={current ? project.alt : ""}
                        fill
                        quality={75}
                        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 18rem"
                        className="pointer-events-none object-cover"
                        style={{ objectPosition: project.focus }}
                        draggable={false}
                      />
                    </button>
                    <div className="pointer-events-none absolute bottom-0 right-0 z-10 bg-white px-4 py-3 sm:px-5 sm:py-4">
                      <p className="flex items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.2em] sm:text-[0.64rem]" style={{ color: accent }}>
                        <span className="h-px w-3.5 bg-current" />
                        {project.category}
                      </p>
                      <h3 className="mt-1.5 max-w-[11rem] font-sans text-[1.2rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#1c1c1c] sm:text-[1.35rem]">
                        {project.title}
                      </h3>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="sr-only">{visible[active] ? `${visible[active].title}, ${visible[active].category}` : ""}</p>
      </div>
      <PhotoLightbox project={lightbox} items={visible} onClose={() => setLightbox(null)} onChange={showInLightbox} />
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M8.75 2.5 4.25 7l4.5 4.5" : "M5.25 2.5 9.75 7l-4.5 4.5"}
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
