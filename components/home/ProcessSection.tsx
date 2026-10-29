import Image from "next/image";
import Link from "next/link";
import { ProcessSteps, type Step } from "@/components/home/ProcessSteps";

export function ProcessSection({
  kicker,
  title,
  steps,
  image = "/gallery/cream-island-kitchen.webp",
  imageAlt = "Cream kitchen with a large island, four stools, plaster range hood, and light stone floor",
  imagePosition = "center",
}: {
  kicker: string;
  title: string;
  steps: readonly Step[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  return (
    <section className="bg-[#f6f1e7] text-ink">
      <div className="w-full px-6 pt-16 pb-4 sm:px-10 sm:pt-20 sm:pb-6 lg:px-[11vw] lg:py-28">
        <div className="grid items-stretch gap-x-16 gap-y-8 lg:grid-cols-2 lg:gap-y-10">
          <div className="flex min-w-0 flex-col lg:h-full">
            <p className="kicker">{kicker}</p>
            <div className="mt-4 flex flex-wrap items-start justify-between gap-x-6 gap-y-4 lg:block">
              <h2 className="flex-[1_1_12rem] font-display text-[clamp(1.75rem,9.25vw,2.25rem)] leading-tight sm:text-5xl">{title}</h2>
              <span className="shrink-0 lg:hidden">
                <Link href="/contact" className="btn-ghost whitespace-nowrap !px-3">
                  Contact us
                </Link>
              </span>
            </div>
            <div className="mt-8 lg:mt-10 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col min-[90rem]:mt-auto min-[90rem]:block min-[90rem]:flex-none min-[90rem]:pt-16">
              <div className="relative aspect-[872/326] w-full overflow-hidden lg:aspect-auto lg:min-h-[28rem] lg:flex-1 min-[90rem]:aspect-[872/326] min-[90rem]:h-auto min-[90rem]:min-h-0 min-[90rem]:flex-none">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  quality={80}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: imagePosition }}
                />
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-col">
            <div className="hidden lg:block" aria-hidden="true">
              <p className="kicker invisible">{kicker}</p>
            </div>
            <div className="mt-4 hidden justify-end lg:flex">
              <Link href="/contact" className="btn-ghost shrink-0">
                Contact us
              </Link>
            </div>
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
