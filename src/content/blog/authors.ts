import type { Author, AuthorId } from "./types";

// Swap in a real, named team member (owner or crew lead) with a photo when available: a named author with
// first-hand job experience is the strongest E-E-A-T signal a blog can carry. Set kind: "Person".
export const AUTHORS: Record<AuthorId, Author> = {
  "nrr-crew": {
    id: "nrr-crew",
    name: "The NRR Crew",
    role: "Sydney rubbish removalists, National Rubbish Removal",
    bio: "Written by the team that lifts, loads and sorts rubbish across Sydney seven days a week. Every guide is based on jobs we've done in homes, offices and building sites from the Sutherland Shire to the Northern Beaches, and is checked against current prices and NSW disposal rules before it's published.",
    kind: "Organization",
    image: "/images/brand/nrr-mark.svg",
  },
};
