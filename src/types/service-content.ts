import type { StaticImageData } from "next/image";

import type { ContentBlock } from "@/types/content-block";

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: readonly ContentBlock[];
}

/**
 * Entry-level price shown under the hero. Deliberately a "from" figure: the
 * real prices move, and a page that has to be re-edited every quarter ends up
 * wrong instead. Omit the field entirely on services where we have no figure
 * we are confident publishing.
 */
export interface ServicePrice {
  /** Formatted with the currency symbol, e.g. `"£39.99"`. */
  readonly amount: string;
  /** Billing period, e.g. `"a month"`. */
  readonly unit: string;
  /** What the entry price actually buys. Keep it to one short clause. */
  readonly note?: string;
}

export interface ServiceContent {
  readonly slug: string;
  /** Label used in the header navigation. */
  readonly navLabel: string;
  /** Page `h1`. */
  readonly heading: string;
  /** Pipe-separated strapline fragments under the heading. */
  readonly strapline: readonly string[];
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly heroImage: StaticImageData;
  readonly heroImageAlt: string;
  readonly fromPrice?: ServicePrice;
  /** "In a nutshell" paragraphs. */
  readonly nutshell: readonly string[];
  readonly features: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
}
