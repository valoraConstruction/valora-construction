import Link from "next/link";
import { Fragment, type ReactNode } from "react";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders text with [anchor](href) links. Internal paths use next/link; external links open in a new tab. */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, anchor, href] = match;
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      href.startsWith("/") ? (
        <Link key={start} href={href} className="text-gold-deep underline underline-offset-4 hover:text-gold">
          {anchor}
        </Link>
      ) : (
        <a
          key={start}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-deep underline underline-offset-4 hover:text-gold"
        >
          {anchor}
        </a>
      ),
    );
    last = start + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((part, index) => (typeof part === "string" ? <Fragment key={`t${index}`}>{part}</Fragment> : part))}</>;
}

/** Plain text for schema and meta: drops the link markup, keeps the anchor. */
export function plainText(text: string) {
  return text.replace(LINK, "$1");
}
