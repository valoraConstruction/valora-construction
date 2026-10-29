import type { ServiceDetail } from "@/lib/serviceDetails";
import { detailServices } from "@/lib/serviceDetails";

export const site = {
  name: "Valora Construction",
  legalName: "Valora Construction & Remodeling",
  tagline: "Build | Renovate | Elevate",
  domain: "valora-construction.com",
  url: "https://valora-construction.com",
  phoneDisplay: "(813) 240-5570",
  phoneTel: "+18132405570",
  email: "office@valora-construction.com",
  hours: "6:00 AM – 11:00 PM",
  license: "CBC1270738",
  city: "Tampa",
  region: "FL",
  radius: "45 miles",
  maps: "https://maps.app.goo.gl/SNEs62g4isPy1NJD8",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5504.130871576187!2d-82.435336!3d28.0047936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6daba12019f81743%3A0xc18178939d31fa47!2sValora%20Construction%20%26%20Remodeling!5e1!3m2!1sen!2s!4v1793286881478!5m2!1sen!2s",
  address: {
    street: "2002 N Lincoln Ave",
    city: "Tampa",
    region: "FL",
    postalCode: "33607",
  },
  geo: { latitude: 28.0047936, longitude: -82.435336 },
  promise:
    "At Valora Construction & Remodeling, we believe you deserve to feel heard, informed, and excited about your renovation. Our promise is to care for your home as if it were our own, with thoughtful design, clear communication, and craftsmanship that brings your vision to life.",
};

export type Service = {
  slug: string;
  name: string;
  category: "Kitchen" | "Bathroom" | "Home" | "Flooring" | "Cabinet" | "Tile" | "Shower" | "Addition" | "Garage" | "Outdoor";
  signature?: boolean;
  eyebrow: string;
  headline: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  includes: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  /** Use metaTitle as the full <title>, without the site-name suffix. */
  metaTitleAbsolute?: boolean;
  /** Long-form page content. Services with a detail block render the full service-page layout. */
  detail?: ServiceDetail;
};

