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
     * TODO: confirm the year the front page ran. An undated achievement reads
     * as either recent or evasive, and we cannot date it until Terry confirms.
     * The paper was The Gazette at the time and has since been renamed Hemel
     * Today, so both names have to appear or the claim stops checking out.
     */
    title: "Superfast broadband for Berkhamsted business",
    detail:
      "Front page of The Gazette, now Hemel Today, for bringing superfast broadband to a Berkhamsted industrial estate that the national providers had left behind.",
    badge: "Front page news",
  },
  {
    /*
     * Framed as membership rather than a join date on purpose. The Chamber was
     * formed in 1993, the old copy wrongly gave that as 2017, and nobody has
     * been able to confirm the year we actually joined. Naming the networks
     * says the same thing without resting on a date we cannot stand behind.
     */
    title: "Member of local business networks",
    detail:
      "Terry is an active member of the business networks around the towns we serve, including the Berkhamsted & District Chamber of Commerce, which has represented businesses across the district since 1993.",
    badge: "Berkhamsted Chamber",
  },
  {
    title: "Proud Corporate Partner of The Hospice of St Francis",
    detail:
      "Part of the Corporate Partner Programme since 2016, supporting the hospice's work across Berkhamsted and the surrounding towns.",
    badge: "Partner since 2016",
  },
  {
    title: "Dragons' Apprentice Challenge",
    detail:
      "We back teams of local sixth-formers through the Challenge, giving them a stake of seed money and a year of mentoring to grow it for charity.",
    badge: "Supporting local schools",
  },
  {
    title: "Registered and accountable",
    detail: `${business.legalName}, company number ${business.companyNumber}, registered in England and Wales and trading since ${business.foundingYear}.`,
    badge: `Company ${business.companyNumber}`,
  },
];
