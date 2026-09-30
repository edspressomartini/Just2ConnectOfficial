"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappHref } from "@/content/business";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";

/**
 * Floating WhatsApp button, bottom right.
 *
 * Sits below the cookie banner and above the mobile call bar in the stacking
 * order, and lifts clear of the call bar on phones, so it never covers either.
 */
export function WhatsAppBubble() {
  function handleClick(): void {
    trackEvent(AnalyticsEvent.CLICK_TO_WHATSAPP, {
      source: "bubble",
      page_path: window.location.pathname,
    });
  }

  return (
    <a
      href={whatsappHref}
      className="whatsappBubble"
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    >
      <WhatsAppIcon className="whatsappBubble__icon" />
      <span className="visuallyHidden">Message Just2Connect on WhatsApp</span>
    </a>
  );
}
