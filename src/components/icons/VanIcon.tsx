import type { IconProps } from "@/types/icon-props";

export function VanIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 17.5H3.5a1 1 0 0 1-1-1V7A1.5 1.5 0 0 1 4 5.5h10A1.5 1.5 0 0 1 15.5 7v2.5h3.1a1.5 1.5 0 0 1 1.25.67l1.4 2.1a1.5 1.5 0 0 1 .25.83v3.4a1 1 0 0 1-1 1H19M9 17.5h6" />
      <circle cx="7" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </svg>
  );
}
