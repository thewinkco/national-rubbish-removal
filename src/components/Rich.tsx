import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { Block } from "@/lib/legacy";

// Renders the small inline-markdown subset used in migrated content: [text](href) and **bold**.
const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

export function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/")) return <Link key={i} href={href}>{label}</Link>;
          if (href.startsWith("tel:") || href.startsWith("mailto:")) return <a key={i} href={href}>{label}</a>;
          return (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }): ReactNode {
  return blocks.map((b, i) => {
    switch (b.type) {
      case "p":
        return <p key={i}><Inline text={b.text} /></p>;
      case "h3":
        return <h3 key={i}>{b.text}</h3>;
      case "list":
        return (
          <ul key={i}>
            {b.items.map((item, j) => <li key={j}><Inline text={item} /></li>)}
          </ul>
        );
      case "qa":
        return (
          <p key={i}>
            <strong>{b.q}</strong> <Inline text={b.a} />
          </p>
        );
    }
  });
}
