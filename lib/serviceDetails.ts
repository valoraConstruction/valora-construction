import type { Service } from "@/lib/content";

/*
 * Long-form service pages. Copy, metadata, FAQs and schema facts come from the
 * client's content documents (Oct 2026). Inline links use [anchor](href); the
 * same anchors and targets as the source documents.
 */

const HCFL_PERMITS =
  "https://hcfl.gov/en/residents/property-owners-and-renters/homeowner-permits/permits-for-homeowners";
const TAMPA_ADU = "https://tampa.gov/ADU";
const FEMA_MAP = "https://msc.fema.gov/portal/home";
const DBPR = "https://www.myfloridalicense.com/";
const FL_BUILDING = "https://www.floridabuilding.org/";
/** Google Business Profile listing (same as site.maps; not imported to avoid a content <-> serviceDetails import cycle). */
const GOOGLE_REVIEWS = "https://maps.app.goo.gl/SNEs62g4isPy1NJD8";

export type Img = { src: string; alt: string; position?: string };

export type LeadItem = { lead: string; text: string };

export type DetailBlock =
  | { kind: "prose"; kicker: string; title: string; paragraphs: string[] }
  | {
      kind: "list";
      kicker: string;
      title: string;
      intro?: string;
      items: (string | LeadItem)[];
      ordered?: boolean;
      outro?: string;
      second?: { intro: string; items: string[]; outro?: string };
    }
  | { kind: "cards"; kicker: string; title: string; intro?: string; items: { title: string; text: string }[] }
  | { kind: "features"; kicker: string; title: string; intro?: string; items: { title: string; text: string }[]; outro?: string }
  | {
      kind: "table";
      kicker: string;
      title: string;
      intro?: string;
      columns: string[];
      rows: { label: string; cells: string[] }[];
    };

export type ServiceDetail = {
  /** Outlined display word used in the hero and intro. */
  word: string;
  h1: string;
  subtitle: string;
  trust: string[];
  hero: Img;
  portrait: Img;
  estimate: { title: string; text: string };
  sections: DetailBlock[];
  process: { title: string; steps: { title: string; text: string }[]; image: Img };
  why: { title: string; items: { title: string; text: string }[] };
  gallery: { title: string; lede: string; items: (Img & { caption: string })[] };
  local?: DetailBlock;
  related: { title: string; items: { slug: string; label: string; text: string }[] };
  areas: { title: string; text: string; label: string; cities: string[]; more: string };
  faqTitle: string;
  faqImage: Img;
  /** closing: the source documents' last line under the final call to action. */
  final: { title: string; text: string; closing: string };
};