export const services: Service[] = [
  {
    slug: "kitchen-remodel",
    name: "Kitchen remodel",
    category: "Kitchen",
    signature: true,
    eyebrow: "Signature service",
    headline: "Kitchen remodeling",
    summary:
      "Complete kitchen design and renovation, from the layout to the last fixture.",
    description:
      "Transform your kitchen with our complete design and renovation services. We bring your vision to life through thoughtful layouts, beautiful material selections, and expert installation of cabinetry, countertops, backsplash, and lighting. With plumbing, electrical, and finishing touches all handled by our team, we make the entire process seamless.",
    image: "/gallery/waterfall-island.webp",
    imageAlt:
      "Kitchen island with a waterfall quartz counter, dark cabinets, and light wood-look flooring",
    metaTitle: "Kitchen Remodeling in Tampa",
    metaDescription:
      "Valora Construction designs and remodels kitchens in Tampa Bay. Cabinetry, countertops, backsplash, lighting, plumbing, and electrical, managed as one project.",
    includes: [
      {
        title: "Kitchen Design and Installation",
        text: "The layout, the materials, and the build are one scope. We design the kitchen and install it, from how you cook and gather to the last fixture.",
      },
      {
        title: "Cabinet & Countertop Design",
        text: "Cabinets and countertops are designed together: storage, the island, and the surface you live with, then installed so doors, drawers, and stone line up.",
      },
      {
        title: "Layout",
        text: "The plan comes first. We work out how you cook, gather, and move through the room before anyone orders a cabinet.",
      },
      {
        title: "Backsplash",
        text: "Tile or slab chosen with the counters and the light, not as an afterthought once the room is already tired of decisions.",
      },
      {
        title: "Lighting",
        text: "Light for cooking, light for the evening, and light that makes the materials look the way they did when you chose them.",
      },
      {
        title: "Plumbing and electrical",
        text: "Sinks, appliances, circuits, and the lines behind the walls are coordinated by our team, not left for you to schedule.",
      },
    ],
    faqs: [
      {
        q: "Do you design the kitchen as well as build it?",
        a: "Yes. Layout, materials, and installation are one scope. Cabinetry, countertops, backsplash, lighting, plumbing, electrical, and the finishing work are coordinated by our team.",
      },
      {
        q: "Can we live in the house during a kitchen remodel?",
        a: "Often, yes. We talk through cooking, water, and dust before we start, and we sequence the work so the disruption has a plan.",
      },
      {
        q: "How long does a kitchen remodel take?",
        a: "It depends on layout changes, material lead times, and whether the cabinets are stocked or made to order. After we see the kitchen, you get a schedule based on your house, not a generic number of weeks.",
      },
      {
        q: "Is kitchen remodeling only for Tampa?",
        a: "Tampa is home, and kitchen remodeling is the service homeowners across our area ask for most. We work within about 45 miles of Tampa.",
      },
    ],
  },
  {
    slug: "bathroom-remodel",
    name: "Bathroom remodel",
    category: "Bathroom",
    eyebrow: "Full bath renovation",
    headline: "Bathroom remodeling",
    summary:
      "Design, demolition, waterproofing, and finish. One team from the first layout to the last fixture.",
    description:
      "We are your one-stop shop for complete bathroom design and renovation. From layout planning and material selections to demolition, plumbing, electrical, waterproofing, tile, cabinetry, countertops, fixtures, and final finishes, we manage every detail from start to finish.",
    image: "/gallery/teal-herringbone-shower.webp",
    imageAlt:
      "Walk-in shower with a teal herringbone accent wall, pebble niches, and a pebble floor",
    metaTitle: "Bathroom Remodeling in Tampa",
    metaDescription:
      "Complete bathroom remodeling in Tampa Bay. Layout, demolition, plumbing, electrical, waterproofing, tile, vanities, countertops, and fixtures.",
    includes: [
      {
        title: "Layout and materials",
        text: "Where the shower, tub, and vanity belong, and the tile, stone, and fixtures that have to live together in a wet room.",
      },
      {
        title: "Demolition",
        text: "The old room comes out in a controlled way, especially in condominiums where the building has rules about hours and protection.",
      },
      {
        title: "Plumbing and electrical",
        text: "Supply, waste, ventilation, and light. If a fixture needs to move, you hear what that takes before you commit.",
      },
      {
        title: "Waterproofing",
        text: "[Showers](/services/shower-remodeling) and wet areas are waterproofed before the tile goes on. The finish is only as good as what is behind it.",
      },
      {
        title: "Tile, vanity, and stone",
        text: "Floor, walls, cabinetry, and countertops installed as one room, not as separate shopping trips.",
      },
      {
        title: "Fixtures and final finishes",
        text: "Faucets, glass, hardware, and the last details. We walk the room with you before we call it done.",
      },
    ],
    faqs: [
      {
        q: "Do you handle waterproofing?",
        a: "Yes. Waterproofing is part of the bathroom, not an extra the tile sits on and hopes for the best. Wet areas are rebuilt so the finish has something sound underneath.",
      },
      {
        q: "Can you move the plumbing?",
        a: "Often. Moving a toilet, shower, or sink changes the layout and the cost. We tell you what the move takes before you commit.",
      },
      {
        q: "What is included in a bathroom remodel?",
        a: "Layout planning, material selections, demolition, plumbing, electrical, waterproofing, tile, cabinetry, countertops, fixtures, and final finishes.",
      },
      {
        q: "Do you remodel condominium bathrooms?",
        a: "Yes. Buildings have rules about risers, work hours, and insurance. We plan for those before demolition.",
      },
    ],
  },
  {
    slug: "home-renovation",
    name: "Home renovation",
    category: "Home",
    eyebrow: "Whole home",
    headline: "Home renovation",
    summary:
      "Thoughtful updates or a full transformation, managed from concept to completion.",
    description:
      "Bring your dream home to life with our complete design and renovation services. From thoughtful updates to full home transformations, we create beautiful, functional spaces tailored to your style while managing every detail from concept to completion.",
    image: "/gallery/hero-home-coastal.webp",
    imageAlt:
      "Open living room and kitchen with a linen sectional, light wood floors, and sliding doors to a waterfront patio",
    metaTitle: "Home Renovation in Tampa",
    metaDescription:
      "Whole-home renovation in Tampa Bay by Valora Construction. Thoughtful updates through full transformations, managed from concept to completion.",
    includes: [
      {
        title: "Concept and scope",
        text: "We decide with you what the house actually needs: a few important rooms, or a broader transformation. The scope is written down before the work starts.",
      },
      {
        title: "Kitchens and baths",
        text: "Most whole-home projects still turn on the [kitchen](/services/kitchen-remodel) and the [baths](/services/bathroom-remodel). Those rooms are built to the same standard as a standalone remodel.",
      },
      {
        title: "Living spaces",
        text: "How rooms connect, how light moves, and how the finish of one room meets the next.",
      },
      {
        title: "Materials",
        text: "Cabinetry, stone, tile, flooring, and lighting chosen so the house feels like one decision, not a stack of samples.",
      },
      {
        title: "Coordination",
        text: "Demolition, plumbing, electrical, and finish trades are managed by our team. You should not have to introduce contractors to each other.",
      },
      {
        title: "Completion",
        text: "A walkthrough, a punch list, and a house you can live in. We do not disappear at the last 5 percent.",
      },
    ],
    faqs: [
      {
        q: "How is a home renovation different from a kitchen remodel?",
        a: "A home renovation can be a set of thoughtful updates or a full transformation. Kitchens and baths are often the center of it. We still manage the project from concept to completion.",
      },
      {
        q: "Do you take small repair work?",
        a: "We are built for complete remodeling: a kitchen, a bathroom, or a broader renovation. If what you need is a single repair, we will say so.",
      },
      {
        q: "How involved do I need to be?",
        a: "You should be involved in the decisions that shape the house. You should not have to chase trades or translate between them. That coordination is our work.",
      },
      {
        q: "Where do you take whole-home projects?",
        a: "Within about 45 miles of Tampa, in the cities listed on our locations page.",
      },
    ],
  },
  {
    slug: "flooring",
    name: "Flooring",
    category: "Flooring",
    eyebrow: "Floors",
    headline: "Flooring installation",
    summary:
      "LVP, laminate, hardwood, engineered hardwood, refinishing, polyurethane, and tile.",
    description:
      "Valora installs and refinishes floors across Tampa Bay, on their own or as part of a kitchen, bath, or whole-home remodel. The floor is specified with the rooms it meets, then installed by the same team.",
    image: "/gallery/hickory-upstairs.webp",
    imageAlt: "Wide-plank hickory hardwood floor in an upstairs hall with arched openings",
    metaTitle: "Flooring Installation in Tampa",
    metaDescription:
      "Flooring installation and refinishing in Tampa Bay. LVP, laminate, hardwood, engineered hardwood, polyurethane, tile, and bathroom tile and backsplash.",
    includes: [
      {
        title: "LVP Flooring Installation",
        text: "Luxury vinyl plank installed through the rooms you want it in, with the transitions to tile and other floors planned before the first box is opened.",
      },
      {
        title: "Laminate Flooring Installation",
        text: "Laminate laid as a finished floor, including the underlayment and the way it meets doorways, cabinets, and the next room.",
      },
      {
        title: "Hardwood Flooring Installation",
        text: "Solid hardwood installed in the rooms that should have it, with the species, width, and direction decided with the rest of the house.",
      },
      {
        title: "Engineered Hardwood Installation",
        text: "Engineered hardwood where the room or the slab calls for it, installed so it reads as one floor with the rest of the home.",
      },
      {
        title: "Hardwood Floor Refinishing",
        text: "Existing hardwood sanded and refinished when the boards are worth keeping. We look at the floor before we recommend a new one.",
      },
      {
        title: "Floor Polyurethane Coat",
        text: "A polyurethane finish on a new or refinished wood floor, so the surface you walk on is the one that was specified.",
      },
      {
        title: "Tile Installation",
        text: "Floor tile set with the layout, the grout, and the rooms it has to meet. Patterns and plain fields are both part of the work.",
      },
      {
        title: "Bathroom Tile & Backsplash",
        text: "Tile on bathroom floors and walls, and backsplashes in kitchens and baths, detailed with the waterproofing and the counters around them.",
      },
    ],
    faqs: [
      {
        q: "Can flooring be part of a kitchen or bath remodel?",
        a: "Yes. Floors are often installed with the kitchen, the bath, or a whole-home renovation. They can also be their own project.",
      },
      {
        q: "Do you refinish hardwood, or only install new floors?",
        a: "Both. If the existing hardwood is sound, refinishing and a polyurethane coat can be the right scope. If it is not, we say so and talk about a new floor.",
      },
      {
        q: "Which floors do you install?",
        a: "LVP, laminate, hardwood, engineered hardwood, and tile, including bathroom tile and backsplash. Refinishing and a polyurethane coat are part of the wood work.",
      },
      {
        q: "Where do you install floors?",
        a: "Within about 45 miles of Tampa.",
      },
    ],
  },
  {
    slug: "cabinet-countertop",
    name: "Cabinet & Countertop",
    category: "Cabinet",
    eyebrow: "Cabinets and stone",
    headline: "Cabinet & countertop",
    summary: "Cabinets and countertops designed together, then installed so the room lines up.",
    description:
      "Cabinets and countertops are one decision. We design the storage, the island, and the surface you live with, then install them so doors, drawers, and stone meet the way they did in the plan. The work can stand on its own, or it can be part of a kitchen, a bath, or a whole-home renovation.",
    image: "/gallery/service-cabinetry.webp",
    imageAlt: "White shaker cabinets, a speckled stone counter, a brass cup pull, and an open oak shelf",
    metaTitle: "Cabinet & Countertop in Tampa",
    metaDescription:
      "Cabinet and countertop design and installation in Tampa Bay. Storage, islands, stone, and hardware, installed by one team.",
    includes: [
      {
        title: "Cabinet design",
        text: "Storage planned around how you cook, get ready, or put things away. Door style, interior, and the island are decided before anything is ordered.",
      },
      {
        title: "Countertops",
        text: "Stone or other surfaces chosen with the cabinets, the light, and the way the edge meets the floor and the backsplash.",
      },
      {
        title: "Installation",
        text: "Cabinets set level, and counters templated and installed so seams, sinks, and appliances land where the drawing said they would.",
      },
      {
        title: "Islands and storage",
        text: "An island for gathering, drawers that actually hold what you use, and tall storage where the room can take it.",
      },
      {
        title: "Hardware and finish",
        text: "Pulls, knobs, and the finish of the cabinet face, specified with the stone rather than added at the end.",
      },
      {
        title: "With the rest of the room",
        text: "On its own, or inside a kitchen remodel, a bath, or a home renovation. Plumbing and electrical stay coordinated when the layout needs them.",
      },
    ],
    faqs: [
      {
        q: "Do you design the cabinets as well as install them?",
        a: "Yes. Layout, door style, storage, and the countertop are one scope. We install what we design, so the stone and the cabinets are planned to meet.",
      },
      {
        q: "Can this be only cabinets and counters, without a full remodel?",
        a: "Yes. Cabinet and countertop work can be its own project. If the layout, plumbing, or electrical has to change, we say so before you commit.",
      },
      {
        q: "Do you install bathroom vanities and counters too?",
        a: "Yes. Vanities and stone in a bath are the same kind of work: designed together, then installed so the room lines up.",
      },
      {
        q: "Where do you install cabinets and countertops?",
        a: "Within about 45 miles of Tampa.",
      },
    ],
  },
  {
    slug: "tile-installation",
    name: "Tile installation",
    category: "Tile",
    eyebrow: "Tile",
    headline: "Tile installation",
    summary: "Floor tile, wall tile, showers, and backsplash, set with the rooms they meet.",
    description:
      "Tile is installed as part of the room, not as a finish dropped in at the end. Floors, walls, showers, and backsplashes are laid out with the grout, the pattern, and the surfaces around them. In a wet room, waterproofing comes before the tile.",
    image: "/gallery/subway-backsplash.webp",
    imageAlt: "Glossy white subway-tile backsplash above a white counter, gray cabinets, and a brass faucet",
    metaTitle: "Tile Installation in Tampa",
    metaDescription:
      "Tile installation in Tampa Bay. Floor tile, wall tile, showers, and kitchen and bath backsplash, set by one team.",
    includes: [
      {
        title: "Floor tile",
        text: "Tile floors laid out for the room and the doorways they meet, including the grout joint and the transition to the next surface.",
      },
      {
        title: "Wall tile",
        text: "Walls set plumb, with the pattern held from the first course so the field does not drift as it climbs.",
      },
      {
        title: "Showers",
        text: "[Shower walls, floors, niches, and benches](/services/shower-remodeling). Waterproofing is in place before the tile goes on.",
      },
      {
        title: "Backsplash",
        text: "Kitchen and bath backsplashes chosen with the counter and the light, then installed to the outlets, the hood, and the window.",
      },
      {
        title: "Pattern and layout",
        text: "Straight set, herringbone, or a quieter field. The layout is drawn before the first tile is cut.",
      },
      {
        title: "With a remodel",
        text: "On its own, or with a kitchen, a bathroom, new flooring, or a whole-home renovation. The same team owns the edges where materials meet.",
      },
    ],
    faqs: [
      {
        q: "Do you waterproof before the tile goes on?",
        a: "Yes, in showers and other wet areas. The tile is only as sound as what is behind it, so waterproofing is part of the installation.",
      },
      {
        q: "Can tile be its own project?",
        a: "Yes. A backsplash, a shower, or a tile floor can be its own scope. It is also a regular part of a kitchen or bathroom remodel.",
      },
      {
        q: "Which patterns do you install?",
        a: "Straight set, herringbone, and other patterns the room can hold. We lay the pattern out before we start cutting tile.",
      },
      {
        q: "Where do you install tile?",
        a: "Within about 45 miles of Tampa.",
      },
    ],
  },
  ...detailServices,
];

