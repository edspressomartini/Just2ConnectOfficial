import type { IconProps } from "@/types/icon-props";

export function DeskPhoneIcon({ className }: IconProps) {
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
      <path d="M3 8.6v-1C3 5.6 7 4 12 4s9 1.6 9 3.6v1a1 1 0 0 1-1 1h-2.6a1 1 0 0 1-1-1V7.5H7.6v1.1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
      <path d="M6.2 12h11.6l2.5 7a1.2 1.2 0 0 1-1.13 1.6H4.83A1.2 1.2 0 0 1 3.7 19Z" />
      <path d="M9 15h.01M12 15h.01M15 15h.01M9 18h.01M12 18h.01M15 18h.01" />
    </svg>
  );
}
