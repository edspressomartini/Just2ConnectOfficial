import type { SectionCopy } from "@/types/section-copy";
import type { SectionHeadingAlign } from "@/types/section-heading-align";

export interface SectionHeadingProps {
  /** Set on the `h2`, so the section can be labelled by it. */
  readonly id: string;
  readonly copy: SectionCopy;
  readonly align?: SectionHeadingAlign;
}