export type City = {
  slug: string;
  name: string;
  county: string;
  primary?: boolean;
  blurb: string;
  focus: string;
  neighborhoods: string[];
  nearby: string[];
  paragraphs: string[];
};

export const cities: City[] = [
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    primary: true,
    blurb: "Our home city. Kitchens, baths, and whole-home renovations.",
    focus:
      "In Tampa, a new layout usually matters more than new cabinet doors, especially in older houses and in condominiums where the sequence has to be planned.",
    neighborhoods: [
      "South Tampa",
      "Hyde Park",
      "Palma Ceia",
      "Bayshore Beautiful",
      "Beach Park",
      "Davis Islands",
      "Harbour Island",
      "Ballast Point",
      "Sunset Park",
      "Culbreath Isles",
      "Port Tampa",
      "Westshore",
      "SoHo",
      "Seminole Heights",
      "Tampa Heights",
      "Ybor City",
      "Channelside",
      "Downtown Tampa",
      "Carrollwood",
      "Forest Hills",
      "Northdale",
      "Westchase",
      "New Tampa",
      "Tampa Palms",
      "Lowry Park",
    ],
    nearby: ["town-n-country", "brandon", "clearwater", "st-pete"],
    paragraphs: [
      "Tampa is home. The houses are not one kind of house. A Hyde Park bungalow, a Davis Islands kitchen, a Seminole Heights bath, and a Westshore condominium each ask for a different sequence, and the finish still has to feel like it belongs to the person who lives there.",
      "We remodel kitchens, bathrooms, and whole homes across South Tampa, Hyde Park, Davis Islands, Seminole Heights, Westshore, Carrollwood, and the neighborhoods between them. Kitchen remodeling is the work we are asked for most. When the layout is wrong, new doors will not fix it. We start with the plan, then build it: cabinetry, countertops, backsplash, lighting, plumbing, electrical, and the last details.",
    ],
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    county: "Pinellas County",
    blurb: "Gulf-side homes, Florida rooms, and baths that live with salt air.",
    focus:
      "Clearwater projects often open a closed kitchen to the Florida room, or rebuild a bath with materials and ventilation that can live near the water.",
    neighborhoods: [
      "Clearwater Beach",
      "Sand Key",
      "Island Estates",
      "Harbor Oaks",
      "Mandalay",
      "Downtown Clearwater",
      "Skycrest",
      "Countryside",
      "High Point",
      "Coachman Ridge",
    ],
    nearby: ["st-pete", "tampa", "town-n-country"],
    paragraphs: [
      "Clearwater houses live with salt air, afternoon light, and a lot of years between remodels. Island Estates and Harbor Oaks have a different brief than a Countryside ranch, but the request is usually the same: a kitchen that works, or a bath that is actually finished, not just painted.",
      "We plan materials and ventilation with the gulf in mind, and we open kitchens that were closed off from the Florida room when that is what the house needs. The scope is the full remodel — design, demolition, trades, and finish — not a single swap of a faucet.",
    ],
  },
  {
    slug: "st-pete",
    name: "St. Petersburg",
    county: "Pinellas County",
    blurb: "St. Pete houses with good bones, and rooms ready for a real rebuild.",
    focus:
      "In St. Pete we keep the character of the house and rebuild the kitchen or bath that was last finished for a different decade.",
    neighborhoods: [
      "Downtown St. Pete",
      "Old Northeast",
      "Snell Isle",
      "Shore Acres",
      "Venetian Isles",
      "Historic Kenwood",
      "Grand Central",
      "Crescent Lake",
      "Roser Park",
      "Old Southeast",
      "Euclid St. Paul",
      "Bartlett Park",
      "Childs Park",
      "Bahama Shores",
      "Coquina Key",
      "Lakewood",
      "Broadwater",
      "Pinellas Point",
      "Pasadena",
      "Jungle Terrace",
      "Disston Heights",
      "Fossil Park",
      "Allendale",
      "Meadowlawn",
      "Crescent Heights",
    ],
    nearby: ["clearwater", "tampa"],
    paragraphs: [
      "St. Petersburg rewards restraint. Old Northeast, Snell Isle, and Kenwood have houses with good bones and kitchens or baths that were last finished for a different decade. Downtown condominiums add building rules, risers, and hours that have to be settled before anyone opens a wall.",
      "We keep what makes the house itself worth keeping, and we rebuild the rooms you use every day. Kitchens and baths are the center of that work. A whole-home renovation is the right scope when the rest of the house needs to catch up.",
    ],
  },
  {
    slug: "town-n-country",
    name: "Town 'n' Country",
    county: "Hillsborough County",
    blurb: "Single-story homes west of Tampa, ready for a full kitchen or primary bath.",
    focus:
      "Town 'n' Country remodels are usually a full kitchen or a primary bath: new layout, proper waterproofing, and finishes that feel current.",
    neighborhoods: ["Town 'n' Country", "Countryway", "Citrus Park", "Egypt Lake", "Leto", "Sweetwater"],
    nearby: ["tampa", "clearwater", "lutz"],
    paragraphs: [
      "Town 'n' Country is mostly single-story homes from the 1960s through the 1990s, west of Tampa. The rooms are straightforward, and the projects usually are too: a full kitchen, or a primary bath that needs more than a new mirror.",
      "We rebuild the layout, the waterproofing, and the finishes so the house feels current without pretending it was built last year. You get one team from the first conversation through the walkthrough.",
    ],
  },
  {
    slug: "wesley-chapel",
    name: "Wesley Chapel",
    county: "Pasco County",
    blurb: "Builder-grade kitchens and baths in master-planned communities.",
    focus:
      "Wesley Chapel homeowners usually want the builder package replaced: cabinets, counters, tile, and a layout they chose themselves.",
    neighborhoods: [
      "Wiregrass",
      "Seven Oaks",
      "Meadow Pointe",
      "Epperson",
      "WaterGrass",
      "Lexington Oaks",
      "Saddlebrook",
      "Union Park",
      "Cypress Creek",
      "New River",
      "Double Branch",
      "Quail Hollow",
    ],
    nearby: ["lutz", "land-o-lakes", "zephyrhills", "tampa"],
    paragraphs: [
      "Wesley Chapel grew up in master-planned communities — Wiregrass, Seven Oaks, Meadow Pointe, and the streets around them. A lot of these kitchens still have the builder's cabinets, the builder's counters, and a bath finished to a budget.",
      "We replace that package with a layout and materials you actually chose. Hall baths and primary baths are part of the same practice: waterproofing first, then tile, vanities, fixtures, and light. If the rest of the house needs to come along, we take that on as a home renovation.",
    ],
  },
  {
    slug: "lutz",
    name: "Lutz",
    county: "Hillsborough County",
    blurb: "Family kitchens on larger lots, planned around how the house is used.",
    focus:
      "Lutz kitchens are often the center of a family house. We plan the island, the pantry, and the light before we build.",
    neighborhoods: ["Lutz", "Cheval", "Lake Magdalene", "Avila", "Calusa", "Van Dyke"],
    nearby: ["land-o-lakes", "wesley-chapel", "tampa", "town-n-country"],
    paragraphs: [
      "Lutz homes often sit on larger lots, in and around Cheval and toward Lake Magdalene. The kitchen is the center of the house, and it needs to be planned for cooking, homework, and people standing around an island at the same time.",
      "We design that room before we build it, then carry the same decisions into the baths: materials that belong together, trades that are coordinated, and a schedule you can follow. Lutz is part of our regular Tampa Bay work.",
    ],
  },
  {
    slug: "zephyrhills",
    name: "Zephyrhills",
    county: "Pasco County",
    blurb: "One-story homes where the bath usually needs to be rebuilt, not painted.",
    focus:
      "In Zephyrhills, waterproofing comes before the new tile. Kitchens are typically a full remodel, trades included.",
    neighborhoods: ["Zephyrhills", "Zephyrhills West", "Zephyrhills South", "Crystal Springs", "Lake Bernadette"],
    nearby: ["wesley-chapel", "land-o-lakes"],
    paragraphs: [
      "Zephyrhills is east Pasco, and most of the homes are one story. Baths here usually fail in the place you cannot see. The tile can look tired while the waterproofing underneath is what actually needs to be rebuilt.",
      "We do that work properly, then put the room back together with fixtures and finishes you want to live with. Kitchens are typically a full remodel: cabinetry, countertops, backsplash, lighting, plumbing, and electrical, handled together.",
    ],
  },
  {
    slug: "land-o-lakes",
    name: "Land O' Lakes",
    county: "Pasco County",
    blurb: "Lakeside houses and newer communities north of Lutz.",
    focus:
      "Land O' Lakes projects run from a single kitchen to a primary suite. If you are near the edge of our radius, we will tell you plainly.",
    neighborhoods: [
      "Land O' Lakes",
      "Connerton",
      "Wilderness Lake Preserve",
      "Bexley",
      "Oakstead",
      "Concord Station",
      "Ballantrae",
      "Heritage Harbor",
      "Lake Padgett",
    ],
    nearby: ["lutz", "wesley-chapel", "zephyrhills"],
    paragraphs: [
      "Land O' Lakes sits north of Lutz, from older lakeside houses to communities such as Connerton and Wilderness Lake Preserve. Some projects are a single kitchen. Others are a primary suite, or a broader update once the original finishes no longer match the house.",
      "We are inside a 45-mile radius of Tampa, and we schedule this area as part of the regular practice. If you are near the edge, call. We would rather tell you yes or no on the phone than waste a visit.",
    ],
  },
  {
    slug: "lithia",
    name: "Lithia",
    county: "Hillsborough County",
    blurb: "Larger south Hillsborough homes, spa baths, and whole-home updates.",
    focus:
      "Lithia kitchens tend to be bigger, and primary baths are often asked to work like a quiet spa.",
    neighborhoods: ["Lithia", "FishHawk", "Alafia", "Boyette", "Pinecrest"],
    nearby: ["valrico", "riverview", "brandon"],
    paragraphs: [
      "Lithia and the south Hillsborough lots around it, including homes near FishHawk, tend to ask for more room rather than less. Kitchens are larger. Primary baths are often asked to work like a quiet spa. Whole-home updates show up when the original finishes have fallen behind the way the house is lived in.",
      "We still start the same way: listen, measure, and put a real scope on the table before demolition. Plumbing, electrical, and the finish are one project, not three contractors you have to introduce to each other.",
    ],
  },
  {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    blurb: "East-side kitchens first, then the baths in the same house.",
    focus:
      "Brandon is one of the busiest remodel areas east of Tampa, and the kitchen is the project we are asked for most.",
    neighborhoods: ["Brandon", "Bloomingdale", "Limona", "Buckhorn", "Providence Lakes", "Mango", "Dover", "Seffner"],
    nearby: ["valrico", "riverview", "tampa", "lithia"],
    paragraphs: [
      "Brandon, including Bloomingdale and Limona, is one of the busiest remodel areas east of Tampa. The call is usually a kitchen. The house may also need a hall bath or a primary bath in the same stretch of work.",
      "We treat the kitchen as the signature project: layout, cabinetry, stone, backsplash, lighting, and the trades behind them. You stay informed while it is happening. That is the part people remember after the dust is gone.",
    ],
  },
  {
    slug: "riverview",
    name: "Riverview",
    county: "Hillsborough County",
    blurb: "Replacing builder-grade kitchens and baths so they last.",
    focus:
      "Riverview work is usually a replacement of builder-grade cabinets, cultured marble, and basic tile with materials chosen for the long run.",
    neighborhoods: [
      "Riverview",
      "Summerfield",
      "Winthrop",
      "FishHawk Ranch",
      "Panther Trace",
      "River Hills",
      "Southbend",
      "Balm",
      "Gibsonton",
      "Apollo Beach",
    ],
    nearby: ["brandon", "valrico", "lithia"],
    paragraphs: [
      "Riverview has been growing quickly — Summerfield, Winthrop, FishHawk Ranch, and the newer streets around them. Builder-grade cabinets, cultured marble, and basic tile are what we are usually hired to replace.",
      "The goal is a kitchen and baths that still make sense in ten years, not a finish that only looks right for a month. When the whole house needs that same correction, we manage it from concept to completion.",
    ],
  },
  {
    slug: "valrico",
    name: "Valrico",
    county: "Hillsborough County",
    blurb: "Between Brandon and Lithia. Kitchen remodels lead the work.",
    focus:
      "In Valrico, the most requested scope is a kitchen: layout, stone, lighting, and cabinetry, with plumbing and electrical included.",
    neighborhoods: ["Valrico", "Bloomingdale", "Durant", "Dover", "Boyette", "Pinecrest"],
    nearby: ["brandon", "lithia", "riverview"],
    paragraphs: [
      "Valrico sits between Brandon and Lithia, a mix of 1990s houses and newer construction. Kitchen remodels are the most requested scope: a better layout, stone, lighting, and cabinetry, with plumbing and electrical brought along instead of left for later.",
      "Baths follow the same standard, from waterproofing through fixtures. If you want the rest of the house brought into the same finish, that is a home renovation, and we scope it with you before anything starts.",
    ],
  },
];

