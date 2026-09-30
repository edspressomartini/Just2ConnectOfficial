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
  /**
   * Listed in structured data but not in the footer. It is a real account
   * Google already associates with the business, so naming it helps Google
   * tie the site to the Business Profile. Whether it is still posted to is a
   * separate question, which is why it is not linked from the page.
   */
  readonly x: string;
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
    x: "https://x.com/just2connect",
  },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:00",
  },
};

export const telHref = `tel:${business.phone.e164}`;
export const mailtoHref = `mailto:${business.email}`;

/** Typed into the message box for the visitor, who can edit it before sending. */
const WHATSAPP_GREETING =
  "Hi Just2Connect, I would like to ask about business phones or broadband.";

/*
 * WhatsApp Business is registered to the landline rather than a mobile, so
 * this derives from the one published number instead of introducing a second
 * one to keep in step across the site, Google and the directories. `wa.me`
 * wants the country code with no plus and no leading zero.
 */
export const whatsappHref = `https://wa.me/${business.phone.e164.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;
