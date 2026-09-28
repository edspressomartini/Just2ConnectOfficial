/**
 * Single source of truth for the business details.
 *
 * These values are also what Google cross-references against the Google Business
 * Profile and third-party directories, so they must stay byte-identical everywhere.
 * Change them here, then update the off-site listings to match.
 */
export interface PhoneNumber {
  /** As shown to a human, e.g. "01442 573030". */
  readonly display: string;
  /** E.164, for `tel:` links and structured data. */
  readonly e164: string;
}

export interface PostalAddress {
  readonly streetAddress: string;
  readonly addressLocality: string;
  readonly addressRegion: string;
  readonly postalCode: string;
  readonly addressCountry: string;
}

export interface SocialProfiles {
  readonly linkedIn: string;
}

export interface OpeningHours {
  readonly days: readonly string[];
  readonly opens: string;
  readonly closes: string;
}

export interface Business {
  readonly legalName: string;
  readonly tradingName: string;
  readonly companyNumber: string;
  readonly foundingYear: string;
  readonly siteUrl: string;
  readonly phone: PhoneNumber;
  readonly email: string;
  readonly address: PostalAddress;
  /** Towns we actually have customers in. Named in copy. */
  readonly townsServed: readonly string[];
  /** Wider counties, for structured data rather than copy. */
  readonly countiesServed: readonly string[];
  readonly social: SocialProfiles;
  readonly openingHours: OpeningHours;
}

export const business: Business = {
  legalName: "Just2Connect Ltd",
  tradingName: "Just2Connect",
  companyNumber: "06860886",
  foundingYear: "2009",
  siteUrl: "https://www.just2connect.co.uk",
  phone: {
    display: "01442 573030",
    e164: "+441442573030",
  },
  email: "info@just2connect.com",
  address: {
    streetAddress: "The Counting House, 9 High Street",
    addressLocality: "Tring",
    addressRegion: "Hertfordshire",
    postalCode: "HP23 5TE",
    addressCountry: "GB",
  },
  townsServed: [
    "Berkhamsted",
    "Tring",
    "Hemel Hempstead",
    "St Albans",
    "Harpenden",
    "Harrow",
    "Aylesbury",
    "Watford",
    "Luton",
  ],
  countiesServed: ["Hertfordshire", "Bedfordshire", "Buckinghamshire"],
  social: {
    linkedIn: "https://www.linkedin.com/company/just2connect-ltd/",
  },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:00",
  },
};

export const telHref = `tel:${business.phone.e164}`;
export const mailtoHref = `mailto:${business.email}`;
