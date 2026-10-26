import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cinzel, Cormorant_Garamond, Outfit } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { CallNow } from "@/components/CallNow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteChrome } from "@/components/SiteChrome";
import { JsonLd } from "@/components/ui";
import { cities, commercial, services, site } from "@/lib/content";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Valora Construction | Kitchen & Bathroom Remodeling in Tampa",
    template: "%s | Valora Construction",
  },
  description:
    "Valora Construction & Remodeling designs and builds kitchen remodels, bathroom remodels, and whole-home renovations in Tampa Bay. Licensed CBC1270738.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [{ url: "/gallery/waterfall-island.png", alt: "Kitchen island with a waterfall quartz counter and dark cabinets" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "home improvement",
};

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: site.legalName,
  slogan: site.tagline,
  url: site.url,
  telephone: site.phoneTel,
  email: site.email,
  image: `${site.url}/brand/logo.png`,
  logo: `${site.url}/brand/logo.png`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tampa",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.9665175,
    longitude: -82.4499767,
  },
  areaServed: cities.map((city) => ({
    "@type": "City",
    name: `${city.name}, Florida`,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Remodeling services",
    itemListElement: [
      ...services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.name, description: service.summary },
      })),
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: commercial.name,
          description:
            "Commercial interior renovation in Tampa Bay. Tenant spaces, restrooms, break rooms, flooring, and tile. Florida Certified Building Contractor CBC1270738.",
        },
      },
    ],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "06:00",
    closes: "23:00",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "Florida contractor license",
    value: site.license,
  },
  hasMap: site.maps,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description:
        "Kitchen remodeling, bathroom remodeling, and whole-home renovation in Tampa Bay.",
      publisher: { "@id": `${site.url}/#business` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${outfit.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <JsonLd data={jsonLd} />
        <SiteChrome />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CallNow />
        <BackToTop />
      </body>
    </html>
  );
}
