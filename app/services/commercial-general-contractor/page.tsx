import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { LocationsSection } from "@/components/home/LocationsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { JsonLd, PageHero } from "@/components/ui";
import { site } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Commercial General Contractor",
  description:
    "Commercial general contractor in Tampa Bay for interior renovations: tenant spaces, restrooms, break rooms, flooring, and tile. Florida Certified Building Contractor CBC1270738. Within 45 miles of Tampa.",
  path: "/services/commercial-general-contractor",
  image: "/gallery/commercial-lobby.jpg",
  imageAlt: "Commercial reception with a light oak desk, a quartz counter, and a wood floor continuing toward glass offices",
});

const services = [
  {
    title: "Tenant interiors",
    text: "Offices, retail floors, and reception rooms inside a building that is already standing. We plan the layout, take out what does not stay, and install the finishes that have to meet.",
  },
  {
    title: "Restrooms",
    text: "Demolition, plumbing, electrical, waterproofing, tile, vanities, and fixtures. It is the same sequence as a full bathroom, planned around how the building can be worked in.",
  },
  {
    title: "Break rooms and casework",
    text: "Cabinets, counters, sinks, and lighting for a break room, a service counter, or a reception desk. The storage and the stone are designed together, then installed so they line up.",
  },
  {
    title: "Flooring",
    text: "LVP, tile, and wood floors through the rooms that open into each other, including the transitions at the doorways. The floor is specified with the rooms it meets.",
  },
  {
    title: "Tile",
    text: "Floors, walls, showers, and backsplashes. In a wet room the waterproofing is finished before the tile goes on. The pattern is laid out before the first cut.",
  },
  {
    title: "One written scope",
    text: "Plumbing, electrical, and the finish trades are coordinated by our team. Before demolition you get what is included, how the work is sequenced, and what the schedule depends on.",
  },
];

const examples = [
  {
    kicker: "Casework and stone",
    title: "Break room pantry",
    image: "/gallery/commercial-break-room.jpg",
    alt: "Floor-to-ceiling white pantry cabinets with brass pulls and a long stone counter in a commercial break room",
    summary: "Floor-to-ceiling pantry cabinets, with the pulls lined up across both rows.",
    use: "The same casework is what a reception desk, a break-room pantry, or a service counter needs: storage designed with the stone, then installed so the lines hold.",
  },
  {
    kicker: "Wet rooms",
    title: "Restroom vanity",
    image: "/gallery/commercial-restroom.jpg",
    alt: "Commercial restroom with a long double vanity, brass wall-mounted faucets, and large-format stone tile",
    summary: "A long vanity, wall-mounted brass fixtures, and large-format tile on the walls and floor.",
    use: "A commercial restroom is this sequence at a different scale. Waterproofing first, then wall tile, and the floor, with the fixtures set after the wet area is sound.",
  },
  {
    kicker: "Wall tile",
    title: "Service counter",
    image: "/gallery/commercial-service-counter.jpg",
    alt: "Commercial service counter with a light gray subway tile backsplash, white stone top, gray cabinets, and a black sink",
    summary: "Subway tile, a white counter, and brass hardware chosen together.",
    use: "Service counters and restroom walls depend on the same decision: the tile, the counter, and the fixtures chosen together, then set to the outlets and the edges.",
  },
  {
    kicker: "Floors",
    title: "Office floor",
    image: "/gallery/commercial-office-floor.jpg",
    alt: "Light oak flooring running through a commercial office corridor and glass-walled workrooms",
    summary: "A wood floor carried through the corridor and the openings into the next rooms.",
    use: "An office or sales floor fails at the doorways. We lay the floor so the material, the direction, and the transition are decided before the first room is closed up.",
  },
];

