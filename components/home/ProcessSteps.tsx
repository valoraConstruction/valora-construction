"use client";

import { useState } from "react";
import { useHorizontalSwipe } from "@/lib/useHorizontalSwipe";

export type Step = {
  n: string;
  title: string;
  text: string;
};

export function ProcessSteps({ steps }: { steps: readonly Step[] }) {
  const [active, setActive] = useState(0);
  const count = steps.length;

  function select(index: number) {
    if (count === 0) return;
    setActive((index + count) % count);
  }

  const swipe = useHorizontalSwipe({
    onEnd(direction) {
      select(active + direction);
    },
  });

  return (
    <div className="mt-2 touch-pan-y sm:mt-4 lg:mt-10" {...swipe.handlers}>
      <ol className="min-w-0">
        {steps.map((step, index) => {
          const open = index === active;
          const panelId = `process-step-${step.n}`;
          return (
            <li key={step.n} className="border-b border-ink/15">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => select(index)}
                  className="flex w-full items-center gap-3 py-4 text-left sm:gap-4 sm:py-5"
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${open ? "border-gold" : "border-ink/25"}`}
                    aria-hidden="true"
                  >
                    <span className={`h-2 w-2 rounded-full ${open ? "bg-gold" : "bg-ink/35"}`} />
                  </span>
                  <span className={`font-display text-sm tracking-[0.16em] ${open ? "text-gold" : "text-ink/45"}`}>
                    {step.n}
                  </span>
                  <span className={`min-w-0 font-display text-xl sm:text-2xl ${open ? "text-gold-deep" : "text-ink"}`}>
                    {step.title}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`ml-auto h-4 w-4 shrink-0 ${open ? "text-gold-deep" : "text-ink/40"}`}
                    aria-hidden="true"
                  >
                    <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-hidden={!open}
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pl-11 pr-6 text-sm leading-relaxed text-stone sm:pl-12">{step.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
