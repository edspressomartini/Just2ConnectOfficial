import type { ConsoleRow } from "@/types/console-row";
import type { ServicePrice } from "@/types/service-content";

/** One screen of the decorative product mock-up. */
export interface ConsolePanelContent {
  /** Short label in the tab strip, e.g. `"Calls"`. */
  readonly tab: string;
  readonly title: string;
  readonly rows: readonly ConsoleRow[];
  readonly footnote: string;
  /**
   * Take this from the service's own content rather than retyping it, so a
   * price only ever changes in one place. Omit it where nothing is sold.
   */
  readonly price?: ServicePrice;
}