const faqs = [
  {
    n: "01",
    title: "What commercial work do you actually take?",
    text: "Interior renovation: tenant spaces, restrooms, break rooms, reception casework, flooring, and tile. Demolition, plumbing, electrical, waterproofing where a wet room needs it, and the finishes are one scope.",
  },
  {
    n: "02",
    title: "Are you a certified general contractor?",
    text: `Valora holds Florida Certified Building Contractor license ${site.license}. That license covers commercial buildings that do not exceed three stories, and remodeling that does not affect the structural frame. It is not an unlimited certified general contractor license. If a project needs a different license, we say so before anyone opens a wall.`,
  },
  {
    n: "03",
    title: "Can the business stay open while you work?",
    text: "Often, with a plan. We talk through access, dust, water, and which rooms have to stay in use before demolition starts, and we sequence the work around that. If the space has to close, you hear that before you commit.",
  },
  {
    n: "04",
    title: "Do you take a single repair?",
    text: "No. The practice is a complete interior scope: a restroom, a break room, a floor, or a broader tenant renovation. A one-off repair is a different kind of job, and we will tell you that.",
  },
  {
    n: "05",
    title: "Where do you work?",
    text: `Within about ${site.radius} of Tampa, in the cities listed on this site. If you are near the edge of that radius, call and we will tell you directly.`,
  },
];

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Commercial general contractor", path: "/services/commercial-general-contractor" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs.map((faq) => ({ question: faq.title, answer: faq.text })))} />
      <PageHero
        word="Commercial"
        eyebrow="Tampa Bay"
        title="Commercial general contractor."
        lede="Interior renovations for offices, retail, restrooms, and break rooms within 45 miles of Tampa. One licensed team, from the written scope through the walkthrough."
        image="/gallery/commercial-lobby.jpg"
        imagePosition="center 48%"
        imageAlt="Commercial reception with a light oak desk, a quartz counter, and a wood floor continuing toward glass offices"
      />

      <section className="overflow-hidden bg-white text-ink">
        <div className="mx-auto flex w-full max-w-full flex-col items-start px-6 pb-10 pt-20 sm:px-10 sm:pt-24 lg:w-fit lg:flex-row lg:items-stretch lg:px-8 lg:pb-0 lg:pt-28">
          <div className="flex w-full flex-col lg:w-max">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="h-px w-14 shrink-0 bg-gold sm:w-24" aria-hidden="true" />
              <p className="about-word">
                COMMERCIAL
              </p>
            </div>
            <div className="mt-7 lg:mb-10">
              <h2 className="max-w-[16ch] font-display text-[clamp(1.7rem,3.5vw,2.45rem)] font-medium leading-[1.22] text-ink">
                The rooms a business uses, built as one project.
              </h2>
              <div className="mt-8 max-w-[34rem] space-y-4 text-[13px] leading-[1.7] text-stone sm:text-sm">
                <p>
                  Valora Construction is based in Tampa. The company started in 2020, from interior design into construction, and the finished work since then is kitchens, bathrooms, floors, tile, cabinetry, and whole-home renovations across Tampa Bay.
                </p>
                <p>
                  A commercial interior is that same crew and that same order of work. We measure the space, choose the materials together, write the scope, coordinate demolition and the trades, and walk the rooms before we call them done.
                </p>
                <p>
                  License {site.license} is a Florida Certified Building Contractor license. It covers commercial buildings that do not exceed three stories, and remodeling that does not affect the structural frame. We do not take structural-frame work, and we do not describe the license as unlimited.
                </p>
              </div>
              <p className="mt-8">
                <span className="block font-display text-2xl text-ink">Amanda Neve</span>
                <span className="mt-1 block text-sm text-stone">Owner, Valora Construction</span>
              </p>
            </div>
          </div>
          <div className="relative mt-8 h-[26rem] w-[min(100%,18rem)] shrink-0 self-center overflow-hidden sm:h-[30rem] sm:w-[22rem] lg:ml-8 lg:mt-0 lg:h-auto lg:w-[24rem] lg:self-stretch">
            <Image
              src="/gallery/commercial-casework.jpg"
              alt="White commercial casework with a speckled stone counter, a brass cup pull, and an open oak shelf"
              fill
              quality={90}
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full px-6 pb-16 sm:px-10 lg:px-[11vw] lg:pb-24">
          <ul className="grid border-t border-ink/10 sm:grid-cols-2 md:flex md:items-start md:justify-between md:gap-x-6 md:border-b">
            {[
              { label: "License", value: site.license },
              { label: "Based in", value: "Tampa, FL" },
              { label: "Radius", value: site.radius },
              { label: "Hours", value: site.hours },
            ].map((fact) => (
              <li key={fact.label} className="border-b border-ink/10 py-6 sm:px-6 md:shrink-0 md:border-b-0 md:px-0">
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-gold">{fact.label}</span>
                <span className="mt-2 block whitespace-nowrap font-display text-2xl text-ink sm:text-3xl md:text-[clamp(1.45rem,3.35vw,1.875rem)]">
                  {fact.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden bg-ivory py-16 text-ink sm:py-20 lg:py-24">
        <div className="px-6 sm:px-10 lg:px-[11vw]">
          <h2 className="max-w-[14ch] font-display text-[clamp(2.15rem,4.2vw,4rem)] font-medium leading-[1.05] md:max-w-none">
            Commercial services
          </h2>
          <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
            {services.map((item, index) => (
              <li key={item.title}>
                <p className="text-[1.05rem] font-medium leading-none text-stone sm:text-[1.2rem]">{String(index + 1).padStart(2, "0")}</p>
                <div className="mt-3 flex min-h-[13.5rem] flex-col bg-white px-5 pb-5 pt-5 shadow-[0_12px_30px_rgba(36,31,26,0.08)] sm:min-h-[14.5rem] sm:px-6 sm:pb-6 sm:pt-6">
                  <h3 className="text-sm font-medium uppercase leading-snug tracking-[0.06em] text-[#111]">{item.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.5] text-[#6a6a6a]">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white text-ink">
        <div className="w-full px-6 py-20 sm:px-10 lg:px-[11vw] lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="kicker">From the work</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">What the finished rooms show.</h2>
            </div>
            <Link href="/projects" className="btn-ghost shrink-0">
              All projects
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-stone">
            A commercial restroom, break room, reception counter, or sales floor is built from the same sequences: casework and stone, waterproofing and tile, and a floor that has to meet the next room.
          </p>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2">
            {examples.map((item) => (
              <li key={item.title}>
                <div className="relative aspect-[4/3] bg-sand">
                  <Image src={item.image} alt={item.alt} fill quality={90} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
                <p className="kicker mt-5">{item.kicker}</p>
                <h3 className="mt-3 font-display text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink">{item.use}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection
        kicker="Questions"
        title="What owners ask."
        steps={faqs}
        image="/gallery/commercial-office.jpg"
        imageAlt="Open commercial office where large tile meets a light wood floor at the doorway"
        imagePosition="center 68%"
      />

      <LocationsSection />
      <CallToAction />
    </>
  );
}
