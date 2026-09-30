"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappHref } from "@/content/business";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";
import { useIsConsentBannerVisible } from "@/lib/consent";

/**
 * Floating WhatsApp button, bottom right.
 *
 * Sits below the cookie banner and above the mobile call bar in the stacking
 * order, and lifts clear of the call bar on phones, so it never covers either.
 */
export function WhatsAppBubble() {
  const isConsentBannerVisible = useIsConsentBannerVisible();

  /*
   * On a narrow screen the banner fills the width the bubble sits in, leaving
   * a sliver of it showing round the edge that reads as a rendering fault.
   * Consent is the one question on screen until it is answered anyway.
   */
  if (isConsentBannerVisible) {
    return null;
  }

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
