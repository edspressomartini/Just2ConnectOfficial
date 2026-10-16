import type { ConsoleTone } from "@/types/console-tone";

export interface ConsoleStatusProps {
  readonly status: string;
  readonly tone: ConsoleTone;
}
