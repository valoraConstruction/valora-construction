import Image from "next/image";
import { HeroSlider } from "@/components/home/HeroSlider";
import { LatestWorks } from "@/components/home/LatestWorks";
import { LocationsSection } from "@/components/home/LocationsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Estimate } from "@/components/home/Estimate";
import { process, projects, site } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Valora Construction | Kitchen & Bathroom Remodeling in Tampa",
  description:
    "Valora Construction & Remodeling designs and builds kitchen remodels, bathroom remodels, and whole-home renovations in Tampa Bay. Licensed CBC1270738.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section id="about" className="overflow-hidden bg-white text-ink">
        <div className="mx-auto flex w-full max-w-full flex-col items-start px-6 pt-20 sm:px-10 sm:pt-24 lg:w-fit lg:flex-row lg:items-stretch lg:px-8 lg:pt-28">
          <div className="flex w-full flex-col lg:w-max">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="h-px w-14 shrink-0 bg-gold sm:w-24" aria-hidden="true" />
              <p className="about-word text-[clamp(2.35rem,6.2vw,6.75rem)]">
                ABOUT US
              </p>
            </div>
            <div className="mt-7 lg:mb-10">
              <h2 className="whitespace-nowrap font-display text-[clamp(0.92rem,4.05vw,2.45rem)] font-medium leading-[1.22] text-ink">
                Hi, I’m Amanda Neve,
                <br />
                the owner and heart
                <br />
                behind Valora Construction!
              </h2>
              <div className="mt-8 max-w-[28rem] space-y-4 text-[13px] leading-[1.7] text-stone sm:text-sm">
                <p>
                  My passion for transforming homes began in 2020, combining my background in interior design with a growing love for construction and craftsmanship.
                </p>
                <p>
                  After moving to Tampa, I turned that passion into Valora Construction — a local, family-owned business dedicated to creating beautiful, functional spaces with a touch of luxury.
                </p>
                <p>
                  To me, every project is personal. Whether it’s a kitchen, bathroom, or full home renovation, my goal is to bring your vision to life with thoughtful design, quality craftsmanship, and attention to every detail.
                </p>
                <p>I can’t wait to help turn your house into a home you truly love!</p>
              </div>
              <p className="mt-8">
                <span className="block font-display text-2xl text-ink">Amanda Neve</span>
                <span className="mt-1 block text-sm text-stone">Owner, Valora Construction</span>
              </p>
            </div>
          </div>
          <div className="relative -mx-6 mt-8 aspect-[5/6] w-[calc(100%+3rem)] shrink-0 overflow-hidden sm:-mx-10 sm:w-[calc(100%+5rem)] lg:mx-0 lg:ml-8 lg:mt-0 lg:aspect-auto lg:h-auto lg:w-[24rem] lg:self-stretch">
            <Image
              src="/brand/amanda-figure.webp"
              alt="Amanda Neve, owner of Valora Construction"
              fill
              quality={80}
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="!right-auto object-cover object-top max-lg:!left-[8%] max-lg:!w-[84%] max-lg:!max-w-none"
            />
          </div>
        </div>
      </section>

      <ServicesSection />

      <LatestWorks items={projects} />

      <ProcessSection
        kicker="The process"
        title="Bring your vision to life in five steps."
        steps={process}
      />

      <Testimonials />

      <section className="bg-white text-ink">
        <div className="w-full px-6 sm:px-10 lg:px-[11vw] grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="kicker">Our promise</p>
            <blockquote className="mt-6 text-xl leading-relaxed text-ink sm:text-2xl">{site.promise}</blockquote>
            <div className="mt-8">
              <p className="font-display text-3xl tracking-wide text-gold sm:text-4xl">{site.license}</p>
              <p className="mt-3 text-sm text-stone">License</p>
              <p className="mt-3 text-sm text-stone">Tampa, Florida</p>
            </div>
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <Image
              src="/brand/logo.png"
              alt="Valora Construction & Remodeling"
              width={1024}
              height={682}
              className="h-40 w-auto sm:h-52"
            />
          </div>
        </div>
      </section>

      <LocationsSection map />

      <Estimate />
    </>
  );
}
