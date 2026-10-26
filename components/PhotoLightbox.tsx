"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/lib/content";
import { useHorizontalSwipe } from "@/lib/useHorizontalSwipe";

export function PhotoLightbox({
  project,
  items = [],
  onClose,
  onChange,
}: {
  project: Project | null;
  items?: Project[];
  onClose: () => void;
  onChange?: (project: Project) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const navigateRef = useRef<(direction: -1 | 1) => void>(() => {});
  const swipe = useHorizontalSwipe({
    onEnd(direction) {
      navigateRef.current(direction);
    },
  });
  onCloseRef.current = onClose;
  const [mounted, setMounted] = useState(false);
  const open = project !== null;
  const index = project ? items.findIndex((item) => item.image === project.image) : -1;
  const canNavigate = Boolean(onChange) && items.length > 1 && index >= 0;

  navigateRef.current = (direction) => {
    if (!canNavigate || !onChange || !project) return;
    const next = (index + direction + items.length) % items.length;
    const upcoming = items[next];
    if (!upcoming || upcoming.image === project.image) return;
    onChange(upcoming);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!canNavigate || index < 0) return;
    const neighbors = [(index + 1) % items.length, (index - 1 + items.length) % items.length];
    for (const neighbor of neighbors) {
      const image = new window.Image();
      image.src = items[neighbor].image;
    }
  }, [canNavigate, index, items]);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        navigateRef.current(event.key === "ArrowLeft" ? -1 : 1);
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = [...dialog.querySelectorAll<HTMLElement>("button, a[href]")].filter(
        (node) => !node.hasAttribute("disabled"),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus?.();
    };
  }, [open]);

  if (!project || !mounted) return null;

  const position = index >= 0 ? index + 1 : 1;
  const total = index >= 0 ? items.length : 1;

  return createPortal(
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[80] flex touch-pan-y items-center justify-center bg-black/88 p-4 sm:p-8"
      role="presentation"
      onClick={() => {
        if (Date.now() < swipe.swipedUntil.current) return;
        onClose();
      }}
      {...swipe.handlers}
    >
      {canNavigate ? (
        <button
          type="button"
          aria-label="Previous photo"
          onClick={(event) => {
            event.stopPropagation();
            navigateRef.current(-1);
          }}
          className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-cream/80 bg-black/40 text-cream backdrop-blur-sm transition hover:bg-black/60 sm:left-6"
        >
          <Chevron direction="left" />
        </button>
      ) : null}
      {canNavigate ? (
        <button
          type="button"
          aria-label="Next photo"
          onClick={(event) => {
            event.stopPropagation();
            navigateRef.current(1);
          }}
          className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-cream/80 bg-black/40 text-cream backdrop-blur-sm transition hover:bg-black/60 sm:right-6"
        >
          <Chevron direction="right" />
        </button>
      ) : null}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-lightbox-title"
        className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex w-fit max-w-full flex-col items-end">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="mb-2 px-0.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-white/80 hover:text-white"
          >
            Close
          </button>
          {/* Original WebP, not the image optimizer, so the popup stays at the file's full quality. */}
          <img
            src={project.image}
            alt={project.alt}
            className="block max-h-[min(82vh,calc(100svh-12rem))] w-auto max-w-full touch-pan-y object-contain"
            draggable={false}
          />
        </div>
        <p id="photo-lightbox-title" className="mt-4 text-center text-white">
          <span className="block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gold">{project.category}</span>
          <span className="mt-1 block font-sans text-xl">{project.title}</span>
          {canNavigate ? (
            <span className="mt-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/55">
              {position} of {total}
            </span>
          ) : null}
        </p>
        <p className="sr-only" aria-live="polite">
          {project.title}, {project.category}
          {canNavigate ? `, ${position} of ${total}` : ""}
        </p>
      </div>
    </div>,
    document.body,
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d={direction === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
