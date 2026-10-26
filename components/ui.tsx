import Image from "next/image";
import Link from "next/link";
import { Children, isValidElement, type ReactNode } from "react";

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
  position = "center",
  unoptimized = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  position?: string;
  unoptimized?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        unoptimized={unoptimized}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

function HeroArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image = "/gallery/hero-kitchen.jpg",
  imageAlt = "Light oak kitchen with a marble island, glass pendants, and a black-framed window",
  imagePosition = "center",
  imageFlip = false,
  word,
  wordClassName,
  cta = "Get an estimate",
  href = "/contact",
  priority = true,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageFlip?: boolean;
  word?: string;
  wordClassName?: string;
  cta?: string;
  href?: string;
  priority?: boolean;
}) {
  const displayWord = (word ?? eyebrow).toUpperCase();
  const longestToken = displayWord.split(/\s+/).reduce((max, token) => Math.max(max, token.length), 0);
  const compact = longestToken >= 10;
  const outlined = Boolean(wordClassName);
  const actionClass = "btn-gold mt-7 w-max whitespace-nowrap";
  const mobileCta = cta === "Get an estimate" ? "Let's build" : cta;
  const action = (
    <>
      {mobileCta === cta ? (
        cta
      ) : (
        <>
          <span className="sm:hidden">{mobileCta}</span>
          <span className="hidden sm:inline">{cta}</span>
        </>
      )}
      <HeroArrow />
    </>
  );

  return (
    <section className="page-hero relative mt-20 flex flex-col overflow-hidden bg-ivory text-ink">
      <div className="editorial-photo pointer-events-none absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          quality={80}
          sizes="100vw"
          className="hero-still object-cover"
          style={{ objectPosition: imagePosition, transform: imageFlip ? "scaleX(-1)" : undefined }}
        />
      </div>
      <div className="relative flex w-full grow flex-col justify-end px-6 pb-28 pt-10 sm:px-10 md:justify-center md:py-24 lg:px-[11vw]">
        {outlined ? (
          <h2
            className="hero-outline font-display text-[clamp(2.35rem,6.2vw,6.75rem)] font-medium leading-[1.05]"
            style={{
              color: "transparent",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px #c6a15b",
            }}
          >
            {word}
          </h2>
        ) : (
          <p
            className={`editorial-word${compact ? " editorial-word-compact" : ""}${displayWord.length > 18 ? " editorial-word-long" : displayWord.length > 12 ? " editorial-word-tight" : ""}`}
            aria-hidden="true"
          >
            {displayWord}
          </p>
        )}
        <div className="relative z-10 mt-6 w-[min(22rem,88%)] sm:mt-8 lg:w-[min(32rem,46%)]">
          <p className="kicker">{eyebrow}</p>
          <h1 className="editorial-title mt-4 text-ink">{title}</h1>
          {lede ? <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-stone sm:text-base">{lede}</p> : null}
          {href.startsWith("tel:") || href.startsWith("mailto:") ? (
            <a href={href} className={actionClass}>
              {action}
            </a>
          ) : (
            <Link href={href} className={actionClass}>
              {action}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  light = false,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-[0.72rem] font-medium uppercase tracking-[0.32em] ${light ? "text-gold" : "text-gold-deep"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${light ? "text-ivory" : "text-ink"}`}>
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-ivory/80" : "text-stone"}`}>{lede}</p>
      ) : null}
    </div>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function ButtonPair({
  row = false,
  className = "",
  children,
}: {
  row?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <div className={`btn-pair${row ? " btn-pair-row" : ""}${className ? ` ${className}` : ""}`}>
      {items}
    </div>
  );
}
