"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cities, commercial, services, site } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/why-choose-us", label: "Why Valora" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/locations", label: "Locations", key: "locations" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const [menu, setMenu] = useState<string | null>(null);

  function closeMenu() {
    setOpen(false);
    setPanel(null);
    setMenu(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1400px)");
    const onChange = () => {
      if (!desktop.matches) return;
      setOpen(false);
      setPanel(null);
      setMenu(null);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const close = () => setMenu(null);
    window.addEventListener("scroll", close, { passive: true });
    document.addEventListener("scroll", close, { capture: true, passive: true });
    window.addEventListener("wheel", close, { passive: true });
    return () => {
      window.removeEventListener("scroll", close);
      document.removeEventListener("scroll", close, true);
      window.removeEventListener("wheel", close);
    };
  }, [menu]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-gold/30 bg-ivory text-ink">
      <div className="w-full px-6 sm:px-10 lg:px-[11vw] flex h-20 items-center justify-between gap-8">
        <Link href="/" onClick={closeMenu} className="flex items-center" aria-label="Valora Construction home">
          <Image
            src="/brand/logo-lockup.png"
            alt="Valora Construction"
            width={1024}
            height={226}
            priority
            className="h-10 w-auto sm:h-12 lg:h-14"
          />
        </Link>

        <div className="ml-auto hidden min-w-0 items-center gap-3 self-stretch wide:flex xl:gap-6 2xl:gap-8">
        <nav className="flex h-full items-stretch gap-3 xl:gap-5 2xl:gap-7" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            const itemClass = `inline-flex h-full items-center leading-none shrink-0 whitespace-nowrap text-[0.64rem] font-medium uppercase tracking-[0.1em] xl:text-[0.72rem] xl:tracking-[0.12em] 2xl:text-[0.8rem] ${active ? "text-gold-deep" : "text-ink/75 hover:text-gold-deep"}`;
            if (!("key" in link)) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={itemClass}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            }

            const shown = menu === link.key;
            return (
              <div
                key={link.href}
                className="relative flex h-full items-center"
                onMouseEnter={() => setMenu(link.key)}
                onMouseLeave={() => setMenu(null)}
                onFocus={() => setMenu(link.key)}
                onBlur={(event) => {
                  const next = event.relatedTarget;
                  if (!(next instanceof Node) || !event.currentTarget.contains(next)) setMenu(null);
                }}
              >
                <Link
                  href={link.href}
                  className={itemClass}
                  aria-current={active ? "page" : undefined}
                  aria-expanded={shown}
                  onClick={() => setMenu(null)}
                >
                  {link.label}
                </Link>
                <div className={`absolute left-1/2 top-full z-50 w-max -translate-x-1/2 transition ${shown ? "visible opacity-100" : "invisible opacity-0"}`}>
                  <div
                    className={`border border-sand bg-white p-3 shadow-2xl ${link.key === "locations" ? "grid w-[28rem] grid-cols-2 gap-1" : "min-w-56"}`}
                  >
                    {link.key === "services"
                      ? services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setMenu(null)}
                            className="block px-3 py-2 text-sm text-ink/80 hover:bg-ivory hover:text-gold-deep"
                          >
                            {service.name}
                          </Link>
                        ))
                      : null}
                    {link.key === "services" ? (
                      <Link
                        href={commercial.href}
                        onClick={() => setMenu(null)}
                        className="block px-3 py-2 text-sm text-ink/80 hover:bg-ivory hover:text-gold-deep"
                      >
                        {commercial.name}
                      </Link>
                    ) : null}
                    {link.key === "locations"
                      ? cities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/locations/${city.slug}`}
                            onClick={() => setMenu(null)}
                            className="block px-3 py-2 text-sm text-ink/80 hover:bg-ivory hover:text-gold-deep"
                          >
                            {city.name}
                          </Link>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <Link href="/contact" className="btn-gold shrink-0 whitespace-nowrap px-3 py-2.5 text-[0.58rem] leading-none tracking-[0.12em] xl:px-4 xl:py-3 xl:text-[0.66rem] xl:tracking-[0.14em] 2xl:px-5 2xl:text-[0.72rem]">
          Let's build!
        </Link>
        </div>

        <div className="flex items-center gap-2.5 wide:hidden">
          <a
            href={`tel:${site.phoneTel}`}
            className="header-call inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path
                d="M7 3.8h2.1c.4 0 .8.3.9.7l.7 2.4a1 1 0 0 1-.3 1L9.2 9a12.4 12.4 0 0 0 5.8 5.8l1.1-1.2a1 1 0 0 1 1-.3l2.4.7c.4.1.7.5.7.9V17a1.6 1.6 0 0 1-1.7 1.6A15.2 15.2 0 0 1 5.4 5.5 1.6 1.6 0 0 1 7 3.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-ivory pb-28 wide:hidden">
          <nav className="w-full px-6 sm:px-10 lg:px-[11vw] flex flex-col py-6" aria-label="Mobile">
            {links.map((link) => (
              <div key={link.href} className="border-b border-ink/10">
                <div className="flex items-center justify-between">
                  <Link href={link.href} onClick={closeMenu} className="py-4 font-display text-2xl tracking-wide text-ink">
                    {link.label}
                  </Link>
                  {"key" in link ? (
                    <button
                      type="button"
                      className="px-3 py-4 text-xs uppercase tracking-[0.18em] text-gold"
                      aria-expanded={panel === link.key}
                      onClick={() => setPanel((current) => (current === link.key ? null : link.key))}
                    >
                      {panel === link.key ? "Hide" : "Show"}
                    </button>
                  ) : null}
                </div>
                {"key" in link && panel === link.key ? (
                  <div className="grid grid-cols-2 gap-x-4 pb-4">
                    {(link.key === "services" ? services : cities).map((item) => (
                      <Link
                        key={item.slug}
                        href={link.key === "services" ? `/services/${item.slug}` : `/locations/${item.slug}`}
                        onClick={closeMenu}
                        className="py-2 text-sm text-ink/70"
                      >
                        {item.name}
                      </Link>
                    ))}
                    {link.key === "services" ? (
                      <Link href={commercial.href} onClick={closeMenu} className="col-span-2 py-2 text-sm text-ink/70">
                        {commercial.name}
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
