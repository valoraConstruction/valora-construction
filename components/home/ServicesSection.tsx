import type { ReactNode } from "react";
import { ServiceRow, type ServiceCard } from "@/components/home/ServiceRow";

const serviceCards: ServiceCard[] = [
  {
    n: "01",
    title: "Kitchen remodel",
    text: "Layout, cabinetry, countertops, backsplash, lighting, plumbing, and electrical, managed as one kitchen.",
    href: "/services/kitchen-remodel",
    image: "/gallery/service-kitchen.webp",
    alt: "Warm oak kitchen with a waterfall quartz island, brass pendants, and morning light",
  },
  {
    n: "02",
    title: "Bathroom remodel",
    text: "Demolition, waterproofing, tile, vanities, and fixtures. One team from the first layout to the last detail.",
    href: "/services/bathroom-remodel",
    image: "/gallery/service-bathroom.webp",
    alt: "Freestanding soaking tub, sand zellige tile, and a brass floor-mounted filler",
  },
  {
    n: "03",
    title: "Home renovation",
    text: "Thoughtful updates or a full transformation, from the concept through the rooms that have to meet.",
    href: "/services/home-renovation",
    image: "/gallery/hero-home-coastal.png",
    alt: "Open living room and kitchen with a linen sectional, light wood floors, and sliding doors to a waterfront patio",
  },
  {
    n: "04",
    title: "Flooring",
    text: "LVP, laminate, hardwood, engineered hardwood, refinishing, polyurethane, and tile.",
    href: "/services/flooring",
    image: "/gallery/service-flooring.webp",
    alt: "Wide-plank white oak floor running through a bright hall into a living room",
  },
  {
    n: "05",
    title: "Cabinet & Countertop",
    text: "Cabinets and countertops designed together, then installed so doors, drawers, and stone line up.",
    href: "/services/cabinet-countertop",
    image: "/gallery/service-cabinetry.webp",
    alt: "White shaker cabinets, a speckled stone counter, a brass cup pull, and an open oak shelf",
  },
  {
    n: "06",
    title: "Tile installation",
    text: "Floor tile, wall tile, showers, and backsplash, set with the rooms they meet.",
    href: "/services/tile-installation",
    image: "/gallery/subway-backsplash.webp",
    alt: "Glossy white subway-tile backsplash above a white counter, gray cabinets, and a brass faucet",
  },
];

export function ServicesSection({
  title = (
    <>
      Services Provided In Interior <br className="hidden md:block" />
      And Home Remodeling
    </>
  ),
  excludeHref,
}: {
  title?: ReactNode;
  excludeHref?: string;
}) {
  const items = serviceCards
    .filter((item) => item.href !== excludeHref)
    .map((item, index) => ({ ...item, n: String(index + 1).padStart(2, "0") }));

  return (
    <section id="services" className="overflow-hidden bg-ivory pb-10 pt-16 text-ink sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24">
      <ServiceRow title={title} items={items} />
    </section>
  );
}
