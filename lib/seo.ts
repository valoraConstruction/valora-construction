import type { Metadata } from "next";
import { commercial, services, site } from "@/lib/content";
import { serviceSchemas } from "@/lib/serviceSchemas";

const defaultImage = "/gallery/og-waterfall-island.jpg";
const defaultImageAlt = "Kitchen island with a waterfall quartz counter and dark cabinets";

export function pageMeta({
  title,
  description,
  path,
  image = defaultImage,
  imageAlt = defaultImageAlt,
  index = true,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  index?: boolean;
  absolute?: boolean;
}): Metadata {
  const branded = absolute ? title : `${title} | ${site.name}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
      : { index: false, follow: true },
    openGraph: {
      title: branded,
      description,
      url: path,
      type: "website",
      locale: "en_US",
      siteName: site.name,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export const businessId = `${site.url}/#localbusiness`;
export const websiteId = `${site.url}/#website`;

/** Service areas, as listed in the client's schema documents. */
const areaServed = [
  { "@type": "City", name: "Tampa" },
  { "@type": "City", name: "Clearwater" },
  { "@type": "City", name: "St. Petersburg" },
  { "@type": "Place", name: "Town 'n' Country" },
  { "@type": "Place", name: "Wesley Chapel" },
  { "@type": "Place", name: "Lutz" },
  { "@type": "City", name: "Zephyrhills" },
  { "@type": "Place", name: "Land O' Lakes" },
  { "@type": "Place", name: "Lithia" },
  { "@type": "Place", name: "Brandon" },
  { "@type": "Place", name: "Riverview" },
  { "@type": "Place", name: "Valrico" },
];

/** The one business entity. Rendered once per page by the root layout; other schema refers to it by @id. */
export function businessJsonLd() {
  const catalog = [
    ...services.map((service) => ({ slug: service.slug, name: serviceSchemas[service.slug]?.name ?? service.name })),
    { slug: commercial.href.replace("/services/", ""), name: "Commercial General Contracting" },
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": businessId,
        name: site.legalName,
        alternateName: site.name,
        description:
          "Family-owned home remodeling and whole home renovation contractor in Tampa, FL. Kitchen remodeling, bathroom remodeling, interior home renovation, flooring, cabinets and countertops, tile, room additions, garage conversions, and outdoor kitchens. Florida license CBC1270738.",
        url: `${site.url}/`,
        telephone: "+1-813-240-5570",
        email: site.email,
        logo: `${site.url}/brand/logo.png`,
        image: `${site.url}/gallery/waterfall-island.webp`,
        slogan: site.tagline,
        priceRange: "$$$",
        founder: { "@type": "Person", name: "Amanda Neve", jobTitle: "Owner" },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: "US",
        },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
        hasMap: site.maps,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "06:00",
          closes: "23:00",
        },
        identifier: { "@type": "PropertyValue", name: "Florida contractor license", value: site.license },
        areaServed,
        knowsAbout: ["Home Remodeling", "Whole Home Remodeling", "Home Renovation", "Kitchen Remodeling", "Bathroom Remodeling"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Home Remodeling Services",
          itemListElement: catalog.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.name, url: `${site.url}/services/${item.slug}` },
          })),
        },
        potentialAction: { "@type": "CommunicateAction", name: "Request an estimate", target: `${site.url}/contact` },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${site.url}/`,
        name: site.legalName,
        publisher: { "@id": businessId },
        inLanguage: "en-US",
      },
    ],
  };
}

/** Service schema for /services/[slug]. Returns null when no schema facts exist for the slug. */
export function serviceJsonLd(slug: string) {
  const facts = serviceSchemas[slug];
  if (!facts) return null;
  const url = `${site.url}/services/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: facts.name,
    serviceType: facts.serviceType,
    description: facts.description,
    url,
    image: `${site.url}${facts.image}`,
    provider: { "@type": "GeneralContractor", "@id": businessId, name: site.legalName },
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${facts.name} Services`,
      itemListElement: facts.offers.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
}
