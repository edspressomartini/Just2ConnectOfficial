/**
 * Wording for a section heading. The heading reads as one sentence in two
 * parts, e.g. "Phones, broadband and mobile." then "All in one place." in the
 * accent colour.
 */
export interface SectionCopy {
  readonly eyebrow: string;
  readonly lead: string;
  readonly accent?: string;
  readonly intro?: string;
}
