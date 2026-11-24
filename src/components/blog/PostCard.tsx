import Image from "next/image";
import Link from "next/link";
import { formatDate, readingMinutes, type BlogPost } from "@/content/blog";

export function PostCard({ post, headingLevel = "h3", priority = false }: { post: BlogPost; headingLevel?: "h2" | "h3"; priority?: boolean }) {
  const H = headingLevel;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:shadow-lift">
      <div className="relative aspect-[16/9] overflow-hidden bg-mist">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          {...(priority ? { preload: true } : {})}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[13px] font-medium text-brand-ink">{post.category}</p>
        <H className="mt-2 font-display text-[22px] leading-snug text-ink-800">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-brand-ink">
            {post.h1}
          </Link>
        </H>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">{post.excerpt}</p>
        <p className="mt-5 text-[13px] text-muted">
          <time dateTime={post.updated}>{formatDate(post.updated)}</time> · {readingMinutes(post)} min read
        </p>
      </div>
    </article>
  );
}
