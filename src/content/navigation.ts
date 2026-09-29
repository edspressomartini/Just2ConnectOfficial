export interface NavigationLink {
  readonly href: string;
  readonly label: string;
}

/**
 * Pages that are not services but still need to be reachable from the header
 * and footer. Kept here so the two never drift apart.
 */
export const guideLinks: readonly NavigationLink[] = [
  { href: "/digital-switchover", label: "2027 Switch-off" },
];
