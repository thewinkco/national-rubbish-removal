import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/ssr";
import { SITE } from "@/content/site";

const SOCIALS = [
  { name: "Facebook", href: SITE.socials.facebook, Icon: FacebookLogo },
  { name: "Instagram", href: SITE.socials.instagram, Icon: InstagramLogo },
  { name: "LinkedIn", href: SITE.socials.linkedin, Icon: LinkedinLogo },
] as const;

/** Icon links to the business's social profiles. `dark` styles them for the dark footer. */
export function SocialLinks({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {SOCIALS.map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${SITE.name} on ${name}`}
            title={name}
            className={`grid h-11 w-11 place-items-center rounded-full border transition duration-300 ${
              dark
                ? "border-white/15 text-white/80 hover:border-brand hover:bg-brand hover:text-white"
                : "border-line bg-white text-ink-700 hover:border-brand hover:bg-brand hover:text-white"
            }`}
          >
            <Icon className="h-5 w-5" weight="fill" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
