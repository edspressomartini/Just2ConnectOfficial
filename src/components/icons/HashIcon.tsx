import type { IconProps } from "@/types/icon-props";

export function HashIcon({ className }: IconProps) {
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
      <path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16" />
    </svg>
  );
}
