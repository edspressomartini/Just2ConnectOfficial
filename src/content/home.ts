import { HashIcon } from "@/components/icons/HashIcon";
import { PlugIcon } from "@/components/icons/PlugIcon";
import { SimCardIcon } from "@/components/icons/SimCardIcon";
import { business } from "@/content/business";
import type { Stat } from "@/content/credentials";
import { SWITCH_OFF_DATE_LABEL } from "@/content/digital-switchover";
import { businessBroadband } from "@/content/services/business-broadband";
import { businessMobileSim } from "@/content/services/business-mobile-sim";
import { sipTrunks } from "@/content/services/sip-trunks";
import { telephoneSystems } from "@/content/services/telephone-systems";
import { virtualPhoneNumbers } from "@/content/services/virtual-phone-numbers";
import type { BenefitCardContent } from "@/types/benefit-card-content";
import type { CompactServiceCardContent } from "@/types/compact-service-card-content";
import type { ConsoleRow } from "@/types/console-row";
import type { HeroChipProps } from "@/types/hero-chip-props";
import type { SectionCopy } from "@/types/section-copy";
import type { ServiceCardContent } from "@/types/service-card-content";
import type { SwitchOffReceiptCopy } from "@/types/switch-off-receipt-copy";

/*
 * The home page wording, section by section and in page order, so it can be
 * read and signed off without opening the components. The H1 and the hero
 * paragraph stay in the page itself: they carry the search keywords and are
 * not being rewritten.
 */

export const heroChip: HeroChipProps = {
  highlight: "Site visits included",
  detail: "Herts, Beds & Bucks",
};

export const servicesCopy: SectionCopy = {
  eyebrow: "Our services",
  lead: "What we do.",
  accent: "Done locally.",
  intro:
    "Phones, broadband and mobile from one local team, with support and site visits included as standard.",
};

export const telephonyCard: ServiceCardContent = {
  service: telephoneSystems,
  title: "Telephone Systems",
  description:
    "Mobile, office or home based, you can connect with your customers wherever you are.",
};

/** The devices a call rings on in the telephony card's diagram. */
export const telephonyRoutes: readonly string[] = [
  "Desk phone",
  "Mobile app",
  "Laptop",
];

export const broadbandCard: ServiceCardContent = {
  service: businessBroadband,
  title: "Business Broadband",
  description:
    "Fast, reliable business broadband with the speed and price point to match your needs.",
};

/** The illustrated line status on the broadband card. */
export const broadbandStatusRows: readonly ConsoleRow[] = [
  {
    label: "Main connection",
    // Not "full fibre": the price beside it is the fibre-to-the-cabinet one.
    detail: "Business fibre",
    status: "Connected",
    tone: "live",
  },
  {
    label: "Assure-X failover",
    detail: "Automatic backup line",
    status: "Standby",
    tone: "idle",
  },
  {
    label: "IP address",
    detail: "Same on either line",
    status: "Kept",
    tone: "done",
  },
];

export const compactServiceCards: readonly CompactServiceCardContent[] = [
  {
    service: businessMobileSim,
    title: "Mobile SIM Cards",
    description:
      "Business mobile SIMs on flexible tariffs, on the network with the best local coverage.",
    icon: SimCardIcon,
  },
  {
    service: virtualPhoneNumbers,
    title: "Virtual Phone Numbers",
    description:
      "Local, national and freephone numbers that ring wherever you are, with no equipment needed.",
    icon: HashIcon,
  },
  {
    service: sipTrunks,
    title: "SIP Trunks",
    description:
      "A direct replacement for ISDN lines, with lower call costs and no line rental.",
    icon: PlugIcon,
  },
];

export const otherServicesHeading = "We also supply";

/**
 * Supplied alongside the main services but sold on enquiry rather than from a
 * price list, so they get a mention rather than a card of their own.
 */
export const otherServices: readonly string[] = [
  "Structured ethernet cabling",
  "WiFi access points",
  "Broadband and telephony hardware",
];

export const switchOffCopy: SectionCopy = {
  eyebrow: "The 2027 switch-off",
  lead: "The phone network switches off.",
  accent: "Your number doesn't.",
  intro: `Every analogue phone line in the UK closes on ${SWITCH_OFF_DATE_LABEL}. We move you to a digital phone system and port your numbers as part of it, so nothing changes for anyone calling you.`,
};

export const switchOffCta = "Am I affected?";

export const switchOffReceipt: SwitchOffReceiptCopy = {
  title: "Your move to digital",
  from: "Analogue line",
  to: "Digital phone system",
  numberLabel: "Your number",
  numberStatus: "Kept",
  ready: "Ready to move",
};

/** Takes the countdown rather than working it out, so the page owns the date. */
export function switchOffStats(days: number): readonly Stat[] {
  const countdown: Stat =
    days === 0
      ? { value: "Closed", label: "The analogue network has closed" }
      : { value: `${days}`, label: "Days until analogue lines switch off" };
  const price = telephoneSystems.fromPrice;
  const priceStats: readonly Stat[] =
    price === undefined
      ? []
      : [
          {
            value: price.amount,
            label: `Hosted phone system, per user ${price.unit}`,
          },
        ];

  return [
    countdown,
    ...priceStats,
    {
      value: "2×",
      label: "Rise in the wholesale price of a copper line during 2026",
    },
  ];
}

export const whyUsCopy: SectionCopy = {
  eyebrow: "Why Just2Connect",
  lead: "Local people.",
  accent: "No small print.",
};

export const homeBenefits: readonly BenefitCardContent[] = [
  {
    title: "Unlimited Support",
    description:
      "Service and site visits are included. Gone are those frustrating support calls or shocking call-out charges.",
    badge: "Included",
    tint: "pink",
  },
  {
    title: "Competitive Pricing",
    description:
      "We promise an affordable and reliable solution with absolutely no hidden costs.",
    badge: "No hidden costs",
    tint: "navy",
  },
  {
    title: "Friendly & Local",
    description:
      "Our friendly team provide a first-class local service. Don't just take our word for it, check out our customer reviews below.",
    badge: "Local",
    tint: "green",
  },
  {
    title: "Short-term Contracts",
    description:
      "We believe when you choose us you'll never want to leave, which is why we are confident offering most services on a 30 day contract.",
    badge: "30 days",
    tint: "plain",
  },
];

export const townsCopy: SectionCopy = {
  eyebrow: "Areas we cover",
  lead: "Every town.",
  accent: "One local team.",
  intro: `Based in ${business.address.addressLocality} and on site across Hertfordshire, Bedfordshire and Buckinghamshire.`,
};

export const townHeadOfficeBadge = "Head office";
export const townLocalBadge = "Local";
export const townsAllAreasLink = "All areas we cover";

export const reviewsCopy: SectionCopy = {
  eyebrow: "Customer reviews",
  lead: "Don't take our word for it.",
  accent: "Take theirs.",
};

export const credentialsCopy: SectionCopy = {
  eyebrow: "Credentials",
  lead: "Check us out",
  accent: "yourself.",
  intro:
    "Memberships, partners and the paperwork, so you know exactly who you are dealing with.",
};

export const enquiryCopy: SectionCopy = {
  eyebrow: "Get in touch",
  lead: "Ready for phones",
  accent: "that just work?",
  intro: "Send us a message, or call and speak to a human on the first ring.",
};
