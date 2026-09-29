import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { MobileCallBar } from "@/components/MobileCallBar";
import { AnalyticsGate } from "@/components/consent/AnalyticsGate";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { business } from "@/content/business";

import "@/styles/globals.css";
import "@/styles/grid.css";
import "@/styles/header.css";
import "@/styles/footer.css";
import "@/styles/mobile-call-bar.css";
import "@/styles/contact-form.css";
import "@/styles/cookie-consent.css";
import "@/styles/home.css";
import "@/styles/logo-marquee.css";
import "@/styles/credentials.css";
import "@/styles/service-page.css";
import "@/styles/digital-switchover.css";
import "@/styles/contact.css";
import "@/styles/about.css";
import "@/styles/prose.css";

/** Mulish replaces the Typekit "muli" webfont, removing a render-blocking request. */
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Business Telephone Systems & Broadband in Hertfordshire",
    template: `%s | ${business.tradingName}`,
  },
  description:
    "Business telephone systems, VoIP and broadband in Hertfordshire, Bedfordshire and Buckinghamshire. Low-cost, flexible solutions with unlimited support.",
  openGraph: {
    siteName: business.tradingName,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#1f306d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en-GB" className={mulish.className}>
      <body>
        <a href="#main" className="skipLink">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <CookieConsent />
        <AnalyticsGate />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
