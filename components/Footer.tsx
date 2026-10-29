import Image from "next/image";
import Link from "next/link";
import { cities, commercial, services, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-sand bg-[#f6f1e7] text-ink">
      <div className="w-full px-6 sm:px-10 lg:px-[11vw] pt-16">
        <p className="contact-word" aria-hidden="true">
          CONTACT
        </p>
        <div className="contact-lockup" style={{ marginTop: "-0.07em" }}>
          <Image
            src="/brand/logo-lockup.png"
            alt="Valora Construction"
            width={1024}
            height={226}
            sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 11.5rem"
            className="h-10 w-auto sm:h-12 lg:h-14"
          />
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-[11vw] grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">Reach us</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/75">
            <li>
              <a href={site.maps} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="text-gold-deep hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>License {site.license}</li>
            <li>{site.radius} of Tampa</li>
            <li className="uppercase tracking-[0.18em] text-ink/50">{site.hours}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/75">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/why-choose-us" className="hover:text-gold">Why Valora</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Request a Quote</Link></li>
            <li><Link href="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/75">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-gold">
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={commercial.href} className="hover:text-gold">
                {commercial.name}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gold">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">Service areas</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink/75">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link href={`/locations/${city.slug}`} className="hover:text-gold">
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="w-full px-6 sm:px-10 lg:px-[11vw] flex flex-col gap-3 py-5 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. License {site.license}.</p>
          <p>
            <a href={site.maps} className="hover:text-gold">
              Tampa, Florida
            </a>{" "}
            · {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
