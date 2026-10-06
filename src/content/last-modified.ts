/*
 * When each page last meaningfully changed.
 *
 * The sitemap used to stamp every URL with the build time, which meant every
 * deploy told Google that all eighteen pages had just changed, including the
 * privacy policy nobody had touched in months. Google ignores `lastmod`
 * entirely once it decides the values are unreliable, so the one signal that
 * says "this page is new, come and look" was being thrown away.
 *
 * These dates are therefore hand-maintained and must stay honest. The rule is
 * narrow: update the date when the words on the page change in a way a reader
 * would notice. Fixing a typo, restyling a card or renaming a CSS class is not
 * a content change and should not touch this file. Inflating the dates to look
 * busy puts us straight back where we started.
 *
 * Adding a page without adding a date here fails the build rather than
 * silently falling back to "now", which is how the original bug survived.
 */

/** A page and the day its content last changed, as `YYYY-MM-DD`. */
export interface PageLastModified {
  /** Site-relative path, matching the sitemap entry exactly. */
  readonly path: string;
  readonly date: string;
}

export const pageLastModified: readonly PageLastModified[] = [
  { path: "/", date: "2026-09-29" },
  { path: "/about-us", date: "2026-09-29" },
  { path: "/contact-us", date: "2026-09-28" },
  { path: "/privacy-policy", date: "2026-09-25" },
  { path: "/areas", date: "2026-10-01" },
  { path: "/digital-switchover", date: "2026-10-01" },

  { path: "/telephone-systems", date: "2026-10-06" },
  { path: "/business-broadband", date: "2026-10-06" },
  { path: "/sip-trunks", date: "2026-09-25" },
  { path: "/virtual-phone-numbers", date: "2026-09-29" },
  { path: "/business-mobile-sim", date: "2026-09-29" },

  { path: "/areas/berkhamsted", date: "2026-09-30" },
  { path: "/areas/harpenden", date: "2026-10-02" },
  { path: "/areas/hemel-hempstead", date: "2026-10-01" },
  { path: "/areas/luton", date: "2026-10-01" },
  { path: "/areas/st-albans", date: "2026-10-01" },
  { path: "/areas/tring", date: "2026-10-01" },
  { path: "/areas/watford", date: "2026-10-01" },
];
