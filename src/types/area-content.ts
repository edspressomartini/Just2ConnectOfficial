import type { ContentBlock } from "@/types/content-block";
import type { ServiceFaq } from "@/types/service-content";

export interface AreaSection {
  readonly heading: string;
  readonly body: readonly ContentBlock[];
}

/**
 * A town page.
 *
 * These only work if every one of them says something true about that
 * specific town. Near-identical pages with the name swapped are doorway
 * pages, and Google demotes them, so the type deliberately has no generic
 * "services we offer" field to pad them out with. If there is nothing
 * particular to say about a town yet, it does not get a page yet.
 */
export interface AreaContent {
  readonly slug: string;
  readonly town: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  /** Page `h1`. */
  readonly heading: string;
  readonly strapline: string;
  readonly intro: readonly ContentBlock[];
  readonly sections: readonly AreaSection[];
  readonly faqs?: readonly ServiceFaq[];
}
