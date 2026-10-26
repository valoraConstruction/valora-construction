import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";
import { JsonLd, PageHero } from "@/components/ui";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Projects",
  description: "Kitchens, bathrooms, and finished rooms from Valora Construction in Tampa Bay.",
  path: "/projects",
  image: "/gallery/hero-kitchen.jpg",
  imageAlt: "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />
      <PageHero
        word="Projects"
        eyebrow="Recent work"
        title="Kitchens, baths, and finished rooms."
        lede="Project photography from recent work: cabinetry, stone, tile, showers, and floors. Your own house is designed around how you live, not copied from a picture."
        image="/gallery/hero-kitchen.jpg"
        imageAlt="Light oak kitchen with a marble island, glass pendants, and a black-framed window"
      />
      <section className="bg-ivory py-16 text-ink md:py-24">
        <Gallery />
      </section>
      <CallToAction />
    </>
  );
}
