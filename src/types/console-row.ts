import type { ConsoleTone } from "@/types/console-tone";

export interface ConsoleRow {
  readonly label: string;
  readonly detail: string;
  /** Text in the status pill. Keep it to a word or two. */
  readonly status: string;
  readonly tone: ConsoleTone;
}
