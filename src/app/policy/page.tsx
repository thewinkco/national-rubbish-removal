import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata({
  title: "Privacy Policy | National Rubbish Removal",
  description: "Our privacy policy explains how we collect, use and protect your personal data when you book our rubbish removal service in Sydney.",
  path: "/policy",
});

export default function PolicyPage() {
  return <LegalPage slug="policy" title="Privacy Policy" />;
}
