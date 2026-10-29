import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Estimate } from "@/components/home/Estimate";
import { ProcessSection } from "@/components/home/ProcessSection";
import { Reviews } from "@/components/Reviews";
import { RichText } from "@/components/service/RichText";
import { ButtonPair, PageHero } from "@/components/ui";
import { cityBySlug, getService, site, type Service } from "@/lib/content";
import type { DetailBlock, ServiceDetail } from "@/lib/serviceDetails";

const pad = "px-6 sm:px-10 lg:px-[11vw]";
const sectionTitle = "mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-5xl";
const body = "text-[15px] leading-[1.7] text-stone";

export type Tone = "white" | "ivory";

function toneClass(tone: Tone) {
  return tone === "white" ? "bg-white" : "bg-ivory";
}

function Heading({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <>
      <p className="kicker">{kicker}</p>
      <h2 className={sectionTitle}>{title}</h2>
      {intro ? (
        <p className={`mt-6 max-w-3xl ${body}`}>
          <RichText text={intro} />
        </p>
      ) : null}
    </>
  );
}

function Bullet() {
  return <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-gold" aria-hidden="true" />;
}

function ListItems({ items, ordered = false }: { items: (string | { lead: string; text: string })[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className="mt-8 grid gap-x-12 border-t border-ink/10 md:grid-cols-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-4 border-b border-ink/10 py-4 text-[15px] leading-[1.65] text-ink/85">
          {ordered ? (
            <span className="w-6 shrink-0 font-display text-sm tracking-[0.16em] text-gold" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : (
            <Bullet />
          )}
          <span>
            {typeof item === "string" ? (
              <RichText text={item} />
            ) : (
              <>
                <strong className="font-medium text-ink">{item.lead}</strong> <RichText text={item.text} />
              </>
            )}
          </span>
        </li>
      ))}
    </List>
  );
}

