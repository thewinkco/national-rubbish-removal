import Link from "next/link";
import { Mascot } from "@/components/Mascot";
import { Phone } from "@phosphor-icons/react/ssr";
import { SITE } from "@/content/site";
import { CallLink } from "@/components/ContactLinks";
import { CategoryCards } from "@/components/sections";

export const metadata = { title: "Page not found | National Rubbish Removal", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <section className="grain border-b border-line bg-paper text-ink-800">
        <div className="container-x py-16 text-center sm:py-20">
          <div className="relative mx-auto h-[210px] w-[300px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
            <span className="absolute bottom-0 left-1/2 h-[190px] w-[190px] -translate-x-1/2 rounded-full bg-brand-50" aria-hidden />
            <Mascot pose="welcome" sizes="300px" className="relative mx-auto h-auto w-[300px]" />
          </div>
          <p className="eyebrow mt-4">404</p>
          <h1 className="h-display mt-3 text-4xl sm:text-5xl">Looks like this page got hauled away.</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600">The page you&apos;re after has moved or no longer exists. Your rubbish, on the other hand, can still be gone today.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">Back to home</Link>
            <CallLink location="404" className="btn-outline"><Phone className="h-4 w-4" aria-hidden /> {SITE.phone}</CallLink>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-x"><CategoryCards headingLevel="h2" /></div>
      </section>
    </>
  );
}
