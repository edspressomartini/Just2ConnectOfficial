import type { IconProps } from "@/types/icon-props";

export function PlugIcon({ className }: IconProps) {
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
      <path d="M9 2.5v4.5M15 2.5v4.5" />
      <path d="M6 7h12v3.5a6 6 0 0 1-12 0V7Z" />
      <path d="M12 16.5v5" />
    </svg>
  );
}
