/*
 * Service JSON-LD facts for every service page, from the client's schema documents (Oct 2026).
 * Corrections to the supplied files:
 * - Images point at the optimized .webp copies of waterfall-island and hero-home-coastal (the
 *   original PNGs are 12.9 MB and 15.7 MB).
 * - Room Additions and Outdoor Kitchen Construction used the indoor waterfall-island kitchen as
 *   their image; they now use the photo each page actually shows.
 */

export type ServiceSchema = {
  name: string;
  serviceType: string;
  description: string;
  image: string;
  offers: string[];
};

export const serviceSchemas: Record<string, ServiceSchema> = {
  "kitchen-remodel": {
    name: "Kitchen Remodeling",
    serviceType: "Kitchen Remodeling",
    description:
      "Complete kitchen design and remodeling in Tampa, FL: layout, cabinetry, countertops, backsplash, lighting, plumbing, and electrical, managed as one project by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/waterfall-island.webp",
    offers: [
      "Kitchen Design and Installation",
      "Cabinet and Countertop Design",
      "Kitchen Layout Planning",
      "Backsplash Installation",
      "Kitchen Lighting",
      "Kitchen Plumbing and Electrical",
    ],
  },
  "bathroom-remodel": {
    name: "Bathroom Remodeling",
    serviceType: "Bathroom Remodeling",
    description:
      "Complete bathroom remodeling in Tampa, FL: layout and materials, demolition, plumbing and electrical, waterproofing, tile, vanities, countertops, fixtures, and final finishes, including condominium bathrooms, by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/teal-herringbone-shower.webp",
    offers: [
      "Bathroom Layout and Material Selection",
      "Bathroom Demolition",
      "Bathroom Plumbing and Electrical",
      "Shower and Wet Area Waterproofing",
      "Tile, Vanity, and Countertop Installation",
      "Fixtures and Final Finishes",
    ],
  },
  "home-renovation": {
    name: "Interior Home Renovation",
    serviceType: "Home Renovation",
    description:
      "Interior home renovation in Tampa, FL, from a few important rooms to a full transformation: concept and written scope, kitchens and baths, living spaces, materials, trade coordination, and a final walkthrough and punch list, by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/hero-home-coastal.webp",
    offers: [
      "Renovation Concept and Scope",
      "Kitchen and Bath Renovation",
      "Living Space Renovation",
      "Material Selection",
      "Trade Coordination",
      "Final Walkthrough and Punch List",
    ],
  },
  flooring: {
    name: "Flooring Installation",
    serviceType: "Flooring Installation",
    description:
      "Flooring installation and refinishing in Tampa, FL: luxury vinyl plank, laminate, solid hardwood, engineered hardwood, hardwood refinishing, polyurethane coating, floor tile, and bathroom tile and backsplash, by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/hickory-upstairs.webp",
    offers: [
      "LVP Flooring Installation",
      "Laminate Flooring Installation",
      "Hardwood Flooring Installation",
      "Engineered Hardwood Installation",
      "Hardwood Floor Refinishing",
      "Floor Polyurethane Coat",
      "Floor Tile Installation",
      "Bathroom Tile and Backsplash",
    ],
  },
  "cabinet-countertop": {
    name: "Cabinet and Countertop Installation",
    serviceType: "Cabinet and Countertop Installation",
    description:
      "Cabinet and countertop design and installation in Tampa, FL: kitchen cabinets, islands, storage, stone countertops, bathroom vanities, and hardware, designed together and installed by one licensed Florida contractor (CBC1270738).",
    image: "/gallery/service-cabinetry.webp",
    offers: [
      "Cabinet Design",
      "Countertop Selection and Installation",
      "Cabinet Installation",
      "Kitchen Islands and Storage",
      "Cabinet Hardware and Finishes",
      "Bathroom Vanities and Countertops",
    ],
  },
  "tile-installation": {
    name: "Tile Installation",
    serviceType: "Tile Installation",
    description:
      "Tile installation in Tampa, FL: floor tile, wall tile, tiled showers with niches and benches, kitchen and bath backsplashes, and patterns such as herringbone, with waterproofing completed before tile in wet areas, by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/subway-backsplash.webp",
    offers: [
      "Floor Tile Installation",
      "Wall Tile Installation",
      "Shower Tile Installation",
      "Kitchen and Bath Backsplash",
      "Tile Pattern and Layout",
    ],
  },
  "commercial-general-contractor": {
    name: "Commercial General Contractor",
    serviceType: "Commercial Interior Renovation",
    description:
      "Commercial interior renovation in Tampa, FL for offices, retail, restrooms, break rooms, and reception areas: tenant interiors, restrooms, casework, flooring, and tile under one written scope. Florida Certified Building Contractor CBC1270738, for buildings up to three stories and remodeling that does not affect the structural frame.",
    image: "/gallery/commercial-lobby.jpg",
    offers: [
      "Tenant Interiors",
      "Commercial Restroom Renovation",
      "Break Rooms and Casework",
      "Commercial Flooring",
      "Commercial Tile Installation",
    ],
  },
  "shower-remodeling": {
    name: "Shower Remodeling",
    serviceType: "Shower Remodeling",
    description:
      "Shower remodeling in Tampa, FL: tub-to-shower conversions, walk-in and curbless showers, custom tile showers, shower pan replacement and waterproofing, niches, benches, linear drains, and frameless glass enclosures by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/linear-drain-shower.webp",
    offers: [
      "Tub-to-Shower Conversions",
      "Walk-In and Curbless Showers",
      "Custom Tile Showers",
      "Shower Pan Replacement and Waterproofing",
      "Niches, Benches, and Linear Drains",
      "Frameless Glass Enclosures",
      "Accessible and Aging-in-Place Showers",
    ],
  },
  "kichen-cabinet-contractor": {
    name: "Kitchen Cabinet Refacing",
    serviceType: "Kitchen Cabinet Refacing",
    description:
      "Kitchen cabinet refacing in Tampa, FL: new doors and drawer fronts, matching veneer for face frames and end panels, soft-close hinges, hardware, added cabinets, and optional countertops and backsplash, installed on existing cabinet boxes by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/white-shaker-kitchen.webp",
    offers: [
      "New Cabinet Doors and Drawer Fronts",
      "Veneer for Face Frames and End Panels",
      "Soft-Close Hinges and Full-Extension Drawer Slides",
      "Cabinet Hardware",
      "Added Cabinets, Crown Molding, and Storage Upgrades",
      "Countertops and Backsplash",
    ],
  },
  "room-additions": {
    name: "Room Additions",
    serviceType: "Room Additions",
    description:
      "Room additions and home additions in Tampa, FL: bedroom and bathroom additions, primary suites, family rooms, kitchen bump-outs, in-law suites, and lanai enclosures, designed, permitted, and built by a Florida Certified Building Contractor (CBC1270738).",
    image: "/gallery/navy-island-open-kitchen.webp",
    offers: [
      "Bedroom and Bathroom Additions",
      "Primary Suite Additions",
      "Family Room and Great Room Additions",
      "Kitchen Bump-Outs",
      "In-Law Suite Additions",
      "Lanai and Porch Enclosures",
    ],
  },
  "garage-conversion": {
    name: "Garage Conversion",
    serviceType: "Garage Conversion",
    description:
      "Garage conversions in Tampa, FL: garage to bedroom, home office, gym, playroom, and in-law suite conversions with floor leveling, door infill, insulation, air conditioning, electrical, and plumbing, permitted and built by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/hero-living-oak.webp",
    offers: [
      "Garage to Bedroom Conversion",
      "Home Office Conversion",
      "Home Gym or Studio Conversion",
      "Playroom or Media Room Conversion",
      "In-Law Suite or Garage Apartment Conversion",
      "Partial Garage Conversion",
    ],
  },
  "outdoor-kitchen-construction": {
    name: "Outdoor Kitchen Construction",
    serviceType: "Outdoor Kitchen Construction",
    description:
      "Custom outdoor kitchen construction in Tampa, FL: built-in grill islands, weather-rated countertops, stainless and polymer outdoor cabinets, sinks, refrigeration, bars, lighting, and gas, electrical, and plumbing connections by a licensed Florida contractor (CBC1270738).",
    image: "/gallery/black-shaker-wet-bar.webp",
    offers: [
      "Built-In Grill Islands",
      "Outdoor Kitchen Countertops",
      "Outdoor Kitchen Cabinets and Storage",
      "Outdoor Sinks, Refrigeration, and Prep Space",
      "Outdoor Bars and Seating",
      "Outdoor Kitchen Lighting, Fans, and Shade",
    ],
  },
};