export function Block({ block, tone, service }: { block: DetailBlock; tone: Tone; service?: Service }) {
  if (block.kind === "cards") {
    const items = block.items.length ? block.items : (service?.includes ?? []);
    return (
      <section className={`overflow-hidden ${toneClass(tone)} py-16 text-ink sm:py-20 lg:py-24`}>
        <div className={pad}>
          <Heading kicker={block.kicker} title={block.title} intro={block.intro} />
          <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
            {items.map((item, index) => (
              <li key={item.title}>
                <p className="text-[1.05rem] font-medium leading-none text-stone sm:text-[1.2rem]">{String(index + 1).padStart(2, "0")}</p>
                <div
                  className={`mt-3 flex h-[calc(100%-1.75rem)] flex-col px-5 pb-5 pt-5 shadow-[0_12px_30px_rgba(36,31,26,0.08)] sm:px-6 sm:pb-6 sm:pt-6 ${tone === "white" ? "bg-ivory" : "bg-white"}`}
                >
                  <h3 className="text-sm font-medium uppercase leading-snug tracking-[0.06em] text-[#111]">{item.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.55] text-[#5f5f5f]">
                    <RichText text={item.text} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  if (block.kind === "features") {
    return (
      <section className={`${toneClass(tone)} py-16 text-ink sm:py-20 lg:py-24`}>
        <div className={pad}>
          <Heading kicker={block.kicker} title={block.title} intro={block.intro} />
          <div className="mt-10 grid gap-x-16 border-t border-ink/10 md:grid-cols-2">
            {block.items.map((item) => (
              <div key={item.title} className="border-b border-ink/10 py-7">
                <h3 className="font-display text-xl leading-snug text-ink sm:text-2xl">{item.title}</h3>
                <p className={`mt-3 ${body}`}>
                  <RichText text={item.text} />
                </p>
              </div>
            ))}
          </div>
          {block.outro ? (
            <p className={`mt-8 max-w-3xl ${body}`}>
              <RichText text={block.outro} />
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  if (block.kind === "table") {
    return (
      <section className={`${toneClass(tone)} py-16 text-ink sm:py-20 lg:py-24`}>
        <div className={pad}>
          <Heading kicker={block.kicker} title={block.title} intro={block.intro} />
          <div className="mt-10 grid gap-4 md:hidden">
            {block.columns.map((column, col) => (
              <div key={column} className={`px-5 py-5 shadow-[0_12px_30px_rgba(36,31,26,0.08)] ${tone === "white" ? "bg-ivory" : "bg-white"}`}>
                <h3 className="font-display text-2xl text-ink">{column}</h3>
                <dl className="mt-3">
                  {block.rows.map((row) => (
                    <div key={row.label} className="border-t border-ink/10 py-3">
                      <dt className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-gold-deep">{row.label}</dt>
                      <dd className="mt-1 text-[15px] leading-[1.55] text-ink/85">{row.cells[col]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className="mt-10 hidden md:block">
            <table className="w-full border-collapse text-left text-[15px] leading-[1.55]">
              <caption className="sr-only">{block.title}</caption>
              <thead>
                <tr className="border-b border-ink/20">
                  <td className="w-[22%] py-4 pr-4" />
                  {block.columns.map((column) => (
                    <th key={column} scope="col" className="py-4 pr-4 font-display text-xl font-normal text-ink sm:text-2xl">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.label} className="border-b border-ink/10 align-top">
                    <th scope="row" className="py-4 pr-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-gold-deep">
                      {row.label}
                    </th>
                    {row.cells.map((cell, index) => (
                      <td key={index} className="py-4 pr-4 text-ink/85">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  if (block.kind === "list") {
    return (
      <section className={`${toneClass(tone)} py-16 text-ink sm:py-20 lg:py-24`}>
        <div className={pad}>
          <Heading kicker={block.kicker} title={block.title} intro={block.intro} />
          <ListItems items={block.items} ordered={block.ordered} />
          {block.outro ? (
            <p className={`mt-6 max-w-3xl ${body}`}>
              <RichText text={block.outro} />
            </p>
          ) : null}
          {block.second ? (
            <>
              <p className="mt-10 max-w-3xl text-[15px] font-medium leading-[1.7] text-ink">{block.second.intro}</p>
              <ListItems items={block.second.items} />
              {block.second.outro ? (
                <p className={`mt-6 max-w-3xl ${body}`}>
                  <RichText text={block.second.outro} />
                </p>
              ) : null}
            </>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className={`${toneClass(tone)} py-16 text-ink sm:py-20 lg:py-24`}>
      <div className={`${pad} grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16`}>
        <div>
          <p className="kicker">{block.kicker}</p>
          <h2 className={sectionTitle}>{block.title}</h2>
        </div>
        <div className="space-y-4 lg:pt-10">
          {block.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-[1.75] text-stone sm:text-[1.05rem]">
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intro({ service, detail }: { service: Service; detail: ServiceDetail }) {
  const longWord = detail.word.length > 8;
  return (
    <section className="overflow-hidden bg-white text-ink">
      <div className="mx-auto flex w-full max-w-full flex-col items-start px-6 pb-10 pt-20 sm:px-10 sm:pt-24 lg:w-fit lg:flex-row lg:items-stretch lg:px-8 lg:pb-0 lg:pt-28">
        <div className="flex w-full flex-col lg:w-max">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="h-px w-14 shrink-0 bg-gold sm:w-24" aria-hidden="true" />
            <p className="about-word" style={longWord ? { letterSpacing: "0.06em" } : undefined} aria-hidden="true">
              {detail.word.toUpperCase()}
            </p>
          </div>
          <div className="mt-7 lg:mb-10">
            <h2 className="max-w-[22ch] font-display text-[clamp(1.7rem,3.5vw,2.45rem)] font-medium leading-[1.22] text-ink">
              {service.summary}
            </h2>
            <p className="mt-8 max-w-[34rem] text-[13px] leading-[1.7] text-stone sm:text-sm">{service.description}</p>
            <ButtonPair row className="mt-8">
              <a href={`tel:${site.phoneTel}`} className="btn-gold">
                Call {site.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-ghost">
                Get an estimate
              </Link>
            </ButtonPair>
          </div>
        </div>
        <div className="relative mt-10 aspect-[4/5] w-[min(100%,18rem)] shrink-0 self-start overflow-hidden sm:w-[22rem] lg:ml-8 lg:mt-0 lg:aspect-auto lg:h-auto lg:w-[24rem] lg:self-stretch">
          <Image
            src={detail.portrait.src}
            alt={detail.portrait.alt}
            title={detail.portrait.alt}
            fill
            quality={80}
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 80vw"
            className="object-cover"
            style={{ objectPosition: detail.portrait.position ?? "center" }}
          />
        </div>
      </div>
      <div className="w-full px-6 pb-16 sm:px-10 lg:px-[11vw] lg:pb-24">
        <ul className="grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {detail.trust.map((fact) => (
            <li key={fact} className="flex gap-4 border-b border-ink/10 py-5 text-sm leading-snug text-ink sm:pr-6">
              <Bullet />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Why({ detail }: { detail: ServiceDetail }) {
  return (
    <section className="bg-white py-16 text-ink sm:py-20 lg:py-24">
      <div className={pad}>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Why Valora</p>
            <h2 className={sectionTitle}>{detail.why.title}</h2>
          </div>
          <a href={`tel:${site.phoneTel}`} className="btn-gold shrink-0">
            Call {site.phoneDisplay}
          </a>
        </div>
        <ol className="mt-10 grid gap-x-16 border-t border-ink/10 md:grid-cols-2">
          {detail.why.items.map((item, index) => (
            <li key={item.title} className="flex gap-5 border-b border-ink/10 py-7">
              <span className="pt-1 font-display text-sm tracking-[0.16em] text-gold" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl leading-snug text-ink sm:text-2xl">{item.title}</h3>
                <p className={`mt-3 ${body}`}>
                  <RichText text={item.text} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Gallery({ detail }: { detail: ServiceDetail }) {
  const { gallery } = detail;
  const cols = gallery.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section className="bg-ivory py-16 text-ink sm:py-20 lg:py-24">
      <div className={pad}>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">From the work</p>
            <h2 className={sectionTitle}>{gallery.title}</h2>
            <p className={`mt-6 max-w-2xl ${body}`}>{gallery.lede}</p>
          </div>
          <Link href="/projects" className="btn-ghost shrink-0">
            All projects
          </Link>
        </div>
        <ul className={`mt-12 grid grid-cols-2 gap-4 sm:gap-6 ${cols}`}>
          {gallery.items.map((item) => (
            <li key={item.src}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    title={item.alt}
                    fill
                    quality={80}
                    sizes="(min-width: 1024px) 26vw, 46vw"
                    className="object-cover"
                    style={{ objectPosition: item.position ?? "center" }}
                  />
                </div>
                <figcaption className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LinkGrid({ items }: { items: { href: string; kicker?: string; label: string; text?: string }[] }) {
  return (
    <ul className="mt-12 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.href} className="border-b border-ink/10">
          <Link href={item.href} className="group flex h-full items-start justify-between gap-4 py-6 pr-4 transition-colors sm:px-6">
            <span>
              {item.kicker ? <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-gold">{item.kicker}</span> : null}
              <span className="mt-2 block font-display text-2xl text-ink group-hover:text-gold-deep">{item.label}</span>
              {item.text ? <span className="mt-2 block text-sm leading-relaxed text-stone">{item.text}</span> : null}
            </span>
            <span aria-hidden="true" className="mt-2 self-end text-sm tracking-[0.16em] text-gold">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Related({ detail, tone }: { detail: ServiceDetail; tone: Tone }) {
  const items = detail.related.items
    .filter((item) => getService(item.slug))
    .map((item) => ({ href: `/services/${item.slug}`, label: item.label, text: item.text }));
  return (
    <section className={`${toneClass(tone)} py-16 text-ink sm:py-20 lg:py-24`}>
      <div className={pad}>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Related services</p>
            <h2 className={sectionTitle}>{detail.related.title}</h2>
          </div>
          <Link href="/contact" className="btn-gold shrink-0">
            Get an estimate
          </Link>
        </div>
        <LinkGrid items={items} />
      </div>
    </section>
  );
}

function Areas({ detail, tone }: { detail: ServiceDetail; tone: Tone }) {
  const items = detail.areas.cities.flatMap((slug) => {
    const city = cityBySlug(slug);
    return city ? [{ href: `/locations/${city.slug}`, kicker: city.county, label: `${detail.areas.label} ${city.name}` }] : [];
  });
  return (
    <section id="service-area" className={`${toneClass(tone)} py-16 text-ink sm:py-20 lg:py-24`}>
      <div className={pad}>
        <p className="kicker">Service area</p>
        <h2 className={sectionTitle}>{detail.areas.title}</h2>
        <p className={`mt-6 max-w-2xl ${body}`}>{detail.areas.text}</p>
        <LinkGrid items={items} />
        <p className={`mt-8 ${body}`}>
          <RichText text={detail.areas.more} />
        </p>
      </div>
    </section>
  );
}

export function DetailServicePage({ service }: { service: Service }) {
  const detail = service.detail as ServiceDetail;
  const faqs = service.faqs.map((faq, index) => ({ n: String(index + 1).padStart(2, "0"), title: faq.q, text: faq.a }));
  const steps = detail.process.steps.map((step, index) => ({ n: String(index + 1).padStart(2, "0"), ...step }));
  const tones: Tone[] = ["white", "ivory"];

  return (
    <>
      <PageHero
        word={detail.word}
        eyebrow={service.eyebrow}
        title={detail.h1}
        lede={detail.subtitle}
        image={detail.hero.src}
        imageAlt={detail.hero.alt}
        imagePosition={detail.hero.position}
      />
      <Intro service={service} detail={detail} />
      <Estimate title={detail.estimate.title} text={detail.estimate.text} />
      <Reviews />
      {detail.sections.map((block, index) => (
        <Block key={block.title} block={block} tone={tones[index % 2]} service={service} />
      ))}
      <ProcessSection
        kicker="The process"
        title={detail.process.title}
        steps={steps}
        image={detail.process.image.src}
        imageAlt={detail.process.image.alt}
        imagePosition={detail.process.image.position}
      />
      <Why detail={detail} />
      <Gallery detail={detail} />
      {detail.local ? <Block block={detail.local} tone="white" service={service} /> : null}
      <Related detail={detail} tone={detail.local ? "ivory" : "white"} />
      <Areas detail={detail} tone={detail.local ? "white" : "ivory"} />
      <ProcessSection
        kicker="Questions"
        title={detail.faqTitle}
        steps={faqs}
        image={detail.faqImage.src}
        imageAlt={detail.faqImage.alt}
        imagePosition={detail.faqImage.position}
      />
      <CallToAction title={detail.final.title} text={detail.final.text} closing={detail.final.closing} estimate />
    </>
  );
}
