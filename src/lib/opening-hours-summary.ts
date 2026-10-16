import { business } from "@/content/business";

/** E.g. "Monday to Friday, 08:30 to 18:00". */
export function openingHoursSummary(): string {
  const { days, opens, closes } = business.openingHours;
  const first = days[0];
  const last = days[days.length - 1];
  const hours = `${opens} to ${closes}`;

  if (first === undefined || last === undefined) {
    return hours;
  }

  const dayRange = first === last ? first : `${first} to ${last}`;

  return `${dayRange}, ${hours}`;
}
