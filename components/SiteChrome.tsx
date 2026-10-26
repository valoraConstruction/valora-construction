"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function visibleChildren(node: HTMLElement) {
  return [...node.children].filter((child): child is HTMLElement => {
    if (!(child instanceof HTMLElement)) return false;
    const style = getComputedStyle(child);
    if (style.display === "none" || style.visibility === "hidden") return false;
    if (style.position === "absolute" || style.position === "fixed") return false;
    return child.offsetHeight > 0 || child.offsetWidth > 0;
  });
}

function scrollsSideways(node: HTMLElement) {
  const style = getComputedStyle(node);
  return style.overflowX === "auto" || style.overflowX === "scroll";
}

function canOpen(node: HTMLElement) {
  if (node.closest("form") || node.tagName === "FORM") return false;
  if (node.tagName === "A" || node.tagName === "BUTTON" || node.tagName === "LI" || node.tagName === "ARTICLE") return false;
  if (scrollsSideways(node)) return false;
  return true;
}

function shouldSplit(node: HTMLElement) {
  if (!canOpen(node) || node.closest("footer")) return false;
  const kids = visibleChildren(node);
  if (kids.length < 2) return false;
  if (node.tagName === "UL" || node.tagName === "OL") return kids[0].getBoundingClientRect().height >= 48;
  const cls = typeof node.className === "string" ? node.className : "";
  if (cls.includes("grid") || cls.includes("flex-wrap")) return true;
  return cls.includes("flex-col") && kids.length >= 3 && kids.every((kid) => kid.tagName === kids[0].tagName);
}

function revealBlocks(root: HTMLElement): HTMLElement[] {
  if (scrollsSideways(root)) return [root];
  const kids = visibleChildren(root);
  if (kids.length === 0) return [root];
  if (root.tagName === "FOOTER") {
    return kids.flatMap((kid) => {
      const inner = visibleChildren(kid);
      const cls = typeof kid.className === "string" ? kid.className : "";
      if (inner.length > 1 && cls.includes("grid")) return inner;
      return [kid];
    });
  }
  if (kids.length === 1 && canOpen(kids[0])) return revealBlocks(kids[0]);
  return kids.flatMap((kid) => {
    if (scrollsSideways(kid)) return [kid];
    if (shouldSplit(kid) || (canOpen(kid) && visibleChildren(kid).length > 1)) return revealBlocks(kid);
    return [kid];
  });
}

export function SiteChrome() {
  const pathname = usePathname();
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;
    let cursorFrame = 0;
    let revealFrame = 0;
    let started = false;

    const risen: HTMLElement[] = [];
    let heroCopy: HTMLElement | null = null;
    let heroPhotos: HTMLElement[] = [];
    let revealVisible: (() => void) | null = null;

    const onMove = (event: PointerEvent) => {
      if (!root.classList.contains("lux-cursor")) {
        root.classList.add("lux-cursor");
        rx = event.clientX;
        ry = event.clientY;
      }
      x = event.clientX;
      y = event.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const target = event.target instanceof Element ? event.target : null;
      const field = Boolean(target?.closest("input, textarea, select, [contenteditable='true']"));
      const hot = !field && Boolean(target?.closest("a, button, summary, [role='button'], label"));
      root.classList.toggle("lux-hot", hot);
      root.classList.toggle("lux-field", field);
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      cursorFrame = window.requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(1, window.scrollY / height) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
      if (reduce || !started) return;
      revealVisible?.();
      const scrolled = window.scrollY;
      if (heroCopy) {
        const fade = Math.max(0, 1 - scrolled / (window.innerHeight * 0.72));
        heroCopy.style.opacity = String(fade);
        heroCopy.style.transform = `translate3d(0, ${scrolled * 0.18}px, 0)`;
      }
      heroPhotos.forEach((photo) => {
        const section = photo.closest("section");
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const shift = Math.min(42, Math.max(0, -rect.top * 0.12));
        photo.style.transform = `translate3d(0, ${shift}px, 0) scale(1.06)`;
      });
    };

    const start = () => {
      started = true;
      heroCopy = document.querySelector<HTMLElement>(".hero-copy");
      heroPhotos = [...document.querySelectorAll<HTMLElement>(".page-hero .editorial-photo")];

      if (!reduce) {
        const roots = [
          ...document.querySelectorAll<HTMLElement>("main section, main article"),
          ...document.querySelectorAll<HTMLElement>("body > footer, #main ~ footer, footer"),
        ];
        const seen = new Set<HTMLElement>();
        roots.forEach((section) => {
          if (seen.has(section)) return;
          seen.add(section);
          if (section.matches("section.page-hero") || section.querySelector(".hero-copy")) return;
          if (section.tagName === "ARTICLE" && section.querySelector("section")) return;
          revealBlocks(section).forEach((node) => {
            if (seen.has(node) || node.classList.contains("scroll-rise")) return;
            const sideways = node.closest(".overflow-x-auto");
            if (sideways && sideways !== node) return;
            seen.add(node);
            risen.push(node);
          });
        });

        const groups = new Map<HTMLElement, HTMLElement[]>();
        risen.forEach((node) => {
          const parent = node.parentElement;
          if (!parent) return;
          const list = groups.get(parent) ?? [];
          list.push(node);
          groups.set(parent, list);
        });
        groups.forEach((list) => {
          list.forEach((node, index) => {
            node.classList.add("scroll-rise");
            node.style.setProperty("--rise-delay", `${Math.min(index, 4) * 90}ms`);
          });
        });

        revealVisible = () => {
          const view = window.innerHeight * 0.92;
          risen.forEach((node) => {
            if (node.classList.contains("is-in")) return;
            if (node.getBoundingClientRect().top < view) node.classList.add("is-in");
          });
        };
        revealVisible();
        revealFrame = window.requestAnimationFrame(revealVisible);
      }

      onScroll();
      if (fine && !reduce) {
        window.addEventListener("pointermove", onMove, { passive: true });
        cursorFrame = window.requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    // Wait until streamed content has hydrated before editing classes React owns.
    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(start);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(cursorFrame);
      window.cancelAnimationFrame(revealFrame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      risen.forEach((node) => {
        node.classList.remove("scroll-rise", "is-in");
        node.style.removeProperty("--rise-delay");
      });
      heroPhotos.forEach((photo) => {
        photo.style.transform = "";
      });
      if (heroCopy) {
        heroCopy.style.opacity = "";
        heroCopy.style.transform = "";
      }
      root.classList.remove("lux-cursor", "lux-hot", "lux-field");
    };
  }, [pathname]);

  return (
    <>
      <div ref={bar} className="scroll-progress" aria-hidden="true" />
      <div ref={ring} className="lux-ring" aria-hidden="true" />
      <div ref={dot} className="lux-dot" aria-hidden="true" />
    </>
  );
}
