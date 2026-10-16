import { business } from "@/content/business";

export interface Stat {
  readonly value: string;
  readonly label: string;
}

/** Counted from the founding year so it never goes stale. */
function yearsTrading(): number {
  return new Date().getFullYear() - Number(business.foundingYear);
}

export function stats(): readonly Stat[] {
  return [
    { value: `${yearsTrading()} years`, label: "Supporting business telecoms" },
    /*
     * Deliberately no customer count here. A precise figure invites a
     * comparison with national resellers, which is a comparison we lose.
     */
    { value: "Tier one", label: "Carrier networks behind us" },
    { value: "3 counties", label: "Herts, Beds and Bucks" },
    { value: "30 days", label: "Contract on most services" },
  ];
}

export interface Credential {
  readonly title: string;
  readonly detail: string;
  /** Short proof point shown beside the row, e.g. "Member since 2017". */
  readonly badge?: string;
}

/**
 * Drawn from the old vertical timeline. Only the entries that say something
 * about the business's standing are kept; the year-by-year narrative and the
 * office dog have gone.
 */
export const credentials: readonly Credential[] = [
  {
    title: "Berkhamsted & District Chamber of Commerce",
    detail:
      "A member since the Chamber was formed in 2017, and based in the town since 2016.",
    badge: "Member since 2017",
  },
  {
    title: "Hospice of St Francis Corporate Partner",
    detail:
      "Part of the Corporate Partner Programme since 2016, alongside supporting local schools through the Dragons' Apprentice Challenge.",
    badge: "Partner since 2016",
  },
  {
    title: "Superfast broadband for Berkhamsted business",
    detail:
      "Front page of The Gazette for bringing superfast broadband to a Berkhamsted industrial estate that the national providers had left behind.",
    badge: "Front page news",
  },
  {
    title: "Backed by tier-one networks",
    detail:
      "We buy wholesale from the UK's leading award-winning ISP and carrier networks, so you get their infrastructure with our service on top.",
    badge: "Tier one",
  },
  {
    title: "Dedicated first-line IT support",
    detail:
      "Partnered with FNS IT since 2018, so a problem gets picked up quickly rather than queued behind a call centre.",
    badge: "Partner since 2018",
  },
  {
    title: "Registered and accountable",
    detail: `${business.legalName}, company number ${business.companyNumber}, registered in England and Wales and trading since ${business.foundingYear}.`,
    badge: `Company ${business.companyNumber}`,
  },
];
