import heroImage from "@/images/ProductPage/broadbandHero.svg";
import type { ServiceContent } from "@/types/service-content";

export interface BroadbandSpeedTier {
  /** Plain English, because nobody shops for "SOGEA". */
  readonly name: string;
  /** The industry names, so a reader comparing quotes can match them up. */
  readonly technology: string;
  /** Who this tier is actually for, so a reader can pick without calling. */
  readonly bestFor: string;
  readonly downloadMbps: string;
  readonly uploadMbps: string;
  /** Entry price, where there is one we can publish. */
  readonly fromPrice?: string;
}

/**
 * Speeds as supplied by the business in September 2026.
 *
 * Ranges rather than single figures: every tier is sold at several speeds, and
 * quoting only one made the entry tier look far slower than it is.
 *
 * ADSL is not here. The copper network it runs on is switched off on
 * 31 January 2027, so it is no longer something to sell. G.Fast has gone for
 * the same reason, and it was never a product we supplied.
 */
export const broadbandSpeedTiers: readonly BroadbandSpeedTier[] = [
  {
    name: "Fibre to the cabinet",
    technology: "SOGEA, previously FTTC. Sold as superfast.",
    bestFor:
      "Small offices and shops, where a handful of people are online at once.",
    downloadMbps: "40 to 80",
    uploadMbps: "10 to 20",
  },
  {
    name: "Full fibre",
    technology: "FTTP. Sold as ultrafast.",
    bestFor:
      "Most businesses. Fibre all the way to the building, with no copper left in the line.",
    downloadMbps: "80 to 1,000",
    uploadMbps: "20 to 115",
    fromPrice: "£39.99 a month",
  },
  {
    name: "Leased line",
    technology: "Dedicated fibre, the same speed both ways.",
    bestFor:
      "Businesses that cannot afford to be offline. The line is yours alone, so the speed is guaranteed rather than shared.",
    downloadMbps: "100 to 10,000",
    uploadMbps: "100 to 10,000",
    fromPrice: "£275 a month",
  },
];

export const businessBroadband: ServiceContent = {
  slug: "business-broadband",
  navLabel: "Broadband",
  heading: "Business Broadband",
  strapline: ["Full fibre", "Leased lines", "Unlimited support"],
  metaTitle: "Business Broadband in Hertfordshire",
  metaDescription:
    "Full fibre, fibre to the cabinet and leased lines for businesses across Hertfordshire, Bedfordshire and Buckinghamshire. Unlimited data, free static IP and UK support.",
  heroImage,
  heroImageAlt: "Illustration of a business broadband connection",
  /* Full fibre. Leased lines are priced separately on the speed cards. */
  fromPrice: {
    amount: "£39.99",
    unit: "a month",
    note: "Full fibre, on a lifetime price guarantee",
  },
  nutshell: [
    "We have partnered with the UK's leading, award-winning ISP. This gives us the best connectivity at very competitive prices. Plus full service provisioning and a comprehensive range of fault diagnostic tools, all available within our portal.",
    "Our expertise and experience helps select the best option for your broadband needs. We manage the installation and monitor the performance so that you can be sure you are getting the best from your connection.",
  ],
  features: [
    {
      title: "Unlimited Data Allowance",
      description:
        "All of our broadband connections provide you with unlimited data allowance.",
    },
    {
      title: "Free Static IP Address",
      description:
        "Access your computer and files from anywhere in the world.",
    },
    {
      title: "UK Support",
      description: "No scripts, just friendly experts when you need us.",
    },
    {
      title: "Lifetime Price Guarantee",
      description:
        "At the end of your contract, we won't increase your price.",
    },
    {
      title: "Phone Line Rental",
      description:
        "When you need it, combine broadband with line rental in one great value package.",
    },
    {
      title: "We'll Never Slow You Down",
      description:
        "You'll always get the fastest speed available, any time of day.",
    },
  ],
  faqs: [
    {
      question: "What is the best broadband for me?",
      answer: [
        {
          kind: "paragraph",
          text: "Generally speaking, the best broadband is the fastest you can get. Fibre to the cabinet is available almost everywhere, and full fibre reaches more postcodes every month. We will check exactly what can be delivered to your address before recommending anything, so you are not paying for a headline speed your street cannot actually carry.",
        },
      ],
    },
    {
      question: "What are the different types of broadband?",
      answer: [
        {
          kind: "list",
          items: [
            "Fibre to the cabinet: fibre to the street, copper for the last stretch. Known as SOGEA, and previously as FTTC or VDSL. Typically 40MB to 80MB download, 10MB to 20MB upload.",
            "Full fibre: fibre all the way into the building. Known as FTTP. Typically 80MB to 1,000MB download, 20MB to 115MB upload.",
            "Leased line: a dedicated fibre that nobody else shares, from 100MB to 10,000MB, the same speed up and down.",
          ],
        },
      ],
    },
    {
      question: "What happens to my old copper broadband?",
      answer: [
        {
          kind: "paragraph",
          text: "The UK's copper phone network, along with ADSL broadband, is being switched off on 31 January 2027. Any service still running on it will simply stop working. If you are not sure what your business is on, give us a call on 01442 573030 and we will check for you.",
        },
      ],
    },
    {
      question: "What should I consider when choosing a package?",
      answer: [
        {
          kind: "list",
          items: [
            "Do I need a static IP address?",
            "What is the contention ratio on the service? The lower the better",
            "What are the support arrangements?",
          ],
        },
        {
          kind: "paragraph",
          text: "Usually a business will require most of the above, with responsive support arrangements.",
        },
      ],
    },
    {
      question: "What if I need much faster broadband speeds?",
      answer: [
        {
          kind: "paragraph",
          text: "You should consider having your own leased line. This will give you from 100MB/100MB up to 10,000MB/10,000MB, the same speed in both directions.",
        },
        {
          kind: "paragraph",
          text: "A leased line is a direct fibre from your supplier to your premises. Usually you won't have to pay an installation cost, but the contract will be for a minimum of 36 months.",
        },
      ],
    },
  ],
};
