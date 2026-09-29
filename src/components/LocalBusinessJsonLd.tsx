import { business } from "@/content/business";

/**
 * LocalBusiness structured data. Google cross-checks these values against the
 * Google Business Profile and third-party directories, so they are generated
 * from `content/business.ts` rather than written out by hand.
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TelecommunicationsService",
    "@id": `${business.siteUrl}/#organisation`,
    name: business.tradingName,
    legalName: business.legalName,
    url: business.siteUrl,
    telephone: business.phone.e164,
    email: business.email,
    foundingDate: business.foundingYear,
    description:
      "Business telephone systems, VoIP and business broadband for companies in Hertfordshire, Bedfordshire and Buckinghamshire.",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    areaServed: [...business.townsServed, ...business.countiesServed].map((area) => ({
      "@type": "Place",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: business.openingHours.days,
        opens: business.openingHours.opens,
        closes: business.openingHours.closes,
      },
    ],
    sameAs: [business.social.linkedIn, business.social.x],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
