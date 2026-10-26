"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const STORAGE_KEY = "valora-call-dismissed";

export function CallNow() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;

    let shown = false;
    const show = () => {
      if (shown || window.sessionStorage.getItem(STORAGE_KEY)) return;
      shown = true;
      setOpen(true);
    };

    const timer = window.setTimeout(show, 45000);
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0 && window.scrollY / height > 0.8) show();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function dismiss() {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-gold/40 bg-ivory md:hidden">
        <a
          href={`tel:${site.phoneTel}`}
          className="px-3 py-3.5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black bg-gold"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="px-3 py-3.5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Get an Estimate
        </Link>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6" role="presentation">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-now-title"
            className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-[660px] overflow-y-auto bg-white text-ink shadow-[0_28px_80px_rgba(0,0,0,0.38)] sm:max-h-[calc(100dvh-3rem)]"
          >
            <div
              className="pointer-events-none relative h-44 sm:h-52 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-1/2"
              aria-hidden="true"
            >
              {/* Original file, not the image optimizer. The panel crops a slice of the photo, so a resized copy turns soft. */}
              <Image
                src="/gallery/hero-kitchen.jpg"
                alt=""
                fill
                priority
                quality={75}
                className="object-cover object-[72%_42%] md:object-[66%_42%]"
              />
              <div
                className="absolute inset-0 md:hidden"
                style={{ background: "linear-gradient(180deg, transparent 42%, #fff 100%)" }}
              />
              <div
                className="absolute inset-0 hidden md:block"
                style={{
                  background:
                    "linear-gradient(90deg, #fff 0%, rgb(255 255 255 / 0.42) 36%, transparent 70%)",
                }}
              />
            </div>

            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center text-white transition hover:text-gold-light md:right-4 md:top-4"
            >
              <CloseIcon />
            </button>

            <div className="relative z-10 w-full px-6 pb-8 pt-2 sm:px-8 md:w-[22.5rem] md:px-8 md:py-9">
              <Image
                src="/brand/logo.png"
                alt="Valora Construction & Remodeling"
                width={1024}
                height={682}
                className="mx-auto h-32 w-auto sm:h-36"
              />
              <p className="mt-1 flex items-center justify-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-gold">
                <span className="h-px w-8 bg-gold/80 sm:w-10" />
                {site.hours} personal service
                <span className="h-px w-8 bg-gold/80 sm:w-10" />
              </p>
              <h2
                id="call-now-title"
                className="mt-6 font-[family-name:var(--font-cormorant),_'Times_New_Roman',_serif] text-[2.55rem] font-medium leading-[1.02] text-ink sm:text-[3.15rem]"
              >
                Let’s Bring
                <br />
                Your Vision
                <br />
                <span className="italic">to Life.</span>
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-stone">
                Tell us about the kitchen, bath, or home you want to remodel. A member of our team will get back to you during our hours.
              </p>
              <div className="mt-6 inline-grid max-w-full gap-3">
                <a href={`tel:${site.phoneTel}`} className="btn-gold">
                  <PhoneIcon />
                  Call {site.phoneDisplay}
                  <ArrowIcon />
                </a>
                <Link href="/contact" onClick={dismiss} className="btn-line bg-white">
                  Request a free estimate
                  <ArrowIcon />
                </Link>
              </div>
              <p className="mt-7 flex items-center justify-center gap-4 text-[0.62rem] uppercase tracking-[0.26em] text-ink/45">
                <span className="h-px w-10 bg-gold/70" />
                License {site.license}
                <span className="h-px w-10 bg-gold/70" />
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M8.2 3.6h2.1c.5 0 .9.3 1 .8l.6 2.4a1 1 0 0 1-.4 1.1l-1.5.9a10.6 10.6 0 0 0 5.2 5.2l.9-1.5a1 1 0 0 1 1.1-.4l2.4.6c.5.1.8.5.8 1v2.1c0 .7-.5 1.3-1.2 1.4C11.4 19.1 4.9 12.6 6.8 5.8c.1-.7.7-1.2 1.4-1.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
