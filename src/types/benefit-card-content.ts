import type { TintTone } from "@/types/tint-tone";

export interface BenefitCardContent {
  readonly title: string;
  readonly description: string;
  /** One or two words, e.g. `"30 days"`. */
  readonly badge: string;
  readonly tint: TintTone;
}