export const otherCityOption = "Other community within 45 miles of Tampa";

export const cityOptions = [...cities.map((city) => city.name), otherCityOption];

export type Project = {
  title: string;
  category: "Kitchen" | "Bathroom" | "Home" | "Flooring";
  image: string;
  alt: string;
  summary: string;
  /** object-position so a crop keeps the part of the room worth showing */
  focus: string;
};

export const projects: Project[] = [
  {
    title: "Columned island kitchen",
    category: "Kitchen",
    image: "/gallery/columned-island-kitchen.jpg",
    alt: "Open kitchen with a navy island, a white waterfall counter, oak upper cabinets, and a black barn door",
    summary: "A navy island in an open room, oak uppers on the range wall, and the floor carried through.",
    focus: "center 78%",
  },
  {
    title: "Herringbone oak room",
    category: "Flooring",
    image: "/gallery/herringbone-oak-room.jpg",
    alt: "Light oak herringbone floor in a white room with plantation shutters and a lantern chandelier",
    summary: "Herringbone oak through the room, meeting straight plank at the doorway.",
    focus: "center 70%",
  },
  {
    title: "Marble oak bath",
    category: "Bathroom",
    image: "/gallery/marble-oak-bath.jpg",
    alt: "Bathroom with a marble-look shower, a freestanding tub, and a long oak double vanity",
    summary: "Marble-look walls, a freestanding tub, and an oak vanity with two sinks.",
    focus: "center 55%",
  },
  {
    title: "White gold kitchen",
    category: "Kitchen",
    image: "/gallery/white-gold-kitchen.jpg",
    alt: "White kitchen with gold hardware, a marble island, glass pendants, and a view into the living room",
    summary: "White shaker cabinets, gold pulls, and a marble island open to the living room.",
    focus: "center 70%",
  },
  {
    title: "Oak vanity bath",
    category: "Bathroom",
    image: "/gallery/oak-vanity-bath.jpg",
    alt: "Long oak double vanity with a white counter, brass sconces, and a marble-look wall behind the tub",
    summary: "An oak vanity the length of the wall, with the marble tile carried to the tub.",
    focus: "center 58%",
  },
  {
    title: "Stool island kitchen",
    category: "Kitchen",
    image: "/gallery/stool-island-kitchen.jpg",
    alt: "White kitchen island with a marble top, three wood stools, and glass pendant lights",
    summary: "A marble island with seating, glass pendants, and white cabinets on the wall behind.",
    focus: "center 68%",
  },
  {
    title: "Open stool kitchen",
    category: "Kitchen",
    image: "/gallery/open-stool-kitchen.jpg",
    alt: "White kitchen with a marble island, wood stools, a stainless range, and a refrigerator",
    summary: "The island, the range wall, and the refrigerator planned as one open kitchen.",
    focus: "center 65%",
  },
  {
    title: "Marble freestanding tub",
    category: "Bathroom",
    image: "/gallery/marble-freestanding-tub.jpg",
    alt: "Freestanding tub against marble-look walls, with a glass shower and a frosted window",
    summary: "A freestanding tub set against book-matched marble tile, beside the walk-in shower.",
    focus: "center 62%",
  },
  {
    title: "Black rail stairs",
    category: "Flooring",
    image: "/gallery/black-rail-stairs.jpg",
    alt: "Oak stair treads with white risers and a black newel post and balusters",
    summary: "Oak treads, white risers, and a black rail from the landing down.",
    focus: "center 55%",
  },
  {
    title: "Scallop tile kitchen",
    category: "Kitchen",
    image: "/gallery/scallop-tile-kitchen.webp",
    alt: "White shaker kitchen with a blue scalloped tile backsplash, a quartz counter, and a stainless range",
    summary: "White shaker cabinets, a quartz counter, and a glazed scallop backsplash the length of the wall.",
    focus: "center 40%",
  },
  {
    title: "Linear drain shower",
    category: "Bathroom",
    image: "/gallery/linear-drain-shower.webp",
    alt: "Walk-in shower in marble-look tile with a hex mosaic floor, a linear drain, and a recessed niche",
    summary: "Marble-look walls, a hex mosaic floor, and a linear drain set inside the curb.",
    focus: "center 62%",
  },
  {
    title: "Light oak living room",
    category: "Flooring",
    image: "/gallery/light-oak-living.webp",
    alt: "Living room with light oak plank flooring running past a dark leather sofa",
    summary: "Light oak plank through the living room, with the boards running wall to wall.",
    focus: "center 68%",
  },
  {
    title: "Blue subway shower",
    category: "Bathroom",
    image: "/gallery/blue-subway-shower.webp",
    alt: "Shower with blue-gray subway tile, a two-shelf niche, a window, and a pebble mosaic floor",
    summary: "Stacked subway tile, a recessed niche, and a pebble floor pitched to the drain.",
    focus: "center 58%",
  },
  {
    title: "Oak stair treads",
    category: "Flooring",
    image: "/gallery/oak-stair-treads.webp",
    alt: "Oak stair treads with white risers, matching the oak floor at the bottom landing",
    summary: "Oak treads and white risers, with the same oak carried onto the floor below.",
    focus: "center 58%",
  },
  {
    title: "Waterfall island kitchen",
    category: "Kitchen",
    image: "/gallery/waterfall-island.webp",
    alt: "Kitchen island with a waterfall quartz counter, dark cabinets, a built-in oven, and light wood-look flooring",
    summary: "A waterfall stone island with the appliances built in, and new flooring running through the living space.",
    focus: "center 55%",
  },
  {
    title: "White island kitchen",
    category: "Kitchen",
    image: "/gallery/white-island-kitchen.webp",
    alt: "White kitchen with a peninsula island, stainless appliances, and three black pendant lights",
    summary: "Shaker cabinets, a peninsula for everyday meals, and lighting chosen with the stone.",
    focus: "center 48%",
  },
  {
    title: "White shaker kitchen",
    category: "Kitchen",
    image: "/gallery/white-shaker-kitchen.webp",
    alt: "White shaker kitchen with a stainless range, wood shelves, and light wood-look flooring",
    summary: "Shaker cabinets, open shelves, and a range wall planned as one run.",
    focus: "center 42%",
  },
  {
    title: "White shelf kitchen",
    category: "Kitchen",
    image: "/gallery/white-shelf-kitchen.webp",
    alt: "White kitchen cabinets with wood floating shelves, a microwave, and a stainless refrigerator",
    summary: "Cabinets, a stone counter, and shelves set into the same wall.",
    focus: "center 50%",
  },
  {
    title: "White corner kitchen",
    category: "Kitchen",
    image: "/gallery/white-corner-kitchen.webp",
    alt: "White L-shaped kitchen with black hardware, a subway tile backsplash, and a wall oven",
    summary: "An L-shaped run with the refrigerator, the oven, and the counter turned as one corner.",
    focus: "center 48%",
  },
  {
    title: "Navy island kitchen",
    category: "Kitchen",
    image: "/gallery/navy-island-kitchen.webp",
    alt: "Open kitchen with a black island, white counter, wood upper cabinets, and a sliding barn door",
    summary: "A black island in an open room, with the cabinets and the floor carried through.",
    focus: "center 55%",
  },
  {
    title: "Navy tile kitchen",
    category: "Kitchen",
    image: "/gallery/navy-tile-kitchen.webp",
    alt: "White shaker cabinets, a navy subway tile backsplash, wood floating shelves, and a brass faucet",
    summary: "Glazed navy tile, brass hardware, and open shelves set between the upper cabinets.",
    focus: "center 45%",
  },
  {
    title: "Bronze tile kitchen",
    category: "Kitchen",
    image: "/gallery/bronze-tile-kitchen.webp",
    alt: "Dark gray kitchen cabinets, a bronze glass subway backsplash, and a marble-look counter",
    summary: "Dark cabinets, a glass tile backsplash, and under-cabinet light on the stone.",
    focus: "center 42%",
  },
  {
    title: "Wood hood kitchen",
    category: "Kitchen",
    image: "/gallery/wood-hood-kitchen.webp",
    alt: "White kitchen with a wood range hood, a brick-look backsplash, and a gas cooktop",
    summary: "A wood hood, a brick-look backsplash, and a long drawer run under the counter.",
    focus: "center 48%",
  },
  {
    title: "Oak range kitchen",
    category: "Kitchen",
    image: "/gallery/oak-range-kitchen.webp",
    alt: "Oak kitchen cabinets, a stainless range and hood, and a marble-look backsplash",
    summary: "Oak cabinets with the range and the hood built into the same wall.",
    focus: "center 45%",
  },
  {
    title: "Subway tile backsplash",
    category: "Kitchen",
    image: "/gallery/subway-backsplash.webp",
    alt: "Light gray subway tile backsplash over a white counter, gray cabinets, and a black sink",
    summary: "Subway tile, a white counter, and brass hardware chosen together.",
    focus: "center 40%",
  },
  {
    title: "Pantry cabinets",
    category: "Kitchen",
    image: "/gallery/pantry-cabinets.webp",
    alt: "Tall white shaker pantry cabinets with brass pulls beside a stone counter",
    summary: "Floor-to-ceiling pantry cabinets, with the pulls lined up across both rows.",
    focus: "center 42%",
  },
  {
    title: "Teal herringbone shower",
    category: "Bathroom",
    image: "/gallery/teal-herringbone-shower.webp",
    alt: "Walk-in shower with a teal herringbone accent wall, two pebble niches, and a pebble floor",
    summary: "A herringbone accent wall, niches, and a pebble floor in one shower.",
    focus: "center 40%",
  },
  {
    title: "Marble corner shower",
    category: "Bathroom",
    image: "/gallery/marble-corner-shower.webp",
    alt: "Neo-angle glass shower with marble-look wall tile, a hex niche, and a white toilet",
    summary: "A corner shower in marble-look tile, with the niche and the floor in the same story.",
    focus: "center 45%",
  },
  {
    title: "Hex mosaic shower",
    category: "Bathroom",
    image: "/gallery/hex-mosaic-shower.webp",
    alt: "Glass shower with large white wall tile, a hex mosaic floor, and a white toilet beside it",
    summary: "Large wall tile and a hex mosaic floor, with the curb keeping the water in.",
    focus: "center 55%",
  },
  {
    title: "Marble walk-in shower",
    category: "Bathroom",
    image: "/gallery/marble-walk-in-shower.webp",
    alt: "Glass shower in marble-look tile with a hex floor, a herringbone floor outside, and a white vanity",
    summary: "A sliding-door shower in marble-look tile, set beside a herringbone floor.",
    focus: "center 45%",
  },
  {
    title: "Marble bench shower",
    category: "Bathroom",
    image: "/gallery/marble-bench-shower.webp",
    alt: "Marble subway tile shower with a built-in bench and a pebble floor",
    summary: "A bench, subway marble, and a pebble floor planned as one wet room.",
    focus: "center 50%",
  },
  {
    title: "Marble tub bath",
    category: "Bathroom",
    image: "/gallery/marble-tub-bath.webp",
    alt: "Bathroom with a marble accent wall over the tub, a white vanity, and a herringbone floor",
    summary: "A tub, a marble wall, and a herringbone floor in the same small bath.",
    focus: "center 48%",
  },
  {
    title: "Freestanding tub",
    category: "Bathroom",
    image: "/gallery/freestanding-tub.webp",
    alt: "White freestanding soaking tub, floor-mounted filler, patterned tile, and plantation shutters",
    summary: "A soaking tub set against patterned tile and shutters, with the filler planned into the floor.",
    focus: "center 55%",
  },
  {
    title: "Geometric floor bath",
    category: "Bathroom",
    image: "/gallery/geometric-vanity-bath.webp",
    alt: "Bathroom with a white vanity, an arched mirror, a glass shower, and a geometric tile floor",
    summary: "A vanity, a shower, and a geometric floor laid so the lines meet at the door.",
    focus: "center 55%",
  },
  {
    title: "Oak double vanity",
    category: "Bathroom",
    image: "/gallery/oak-double-vanity.webp",
    alt: "Light oak double vanity with a white counter, two oval mirrors, and a tall linen cabinet",
    summary: "A double vanity, linen storage, and light chosen for the mirrors.",
    focus: "center 42%",
  },
  {
    title: "Vertical tile tub",
    category: "Bathroom",
    image: "/gallery/vertical-tile-tub.webp",
    alt: "Gray vertical wall tile around a white tub, with a hex mosaic niche",
    summary: "Vertical tile around the tub, with a patterned niche in the same wall.",
    focus: "center 45%",
  },
  {
    title: "Herringbone shower floor",
    category: "Bathroom",
    image: "/gallery/herringbone-shower-floor.webp",
    alt: "Shower corner with gray herringbone wall tile and a gray hex mosaic floor around a square drain",
    summary: "Herringbone on the wall and hex mosaic on the floor, pitched to the drain.",
    focus: "center 62%",
  },
  {
    title: "Pebble accent shower",
    category: "Bathroom",
    image: "/gallery/pebble-shower.webp",
    alt: "Gray tile shower with a vertical pebble mosaic stripe, corner shelves, and a pebble floor",
    summary: "A pebble stripe in the wall, shelves, and a pebble floor in the same shower.",
    focus: "center 50%",
  },
  {
    title: "Patterned glass shower",
    category: "Bathroom",
    image: "/gallery/patterned-shower.webp",
    alt: "Frameless glass shower with a floral tile accent wall, pebble floor, and light oak vanity",
    summary: "A walk-in shower with a patterned wall, pebble floor, and a vanity in the same finish story.",
    focus: "center 45%",
  },
  {
    title: "Marble shower niches",
    category: "Bathroom",
    image: "/gallery/marble-shower-niches.webp",
    alt: "Marble-look shower walls with two niches, a slot window, and a pebble curb",
    summary: "Marble-look walls and two niches, photographed while the curb was still open.",
    focus: "center 42%",
  },
  {
    title: "Herringbone shower tile",
    category: "Bathroom",
    image: "/gallery/herringbone-shower-tile.webp",
    alt: "Shower in progress with white herringbone tile on one wall and square tile on the other",
    summary: "Herringbone on one wall and a stacked field on the other, set before the fixtures.",
    focus: "center 40%",
  },
  {
    title: "Checkerboard and wood",
    category: "Home",
    image: "/gallery/checkerboard-floor.webp",
    alt: "Large checkerboard tile floor stepping up to wood-look flooring and a dark kitchen",
    summary: "Two floors meeting on purpose: tile in the living space, wood-look in the kitchen beyond.",
    focus: "center 62%",
  },
  {
    title: "Navy wet bar",
    category: "Home",
    image: "/gallery/navy-wet-bar.webp",
    alt: "Black wet bar with gold hardware, wood shelves, a forest mural, and two beverage coolers",
    summary: "A wet bar with coolers, drawers, and shelves set against a painted wall.",
    focus: "center 48%",
  },
  {
    title: "Forest mural bar",
    category: "Home",
    image: "/gallery/forest-mural-bar.webp",
    alt: "Black cabinets and wood shelves framing a forest mural above a white counter",
    summary: "Cabinets and open shelves built around the mural, with the counter tying the run together.",
    focus: "center 45%",
  },
  {
    title: "Oak wet bar",
    category: "Home",
    image: "/gallery/oak-wet-bar.webp",
    alt: "Oak wet bar with a stone counter, a window, and two under-counter wine coolers",
    summary: "Oak cabinets, a stone top, and wine storage built into the lower run.",
    focus: "center 48%",
  },
  {
    title: "Laundry room",
    category: "Home",
    image: "/gallery/laundry-room.webp",
    alt: "Laundry room with white cabinets, gold hardware, a round mirror, and dark flooring",
    summary: "Cabinets, a utility sink, and hardware that match the rest of the house.",
    focus: "center 50%",
  },
  {
    title: "Stacked laundry",
    category: "Home",
    image: "/gallery/stacked-laundry.webp",
    alt: "Laundry room with a stacked washer and dryer, white cabinets, and wood-look flooring",
    summary: "A stacked pair, an L of cabinets, and a counter for folding.",
    focus: "center 45%",
  },
  {
    title: "Laundry sink",
    category: "Home",
    image: "/gallery/laundry-sink.webp",
    alt: "White laundry cabinets with a gray stone counter, an undermount sink, and a round mirror",
    summary: "A utility sink and cabinets, with the hardware matching the rest of the room.",
    focus: "center 48%",
  },
  {
    title: "Patterned stairs",
    category: "Home",
    image: "/gallery/patterned-stairs.webp",
    alt: "Wood stair treads with black-and-white patterned tile risers and a wood handrail",
    summary: "Wood treads and patterned risers, with the rail left in place.",
    focus: "center 40%",
  },
  {
    title: "Hickory upstairs",
    category: "Flooring",
    image: "/gallery/hickory-upstairs.webp",
    alt: "Wide-plank hickory hardwood floor in an upstairs hall with arched openings",
    summary: "Character hardwood through the hall and the rooms that open off it.",
    focus: "center 60%",
  },
  {
    title: "Hardwood living room",
    category: "Flooring",
    image: "/gallery/hardwood-living.webp",
    alt: "Living room with newly finished warm hardwood floors, a fireplace, and a door to the porch",
    summary: "A living room brought back with a continuous hardwood floor from the fireplace to the porch door.",
    focus: "center 58%",
  },
  {
    title: "Oak bedroom floor",
    category: "Flooring",
    image: "/gallery/oak-bedroom-floor.webp",
    alt: "Bedroom with light oak plank flooring, a tray ceiling, and a ceiling fan",
    summary: "Oak plank through a bedroom, run wall to wall under the tray ceiling.",
    focus: "center 62%",
  },
  {
    title: "Vaulted living floor",
    category: "Flooring",
    image: "/gallery/vaulted-living-floor.webp",
    alt: "Open living room with light wood-look plank flooring, a vaulted ceiling, and a pass-through kitchen",
    summary: "One continuous floor from the living room through to the kitchen pass-through.",
    focus: "center 58%",
  },
  {
    title: "Wood-look tile",
    category: "Flooring",
    image: "/gallery/wood-look-tile.webp",
    alt: "Wood-look plank tile floor seen through a doorway, with a shaded window beyond",
    summary: "Plank tile laid through the room, with the doorway showing how the lines run.",
    focus: "center 65%",
  },
];

