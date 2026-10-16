import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { Credentials } from "@/components/Credentials";
import { EnquirySection } from "@/components/EnquirySection";
import { HeroChip } from "@/components/HeroChip";
import { LogoMarquee } from "@/components/LogoMarquee";
import { StatsStrip } from "@/components/StatsStrip";
import { Testimonials } from "@/components/Testimonials";
import { HeroScenes } from "@/components/home/HeroScenes";
import { ServicesBento } from "@/components/home/ServicesBento";
import { SwitchOffPanel } from "@/components/home/SwitchOffPanel";
import { TownCards } from "@/components/home/TownCards";
import { WhyUs } from "@/components/home/WhyUs";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { business } from "@/content/business";
import { heroScenesPhoneCaption } from "@/content/hero-scenes";
import {
  credentialsCopy,
  enquiryCopy,
  heroChip,
  reviewsCopy,
} from "@/content/home";
import { buildPageMetadata } from "@/lib/metadata";

/*
 * Regenerated daily so the switch-off countdown never goes stale. Next only
 * accepts a literal here, so the day cannot be shared with the countdown code.
 */
export const revalidate = 86400;

export const metadata = buildPageMetadata({
  title: "Business Telephone Systems & Broadband in Hertfordshire",
  description:
    "Local business telephone systems, VoIP and broadband across Hertfordshire, Bedfordshire and Buckinghamshire. Unlimited support, 30 day contracts.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="homeHero">
        <div className="homeHero__inner">
          <div className="homeHero__text">
            <HeroChip highlight={heroChip.highlight} detail={heroChip.detail} />
            <h1 className="homeHero__title">
              Business Telephone Systems{" "}
              <span className="homeHero__accent">&amp; Broadband</span>
            </h1>
            <p className="homeHero__description">
              We are your local provider in Herts, Beds and Bucks. Whether you
              need <strong>cloud-based telephony</strong>, a new number or{" "}
              <strong>business-strength broadband</strong>, we will provide the
              right solution for your business, at a price you can afford, all
              with exceptional service.
            </p>
            <div className="homeHero__actions">
              <CallLink source="home_hero" className="buttonPrimary">
                <PhoneIcon className="button__icon" />
                Call {business.phone.display}
              </CallLink>
              <Link href="/contact-us" className="buttonSecondary">
                Get a quote
                <ArrowUpRightIcon className="button__icon button__icon--arrow" />
              </Link>
            </div>
          </div>

          <div className="homeHero__visual">
            <HeroScenes
              phoneNumber={business.phone.display}
              phoneCaption={heroScenesPhoneCaption}
            />
          </div>
        </div>
      </section>

      <LogoMarquee />

      <ServicesBento />

      <SwitchOffPanel />

      <WhyUs />

      <StatsStrip />

      <TownCards />

      <Testimonials copy={reviewsCopy} />

      <Credentials copy={credentialsCopy} />

      <EnquirySection
        eyebrow={enquiryCopy.eyebrow}
        heading={enquiryCopy.lead}
        accent={enquiryCopy.accent}
        intro={enquiryCopy.intro}
      />
    </>
  );
}
