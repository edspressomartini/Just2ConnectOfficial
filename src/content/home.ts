import type { StaticImageData } from "next/image";

import whyContract from "@/images/Home/whyContract.svg";
import whyLocation from "@/images/Home/whyLocation.svg";
import whyPrices from "@/images/Home/whyPrices.svg";
import whySupport from "@/images/Home/whySupport.svg";
import deskPhoneIcon from "@/images/icons/PinkDeskPhone.png";
import routerIcon from "@/images/icons/PinkRouter.png";
import simIcon from "@/images/icons/PinkSim.png";

export interface HomeServiceCard {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly icon: StaticImageData;
  readonly iconAlt: string;
}

export const homeServiceCards: readonly HomeServiceCard[] = [
  {
    slug: "telephone-systems",
    title: "Telephone Systems",
    description:
      "Mobile, office or home based, you can connect with your customers wherever you are.",
    icon: deskPhoneIcon,
    iconAlt: "Business telephone system",
  },
  {
    slug: "business-broadband",
    title: "Business Broadband",
    description:
      "Fast, reliable business broadband with the speed and price point to match your needs.",
    icon: routerIcon,
    iconAlt: "Business broadband router",
  },
  {
    slug: "business-mobile-sim",
    title: "Mobile SIM Cards",
    description:
      "Business mobile SIMs on flexible tariffs, on the network with the best local coverage.",
    icon: simIcon,
    iconAlt: "Business mobile SIM card",
  },
];

/**
 * Supplied alongside the main services but sold on enquiry rather than from a
 * price list, so they get a mention rather than a page of their own.
 */
export const otherServices: readonly string[] = [
  "Virtual phone numbers",
  "SIP trunks to replace ISDN lines",
  "Structured ethernet cabling",
  "WiFi access points",
  "Broadband and telephony hardware",
];

export interface HomeBenefit {
  readonly title: string;
  readonly description: string;
  readonly image: StaticImageData;
}

export const homeBenefits: readonly HomeBenefit[] = [
  {
    title: "Unlimited Support",
    description:
      "Service and site visits are included. Gone are those frustrating support calls or shocking call-out charges.",
    image: whySupport,
  },
  {
    title: "Competitive Pricing",
    description:
      "We promise an affordable and reliable solution with absolutely no hidden costs.",
    image: whyPrices,
  },
  {
    title: "Friendly & Local",
    description:
      "Our friendly team provide a first-class local service. Don't just take our word for it, check out our customer reviews below.",
    image: whyLocation,
  },
  {
    title: "Short-term Contracts",
    description:
      "We believe when you choose us you'll never want to leave, which is why we are confident offering most services on a 30 day contract.",
    image: whyContract,
  },
];