const shower: Service = {
  slug: "shower-remodeling",
  name: "Shower remodel",
  category: "Shower",
  eyebrow: "Showers",
  headline: "Shower remodeling",
  summary:
    "Walk-in showers and tub-to-shower conversions, waterproofed before any tile goes up.",
  description:
    "Grout that never looks clean. A tile that sounds hollow when you tap it. A musty smell that comes back a week after you scrub. In Tampa's humidity, a shower that leaks behind the tile can rot framing and grow mold long before a stain shows up. Valora Construction & Remodeling rebuilds your shower from the studs or slab out, so the tile you choose has a sound, waterproofed wall behind it.",
  image: "/gallery/patterned-tile-shower.webp",
  imageAlt: "Walk-in shower with patterned wall tile, a pebble floor, and a frameless glass door",
  metaTitle: "Shower Remodeling in Tampa, FL - Walk-In Showers - Valora",
  metaTitleAbsolute: true,
  metaDescription:
    "Walk-in showers, tub-to-shower conversions, and custom tile showers in Tampa, FL, waterproofed before the tile goes on. Call Valora at (813) 240-5570.",
  includes: [
    {
      title: "Tub-to-Shower Conversions",
      text: "Most homes have at least one tub that only ever gets used as a shower. Replacing it with a walk-in shower removes the step-over, opens up floor space, and makes room for a bench or a wider glass panel. Plumbing code calls for a larger drain on a shower than on a tub, so the drain usually moves and gets upsized. We plan that before demolition.",
    },
    {
      title: "Walk-In and Curbless Showers",
      text: "A curbless shower lets the bathroom floor run straight into the shower with no step at all. On a concrete slab, that usually means recessing the slab where the shower sits so the floor can slope to the drain. It takes more work than a standard curb, and we explain exactly what's involved before you commit.",
    },
    {
      title: "Custom Tile Showers",
      text: "Herringbone walls, hex mosaic floors, marble, subway tile, pebble accents. Our [tile installation](/services/tile-installation) crew lays out patterns so they meet cleanly at corners and niches instead of ending in thin slivers. Large-format porcelain cuts down on grout lines, while small mosaics give your feet more grip.",
    },
    {
      title: "Shower Pan Replacement and Waterproofing",
      text: "The pan and membrane are the parts you never see and the parts that matter most. We install a sheet or liquid-applied waterproofing system over the walls and floor, with a sloped mortar bed or a preformed tray underneath, so water heads to the drain instead of the framing. A new pan should hold water through a flood test before any tile covers it.",
    },
    {
      title: "Niches, Benches, and Linear Drains",
      text: "A niche sized for your bottles, a built-in or floating bench, and a linear drain that lets the floor slope in one direction so you can use large tile. We plan these at framing, when they're simple to add.",
    },
    {
      title: "Frameless Glass Enclosures",
      text: "Frameless panels and doors use thick tempered glass with minimal hardware, which keeps the tile in full view. The glass is measured after the tile is finished and then fabricated, so it's usually the last piece we install.",
    },
    {
      title: "Accessible and Aging-in-Place Showers",
      text: "A low or zero threshold, solid blocking in the walls for grab bars, a handheld shower on a slide bar, a bench, and a valve you can reach without stepping into cold water. These details cost little to add during a remodel and a lot to add later.",
    },
  ],
  faqs: [
    {
      q: "How much does it cost to remodel a shower in Tampa?",
      a: "Price depends on the shower's size, whether the plumbing moves, the waterproofing system, tile type and pattern, the glass, and how much hidden damage turns up behind the old walls. Large-format porcelain and simple layouts cost less to install than mosaics and herringbone. You get a written scope with your estimate, so you can see what each choice changes.",
    },
    {
      q: "How long does a shower remodel take?",
      a: "Demolition and plumbing move quickly, while waterproofing, tile setting, and grout need time to cure between steps. Frameless glass is measured after the tile is done and then fabricated, so it's often installed on a later visit. Your written scope lays out the expected sequence.",
    },
    {
      q: "Is it worth converting a tub to a walk-in shower?",
      a: "For many households, yes. A walk-in shower is easier to step into, easier to clean, and often makes a small bathroom feel larger. If your home has only one tub, think about who uses it, because families with young children often want to keep one tub somewhere in the house.",
    },
    {
      q: "Do I need a permit to remodel a shower?",
      a: "It depends on the work. Hillsborough County notes that a bathroom remodel involving plumbing will likely need a permit, while tile and cabinet work alone likely won't. Replacing a valve, moving a drain, or adding electrical usually triggers one. We confirm the requirement with your city or county and pull permits when they're needed.",
    },
    {
      q: "What is the best waterproofing for a tiled shower?",
      a: "Tile and grout aren't waterproof, and neither is cement board. The real water barrier is the membrane behind the tile: a bonded sheet membrane or a liquid-applied membrane, installed as a complete system with matching drain and corner pieces. Either type performs well when it's installed to the manufacturer's instructions, and the right one depends on your shower's design.",
    },
  ],
  detail: {
    word: "Shower",
    h1: "Shower Remodeling in Tampa, FL",
    subtitle: "Walk-in showers, tile showers, and tub-to-shower conversions, waterproofed before the tile goes on",
    trust: [
      "Licensed Florida contractor, CBC1270738",
      "Waterproofing included in every tiled shower we build",
      "Owner-led design with an interior design background",
      "Open 6:00 AM to 11:00 PM, seven days a week",
    ],
    hero: {
      src: "/gallery/marble-shower-bath.webp",
      alt: "Marble-look walk-in shower with a glass enclosure beside a freestanding tub and an oak double vanity",
      position: "18% center",
    },
    portrait: {
      src: "/gallery/patterned-tile-shower.webp",
      alt: "Walk-in shower with patterned wall tile, a pebble floor, and a frameless glass door",
      position: "center",
    },
    estimate: {
      title: "Ready for a Shower You Actually Like Using?",
      text: "Call Valora Construction & Remodeling at (813) 240-5570 or schedule an estimate online. Tell us what bothers you about the shower you have now, and we'll start there.",
    },
    sections: [
      {
        kind: "prose",
        kicker: "The scope",
        title: "What Does a Shower Remodel Include?",
        paragraphs: [
          "A shower remodel removes the old tile, pan, or fiberglass unit down to the framing or slab, repairs any damaged wood or drywall, and rebuilds the shower with a new valve, drain, waterproofing membrane, tile, and glass enclosure. Most projects also add a niche, a bench, or a handheld shower head while the walls are open.",
        ],
      },
      {
        kind: "list",
        kicker: "Warning signs",
        title: "Signs Your Shower Needs More Than New Grout",
        intro:
          "Regrouting fixes stained grout. It does nothing for water that has already found its way behind the wall. Call for an inspection if you notice any of these:",
        items: [
          "Loose, cracked, or hollow-sounding tiles",
          "Grout or caulk that cracks again soon after you repair it",
          "Soft or swollen drywall or baseboard just outside the shower",
          "A water stain on the ceiling below an upstairs shower",
          "Mold or mildew that returns no matter how often you clean",
          "A fiberglass or acrylic pan that flexes, cracks, or holds standing water",
          "A tub-shower combo nobody has used as a tub in years",
          "A tall tub wall or curb that's getting hard to step over",
        ],
      },
      {
        kind: "cards",
        kicker: "What we build",
        title: "Shower Remodeling Services We Offer",
        items: [],
      },
      {
        kind: "list",
        kicker: "Design details",
        title: "Shower Design Details That Make a Difference",
        intro:
          "The shower is one of the hardest-working fixtures in the house, so small decisions add up over years of daily use.",
        items: [
          {
            lead: "The valve.",
            text: "Pressure-balancing or thermostatic mixing valves keep the temperature steady when someone flushes a toilet, and plumbing code requires anti-scald protection in showers.",
          },
          {
            lead: "Ventilation.",
            text: "An exhaust fan vented outdoors, not into the attic, pulls humid air out before it settles into grout and drywall.",
          },
          {
            lead: "Tile choice.",
            text: "Porcelain resists stains and absorbs very little water. Natural marble needs sealing and can etch from acidic cleaners.",
          },
          { lead: "Floor grip.", text: "Smaller floor tiles mean more grout lines and better traction underfoot." },
          {
            lead: "Lighting.",
            text: "A wet-rated recessed light over the shower lets you actually see the tile you paid for.",
          },
          {
            lead: "Hard water.",
            text: "Much of Tampa Bay has hard water that spots glass. A protective glass coating and a squeegee by the door keep it clear longer.",
          },
        ],
      },
    ],
    process: {
      title: "Our Shower Remodeling Process",
      image: {
        src: "/gallery/marble-shower-tub.webp",
        alt: "Marble-look tile shower with a glass panel and a freestanding tub under a frosted window",
        position: "center 55%",
      },
      steps: [
        { title: "Listen", text: "We look at the shower, ask what you'd change, and check for signs of hidden water damage." },
        {
          title: "Design",
          text: "Size, layout, tile, fixtures, and glass are chosen together, so the finishes read as one design instead of a pile of separate samples.",
        },
        {
          title: "Scope",
          text: "A written scope covers demolition, plumbing changes, the waterproofing method, tile, and glass, plus what the schedule depends on.",
        },
        {
          title: "Build",
          text: "We demolish, repair framing, move plumbing if needed, waterproof, test, tile, and set fixtures. Glass follows once it's fabricated.",
        },
        {
          title: "Walk through",
          text: "We check every grout line, caulk joint, and fixture with you before we call the shower finished.",
        },
      ],
    },
    why: {
      title: "Why Tampa Homeowners Choose Valora for Shower Remodels",
      items: [
        {
          title: "Waterproofing Is Part of the Job, Not an Upgrade",
          text: "Every tiled shower we build gets a full waterproofing system. The finish is only as good as what sits behind it, so we never treat the membrane as an add-on line item.",
        },
        {
          title: "Design With an Eye for Detail",
          text: "Owner Amanda Neve brings an interior design background to every bathroom. That shows up in where the niche lands, how the tile pattern meets the glass, and whether the metal finishes match the vanity across the room.",
        },
        {
          title: "Showers We've Already Built",
          text: "Our recent work includes a linear drain shower, a marble bench shower, a teal herringbone shower with pebble niches, a hex mosaic shower, and a marble walk-in shower. [See our projects](/projects) to compare styles.",
        },
        {
          title: "Condo Experience",
          text: "Condo bathrooms come with association rules about work hours, water shutoffs, risers, and insurance certificates. We plan for those before demolition starts.",
        },
        {
          title: "A Real Person on the Phone",
          text: "Call (813) 240-5570 any day between 6:00 AM and 11:00 PM and you'll reach our team, not a call center.",
        },
      ],
    },
    gallery: {
      title: "Showers from recent projects.",
      lede: "Linear drains, marble benches, herringbone, hex mosaic, and walk-in showers from our recent bathroom work.",
      items: [
        {
          src: "/gallery/linear-drain-shower.webp",
          alt: "Walk-in shower with a linear drain along the back wall and large-format tile",
          caption: "Linear drain shower",
        },
        {
          src: "/gallery/marble-bench-shower.webp",
          alt: "Marble-look shower with a built-in bench and a glass enclosure",
          caption: "Marble bench shower",
        },
        {
          src: "/gallery/teal-herringbone-shower.webp",
          alt: "Shower wall in teal herringbone tile with pebble-lined niches",
          caption: "Teal herringbone shower",
        },
        {
          src: "/gallery/hex-mosaic-shower.webp",
          alt: "Shower floor and walls finished in small hex mosaic tile",
          caption: "Hex mosaic shower",
        },
        {
          src: "/gallery/marble-walk-in-shower.webp",
          alt: "Marble-look walk-in shower with a frameless glass panel",
          caption: "Marble walk-in shower",
        },
        {
          src: "/gallery/patterned-shower.webp",
          alt: "Walk-in shower with patterned wall tile, a pebble floor, and brushed brass fixtures",
          caption: "Patterned tile shower",
        },
      ],
    },
    local: {
      kind: "list",
      kicker: "Tampa Bay",
      title: "Shower Remodeling for Tampa Bay Homes and Condos",
      items: [
        {
          lead: "Permits.",
          text: `[Hillsborough County notes](${HCFL_PERMITS}) that a bathroom remodel involving plumbing will likely need a permit, while tile and cabinet work alone likely won't. Moving a valve or drain counts as plumbing.`,
        },
        {
          lead: "Older slab homes.",
          text: "Many 1950s to 1970s homes in South Tampa, Town 'n' Country, and Brandon still have original cast iron drain lines under the slab. With the shower floor open, it's the right time to check that line.",
        },
        {
          lead: "Condos and high-rises.",
          text: "Buildings downtown, in Channelside, on Harbour Island, and along Clearwater Beach set their own rules for elevator use and noisy work. We get association approval before demo day.",
        },
        {
          lead: "Humidity.",
          text: "Long, muggy summers make a properly vented fan and a fully waterproofed enclosure more important here than in drier climates.",
        },
      ],
    },
    related: {
      title: "Related Services for Your Bathroom",
      items: [
        { slug: "bathroom-remodel", label: "Bathroom Remodeling", text: "When the whole room needs to change, not just the shower." },
        { slug: "tile-installation", label: "Tile Installation", text: "Bathroom floors, accent walls, and backsplashes set to match." },
        { slug: "cabinet-countertop", label: "Cabinet & Countertop", text: "Vanities and stone tops designed alongside the shower." },
        { slug: "flooring", label: "Flooring Installation", text: "Water-resistant floors for the rest of the bathroom and hall." },
        { slug: "room-additions", label: "Room Additions", text: "Add a full bathroom where the house doesn't have one." },
        { slug: "home-renovation", label: "Home Renovation", text: "Bathrooms updated as part of a larger project." },
      ],
    },
    areas: {
      title: "Shower Remodeling in Your Area",
      text: "We remodel showers in houses and condos across Tampa and about 45 miles around it.",
      label: "Shower Remodeling in",
      cities: ["tampa", "clearwater", "st-pete", "town-n-country", "lutz", "brandon", "riverview", "wesley-chapel", "land-o-lakes"],
      more: "View [every area we serve](/locations), including Valrico, Lithia, and Zephyrhills.",
    },
    faqTitle: "Common Questions About Shower Remodeling",
    faqImage: {
      src: "/gallery/marble-walk-in-shower.webp",
      alt: "Marble-look walk-in shower with a frameless glass panel",
      position: "center 40%",
    },
    final: {
      title: "Book Your Shower Remodel",
      text: "You shouldn't have to scrub around the same problem every week. Let's build a shower that stays dry behind the tile and looks the way you pictured it.",
      closing:
        `Call Valora Construction & Remodeling at (813) 240-5570 or [request an estimate online](/contact). Want to hear from past clients first? Read our [Google reviews](${GOOGLE_REVIEWS}).`,
    },
  },
};

