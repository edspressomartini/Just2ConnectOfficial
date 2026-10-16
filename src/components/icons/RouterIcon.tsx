import type { IconProps } from "@/types/icon-props";

export function RouterIcon({ className }: IconProps) {
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
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 16.5h.01M10.5 16.5h.01" />
      <path d="M9 9.6a4.2 4.2 0 0 1 6 0" />
      <path d="M6.4 7a7.9 7.9 0 0 1 11.2 0" />
    </svg>
  );
}
