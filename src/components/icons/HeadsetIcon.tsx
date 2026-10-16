import type { IconProps } from "@/types/icon-props";

export function HeadsetIcon({ className }: IconProps) {
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
      <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
      <rect x="3" y="12.5" width="4" height="6" rx="1.5" />
      <rect x="17" y="12.5" width="4" height="6" rx="1.5" />
      <path d="M19 18.5v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </svg>
  );
}
