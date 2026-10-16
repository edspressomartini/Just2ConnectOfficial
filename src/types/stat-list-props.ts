import type { Stat } from "@/content/credentials";

export interface StatListProps {
  readonly stats: readonly Stat[];
  /** Added to `statRow`, e.g. a column-count modifier. */
  readonly className?: string;
}
