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
 *
 * Ordered commercial proof first. A buyer choosing a phone system weighs the
 * network and the support arrangement before the community work, so those lead
 * and the memberships follow. Company registration sits last because every
 * limited company has a number; it reassures, it does not differentiate.
 */
export const credentials: readonly Credential[] = [
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
    /*
     * The paper was The Gazette at the time and has since been renamed Hemel
     * Today, so both names appear or the claim stops checking out. The 2014
     * date is Terry's recollection rather than a checked one; worth confirming
     * against the paper before anyone leans on it.
     */
    title: "Superfast broadband for Berkhamsted business",
    detail:
      "Front page of The Gazette, now Hemel Today, in 2014, for bringing superfast broadband to a Berkhamsted industrial estate that the national providers had left behind.",
    badge: "Front page news",
  },
  {
    /*
     * The Chamber was formed in 1993 and we joined in 2017; the old copy
     * conflated the two. Titled on the networks rather than the Chamber alone
     * because the Chamber is one of several Terry is active in.
     */
    title: "Member of local business networks",
    detail:
      "Terry is an active member of the business networks around the towns we serve, including the Berkhamsted & District Chamber of Commerce, which has represented the district since 1993 and which we joined in 2017.",
    badge: "Member since 2017",
  },
  {
    title: "Proud Corporate Partner of The Hospice of St Francis",
    detail:
      "Part of the Corporate Partner Programme since 2014, supporting the hospice's work across Berkhamsted and the surrounding towns.",
    badge: "Partner since 2014",
  },
  {
    title: "Dragons' Apprentice Challenge",
    detail:
      "Teams of eight Year 12 students are given £100 of seed capital and six months to turn it into £1,000 for charity. We mentored one of the teams, and they raised over £4,000.",
    badge: "£4,000 raised",
  },
  {
    title: "Registered and accountable",
    detail: `${business.legalName}, company number ${business.companyNumber}, registered in England and Wales and trading since ${business.foundingYear}.`,
    badge: `Company ${business.companyNumber}`,
  },
];
