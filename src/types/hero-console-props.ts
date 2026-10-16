import type { ConsolePanelContent } from "@/types/console-panel-content";

export interface HeroConsoleProps {
  readonly panels: readonly ConsolePanelContent[];
  /** As displayed, e.g. `"01442 573030"`. */
  readonly phoneNumber: string;
  /** Caption under the number on the floating card. */
  readonly phoneCaption: string;
}
