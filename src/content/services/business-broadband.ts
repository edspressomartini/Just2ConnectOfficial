import heroImage from "@/images/ProductPage/broadbandHero.svg";
import type { ServiceContent } from "@/types/service-content";

export interface BroadbandSpeedTier {
  readonly name: string;
  readonly technology: string;
  readonly downloadMbps: string;
  readonly uploadMbps: string;
}

/**
 * ADSL was removed from this list: the copper network it runs on is switched
 * off on 31 January 2027, so it is no longer something to sell.
 */
export const broadbandSpeedTiers: readonly BroadbandSpeedTier[] = [
  {
    name: "Superfast",
    technology: "FTTC & FTTP",
    downloadMbps: "35 MBPS",
    uploadMbps: "17 MBPS",
  },
  {
    name: "Ultrafast",
    technology: "FTTP & G.Fast",
    downloadMbps: "300 MBPS",
    uploadMbps: "50 MBPS",
  },
  {
    name: "Leased Line",
    technology: "Dedicated fibre",
    downloadMbps: "1,000 MBPS",
    uploadMbps: "1,000 MBPS",
  },
];

export const businessBroadband: ServiceContent = {
  slug: "business-broadband",
  navLabel: "Broadband",
  heading: "Business Broadband",
  strapline: ["Superfast", "Ultrafast", "Leased Lines"],
  metaTitle: "Business Broadband in Hertfordshire",
  metaDescription:
    "Fast, superfast and ultrafast business broadband across Hertfordshire, Bedfordshire and Buckinghamshire. Unlimited data, free static IP and UK support.",
  heroImage,
  heroImageAlt: "Illustration of a business broadband connection",
  /*
   * Fibre to the premises only. No leased line price here yet: the figure we
   * were given pairs £275 a month with a 10Mb download, which cannot be right
   * and would read as worse value than the £39.99 fibre.
   */
  fromPrice: {
    amount: "£39.99",
    unit: "a month",
    note: "Fibre to the premises, on a lifetime price guarantee",
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
          text: "Generally speaking, the best broadband is the fastest you can get. FTTC is available in most areas, whilst FTTP is available in a growing number of locations. We will check exactly what can be delivered to your postcode before recommending anything.",
        },
      ],
    },
    {
      question: "What are the different types of broadband?",
      answer: [
        {
          kind: "list",
          items: [
            "Superfast: known as FTTC or VDSL - typically 37MB download / 17MB upload",
            "Ultrafast: known as FTTP and G.Fast - typically 300MB download / 50MB upload",
            "Leased Line: a dedicated fibre from 100MB to 1,000MB, the same speed up and down",
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
          text: "You should consider having your own leased line. This will give you from 100MB/100MB to 1000MB/1000MB.",
        },
        {
          kind: "paragraph",
          text: "A leased line is a direct fibre from your supplier to your premises. Usually you won't have to pay an installation cost, but the contract will be for a minimum of 36 months.",
        },
      ],
    },
  ],
};
