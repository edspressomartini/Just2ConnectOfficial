export enum AnalyticsEvent {
  /** Enquiry form submitted and accepted by EmailJS. */
  GENERATE_LEAD = "generate_lead",
  /** A `tel:` link was activated. */
  CLICK_TO_CALL = "click_to_call",
  /** A WhatsApp link was activated. */
  CLICK_TO_WHATSAPP = "click_to_whatsapp",
}

export interface AnalyticsEventParams {
  /** Where on the site the event fired, e.g. "header" or "mobile_call_bar". */
  readonly source?: string;
  /** Path the visitor was on when the event fired. */
  readonly page_path?: string;
}

type GtagFunction = (
  command: "event",
  eventName: string,
  params?: AnalyticsEventParams,
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

/**
 * Fire-and-forget event. No-ops when analytics has not loaded, which is the
 * case until the visitor accepts cookies.
 */
export function trackEvent(
  event: AnalyticsEvent,
  params?: AnalyticsEventParams,
): void {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", event, params);
}
