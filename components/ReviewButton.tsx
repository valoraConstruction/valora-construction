"use client";

import { useEffect, useRef } from "react";
import { REVIEW_WIDGET_MARKUP, REVIEW_WIDGET_SCRIPT, REVIEW_WIDGET_THEME } from "@/lib/reviewWidget";

type Listener = { target: EventTarget; type: string; listener: EventListenerOrEventListenerObject; options?: boolean | AddEventListenerOptions };

/*
 * Mounts the supplied review widget unchanged. The widget expects one copy per page load and moves
 * its popup to <body>; this site changes pages without a reload, so this wrapper only adds
 * lifecycle handling around it:
 *  - runs the supplied script once per mount,
 *  - records the window/document listeners and the timer the script registers, and removes them on unmount,
 *  - removes the popup it moved to <body> and empties its markup when the page unmounts or is hidden,
 *    so only the visible page carries the widget's element IDs.
 * Render it at most once per page (the widget uses fixed element IDs).
 */
export function ReviewButton() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = host.current;
    if (!root) return;

    // A popup left on <body> by a previous page would shadow this one's IDs.
    document.querySelectorAll("body > #rlgPopup").forEach((node) => node.remove());
    // Next.js can keep a visited page mounted but hidden; its copy is cleared on hide (below)
    // and restored here when the page is shown again.
    if (!root.querySelector("#rlgOpenPopup")) root.innerHTML = REVIEW_WIDGET_MARKUP;

    const listeners: Listener[] = [];
    const timers: number[] = [];
    const winAdd = window.addEventListener;
    const docAdd = document.addEventListener;
    const setIntervalOriginal = window.setInterval;

    window.addEventListener = function (this: Window, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
      listeners.push({ target: window, type, listener, options });
      return winAdd.call(window, type, listener, options);
    } as typeof window.addEventListener;
    document.addEventListener = function (this: Document, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
      listeners.push({ target: document, type, listener, options });
      return docAdd.call(document, type, listener, options);
    } as typeof document.addEventListener;
    window.setInterval = ((handler: TimerHandler, timeout?: number, ...args: unknown[]) => {
      const id = setIntervalOriginal(handler, timeout, ...args);
      timers.push(id);
      return id;
    }) as typeof window.setInterval;

    try {
      new Function(REVIEW_WIDGET_SCRIPT)();
    } finally {
      window.addEventListener = winAdd;
      document.addEventListener = docAdd;
      window.setInterval = setIntervalOriginal;
    }

    return () => {
      for (const { target, type, listener, options } of listeners) target.removeEventListener(type, listener, options);
      for (const id of timers) window.clearInterval(id);
      const popup = document.getElementById("rlgPopup");
      if (popup?.classList.contains("rlg-is-open")) document.body.style.overflow = "";
      document.querySelectorAll("body > #rlgPopup").forEach((node) => node.remove());
      // Leave no element IDs behind in a hidden page, so only the visible page's widget has them.
      root.innerHTML = "";
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: REVIEW_WIDGET_THEME }} />
      <div ref={host} dangerouslySetInnerHTML={{ __html: REVIEW_WIDGET_MARKUP }} />
    </>
  );
}
