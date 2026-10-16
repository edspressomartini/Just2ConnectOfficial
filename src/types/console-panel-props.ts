import type { ConsolePanelContent } from "@/types/console-panel-content";

export interface ConsolePanelProps {
  readonly panel: ConsolePanelContent;
  /** False while another panel in the same stack is on screen. */
  readonly active: boolean;
}
