import type { NextConfig } from "next";

/**
 * Permanent redirects from the URLs the previous Create React App build served.
 *
 * Next.js matches `source` case-insensitively, so a redirect is only safe when the
 * lowercased source differs from the destination. Every pair below satisfies that:
 * the new slugs are hyphenated, the old ones were not.
 */
const CANONICAL_ORIGIN = "https://www.just2connect.co.uk";

const legacyRedirects = [
  { from: "/TelephoneSystems", to: "/telephone-systems" },
  { from: "/mobile-worker", to: "/telephone-systems" },
  { from: "/multiple-sites", to: "/telephone-systems" },
  { from: "/office", to: "/telephone-systems" },
  { from: "/Broadband", to: "/business-broadband" },
  /*
   * Video conferencing was withdrawn in September 2026. Both the legacy and
   * the current slug point at telephony, which is the nearest live service.
   */
  { from: "/VideoConferencing", to: "/telephone-systems" },
  { from: "/video-conferencing", to: "/telephone-systems" },
  { from: "/MobileSIM", to: "/business-mobile-sim" },
  { from: "/mobile-phones", to: "/business-mobile-sim" },
  { from: "/VirtualPhoneNumbers", to: "/virtual-phone-numbers" },
  { from: "/SIPTrunks", to: "/sip-trunks" },
  { from: "/About", to: "/about-us" },
  { from: "/company-information", to: "/about-us" },
  { from: "/Contact", to: "/contact-us" },
  { from: "/Privacy", to: "/privacy-policy" },
  { from: "/home/how-to-help", to: "/" },
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...legacyRedirects.map(({ from, to }) => ({
        source: from,
        destination: to,
        permanent: true,
      })),
      /*
       * just2connect.com is a second alias on the same Vercel project, so it
       * served a byte-identical copy of the site and split the search ranking
       * between two domains. Sending it to the .co.uk in code keeps the rule
       * next to the others rather than buried in a dashboard setting.
       */
      {
        source: "/:path*",
        has: [
          {
            type: "host" as const,
            value: "(?:www\\.)?just2connect\\.com",
          },
        ],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
