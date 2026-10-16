import type { IconProps } from "@/types/icon-props";

export function SimCardIcon({ className }: IconProps) {
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
      <path d="M8 3h6.5L19 7.5V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <rect x="9" y="11" width="6" height="6" rx="1" />
      <path d="M12 11v6M9 14h6" />
    </svg>
  );
}
