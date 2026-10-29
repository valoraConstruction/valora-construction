import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cinzel, Cormorant_Garamond, Outfit } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { CallNow } from "@/components/CallNow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteChrome } from "@/components/SiteChrome";
import { JsonLd } from "@/components/ui";
import { site } from "@/lib/content";
import { businessJsonLd } from "@/lib/seo";
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
    images: [{ url: "/gallery/og-waterfall-island.jpg", alt: "Kitchen island with a waterfall quartz counter and dark cabinets" }],
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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${outfit.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <JsonLd data={businessJsonLd()} />
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
