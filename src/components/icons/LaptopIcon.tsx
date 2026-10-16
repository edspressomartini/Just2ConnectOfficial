import type { IconProps } from "@/types/icon-props";

export function LaptopIcon({ className }: IconProps) {
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
      <rect x="4.5" y="5" width="15" height="10.5" rx="1.5" />
      <path d="M2.5 19h19" />
    </svg>
  );
}
