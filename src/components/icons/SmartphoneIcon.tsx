import type { IconProps } from "@/types/icon-props";

export function SmartphoneIcon({ className }: IconProps) {
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
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}
