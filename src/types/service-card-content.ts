import type { ServiceContent } from "@/types/service-content";

/**
 * A service card on the home page. The link and price come from `service`,
 * so the card only adds the wording that differs from the service page.
 */
export interface ServiceCardContent {
  readonly service: ServiceContent;
  readonly title: string;
  readonly description: string;
}
