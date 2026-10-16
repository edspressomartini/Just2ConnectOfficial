import type { IconProps } from "@/types/icon-props";

export function BuildingIcon({ className }: IconProps) {
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
      <path d="M4.5 20.5V5A1.5 1.5 0 0 1 6 3.5h7A1.5 1.5 0 0 1 14.5 5v15.5" />
      <path d="M14.5 9.5H18a1.5 1.5 0 0 1 1.5 1.5v9.5" />
      <path d="M2.5 20.5h19" />
      <path d="M8 7.5h3M8 11h3M8 14.5h3M17 13.5h.01M17 17h.01" />
    </svg>
  );
}
