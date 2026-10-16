import { SWITCH_OFF_ISO_DATE } from "@/content/digital-switchover";

const MS_PER_DAY = 86_400_000;

/** Whole days until the analogue network closes, or 0 once it has. */
export function daysRemaining(): number {
  const remaining = Date.parse(SWITCH_OFF_ISO_DATE) - Date.now();

  if (remaining <= 0) {
    return 0;
  }

  return Math.ceil(remaining / MS_PER_DAY);
}
