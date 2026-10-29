import type { DetailBlock } from "@/lib/serviceDetails";

/*
 * Homepage copy from the client's "Homepage - Page Content & Schema" document (Oct 2026).
 * Not used from the document:
 * - "or see the before and after photos": /before-and-after does not exist on the site.
 * - "[Widget: Google Business Profile description]": no description text was supplied.
 */

const DBPR = "https://www.myfloridalicense.com/";
const GOOGLE_REVIEWS = "https://maps.app.goo.gl/SNEs62g4isPy1NJD8";

export const home = {
  metaTitle: "Home Remodeling in Tampa, FL - Whole Home Renovation - Valora",
  metaDescription:
    "Home remodeling and whole home renovation in Tampa, FL: kitchens, baths, floors, and every room in between, by one licensed team. Call (813) 240-5570.",
  h1: "Home Remodeling & Whole Home Renovation in Tampa, FL",
  subtitle: "Kitchens, bathrooms, floors, and every room in between, designed and built by one licensed, family-owned Tampa team",
  intro:
    "Maybe the kitchen still has the builder's oak cabinets. Maybe the bathrooms haven't changed since the house was built, and the floors switch material every time you walk through a doorway. You've thought about fixing it one project at a time, but every contractor handles a single piece, and you end up managing all of them. Valora Construction & Remodeling plans and builds your home remodel as one project, with one team, one written scope, and one number to call.",
  trust: ["Florida License CBC1270738", "5-Star Google Reviews", "Family-Owned in Tampa", "Open Daily 6:00 AM to 11:00 PM"],
  estimate: {
    title: "Tell Us What Isn't Working",
    text: "Call Valora Construction & Remodeling at (813) 240-5570 or request an estimate online. We'll come to the house, measure, and give you an honest read on what's possible.",
  },
  definition: {
    kind: "prose",
    kicker: "Whole home",
    title: "What Is Whole Home Remodeling?",
    paragraphs: [
      "Whole home remodeling updates several rooms or the entire interior of a house under one plan and one contract. It can include new kitchens and bathrooms, flooring throughout, reworked layouts, and updated plumbing, electrical, lighting, and finishes. Planning it all together keeps materials consistent from room to room and lets the trades work in a logical order.",
    ],
  } satisfies DetailBlock,
  moving: {
    kind: "list",
    kicker: "Remodel or move?",
    title: "When Remodeling Makes More Sense Than Moving",
    intro:
      "Most of our clients like their neighborhood, their street, and their lot. What they don't like is how the house works day to day. A home remodel fixes that without a moving truck. Homeowners usually call us when:",
    items: [
      "The kitchen is closed off from the living room, so whoever cooks misses the conversation",
      "The bathrooms feel dated or cramped, or a shower has started to leak",
      "Floors change from tile to carpet to laminate from one room to the next",
      "They just bought an older home and want to update it before moving in",
      "They plan to stay for years and want a house that works as the family changes",
    ],
  } satisfies DetailBlock,
  services: {
    title: "Home Remodeling Services in Tampa Bay",
    lede: "Every service below can stand on its own or become part of a whole home renovation.",
    overrides: {
      "/services/kitchen-remodel": {
        title: "Kitchen Remodeling in Tampa",
        text: "Layout, cabinets, stone, backsplash, lighting, and the plumbing and electrical behind them. Kitchen remodeling is the work our clients call us for most.",
      },
      "/services/bathroom-remodel": {
        title: "Bathroom Remodeling",
        text: "From demolition and waterproofing to vanities and glass, our bathroom remodeling covers the whole room.",
      },
      "/services/home-renovation": {
        title: "Interior Home Renovation",
        text: "Open up a floor plan, refresh dated rooms, or update the entire interior with our interior home renovation service.",
      },
      "/services/flooring": {
        title: "Flooring Installation",
        text: "Flooring installation in LVP, laminate, hardwood, engineered wood, and tile, plus refinishing for floors worth saving.",
      },
      "/services/cabinet-countertop": {
        title: "Cabinet and Countertop Installation",
        text: "Cabinets and countertops designed together and installed so doors, drawers, and stone line up.",
      },
      "/services/kichen-cabinet-contractor": {
        title: "Kitchen Cabinet Refacing",
        text: "New doors, drawer fronts, and veneer on solid cabinet boxes with kitchen cabinet refacing.",
      },
      "/services/tile-installation": {
        title: "Tile Installation",
        text: "Tile installation for floors, walls, backsplashes, and showers, laid out to meet cleanly at every edge.",
      },
      "/services/shower-remodeling": {
        title: "Shower Remodeling",
        text: "Walk-in showers and tub-to-shower conversions through our shower remodeling service, waterproofed before any tile goes up.",
      },
      "/services/room-additions": {
        title: "Room Additions",
        text: "Add a bedroom suite, family room, or kitchen bump-out with room additions built to match the original house.",
      },
      "/services/garage-conversion": {
        title: "Garage Conversion",
        text: "Turn unused garage space into a bedroom, office, or in-law suite with a permitted garage conversion.",
      },
      "/services/outdoor-kitchen-construction": {
        title: "Outdoor Kitchen Construction",
        text: "Grill islands, weather-ready counters, and lanai bars from our outdoor kitchen construction team.",
      },
      "/services/commercial-general-contractor": {
        title: "Commercial General Contracting",
        text: "Build-outs and renovations for local businesses through our commercial general contractor service.",
      },
    },
  },
  oneProject: {
    kind: "features",
    kicker: "One plan",
    title: "Whole Home Remodeling, Planned as One Project",
    intro:
      "Remodeling room by room with different contractors often means mismatched finishes and walls opened twice. Planning the whole house at once avoids both.",
    items: [
      {
        title: "One Design From Room to Room",
        text: "Flooring runs continuously through the house. Trim, door hardware, and light fixtures share one finish family. The kitchen and bathrooms feel like they belong in the same home.",
      },
      {
        title: "Trades in the Right Order",
        text: "Demolition, rough plumbing and electrical, inspections, drywall, flooring, cabinets, tile, and paint happen in one planned sequence, so nobody tears out finished work to run a pipe.",
      },
      {
        title: "One Permit Plan",
        text: "We identify every permit the project needs up front and coordinate inspections across all the rooms, instead of pulling them piecemeal.",
      },
      {
        title: "A Budget You Can Read",
        text: "Your written scope breaks the cost out room by room. If you'd rather phase the work over time, you can see exactly what each phase includes.",
      },
    ],
  } satisfies DetailBlock,
  process: {
    title: "How Our Home Remodeling Process Works",
    steps: [
      {
        n: "01",
        title: "Listen",
        text: "We visit your home, take measurements, and ask how each room really gets used, from busy weekday mornings to holiday dinners.",
      },
      {
        n: "02",
        title: "Design",
        text: "We choose the layout and materials as a set: cabinets, stone, tile, fixtures, flooring, and lighting, compared side by side.",
      },
      {
        n: "03",
        title: "Scope",
        text: "Before demolition, you receive a written scope that lists what's included, how the trades are ordered, and what the timeline depends on.",
      },
      {
        n: "04",
        title: "Build",
        text: "Our team runs demolition, plumbing, electrical, waterproofing, and finish work, and we keep you posted at each milestone.",
      },
      {
        n: "05",
        title: "Walk through",
        text: "We walk every room with you and check each detail before the project is complete.",
      },
    ],
  },
  about: {
    title: "Meet Amanda Neve, Owner of Valora Construction",
    paragraphs: [
      "Amanda Neve started renovating homes in 2020, flipping houses in Knoxville, Tennessee. She came to construction from interior design, and the work quickly became more than a creative outlet: it turned into a real appreciation for craftsmanship and the details that make a house feel like home.",
      "After moving to Tampa, she founded Valora Construction & Remodeling as a local, family-owned company. To Amanda, luxury isn't about the most expensive materials. It's about thoughtful design, careful workmanship, and making sure every detail feels right. She wants every client to come away feeling confident in the process and excited about the result.",
    ],
  },
  why: {
    kind: "list",
    kicker: "Why Valora",
    title: "Why Tampa Homeowners Choose Valora Construction & Remodeling",
    items: [
      {
        lead: "You stay informed.",
        text: "Our promise is simple: you should feel heard, informed, and excited about your renovation, not left guessing about what happens next.",
      },
      {
        lead: "One team, start to finish.",
        text: "Design, demolition, plumbing, electrical, waterproofing, tile, cabinetry, countertops, and fixtures all run through us.",
      },
      {
        lead: "Licensed and local.",
        text: `Florida contractor license CBC1270738, which you can verify on the [Florida DBPR portal](${DBPR}). We're based in Tampa and work within about 45 miles.`,
      },
      {
        lead: "Design-led remodeling.",
        text: "An interior design background shapes every material choice and layout decision.",
      },
      {
        lead: "Kitchens first.",
        text: "The room homeowners ask us about most gets our deepest expertise, and every other room is held to the same standard.",
      },
      {
        lead: "Easy to reach.",
        text: "Call any day from 6:00 AM to 11:00 PM and a member of our team answers.",
      },
    ],
  } satisfies DetailBlock,
  projects: {
    title: "Recent Home Remodeling Projects",
    lede: "Our portfolio includes a waterfall island kitchen, a columned island kitchen with a navy base, a marble walk-in shower, a teal herringbone shower, herringbone oak flooring, oak stair treads, a navy wet bar, and a renovated laundry room. [Browse our projects](/projects).",
  },
  tampaBay: {
    kind: "features",
    kicker: "Tampa Bay homes",
    title: "Remodeling Homes Across Tampa Bay",
    intro: "Tampa has housing from every era, and each one brings different work behind the walls.",
    items: [
      {
        title: "Historic Bungalows in Seminole Heights and Tampa Heights",
        text: "Older homes on raised wood floors often need plumbing and electrical updates before the finishes go in. Homes inside historic districts also go through design review for exterior changes.",
      },
      {
        title: "Mid-Century Block Homes in South Tampa and Town 'n' Country",
        text: "Concrete block ranch homes built from the 1950s through the 1970s often have original cast iron drains under the slab and small, closed-off kitchens that open up well with the right beam.",
      },
      {
        title: "1990s and 2000s Homes in Brandon, Riverview, and Valrico",
        text: "These homes usually have solid structure and dated builder-grade finishes, which makes them strong candidates for kitchen, bath, and flooring updates throughout.",
      },
      {
        title: "Newer Communities in Wesley Chapel, Lutz, and Lithia",
        text: "Master-planned neighborhoods often require HOA approval for exterior work. We prepare the drawings and samples the board asks for.",
      },
      {
        title: "Condos in Downtown Tampa, St. Petersburg, and Clearwater",
        text: "Condo associations set rules for work hours, water shutoffs, and insurance. We plan around them before demolition day.",
      },
    ],
    outro:
      "Whatever the age of your home, Tampa's humidity and storm season shape our choices: moisture-resistant materials in wet rooms, proper ventilation, and wind-rated windows and doors whenever we change an opening.",
  } satisfies DetailBlock,
  areas: {
    title: "Areas We Serve",
    lede: "We remodel homes in Tampa and about 45 miles around it.",
    label: "Home Remodeling in",
  },
  visit: {
    title: "Visit or Contact Valora Construction & Remodeling",
  },
  faqTitle: "Common Questions About Home Remodeling in Tampa",
  faqs: [
    {
      q: "How much does a home remodel cost in Tampa?",
      a: "Cost depends on how many rooms you're changing, whether walls, plumbing, or electrical move, the materials you choose, the condition of what's behind the walls, and permit fees. A kitchen and two baths cost far less than a full interior with a new layout. We give you a written scope with costs broken out by room after we visit your home.",
    },
    {
      q: "How long does a whole home remodel take?",
      a: "It depends on the size of the project, permit review, material lead times for items like cabinets and stone, and the number of inspections. A single room moves much faster than a full interior. Your written scope lays out the sequence and what the schedule depends on before demolition starts.",
    },
    {
      q: "Can I live in my house during a whole home renovation?",
      a: "Sometimes. If we're working on a few rooms, many families stay and we phase the work so a bathroom and a basic kitchen setup stay usable. When the work touches every room or the only kitchen and bath at once, moving out for part of the project is often easier and faster. We plan that with you up front.",
    },
    {
      q: "Do I need a permit to remodel my house in Tampa?",
      a: "Most remodels that change plumbing, electrical, structure, or layout need permits, while cosmetic work like painting or replacing cabinets in place usually doesn't. Inside city limits, permits come from the City of Tampa; in unincorporated areas like Brandon and Riverview, from Hillsborough County. We pull the permits our work requires.",
    },
    {
      q: "Is it cheaper to remodel your whole house at once?",
      a: "Often, yes. Doing several rooms together means one mobilization, one demolition phase, shared inspections, and trades that come once instead of several times. It also avoids redoing finished work later. If the budget calls for phases, we plan the order so early work doesn't get torn out by later projects.",
    },
  ],
  final: {
    title: "Build, Renovate, Elevate: Start Your Home Remodel",
    text: "Your house should fit the way you live now. Tell us what bothers you about it, and we'll show you how a home remodel can turn it into a home you truly love.",
    closing: `Call Valora Construction & Remodeling at (813) 240-5570 or [request your estimate online](/contact). Want to hear from past clients first? [Read our Google reviews](${GOOGLE_REVIEWS}).`,
  },
};