const refacing: Service = {
  slug: "kichen-cabinet-contractor",
  name: "Kitchen cabinet refacing",
  category: "Cabinet",
  eyebrow: "Cabinet refacing",
  headline: "Kitchen cabinet refacing",
  summary: "New doors, drawer fronts, and veneer on solid cabinet boxes with kitchen cabinet refacing.",
  description:
    "Your cabinets still hold everything. They just look tired: honey oak from the 1990s, doors with peeling thermofoil, hinges that never quite close. Tearing it all out means weeks without a kitchen and a bill to match. Kitchen cabinet refacing from Valora Construction & Remodeling gives you a kitchen that looks new while your sound cabinet boxes, your layout, and often your countertops stay right where they are.",
  image: "/gallery/oak-shaker-kitchen.webp",
  imageAlt: "Oak shaker kitchen cabinets with brushed pulls, a stainless range, and a chimney hood",
  metaTitle: "Kitchen Cabinet Refacing in Tampa, FL - Valora Construction",
  metaTitleAbsolute: true,
  metaDescription:
    "Kitchen cabinet refacing in Tampa, FL: new doors, drawer fronts, veneer, and hardware on your existing cabinet boxes. Call Valora at (813) 240-5570.",
  includes: [
    {
      title: "New Cabinet Doors and Drawer Fronts",
      text: "Choose shaker, slab, or raised-panel doors in painted, stained wood, or rigid thermofoil finishes. For painted shaker doors, MDF center panels hold paint without the seam cracks solid wood can show as it moves with the seasons.",
    },
    {
      title: "Matching Veneer for Frames and End Panels",
      text: "Face frames, exposed cabinet sides, and the back of the island get a veneer that matches the new doors, so nothing original shows through.",
    },
    {
      title: "Soft-Close Hinges and Full-Extension Drawer Slides",
      text: "Concealed soft-close hinges replace old exposed ones. We can also upgrade drawer boxes to full-extension slides, so you can reach the back of every drawer.",
    },
    {
      title: "Hardware That Fits the Design",
      text: "Brass cup pulls, matte black bar pulls, or simple knobs, specified with the door style and finish rather than picked at the last minute.",
    },
    {
      title: "Added Cabinets, Crown, and Storage Upgrades",
      text: "Need a pantry cabinet, uppers that run to the ceiling, or a pull-out trash drawer? We add new boxes finished to match, plus crown molding, light rail, and pull-out organizers.",
    },
    {
      title: "Countertops and Backsplash",
      text: "Refacing is a natural time to upgrade stone and tile. Our [cabinet & countertop](/services/cabinet-countertop) and [tile installation](/services/tile-installation) teams can add quartz, granite, and a new backsplash to the same scope.",
    },
  ],
  faqs: [
    {
      q: "Is cabinet refacing cheaper than replacing cabinets?",
      a: "Usually, yes. The boxes stay in place, demolition is minimal, the countertops can often stay, and plumbing and electrical rarely need to move. Adding several new cabinets or choosing premium veneers narrows the gap. Your estimate shows the cost of each option side by side.",
    },
    {
      q: "How long does cabinet refacing take?",
      a: "Most of the wait is for doors and drawer fronts made to your measurements. Once they arrive, on-site installation usually takes days rather than weeks, and you can keep using your kitchen through most of it. Your written scope includes the expected lead time.",
    },
    {
      q: "Can you reface cabinets without replacing the countertops?",
      a: "Yes, in most kitchens. Refacing covers the face frames, doors, and drawers, so the countertop can stay put. If you plan to install new stone soon, doing both together saves working around a finished surface later.",
    },
    {
      q: "Can thermofoil or laminate cabinets be refaced?",
      a: "Yes, as long as the boxes underneath are sound. We replace peeling thermofoil doors outright and cover the frames and end panels with new veneer or laminate to match.",
    },
    {
      q: "Is cabinet refacing worth it?",
      a: "It's worth it when the boxes are solid and the layout already works, because you change the look of the room for less cost and disruption than replacement. If the layout is the real problem, refacing preserves that problem, and a remodel is the better investment.",
    },
  ],
  detail: {
    word: "Refacing",
    h1: "Kitchen Cabinet Refacing in Tampa, FL",
    subtitle: "New doors, drawer fronts, and finishes on the cabinet boxes you already have",
    trust: [
      "Kitchens are the work our clients call us for most",
      "Honest advice on refacing versus replacing",
      "Florida contractor license CBC1270738",
      "Family-owned, with owner-led design",
    ],
    hero: {
      src: "/gallery/oak-shaker-kitchen.webp",
      alt: "Oak shaker kitchen cabinets with brushed pulls, a stainless range, and a chimney hood",
      position: "center 38%",
    },
    portrait: {
      src: "/gallery/white-quartz-island-kitchen.webp",
      alt: "White shaker kitchen with a marble-look quartz island, three wood stools, and brass pendant lights",
      position: "center 60%",
    },
    estimate: {
      title: "Curious What Your Kitchen Looks Like With New Doors?",
      text: "Call Valora Construction & Remodeling at (813) 240-5570 or book an estimate online. Send us photos of kitchens you like, and we'll talk through door styles that suit your house.",
    },
    sections: [
      {
        kind: "prose",
        kicker: "The basics",
        title: "What Is Kitchen Cabinet Refacing?",
        paragraphs: [
          "Kitchen cabinet refacing keeps your existing cabinet boxes and covers the exposed face frames and end panels with new wood veneer or laminate. New doors, drawer fronts, hinges, and hardware go on to match. The layout stays the same, and the kitchen looks new with far less demolition than a full cabinet replacement.",
        ],
      },
      {
        kind: "list",
        kicker: "Good fit?",
        title: "Is Your Kitchen a Good Fit for Refacing?",
        intro: "Refacing works when the bones are good. Your kitchen is a strong candidate if:",
        items: [
          "The cabinet boxes are solid, level, and dry",
          "The layout works, and you aren't moving the sink, range, or island",
          "The doors are dated, damaged, or peeling, but the boxes behind them aren't",
          "You want to keep your countertops, or replace them without moving any cabinets",
        ],
        second: {
          intro: "Replacement makes more sense when:",
          items: [
            "The particleboard under the sink has swollen from an old leak",
            "Boxes sag, show termite damage, or pull away from the wall",
            "You want a different layout, a bigger island, or appliances in new spots",
          ],
          outro:
            "If your kitchen falls in the second group, we'll tell you plainly and point you to our [cabinet and countertop](/services/cabinet-countertop) or [kitchen remodeling](/services/kitchen-remodel) services instead.",
        },
      },
      {
        kind: "table",
        kicker: "Compare",
        title: "Refacing vs. Refinishing vs. Replacing Cabinets",
        intro: "Three paths can update a kitchen's cabinetry. Here's how they compare.",
        columns: ["Refinishing", "Refacing", "Replacing"],
        rows: [
          {
            label: "What changes",
            cells: [
              "Paint or stain on existing doors and frames",
              "New doors, drawer fronts, and veneer on frames",
              "New boxes, doors, and usually countertops",
            ],
          },
          { label: "Cabinet boxes", cells: ["Stay", "Stay", "Removed"] },
          { label: "Layout", cells: ["Same", "Same, with optional added cabinets", "Can change completely"] },
          { label: "Kitchen downtime", cells: ["Low", "Low to moderate", "Highest"] },
          {
            label: "Best for",
            cells: ["Solid doors in a style you still like", "Sound boxes behind dated doors", "Damaged boxes or a new layout"],
          },
        ],
      },
      {
        kind: "cards",
        kicker: "What's included",
        title: "What Our Cabinet Refacing Service Includes",
        items: [],
      },
      {
        kind: "list",
        kicker: "Materials",
        title: "Choosing Cabinet Materials for Tampa's Climate",
        intro: "Florida humidity and heat test every cabinet finish. Here's what we weigh with you:",
        items: [
          {
            lead: "Wood veneer",
            text: "shows real grain and takes stain well, but it needs a quality finish to resist moisture near the sink and dishwasher.",
          },
          {
            lead: "Rigid thermofoil",
            text: "wipes clean easily, but high heat can make it peel beside ovens and self-cleaning ranges, so heat shields next to the range matter.",
          },
          { lead: "Painted MDF doors", text: "stay flat and hold paint well through muggy summers." },
          {
            lead: "Hardware near the water.",
            text: "In homes close to the bay in South Tampa, Clearwater, and St. Petersburg, salt air can dull some metal finishes faster, so we review finish options with that in mind.",
          },
        ],
      },
    ],
    process: {
      title: "Our Cabinet Refacing Process",
      image: {
        src: "/gallery/quartz-island-pendants.webp",
        alt: "White shaker kitchen with a marble-look island, stainless appliances, and three brass pendant lights",
        position: "center 62%",
      },
      steps: [
        {
          title: "Listen",
          text: "We measure every cabinet, check the boxes for water or termite damage, and ask how you cook and store things.",
        },
        {
          title: "Design",
          text: "Door style, finish, hardware, and any added storage are chosen together, alongside countertops and backsplash if those are changing too.",
        },
        {
          title: "Scope",
          text: "Your written scope lists every door, drawer front, panel, and add-on, plus what the schedule depends on, including lead time for doors made to your measurements.",
        },
        {
          title: "Build",
          text: "Your kitchen stays usable while the doors are made. On site, we remove the old doors, apply veneer, hang new doors and drawer fronts, and adjust every hinge.",
        },
        { title: "Walk through", text: "We open every door and drawer with you and fix anything that doesn't sit right." },
      ],
    },
    why: {
      title: "Why Choose Valora as Your Kitchen Cabinet Contractor",
      items: [
        {
          title: "Kitchens Come First for Us",
          text: "Kitchen work is what most Tampa Bay homeowners hire us for, so cabinet doors, reveals, and hardware placement get the same care whether the job is a refacing or a full remodel.",
        },
        {
          title: "Straight Answers About Refacing",
          text: "Refacing only pays off when the boxes are sound. If yours aren't, we'll show you what we found and explain your options before you spend money on new doors.",
        },
        {
          title: "Design Help From Our Owner",
          text: "Amanda Neve, Valora's owner, built her career on interior design before construction. She helps you pair door profiles, finishes, and hardware so the kitchen looks intentional, not just updated.",
        },
        {
          title: "Updates You Can Follow",
          text: "Clients notice how we communicate. Jessica M. in Tampa wrote that our team kept her family updated through the whole kitchen project and paid attention to every detail.",
        },
        {
          title: "Licensed and Local",
          text: "Florida contractor license CBC1270738, based in Tampa, and reachable at (813) 240-5570 from 6:00 AM to 11:00 PM every day.",
        },
      ],
    },
    gallery: {
      title: "Cabinetry from recent kitchens.",
      lede: "Door styles, finishes, and hardware from our recent kitchen and cabinet work.",
      items: [
        {
          src: "/gallery/white-quartz-island-kitchen.webp",
          alt: "White shaker kitchen with a marble-look quartz island, three wood stools, and brass pendant lights",
          caption: "White shaker kitchen",
        },
        {
          src: "/gallery/oak-shaker-kitchen.webp",
          alt: "Oak shaker kitchen cabinets with brushed pulls, a stainless range, and a chimney hood",
          caption: "Oak shaker cabinets",
          position: "center 30%",
        },
        {
          src: "/gallery/navy-island-columns.webp",
          alt: "Navy shaker island with brass pulls and a white waterfall counter between two square columns",
          caption: "Navy island",
        },
        {
          src: "/gallery/white-shaker-laundry.webp",
          alt: "White shaker cabinets with brass pulls around a stone counter beside a stacked washer and dryer",
          caption: "White shaker built-ins",
          position: "70% center",
        },
        {
          src: "/gallery/white-shaker-kitchen.webp",
          alt: "White shaker kitchen cabinets with a stone counter and backsplash",
          caption: "White shaker kitchen",
        },
        {
          src: "/gallery/pantry-cabinets.webp",
          alt: "Floor-to-ceiling pantry cabinets with brass pulls",
          caption: "Pantry cabinets",
        },
      ],
    },
    local: {
      kind: "prose",
      kicker: "Tampa Bay",
      title: "Cabinet Refacing for Tampa Bay Kitchens",
      paragraphs: [
        "Many homes built in the 1990s and 2000s across Brandon, Riverview, Valrico, and Westchase still have their original builder-grade oak or thermofoil cabinets on solid boxes, which makes them ideal for refacing. Older homes in South Tampa and Seminole Heights sometimes have site-built cabinets in nonstandard sizes, so every door is made to measure.",
        "Condo owners in downtown Tampa and St. Petersburg often prefer refacing because it creates less debris and noise than a tear-out, which makes association rules easier to work within.",
        `Refacing is mostly cosmetic work, and [Hillsborough County notes](${HCFL_PERMITS}) that cosmetic projects typically don't need a building permit. If your project adds plumbing or electrical changes, we confirm permit needs first.`,
      ],
    },
    related: {
      title: "Other Kitchen Services You Might Need",
      items: [
        { slug: "cabinet-countertop", label: "Cabinet & Countertop", text: "New cabinets and stone designed and installed together." },
        { slug: "kitchen-remodel", label: "Kitchen Remodeling", text: "A new layout, lighting, plumbing, and finishes managed as one project." },
        { slug: "tile-installation", label: "Tile Installation", text: "Backsplash tile to finish the refaced kitchen." },
        { slug: "flooring", label: "Flooring Installation", text: "Hardwood, LVP, or tile floors to match the new cabinet finish." },
        { slug: "outdoor-kitchen-construction", label: "Outdoor Kitchen Construction", text: "Carry the look outside to the lanai." },
        { slug: "home-renovation", label: "Home Renovation", text: "Cabinets refreshed as part of a whole-home update." },
      ],
    },
    areas: {
      title: "Kitchen Cabinet Refacing in Your Area",
      text: "We reface kitchen cabinets in homes and condos throughout Tampa and about 45 miles around it.",
      label: "Cabinet Refacing in",
      cities: ["tampa", "brandon", "riverview", "valrico", "town-n-country", "lutz", "wesley-chapel", "clearwater", "st-pete"],
      more: "Browse [all of our locations](/locations), including Lithia, Land O' Lakes, and Zephyrhills.",
    },
    faqTitle: "Common Questions About Kitchen Cabinet Refacing",
    faqImage: {
      src: "/gallery/white-shaker-kitchen.webp",
      alt: "White shaker kitchen cabinets with a stone counter and backsplash",
      position: "center",
    },
    final: {
      title: "Get a Quote on Kitchen Cabinet Refacing",
      text: "You don't need to gut a kitchen that only needs a new face. Let's look at your cabinets together and find out if refacing is the right fit.",
      closing:
        `Call Valora Construction & Remodeling at (813) 240-5570 or [request your estimate online](/contact). See what clients say on our [Google reviews](${GOOGLE_REVIEWS}).`,
    },
  },
};

