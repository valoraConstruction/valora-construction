"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/lib/content";
import { PhotoLightbox } from "@/components/PhotoLightbox";

const filters = ["All", "Kitchen", "Bathroom", "Home", "Flooring"] as const;
const initialRows = 5;
const rowsPerClick = 3;

function chunk<T>(list: T[], size: number) {
  const rows: T[][] = [];
  for (let index = 0; index < list.length; index += size) rows.push(list.slice(index, index + size));
  return rows;
}

export function Gallery({ items = projects, limit }: { items?: Project[]; limit?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [perRow, setPerRow] = useState(3);
  const [rowsToShow, setRowsToShow] = useState(initialRows);
  const matched = filter === "All" ? items : items.filter((item) => item.category === filter);
  const visible = typeof limit === "number" ? matched.slice(0, limit) : matched;
  const rows = chunk(visible, perRow);
  const shown = rows.slice(0, rowsToShow);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const apply = () => setPerRow(query.matches ? 3 : 2);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <h2 className="text-center font-display text-4xl font-medium leading-tight text-ink sm:text-6xl">Latest Works</h2>

      <div className="mt-8 flex justify-center gap-7 sm:gap-10" role="group" aria-label="Filter projects">
        {filters.map((item) => {
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setFilter(item);
                setRowsToShow(initialRows);
              }}
              className={`text-[0.68rem] font-medium uppercase tracking-[0.2em] sm:text-[0.72rem] ${selected ? "text-gold-deep" : "text-ink/55 hover:text-ink"}`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col gap-3 px-4 sm:mt-14 sm:gap-4 sm:px-8 lg:px-[5vw]">
        {shown.map((row) => (
          <ProjectRow key={row.map((project) => project.title).join("|")} projects={row} onOpen={setOpen} />
        ))}
      </div>
      {shown.length < rows.length ? (
        <div className="mt-10 flex justify-center px-4 sm:mt-14">
          <button type="button" className="btn-ghost" onClick={() => setRowsToShow((count) => count + rowsPerClick)}>
            View more
          </button>
        </div>
      ) : null}
      <PhotoLightbox project={open} items={visible} onClose={() => setOpen(null)} onChange={setOpen} />
    </div>
  );
}

function ProjectRow({ projects: row, onOpen }: { projects: Project[]; onOpen: (project: Project) => void }) {
  const [active, setActive] = useState<number | null>(null);
  const resting = active === null;

  return (
    <ul
      className="flex w-full min-w-0 items-center gap-3 sm:gap-4"
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setActive(null);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActive(null);
      }}
    >
      {row.map((project, index) => {
        const selected = index === active;
        return (
          <li
            key={project.title}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setActive(index);
            }}
            style={{ flexGrow: resting || !selected ? 1 : 2.45, flexBasis: 0 }}
            className={`relative min-w-0 overflow-hidden transition-[flex-grow,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              resting
                ? "h-52 sm:h-72 lg:h-[26rem]"
                : selected
                  ? "h-64 sm:h-80 lg:h-[30rem]"
                  : "h-40 sm:h-56 lg:h-[20rem]"
            }`}
          >
            <button
              type="button"
              onFocus={() => setActive(index)}
              onClick={() => {
                if (index !== active) {
                  setActive(index);
                  return;
                }
                onOpen(project);
              }}
              className="absolute inset-0 cursor-pointer text-left"
              aria-label={selected ? `Open ${project.title}` : `Show ${project.title}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                quality={75}
                sizes={selected ? "(min-width: 1024px) 50vw, 70vw" : "(min-width: 1024px) 22vw, 30vw"}
                className="object-cover"
                style={{ objectPosition: project.focus }}
                draggable={false}
              />
              <span
                className={`absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] bg-white px-3 py-2.5 shadow-[0_10px_24px_rgba(36,31,26,0.12)] transition-opacity duration-300 sm:bottom-4 sm:left-4 sm:px-4 sm:py-3 ${
                  selected ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <span className="block font-sans text-base font-medium leading-tight text-ink sm:text-xl">{project.title}</span>
                <span className="mt-2 block h-px w-7 bg-gold" />
                <span className="mt-1.5 block text-[0.6rem] font-medium uppercase tracking-[0.22em] text-stone">{project.category}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
