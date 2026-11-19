import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  title: "Terms of Service | National Rubbish Removal",
  description: "These terms and conditions outline the rules for booking, pricing and cancellations for our rubbish removal service across Sydney metro.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage slug="terms" title="Terms of Service" />;
}
