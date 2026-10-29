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
    image: "/gallery/hero-home-coastal.webp",
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
  {
    n: "07",
    title: "Shower remodeling",
    text: "Walk-in showers and tub-to-shower conversions, waterproofed before any tile goes up.",
    href: "/services/shower-remodeling",
    image: "/gallery/patterned-tile-shower.webp",
    alt: "Walk-in shower with patterned wall tile, a pebble floor, and a frameless glass door",
  },
  {
    n: "08",
    title: "Kitchen cabinet refacing",
    text: "New doors, drawer fronts, and veneer on solid cabinet boxes.",
    href: "/services/kichen-cabinet-contractor",
    image: "/gallery/oak-shaker-kitchen.webp",
    alt: "Oak shaker kitchen cabinets with brushed pulls, a stainless range, and a chimney hood",
  },
  {
    n: "09",
    title: "Room additions",
    text: "A bedroom suite, family room, or kitchen bump-out, built to match the original house.",
    href: "/services/room-additions",
    image: "/gallery/navy-island-open-kitchen.webp",
    alt: "Open kitchen and living space with a navy island, a white waterfall counter, square columns, and a barn door",
  },
  {
    n: "10",
    title: "Garage conversion",
    text: "Unused garage space turned into a permitted bedroom, office, or in-law suite.",
    href: "/services/garage-conversion",
    image: "/gallery/hero-living-oak.webp",
    alt: "Wide oak floor in a bright living room with tall windows and a fireplace",
  },
  {
    n: "11",
    title: "Outdoor kitchen",
    text: "Grill islands, weather-ready counters, and lanai bars built for Florida weather.",
    href: "/services/outdoor-kitchen-construction",
    image: "/gallery/black-shaker-wet-bar.webp",
    alt: "Built-in wet bar with black shaker cabinets, two wine refrigerators, oak floating shelves, and a forest mural",
  },
  {
    n: "12",
    title: "Commercial general contractor",
    text: "Tenant interiors, restrooms, break rooms, flooring, and tile, with a written scope before demolition.",
    href: "/services/commercial-general-contractor",
    image: "/gallery/commercial-lobby.jpg",
    alt: "Commercial reception with a light oak desk, a quartz counter, and a wood floor continuing toward glass offices",
  },
];

export function ServicesSection({
  title = (
    <>
      Services Provided In Interior <br className="hidden md:block" />
      And Home Remodeling
    </>
  ),
  lede,
  excludeHref,
  overrides,
}: {
  title?: ReactNode;
  lede?: ReactNode;
  excludeHref?: string;
  /** Per-card title and text, keyed by href. */
  overrides?: Record<string, { title: string; text: string }>;
}) {
  const items = serviceCards
    .filter((item) => item.href !== excludeHref)
    .map((item, index) => ({ ...item, ...overrides?.[item.href], n: String(index + 1).padStart(2, "0") }));

  return (
    <section id="services" className="overflow-hidden bg-ivory pb-10 pt-16 text-ink sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24">
      <ServiceRow title={title} lede={lede} items={items} />
    </section>
  );
}
