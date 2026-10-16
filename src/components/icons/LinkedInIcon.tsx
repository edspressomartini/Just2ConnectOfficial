import type { IconProps } from "@/types/icon-props";

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="5.25" cy="4.97" r="1.97" />
      <rect x="3.56" y="8.5" width="3.38" height="11.5" />
      <path d="M10.16 8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20h-3.37v-5.62c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V20h-3.14Z" />
    </svg>
  );
}