const additions: Service = {
  slug: "room-additions",
  name: "Room additions",
  category: "Addition",
  eyebrow: "Home additions",
  headline: "Room additions",
  summary: "A bedroom suite, family room, or kitchen bump-out, built to match the original house.",
  description:
    "A new baby, a parent moving in, a job that now happens at the kitchen table. Your house worked fine until it didn't, and now every room is doing two jobs. Selling and starting over in another neighborhood is expensive and exhausting. A room addition from Valora Construction & Remodeling gives you the space you need on the lot you already own, built so it looks like it was always part of the house.",
  image: "/gallery/navy-island-open-kitchen.webp",
  imageAlt: "Open kitchen and living space with a navy island, a white waterfall counter, square columns, and a barn door",
  metaTitle: "Room Additions in Tampa, FL - Home Additions - Valora",
  metaTitleAbsolute: true,
  metaDescription:
    "Room additions and home additions in Tampa, FL, designed, permitted, and built by one licensed team (CBC1270738). Call (813) 240-5570 for an estimate.",
  includes: [
    {
      title: "Bedroom and Bathroom Additions",
      text: "A bedroom with its own bath takes pressure off the rest of the house. We plan window placement for daylight and emergency escape, closet depth, and the drain route for the new bathroom so it ties into the existing plumbing without tearing up the rooms you live in.",
    },
    {
      title: "Primary Suite Additions",
      text: "Many Tampa Bay homes built between the 1950s and 1980s have a small primary bedroom and a shared hall bath. A primary suite addition gives you the bedroom, a walk-in closet, and a bathroom planned by the same team behind our [bathroom remodeling](/services/bathroom-remodel) work.",
    },
    {
      title: "Family Room and Great Room Additions",
      text: "An addition off the back of the house can open the kitchen to a larger living area with sliding doors to the lanai or yard. We work out the beam and roof framing needed to remove the old exterior wall so the two spaces read as one room.",
    },
    {
      title: "Kitchen Bump-Outs",
      text: "Sometimes a few more feet is the whole answer. A bump-out pushes one exterior wall out so an island fits or a pantry gets its own space. Our [kitchen remodeling](/services/kitchen-remodel) team then designs the cabinets, stone, and lighting around the new footprint.",
    },
    {
      title: "In-Law Suite Additions",
      text: `An attached suite gives a family member a bedroom, bathroom, and sitting area close by. If the suite will have its own kitchen, it may count as an accessory dwelling unit or an extended family residence under [City of Tampa rules](${TAMPA_ADU}), which adds a special use review. We sort that out before the design is final.`,
    },
    {
      title: "Lanai and Porch Enclosures",
      text: "A covered lanai already has a roof, which makes it a practical starting point. Turning it into conditioned space usually means checking the slab and footings, adding insulation, and installing windows and doors rated for Florida wind loads.",
    },
  ],
  faqs: [
    {
      q: "How much does a room addition cost in Tampa?",
      a: "Cost depends on the size of the addition, the foundation type, how the roof ties in, whether you add a bathroom or kitchen, your finishes, and the engineering and permit fees in your jurisdiction. A bathroom adds plumbing and tile, so a bedroom without one costs less per square foot. We give you a written scope and estimate after we measure the house and see the lot.",
    },
    {
      q: "Do I need a permit for a home addition in Florida?",
      a: "Yes. Every addition needs a building permit, plus electrical, plumbing, and mechanical permits for the trades involved, and it must pass inspections. Inside Tampa city limits the permit comes from the City of Tampa; in unincorporated Hillsborough County it comes from Hillsborough County Development Services. We handle the application as part of our scope.",
    },
    {
      q: "How long does it take to build a room addition?",
      a: "The timeline has two parts: design and permitting, then construction. Plan review, the number of inspections, lead times for windows and roofing, and summer rain all move the schedule. Your written scope lists what the schedule depends on, so you know before work starts.",
    },
    {
      q: "Does a room addition add value to a home?",
      a: "A permitted addition adds heated living area that appraisers and buyers can count, which usually helps a home's value. Unpermitted space can cause trouble when you sell or file an insurance claim. The return depends on your neighborhood and comparable homes, so a local agent or appraiser can add useful perspective.",
    },
    {
      q: "Can we live in the house while you build the addition?",
      a: "In most cases, yes. We build the new structure outside the existing walls first and open the connecting wall near the end, with dust protection in place. If the work affects your kitchen or only bathroom, we plan around that downtime with you before construction starts.",
    },
  ],
  detail: {
    word: "Additions",
    h1: "Room Additions in Tampa, FL",
    subtitle: "Home additions designed, permitted, and built by one licensed Tampa team",
    trust: [
      "Florida Certified Building Contractor, License CBC1270738",
      "Family-owned and based in Tampa",
      "Rated 5 stars on Google",
      "One team from first measurement to final walkthrough",
    ],
    hero: {
      src: "/gallery/navy-island-open-kitchen.webp",
      alt: "Open kitchen and living space with a navy island, a white waterfall counter, square columns, and a barn door",
      position: "center 60%",
    },
    portrait: {
      src: "/gallery/herringbone-oak-room.jpg",
      alt: "Bright room with a light oak herringbone floor, plantation shutters, and a lantern chandelier",
      position: "center",
    },
    estimate: {
      title: "Thinking About Adding On?",
      text: "Call Valora Construction & Remodeling at (813) 240-5570 any day from 6:00 AM to 11:00 PM, or request your estimate online. We'll measure, look at your lot, and tell you what's possible before you spend a dollar on drawings.",
    },
    sections: [
      {
        kind: "prose",
        kicker: "The basics",
        title: "What Is a Room Addition?",
        paragraphs: [
          "A room addition is new, conditioned living space built onto an existing home. It gets its own foundation, walls, windows, and roof, tied into the original structure and connected to the home's electrical, plumbing, and air conditioning. Common types include bedroom suites, family rooms, home offices, and kitchen bump-outs. Every addition in Florida needs permitted plans and passed inspections.",
        ],
      },
      {
        kind: "list",
        kicker: "Add on or move?",
        title: "Why Tampa Families Add On Instead of Moving",
        intro:
          "Moving means agent commissions, closing costs, a moving truck, and giving up a street, a school, and neighbors you like. Building on keeps all of that and puts your budget into square footage you'll use every day. Homeowners usually call us about an addition for one of these reasons:",
        items: [
          "A growing household that needs another bedroom and a second full bathroom",
          "Remote work that calls for a real office with a door, not a corner of the guest room",
          "A parent or adult child moving home who needs privacy without a separate address",
          "A cramped kitchen that can't grow until an exterior wall moves out",
          "A primary suite with the closet and bathroom the original floor plan never had",
        ],
      },
      {
        kind: "cards",
        kicker: "What we build",
        title: "Home Additions We Build",
        intro: "Every addition starts with how you plan to use the room. The structure follows that plan, not the other way around.",
        items: [],
      },
      {
        kind: "features",
        kicker: "Construction",
        title: "What Goes Into a Home Addition in Florida",
        intro: "An addition is new construction attached to an older house. It has to meet today's code and still look like the rest of the home.",
        items: [
          {
            title: "Plans, Engineering, and Permits",
            text: `Additions need drawings that show the foundation, framing, wind design, and energy compliance under the [Florida Building Code](${FL_BUILDING}). We coordinate the drawings and engineering the permit calls for, then submit to the right office: the City of Tampa inside city limits, or [Hillsborough County Development Services](${HCFL_PERMITS}) for unincorporated communities like Brandon, Riverview, and Valrico. Projects in Pasco and Pinellas go through those counties or cities.`,
          },
          {
            title: "Foundation and Slab",
            text: "Most Tampa additions sit on a monolithic slab or a stem wall with footings sized to the soil and the load. Florida code requires termite protection for new construction, so the soil is treated before the slab is poured. On older homes with raised wood floors, we design the addition so the new floor meets the old one at the same height.",
          },
          {
            title: "Block, Framing, and the Roof Tie-In",
            text: "We match the original construction where we can: concrete block and stucco for a block home, wood framing for a frame home. The roof tie-in is where rushed additions leak, so we plan the slope, valleys, and flashing to carry water away from the joint and match your existing shingles or tile as closely as the material allows.",
          },
          {
            title: "Electrical, Plumbing, and Air Conditioning",
            text: "New rooms need new circuits, and some older panels have no room left. We check panel capacity early, not after framing. For cooling, we extend the existing duct system when the equipment has capacity, or add a ductless mini-split sized for the new space.",
          },
          {
            title: "Interior Finishes That Match",
            text: "Flooring, trim, doors, and paint decide whether an addition blends in or looks bolted on. We plan floor transitions with our [flooring installation](/services/flooring) crew and carry baseboard profiles, door styles, and tile through from the original rooms.",
          },
        ],
      },
    ],
    process: {
      title: "How We Build Your Room Addition",
      image: {
        src: "/gallery/navy-island-columns.webp",
        alt: "Navy shaker island with brass pulls and a white waterfall counter between two square columns",
        position: "center 60%",
      },
      steps: [
        {
          title: "Listen",
          text: "We visit, measure, walk the lot, and talk through how the new space will be used. You leave knowing what your lot and budget can support.",
        },
        {
          title: "Design",
          text: "Layout, windows, roofline, and finishes are decided together, so the inside and outside of the addition make sense as one piece.",
        },
        {
          title: "Scope",
          text: "You get a written scope before ground is broken: what's included, the order of the trades, and what the schedule depends on, including plan review and inspections.",
        },
        {
          title: "Build",
          text: "Our team manages the foundation, framing, roof, mechanical trades, and finishes, and we update you at every inspection.",
        },
        {
          title: "Walk through",
          text: "We review the finished addition with you, room by room, before we call the project complete.",
        },
      ],
    },
    why: {
      title: "Why Choose Valora Construction & Remodeling for Your Home Addition",
      items: [
        {
          title: "Licensed for Additions, Not Only Remodels",
          text: `Valora holds Florida Certified Building Contractor license CBC1270738, which covers structural work like additions. You can confirm it on the [Florida DBPR license portal](${DBPR}).`,
        },
        {
          title: "Design Led by Our Owner",
          text: "Owner Amanda Neve came to construction through interior design, and that background shapes every addition. She pays attention to where the light falls, how the new room meets the hallway, and whether the ceiling height feels right next to the old rooms.",
        },
        {
          title: "One Team, From Footings to Finishes",
          text: "You won't hire a framer, a roofer, and a tile setter and hope they talk to each other. We sequence the trades and answer for all of them.",
        },
        {
          title: "You Always Know What's Next",
          text: "An addition takes longer than a remodel, so communication matters more. You'll know what's being built this week, which inspection comes next, and what decision we need from you.",
        },
        {
          title: "Family-Owned in Tampa",
          text: "We are a local, family-owned company, and we treat your home as if it were our own. Call (813) 240-5570 and a person picks up between 6:00 AM and 11:00 PM.",
        },
      ],
    },
    gallery: {
      title: "Finishes from recent projects.",
      lede: "Floors, stairs, and open living spaces from recent Valora work. The finishes an addition has to match.",
      items: [
        {
          src: "/gallery/navy-island-columns.webp",
          alt: "Navy shaker island with brass pulls and a white waterfall counter between two square columns",
          caption: "Open kitchen",
        },
        {
          src: "/gallery/oak-stairs-daylight.webp",
          alt: "Light oak stair treads with white risers and a black handrail, lit by an upper window",
          caption: "Oak stair treads",
        },
        {
          src: "/gallery/black-rail-staircase.webp",
          alt: "Staircase with oak treads, white risers, black balusters, and a black newel post",
          caption: "Black rail staircase",
        },
        {
          src: "/gallery/oak-bedroom-floor.webp",
          alt: "Light oak floor running through a bedroom",
          caption: "Oak bedroom floor",
        },
      ],
    },
    local: {
      kind: "list",
      kicker: "Tampa Bay",
      title: "Building Additions for Tampa Bay Homes",
      intro: "Tampa's weather, flood maps, and housing stock shape every addition we plan.",
      items: [
        {
          lead: "Wind design.",
          text: "New walls, roofs, windows, and doors must meet Florida Building Code wind requirements, and homes close to the bay often need impact-rated openings or shutters.",
        },
        {
          lead: "Flood zones.",
          text: `In South Tampa, Davis Islands, and other low-lying neighborhoods, check your parcel on the [FEMA Flood Map Service Center](${FEMA_MAP}). If an addition costs a large share of the home's value, the substantial improvement rule can require bringing the whole house up to current flood elevation. We flag that risk at the first visit.`,
        },
        {
          lead: "Older neighborhoods.",
          text: "Bungalows in Seminole Heights and Tampa Heights often sit on raised wood floors, while mid-century block ranches in Town 'n' Country and Brandon sit on slabs. Each one needs a different tie-in, and homes in historic districts also go through design review.",
        },
        {
          lead: "HOA communities.",
          text: "Neighborhoods in Wesley Chapel, Riverview, and Lithia often require architectural review before construction. We prepare the drawings and material samples the board asks for.",
        },
      ],
    },
    related: {
      title: "Other Services You Might Need",
      items: [
        { slug: "home-renovation", label: "Home Renovation", text: "Update the existing rooms so the whole house matches the new addition." },
        { slug: "garage-conversion", label: "Garage Conversion", text: "Turn space already under your roof into a bedroom, office, or suite." },
        { slug: "kitchen-remodel", label: "Kitchen Remodeling", text: "Cabinets, counters, and layout for a kitchen that grows with the addition." },
        { slug: "bathroom-remodel", label: "Bathroom Remodeling", text: "A full bath for a new suite or an update to the one down the hall." },
        { slug: "shower-remodeling", label: "Shower Remodeling", text: "Walk-in and tile showers for new or existing bathrooms." },
        { slug: "flooring", label: "Flooring Installation", text: "One continuous floor from the old rooms into the new ones." },
      ],
    },
    areas: {
      title: "Room Additions in Your Area",
      text: "We build additions in Tampa and about 45 miles around it, across Hillsborough, Pasco, and Pinellas counties.",
      label: "Room Additions in",
      cities: ["tampa", "brandon", "riverview", "valrico", "lithia", "lutz", "wesley-chapel", "land-o-lakes", "town-n-country"],
      more: "See [all of our service areas](/locations), including Clearwater, St. Petersburg, and Zephyrhills.",
    },
    faqTitle: "Common Questions About Room Additions",
    faqImage: {
      src: "/gallery/oak-stairs-daylight.webp",
      alt: "Light oak stair treads with white risers and a black handrail, lit by an upper window",
      position: "center 70%",
    },
    final: {
      title: "Start Planning Your Room Addition",
      text: "More room doesn't have to mean a new address. Tell us how your family uses the house and what's missing, and we'll show you what an addition can look like on your lot.",
      closing:
        `Call Valora Construction & Remodeling at (813) 240-5570 or [request an estimate online](/contact). You can also read our [Google reviews](${GOOGLE_REVIEWS}).`,
    },
  },
};

