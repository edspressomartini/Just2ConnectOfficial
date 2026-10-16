import type { IconProps } from "@/types/icon-props";

export function CrossIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m7 7 10 10M17 7 7 17" />
    </svg>
  );
}
