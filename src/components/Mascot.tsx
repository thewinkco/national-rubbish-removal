import Image from "next/image";

// Illustrated NRR crew member. Cut-outs with transparent backgrounds live in /public/images/char.
const POSES = {
  welcome: { w: 868, h: 1200, alt: "National Rubbish Removal crew member with arms open" },
  presenting: { w: 577, h: 1200, alt: "National Rubbish Removal crew member pointing to the options" },
  "thumbs-up": { w: 546, h: 1200, alt: "National Rubbish Removal crew member giving a thumbs up" },
  checklist: { w: 584, h: 1200, alt: "National Rubbish Removal crew member holding a price checklist" },
  waving: { w: 577, h: 1200, alt: "National Rubbish Removal crew member waving hello" },
  "arms-crossed": { w: 558, h: 1200, alt: "National Rubbish Removal crew member standing with arms crossed" },
  "pointing-down": { w: 569, h: 1200, alt: "National Rubbish Removal crew member pointing down to the quote form" },
  // Cropped by the frame on the right and bottom: place it against an edge that clips it.
  peeking: { w: 828, h: 1200, alt: "National Rubbish Removal crew member peeking in and waving" },
  // Poses below are on a black background with an orange glow: only use them on dark sections,
  // where `mix-blend-screen` drops the black and keeps the glow as a soft spotlight.
  "carrying-box": { w: 800, h: 1200, alt: "National Rubbish Removal crew member carrying a box", dark: true },
  "on-the-phone": { w: 800, h: 1200, alt: "National Rubbish Removal crew member answering the phone", dark: true },
  sweeping: { w: 800, h: 1200, alt: "National Rubbish Removal crew member sweeping up after a job", dark: true },
  recycling: { w: 800, h: 1200, alt: "National Rubbish Removal crew member with a recycling bin", dark: true },
} as const;

export type MascotPose = keyof typeof POSES;

/** Full-figure illustration. Size it with a height class (width follows the aspect ratio). */
export function Mascot({
  pose,
  className = "",
  sizes = "240px",
  decorative = false,
}: {
  pose: MascotPose;
  className?: string;
  sizes?: string;
  decorative?: boolean;
}) {
  const p = POSES[pose];
  const blend = "dark" in p ? "mix-blend-screen" : "";
  return (
    <Image
      src={`/images/char/rubbish-removal-crew-mascot-${pose}.webp`}
      alt={decorative ? "" : p.alt}
      width={p.w}
      height={p.h}
      sizes={sizes}
      className={`pointer-events-none max-w-none select-none ${blend} ${className}`}
      draggable={false}
    />
  );
}

/**
 * Round "pop-out" portrait: a soft brand-tinted circle with the head rising out of the top.
 * `size` is the circle diameter in px.
 */
export function MascotBadge({ pose, size = 96, className = "" }: { pose: MascotPose; size?: number; className?: string }) {
  const p = POSES[pose];
  const imgW = size * 1.15;
  return (
    <span className={`relative block shrink-0 ${className}`} style={{ width: size, height: size }} aria-hidden>
      <span className="absolute inset-0 rounded-full bg-brand-50 ring-1 ring-brand/15" />
      <span
        className="absolute inset-0"
        style={{ clipPath: `inset(-${Math.round(size * 0.45)}px -20% 0 -20% round 0 0 ${size / 2}px ${size / 2}px)` }}
      >
        <Image
          src={`/images/char/rubbish-removal-crew-mascot-${pose}.webp`}
          alt=""
          width={p.w}
          height={p.h}
          sizes={`${Math.round(imgW)}px`}
          className="absolute left-1/2 max-w-none -translate-x-1/2"
          style={{ width: imgW, height: "auto", top: -size * 0.32 }}
          draggable={false}
        />
      </span>
    </span>
  );
}

/** Small-screen cue above a form: the crew member points down at it. Hidden on desktop, where the form sits beside the copy. */
export function PointDownCue({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`flex items-end gap-3 lg:hidden ${className}`}>
      <div aria-hidden className="relative h-[136px] w-[104px] shrink-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_78%,transparent)]">
        <Mascot pose="pointing-down" decorative sizes="104px" className="h-auto w-full" />
      </div>
      <p className="pb-5 font-display text-[19px] leading-snug text-ink-800">{text}</p>
    </div>
  );
}