const garage: Service = {
  slug: "garage-conversion",
  name: "Garage conversion",
  category: "Garage",
  eyebrow: "Garage conversions",
  headline: "Garage conversion",
  summary: "Turn unused garage space into a bedroom, office, or in-law suite with a permitted garage conversion.",
  description:
    "The car hasn't been in the garage in years. It holds boxes, a second fridge, and summer heat you can feel through the door. Meanwhile, you need a guest room, a quiet office, or a place for a parent to live. A garage conversion from Valora Construction & Remodeling turns space already under your roof into a real room, with a level floor, insulated walls, cool air, and a permit on file.",
  image: "/gallery/hero-living-oak.webp",
  imageAlt: "Wide oak floor in a bright living room with tall windows and a fireplace",
  metaTitle: "Garage Conversion in Tampa, FL - Garage to Living Space - Valora",
  metaTitleAbsolute: true,
  metaDescription:
    "Garage conversions in Tampa, FL: bedrooms, offices, gyms, and in-law suites, permitted and built by a licensed contractor (CBC1270738). Call (813) 240-5570.",
  includes: [
    {
      title: "Garage to Bedroom Conversion",
      text: "A guest room or primary bedroom with a code-compliant escape window, closet, and good lighting. Add a bathroom and it becomes a private suite.",
    },
    {
      title: "Home Office Conversion",
      text: "A separate entrance from the driveway can keep client visits out of the main house, and insulated walls keep household noise out of video calls.",
    },
    {
      title: "Home Gym or Studio",
      text: "Rubber or vinyl flooring, mirrors, extra outlets, and a mini-split that keeps the room cool enough to work out in July.",
    },
    {
      title: "Playroom or Media Room",
      text: "Durable floors, built-in storage for toys or gear, and wiring planned for a screen and speakers before the drywall goes up.",
    },
    {
      title: "In-Law Suite or Garage Apartment",
      text: "A bedroom, bathroom, and kitchenette gives a family member independence close to home. A unit with its own kitchen can fall under accessory dwelling unit rules, covered below.",
    },
    {
      title: "Partial Conversions",
      text: "Keep one bay for parking or storage and convert the other. The wall between the remaining garage and the new room gets the fire-rated separation code requires.",
    },
  ],
  faqs: [
    {
      q: "Do you need a permit to convert a garage into a room in Florida?",
      a: "Yes. Turning a garage into living space changes its use, so it needs a building permit, plus electrical, plumbing, and mechanical permits for the trades involved, and it must pass inspections. The permit comes from your city or county, and we handle the application as part of our scope.",
    },
    {
      q: "How much does a garage conversion cost in Tampa?",
      a: "Cost depends on how much floor work the slab needs, how the door opening is closed in, your cooling approach, whether you add a bathroom or kitchenette, your finishes, and permit fees. Because the slab, walls, and roof already exist, a conversion usually costs less than an addition of the same size. We give you a written scope and estimate after we see the garage.",
    },
    {
      q: "Does converting a garage hurt resale value?",
      a: "It depends on your neighborhood. In many Tampa Bay subdivisions buyers expect a garage, while a permitted, well-finished room adds living area that appraisers can count. A conversion that still looks like a garage from the street tends to hurt more than one designed to match the house.",
    },
    {
      q: "Can a garage be converted into a bedroom?",
      a: "Yes. A garage bedroom needs an emergency escape window, a ceiling that meets minimum height for habitable rooms, heating and cooling, and permitted electrical. Code doesn't require a closet, but most buyers expect one, so we usually include it.",
    },
    {
      q: "Can I rent out a converted garage in Tampa?",
      a: "Only in some places. In the City of Tampa, a rentable accessory dwelling unit must sit in an eligible area and go through a special use review, and the owner must live on the property in either the main house or the unit. Unincorporated Hillsborough County and other cities have their own rules, so we check yours before design.",
    },
  ],
  detail: {
    word: "Garage",
    h1: "Garage Conversion in Tampa, FL",
    subtitle: "Turn your garage into a bedroom, office, gym, or in-law suite, built to code from the slab up",
    trust: [
      "Florida contractor license CBC1270738",
      "Permits and inspections handled for you",
      "Design led by owner Amanda Neve",
      "Calls answered 6:00 AM to 11:00 PM daily",
    ],
    hero: {
      src: "/gallery/hero-living-oak.webp",
      alt: "Wide oak floor in a bright living room with tall windows and a fireplace",
      position: "82% center",
    },
    portrait: {
      src: "/gallery/white-shaker-laundry.webp",
      alt: "Laundry room with white shaker cabinets, brass pulls, a white stone counter, and a stacked washer and dryer",
      position: "62% center",
    },
    estimate: {
      title: "Let's Look at Your Garage Together",
      text: "Call Valora Construction & Remodeling at (813) 240-5570 or request an estimate online. We'll check the slab, the walls, and the rules for your address before we talk about finishes.",
    },
    sections: [
      {
        kind: "prose",
        kicker: "The basics",
        title: "What Is a Garage Conversion?",
        paragraphs: [
          "A garage conversion turns an attached or detached garage into permitted, conditioned living space. The work usually includes leveling or raising the floor, closing the garage door opening with an insulated wall and windows, adding insulation and drywall, extending air conditioning, and upgrading electrical. Bedrooms also need an emergency escape window, and a bathroom adds plumbing.",
        ],
      },
      {
        kind: "list",
        kicker: "Why convert",
        title: "Why Tampa Homeowners Convert the Garage",
        intro: "The garage is often the largest underused room in the house. Homeowners call us when:",
        items: [
          "The garage stores boxes instead of cars",
          "A home office needs quiet, away from the main living area",
          "An aging parent needs a ground-floor bedroom with a bathroom nearby",
          "A teenager or adult child wants their own space",
          "A home gym or hobby studio is too hot to use without air conditioning",
          "An addition won't fit on the lot or stretches the budget",
        ],
        outro:
          "Because the slab, walls, and roof already exist, a conversion usually costs less than building a [room addition](/services/room-additions) of the same size.",
      },
      {
        kind: "cards",
        kicker: "Ideas",
        title: "Popular Garage Conversion Ideas",
        items: [],
      },
      {
        kind: "features",
        kicker: "Construction",
        title: "What It Takes to Turn a Garage Into Living Space",
        items: [
          {
            title: "Leveling and Raising the Floor",
            text: "Garage slabs usually sit lower than the house floor and slope toward the door so water drains out. We add a moisture barrier and either a framed sleeper floor or a leveling layer, so the new room meets the house without a step, then finish it with [flooring](/services/flooring) suited to slab installs.",
          },
          {
            title: "Closing In the Garage Door Opening",
            text: "We remove the garage door and build an insulated wall in the opening, in block or framing to match the house. Outside, we finish it in stucco or siding so it blends with the rest of the facade, typically with windows or a door rated for Florida wind design.",
          },
          {
            title: "Insulation, Drywall, and Ceilings",
            text: "Most garage walls and ceilings have no insulation at all. We insulate to Florida Energy Code requirements, hang and finish drywall, and confirm the ceiling height meets code for a habitable room.",
          },
          {
            title: "Cooling and Ventilation",
            text: "A Tampa garage can run far hotter than the house in summer. Depending on your system's capacity, we extend existing ductwork or install a ductless mini-split dedicated to the new room, with return air planned so the space never feels stuffy.",
          },
          {
            title: "Electrical and Plumbing",
            text: "Living space needs more outlets, better lighting, and often new circuits. Adding a bathroom or kitchenette means cutting the slab for drain lines and tying into the existing sewer or septic system.",
          },
          {
            title: "Water Heaters and Laundry",
            text: "Many Florida homes keep the water heater and washer in the garage. We relocate them or build a proper enclosure, so the new room doesn't share space with mechanical equipment.",
          },
        ],
      },
      {
        kind: "list",
        kicker: "Rules",
        title: "Permits, Zoning, and HOA Rules Around Tampa Bay",
        intro: "A garage conversion changes how a space is used, so local rules matter as much as construction.",
        items: [
          {
            lead: "Building permits.",
            text: `Every conversion needs a building permit and inspections. Inside Tampa city limits that goes through the City of Tampa; in unincorporated areas like Brandon, Riverview, and Valrico, through [Hillsborough County Development Services](${HCFL_PERMITS}); in Wesley Chapel, Land O' Lakes, and Zephyrhills, through Pasco County or the City of Zephyrhills.`,
          },
          {
            lead: "Separate living units.",
            text: `If the converted garage will have its own kitchen and work as a separate unit, City of Tampa [accessory dwelling unit rules](${TAMPA_ADU}) apply, including eligible areas and a special use review. The city's general standards cap an ADU at 950 square feet and call for a parking space for the unit.`,
          },
          {
            lead: "Flood zones.",
            text: `In a FEMA special flood hazard area, space below the base flood elevation is generally limited to parking, access, and storage. If your garage slab sits low, check the [FEMA flood map](${FEMA_MAP}) for your address. We review elevation before any design work.`,
          },
          {
            lead: "HOAs and parking.",
            text: "Master-planned communities in Wesley Chapel, Riverview, and Lithia often require architectural approval and may limit changes to the garage facade or require off-street parking. We read your covenants first.",
          },
          {
            lead: "Older conversions.",
            text: "Plenty of Tampa homes have a garage that someone converted without a permit. We can assess that space and tell you what it would take to bring it up to code.",
          },
        ],
      },
    ],
    process: {
      title: "Our Garage Conversion Process",
      image: {
        src: "/gallery/oak-bedroom-floor.webp",
        alt: "Light oak floor running through a bedroom",
        position: "center",
      },
      steps: [
        {
          title: "Listen",
          text: "We measure the garage, check slab elevation and drainage, look at your electrical panel, and confirm the rules for your address.",
        },
        {
          title: "Design",
          text: "Layout, windows, flooring, lighting, and storage are planned together, so the room feels like part of the house, not a leftover garage.",
        },
        {
          title: "Scope",
          text: "Your written scope covers permits, floor work, the wall infill, mechanical changes, and finishes, along with what the schedule depends on.",
        },
        {
          title: "Build",
          text: "We frame, insulate, run electrical and plumbing, close the opening, and finish the room, coordinating every inspection along the way.",
        },
        {
          title: "Walk through",
          text: "We go through the finished room with you, from the window locks to the thermostat, before we call it complete.",
        },
      ],
    },
    why: {
      title: "Why Choose Valora Construction & Remodeling for Your Garage Conversion",
      items: [
        {
          title: "A Real Room, Not a Garage With Carpet",
          text: "Owner Amanda Neve started in interior design, and she plans conversions the way she'd plan any room: where the light comes in, where the furniture goes, and how it connects to the rest of the house.",
        },
        {
          title: "Licensed, Permitted, and Inspected",
          text: "Our Florida contractor license, CBC1270738, covers this kind of structural work. Every conversion we build goes through permits and inspections, so the space counts when you sell or insure the home.",
        },
        {
          title: "One Team for Every Trade",
          text: "Framing, block, stucco, electrical, plumbing, air conditioning, and finishes all run through us. You don't coordinate the handoffs.",
        },
        {
          title: "Updates You Can Count On",
          text: "You deserve to feel heard, informed, and excited about the project. We tell you what's happening this week, what inspection is next, and what we need from you.",
        },
        {
          title: "Family-Owned and Local",
          text: "We live and work in Tampa, and we care for your home as if it were our own.",
        },
      ],
    },
    gallery: {
      title: "Rooms from recent projects.",
      lede: "Laundry built-ins, floors, and stairs from recent Valora work: the kind of finish a converted room needs.",
      items: [
        {
          src: "/gallery/white-shaker-laundry.webp",
          alt: "Laundry room with white shaker cabinets, brass pulls, a white stone counter, and a stacked washer and dryer",
          caption: "Laundry built-ins",
          position: "62% center",
        },
        {
          src: "/gallery/stacked-laundry.webp",
          alt: "Stacked washer and dryer beside white cabinets with brass pulls and track lighting",
          caption: "Stacked laundry",
        },
        {
          src: "/gallery/oak-bedroom-floor.webp",
          alt: "Light oak floor running through a bedroom",
          caption: "Oak bedroom floor",
        },
        {
          src: "/gallery/oak-stairs-daylight.webp",
          alt: "Light oak stair treads with white risers and a black handrail, lit by an upper window",
          caption: "Oak stair treads",
        },
      ],
    },
    related: {
      title: "Other Services You Might Need",
      items: [
        { slug: "room-additions", label: "Room Additions", text: "New square footage when the garage alone isn't enough." },
        { slug: "bathroom-remodel", label: "Bathroom Remodeling", text: "A full bath for a converted suite." },
        { slug: "shower-remodeling", label: "Shower Remodeling", text: "Walk-in and accessible showers for in-law suites." },
        { slug: "cabinet-countertop", label: "Cabinet & Countertop", text: "Cabinets and stone for a kitchenette or built-in storage." },
        { slug: "flooring", label: "Flooring Installation", text: "Floors that run from the house into the new room." },
        { slug: "home-renovation", label: "Home Renovation", text: "Update the rest of the house alongside the conversion." },
      ],
    },
    areas: {
      title: "Garage Conversions in Your Area",
      text: "We convert garages in homes throughout Tampa and about 45 miles around it.",
      label: "Garage Conversion in",
      cities: ["tampa", "town-n-country", "brandon", "riverview", "valrico", "lutz", "land-o-lakes", "wesley-chapel", "zephyrhills"],
      more: "Check [all of our service areas](/locations), including Clearwater, St. Petersburg, and Lithia.",
    },
    faqTitle: "Common Questions About Garage Conversions",
    faqImage: {
      src: "/gallery/stacked-laundry.webp",
      alt: "Stacked washer and dryer beside white cabinets with brass pulls and track lighting",
      position: "center 60%",
    },
    final: {
      title: "Start Your Garage Conversion",
      text: "You already own the space. Let's turn it into a room your family uses every day.",
      closing:
        `Call Valora Construction & Remodeling at (813) 240-5570 or [request an estimate online](/contact). You can also read our [Google reviews](${GOOGLE_REVIEWS}) before you call.`,
    },
  },
};