export const process = [
  {
    n: "01",
    title: "Listen",
    text: "We come to the house, measure, and talk through how you actually use the room. You should leave that visit knowing what is possible.",
  },
  {
    n: "02",
    title: "Design",
    text: "Layout and materials come next. Cabinets, stone, tile, fixtures, and lighting are chosen together, not one sample at a time.",
  },
  {
    n: "03",
    title: "Scope",
    text: "You get a written scope before demolition: what is included, how the trades are sequenced, and what the schedule depends on.",
  },
  {
    n: "04",
    title: "Build",
    text: "Our team coordinates demolition, plumbing, electrical, waterproofing where a wet room needs it, and the finish installation.",
  },
  {
    n: "05",
    title: "Walk through",
    text: "We review the room with you, detail by detail, before we call the project complete.",
  },
];

export const reasons = [
  {
    title: "You are heard",
    text: "The renovation should feel clear while it is happening, not only impressive when it is over. We explain the plan, the materials, and what comes next.",
  },
  {
    title: "Kitchens, first",
    text: "Kitchen remodeling is the work Tampa Bay homeowners call us for most. Bathrooms and whole-home renovations are held to that same standard.",
  },
  {
    title: "One team, start to finish",
    text: "Design, demolition, plumbing, electrical, waterproofing, tile, cabinetry, countertops, fixtures, and the last details. You do not manage the handoffs.",
  },
  {
    title: "Communication you can follow",
    text: "You should know what is being built and when the next step happens. Surprises belong in the design, not in the schedule.",
  },
  {
    title: "Licensed, and local",
    text: "Florida contractor license CBC1270738. Based in Tampa. We work within about 45 miles.",
  },
  {
    title: "6:00 AM – 11:00 PM",
    text: "Call (813) 240-5570 during those hours. If you would rather write, the estimate form and office@valora-construction.com both reach the office.",
  },
];

export const commercial = {
  href: "/services/commercial-general-contractor",
  name: "Commercial General Contractor",
};

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function cityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}