const outdoor: Service = {
  slug: "outdoor-kitchen-construction",
  name: "Outdoor kitchen",
  category: "Outdoor",
  eyebrow: "Outdoor kitchens",
  headline: "Outdoor kitchen construction",
  summary: "Grill islands, weather-ready counters, and lanai bars from our outdoor kitchen construction team.",
  description:
    "Tampa gives you outdoor weather almost all year, yet most backyard cooking still happens on a rolling grill parked on the pavers. You run inside for a knife, a plate, a cold drink, then back out while the burgers char. In August, turning on the indoor oven only fights your air conditioning. Outdoor kitchen construction from Valora Construction & Remodeling puts the grill, counter space, sink, and fridge where you actually entertain, built from materials that hold up to Florida sun and storms.",
  image: "/gallery/black-shaker-wet-bar.webp",
  imageAlt: "Built-in wet bar with black shaker cabinets, two wine refrigerators, oak floating shelves, and a forest mural",
  metaTitle: "Outdoor Kitchen Construction in Tampa, FL - Valora Construction",
  metaTitleAbsolute: true,
  metaDescription:
    "Custom outdoor kitchens in Tampa, FL: built-in grill islands, weather-ready counters, sinks, and lanai bars designed for Florida weather. Call (813) 240-5570.",
  includes: [
    {
      title: "Built-In Grill Islands",
      text: "The island is the backbone of the whole kitchen. We build it in concrete block finished with stucco, stone veneer, or tile, or with a noncombustible steel frame and cement board. A built-in barbecue grill needs the clearances and insulated jacket its manufacturer specifies, so we size the island around the exact model you pick.",
    },
    {
      title: "Countertops for Sun and Rain",
      text: "Granite and porcelain slab stand up well outdoors. Most quartz manufacturers don't recommend quartz outside, because UV light can fade or discolor the resin. Our [cabinet & countertop](/services/cabinet-countertop) team helps you choose a surface and edge profile that suits how much sun your patio gets.",
    },
    {
      title: "Outdoor Kitchen Cabinets and Storage",
      text: "Doors and drawers in 304-grade stainless steel or marine-grade polymer resist rust and moisture far better than indoor cabinets. Lower-grade 430 stainless costs less but can show rust spots, especially near salt water.",
    },
    {
      title: "Sinks, Refrigeration, and Prep Space",
      text: "An outdoor-rated refrigerator, ice maker, or beverage center, plus a prep sink, saves dozens of trips indoors. We plan landing space on both sides of the grill so hot platters always have somewhere to go.",
    },
    {
      title: "Bars and Seating",
      text: "A raised bar ledge separates the cook from the crowd. We've built indoor wet bars in navy and oak finishes, and we bring the same attention to detail to bars under the lanai.",
    },
    {
      title: "Lighting, Fans, and Shade",
      text: "Task lighting over the grill, wet-rated fixtures, ceiling fans, and shade from the lanai roof or a pergola keep the kitchen usable after sunset and through the hottest afternoons.",
    },
  ],
  faqs: [
    {
      q: "How much does an outdoor kitchen cost in Tampa?",
      a: "Cost depends on the size of the island, how it's built and finished, the countertop material, the number and type of appliances, how far gas, power, and water have to run, whether you need a vent hood under a roof, and permit fees. We give you a written scope and estimate after we see the space and talk through the appliances you want.",
    },
    {
      q: "Do you need a permit to build an outdoor kitchen in Florida?",
      a: "Usually, yes, for the gas, electrical, and plumbing work, and some jurisdictions also review the structure itself. Requirements vary between the City of Tampa, Hillsborough County, and neighboring counties. We confirm what your address needs and pull the permits as part of the project.",
    },
    {
      q: "What is the best countertop for an outdoor kitchen in Florida?",
      a: "Granite and porcelain slab are the most reliable choices because they handle UV, heat, and rain well. Most quartz is not recommended outdoors because sunlight can discolor the resin. Tile also works on islands, but its grout needs sealing and occasional upkeep.",
    },
    {
      q: "Can you build an outdoor kitchen under a covered lanai or screened enclosure?",
      a: "Yes. Under a solid roof, we follow the grill manufacturer's clearance requirements and usually add an outdoor-rated vent hood to carry smoke and heat out. Under a screen enclosure, we plan around rain exposure and smoke, and we position the grill so heat stays away from the screen.",
    },
    {
      q: "How long does it take to build an outdoor kitchen?",
      a: "Timelines depend on permits, appliance lead times, and how the island is built. Block islands need time for stucco or veneer, and stone countertops are templated after the island is finished, then fabricated. Your written scope lists each step so you know what to expect.",
    },
  ],
  detail: {
    word: "Outdoor",
    h1: "Outdoor Kitchen Construction in Tampa, FL",
    subtitle: "Custom outdoor kitchens, grill islands, and lanai bars built for Florida sun, rain, and salt air",
    trust: [
      "Kitchen design is the work we're known for",
      "Gas, electrical, and plumbing coordinated in one scope",
      "Florida contractor license CBC1270738",
      "Family-owned in Tampa",
    ],
    hero: {
      src: "/gallery/black-shaker-wet-bar.webp",
      alt: "Built-in wet bar with black shaker cabinets, two wine refrigerators, oak floating shelves, and a forest mural",
      position: "center 45%",
    },
    portrait: {
      src: "/gallery/navy-wet-bar.webp",
      alt: "Navy wet bar with shaker cabinets and a stone counter",
      position: "center",
    },
    estimate: {
      title: "Planning a Backyard Kitchen?",
      text: "Call Valora Construction & Remodeling at (813) 240-5570 or request an estimate online. We'll look at your lanai or patio, how you like to host, and where the gas and water can run.",
    },
    sections: [
      {
        kind: "prose",
        kicker: "The basics",
        title: "What Is Outdoor Kitchen Construction?",
        paragraphs: [
          "Outdoor kitchen construction is the design and building of a permanent cooking area outside the home. It usually centers on a built-in grill set into a masonry or steel-framed island, with weather-rated countertops, storage, and often a sink, refrigerator, and bar seating, all connected to gas, electrical, and water lines.",
        ],
      },
      {
        kind: "list",
        kicker: "Why build one",
        title: "Why Tampa Homeowners Build Outdoor Kitchens",
        items: [
          "Cook and entertain without leaving guests alone on the lanai",
          "Keep summer cooking heat out of the house",
          "Replace a rusting freestanding grill with a permanent setup",
          "Make the pool deck or patio the center of family gatherings",
          "Add a bar and seating for game days and holidays",
        ],
      },
      {
        kind: "cards",
        kicker: "What we build",
        title: "Outdoor Kitchen Features We Build",
        items: [],
      },
      {
        kind: "list",
        kicker: "Layout",
        title: "Planning the Layout: Hot, Cold, Wet, and Dry Zones",
        intro: "Good outdoor kitchens borrow from indoor kitchen planning. We divide the space into four zones:",
        ordered: true,
        items: [
          { lead: "Hot zone:", text: "grill, side burner, griddle, or pizza oven" },
          { lead: "Cold zone:", text: "refrigerator, ice maker, and beverage storage" },
          { lead: "Wet zone:", text: "sink and trash" },
          { lead: "Dry zone:", text: "prep counter and serving space" },
        ],
        outro:
          "Putting them in a logical order lets the cook work without backtracking and keeps guests clear of the grill. We also account for prevailing wind, so smoke drifts away from the seating and the house.",
      },
      {
        kind: "list",
        kicker: "Utilities",
        title: "Utilities, Safety, and Permits",
        items: [
          {
            lead: "Gas.",
            text: "We run natural gas from your existing service where Peoples Gas serves your street, or set up a propane supply. Gas lines are installed by licensed professionals and pressure tested.",
          },
          {
            lead: "Electrical.",
            text: "Outdoor receptacles need GFCI protection and weather-resistant covers, and refrigerators and lighting get properly sized circuits.",
          },
          { lead: "Plumbing.", text: "A sink drain has to tie into an approved drain line instead of emptying into the yard." },
          {
            lead: "Covered lanais.",
            text: "Grilling under a roof calls for proper clearance to the ceiling and often an outdoor-rated vent hood to pull smoke and heat away.",
          },
          {
            lead: "Permits.",
            text: `Gas, electrical, and plumbing work typically requires permits, and some jurisdictions also review the structure. We confirm requirements with the City of Tampa, [Hillsborough County](${HCFL_PERMITS}), or your local building department and pull what's needed.`,
          },
        ],
      },
      {
        kind: "list",
        kicker: "Weather",
        title: "Designing for Tampa Bay's Weather",
        items: [
          {
            lead: "Sun and UV.",
            text: "Afternoon sun on west-facing patios fades finishes and heats dark stone. Where exposure is high, we lean toward lighter, UV-stable materials.",
          },
          {
            lead: "Summer storms.",
            text: "Near-daily rain from June through September means counters, appliances, and outlets have to shed water, and the island should sit on a slab that drains away from the house.",
          },
          {
            lead: "Salt air.",
            text: "Homes near the water in Clearwater, St. Petersburg, South Tampa, and Apollo Beach see faster corrosion, so 304 stainless and polymer cabinets matter even more there.",
          },
          {
            lead: "Hurricane season.",
            text: "A heavy masonry island on a proper slab stays put. Covers, cushions, and loose accessories go inside before a storm.",
          },
          {
            lead: "Pool decks and pavers.",
            text: "A masonry island needs a concrete footing or slab beneath it, not just pavers on sand, which can settle under the weight.",
          },
          {
            lead: "HOA communities.",
            text: "FishHawk Ranch in Lithia and many Wesley Chapel neighborhoods review outdoor structures before you build. We prepare the drawings and material samples your board asks for.",
          },
        ],
      },
    ],
    process: {
      title: "Our Outdoor Kitchen Construction Process",
      image: {
        src: "/gallery/oak-wet-bar.webp",
        alt: "Oak wet bar with shaker cabinets and a stone counter",
        position: "center",
      },
      steps: [
        {
          title: "Listen",
          text: "We look at your patio, the sun and wind, and where utilities can run, and we ask how you cook and how many people you usually host.",
        },
        {
          title: "Design",
          text: "Layout, appliances, materials, and lighting are chosen together. The appliance specs set the island's dimensions, so we pick them early.",
        },
        {
          title: "Scope",
          text: "Your written scope covers the island, utilities, appliances, finishes, and permits, plus what the schedule depends on, such as appliance lead times.",
        },
        {
          title: "Build",
          text: "We pour or prepare the base, build the island, run gas, power, and water, then set counters and appliances. Countertops are templated once the island is built.",
        },
        {
          title: "Walk through",
          text: "We light the grill with you, test every burner, outlet, and faucet, and review care for your materials.",
        },
      ],
    },
    why: {
      title: "Why Choose Valora Construction & Remodeling for Your Outdoor Kitchen",
      items: [
        {
          title: "Kitchen Specialists, Indoors and Out",
          text: "Kitchens are the work Tampa Bay homeowners hire us for most. The same thinking about workflow, storage, and stone carries straight outside.",
        },
        {
          title: "Design That Connects to Your Home",
          text: "Owner Amanda Neve brings an interior design eye to every project, so your outdoor kitchen can echo the finishes inside, from the stone color to the hardware.",
        },
        {
          title: "Every Trade in One Scope",
          text: "Masonry, stucco, gas, electrical, plumbing, countertops, and appliance installation all run through one team. You don't chase five contractors.",
        },
        {
          title: "Honest About Materials",
          text: "We'll tell you when a material you love won't survive Florida sun or salt air, and we'll show you alternatives that will.",
        },
        {
          title: "Local, Licensed, and Reachable",
          text: "Florida contractor license CBC1270738. Call (813) 240-5570 any day from 6:00 AM to 11:00 PM.",
        },
      ],
    },
    gallery: {
      title: "Bars and built-ins from recent projects.",
      lede: "Indoor wet bars in navy, oak, and black finishes from our recent work. The same cabinetry and stone thinking we bring to the lanai.",
      items: [
        {
          src: "/gallery/black-shaker-wet-bar.webp",
          alt: "Built-in wet bar with black shaker cabinets, two wine refrigerators, oak floating shelves, and a forest mural",
          caption: "Black shaker wet bar",
        },
        {
          src: "/gallery/navy-wet-bar.webp",
          alt: "Navy wet bar with shaker cabinets and a stone counter",
          caption: "Navy wet bar",
        },
        {
          src: "/gallery/oak-wet-bar.webp",
          alt: "Oak wet bar with shaker cabinets and a stone counter",
          caption: "Oak wet bar",
        },
      ],
    },
    related: {
      title: "Other Services You Might Need",
      items: [
        { slug: "kitchen-remodel", label: "Kitchen Remodeling", text: "Update the indoor kitchen to match the new outdoor one." },
        { slug: "cabinet-countertop", label: "Cabinet & Countertop", text: "Stone and cabinetry designed and installed together." },
        { slug: "tile-installation", label: "Tile Installation", text: "Tile cladding for islands and backsplashes." },
        { slug: "kichen-cabinet-contractor", label: "Kitchen Cabinet Refacing", text: "New doors and finishes for indoor cabinets you want to keep." },
        { slug: "room-additions", label: "Room Additions", text: "Enclose a lanai or add a family room that opens onto the outdoor kitchen." },
        { slug: "home-renovation", label: "Home Renovation", text: "Indoor and outdoor updates planned as one project." },
      ],
    },
    areas: {
      title: "Outdoor Kitchens in Your Area",
      text: "We build outdoor kitchens on patios, pool decks, and lanais across Tampa and about 45 miles around it.",
      label: "Outdoor Kitchens in",
      cities: ["tampa", "brandon", "valrico", "lithia", "riverview", "land-o-lakes", "wesley-chapel", "clearwater", "st-pete"],
      more: "See [every location we serve](/locations), including Lutz, Town 'n' Country, and Zephyrhills.",
    },
    faqTitle: "Common Questions About Outdoor Kitchens",
    faqImage: {
      src: "/gallery/navy-wet-bar.webp",
      alt: "Navy wet bar with shaker cabinets and a stone counter",
      position: "center 60%",
    },
    final: {
      title: "Start Designing Your Outdoor Kitchen",
      text: "Your best gatherings already happen outside. Let's give them a kitchen that keeps up.",
      closing:
        `Call Valora Construction & Remodeling at (813) 240-5570 or [request an estimate online](/contact). See what our clients say in our [Google reviews](${GOOGLE_REVIEWS}).`,
    },
  },
};

export const detailServices: Service[] = [shower, refacing, additions, garage, outdoor];
