import Image from "next/image";
import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { EnquirySection } from "@/components/EnquirySection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { StatsStrip } from "@/components/StatsStrip";
import { Testimonials } from "@/components/Testimonials";
import { Col, Row } from "@/components/layout/Grid";
import { business } from "@/content/business";
import { homeBenefits, homeServiceCards, otherServices } from "@/content/home";
import heroImage from "@/images/Home/grandstream.webp";
import welcomeIllustration1 from "@/images/Home/welcomeIllustration1.svg";
import welcomeIllustration2 from "@/images/Home/welcomeIllustration2.svg";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Business Telephone Systems & Broadband in Hertfordshire",
  description:
    "Local business telephone systems, VoIP and business broadband across Hertfordshire, Bedfordshire and Buckinghamshire. Unlimited support, 30 day contracts, no hidden costs.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="homeHero">
        <Row>
          <Col xs={12} md={7} className="homeHero__text">
            <p className="homeHero__eyebrow">
              Stay connected to your customers
            </p>
            <h1 className="homeHero__title">
              Business Telephone Systems &amp; Broadband
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
                Call {business.phone.display}
              </CallLink>
              <Link href="/contact-us" className="buttonSecondary">
                Get a quote
              </Link>
            </div>
          </Col>

          <Col xs={12} md={5} className="homeHero__imageCol">
            <div className="homeHero__imageWrap">
              <Image
                src={heroImage}
                alt="Grandstream business telephone system supplied by Just2Connect"
                className="homeHero__image"
                preload
                sizes="(max-width: 960px) 100vw, 40vw"
              />
            </div>
          </Col>
        </Row>
      </section>

      <LogoMarquee />

      <section className="servicesSection" aria-labelledby="services-heading">
        <h2 id="services-heading" className="servicesSection__title">
          Our Services
        </h2>

        <ul className="serviceCards">
          {homeServiceCards.map((card) => (
            <li key={card.slug} className="serviceCard">
              <Link href={`/${card.slug}`} className="serviceCard__iconLink">
                <Image
                  src={card.icon}
                  alt={card.iconAlt}
                  className="serviceCard__icon"
                />
              </Link>
              <h3 className="serviceCard__title">{card.title}</h3>
              <p className="serviceCard__text">{card.description}</p>
              <Link href={`/${card.slug}`} className="serviceCard__link">
                {card.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="otherServices">
          <h3 className="otherServices__title">We also supply</h3>
          <ul className="otherServices__list">
            {otherServices.map((item) => (
              <li key={item} className="otherServices__item">
                {item}
              </li>
            ))}
          </ul>
          <p className="otherServices__note">
            Priced on enquiry, because it depends on the site.{" "}
            <CallLink source="home-other-services" className="inlineLink">
              Call {business.phone.display}
            </CallLink>{" "}
            and we will tell you what it would cost.
          </p>
        </div>
      </section>

      <section className="welcomeSection" aria-labelledby="welcome-heading">
        <Row>
          <Col xs={12} md={8} className="welcomeSection__text">
            <h2 id="welcome-heading" className="welcomeSection__heading">
              Welcome to Just2Connect
            </h2>
            <p className="welcomeSection__subheading">
              Business telephone systems and broadband in Hertfordshire,
              Bedfordshire and Buckinghamshire... and beyond
            </p>
            <p className="welcomeSection__paragraph">
              Low-cost, flexible and tailored solutions to meet your business
              requirements.
            </p>
          </Col>

          <Col xs={12} md={4}>
            <div className="welcomeSection__imageWrap">
              <Image
                src={welcomeIllustration1}
                alt=""
                className="welcomeSection__image"
                unoptimized
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4} hideBelowMd>
            <div className="welcomeSection__imageWrap">
              <Image
                src={welcomeIllustration2}
                alt=""
                className="welcomeSection__image"
                unoptimized
              />
            </div>
          </Col>

          <Col xs={12} md={8} className="welcomeSection__text">
            <p className="welcomeSection__paragraph">
              Our professional, friendly, solution-focussed team provide a
              first-class <strong>local service</strong>, ensuring our
              customers&rsquo; needs are at the forefront of everything else.
            </p>
            <p className="welcomeSection__paragraph">
              We offer a range of telephone products and services with
              particular emphasis on{" "}
              <strong>working from multiple locations</strong>, whilst still
              being part of the &lsquo;office&rsquo; phone system. This means
              that wherever you are, or whatever device is available (desk
              phone, computer, tablet or mobile phone),{" "}
              <strong>you will always stay connected to your customers.</strong>
            </p>
            <p className="welcomeSection__paragraph">
              We provide a number of broadband options, speeds and price points
              to meet all of your needs.
            </p>
            <p className="welcomeSection__paragraph">
              <Link href="/contact-us" className="inlineLink">
                Contact us
              </Link>{" "}
              to find out more. We love to chat all things telephony and
              broadband.
            </p>
          </Col>
        </Row>
      </section>

      <section className="whySection" aria-labelledby="why-heading">
        <h2 id="why-heading" className="whySection__title">
          Why Just2Connect?
        </h2>

        <ul className="benefitGrid">
          {homeBenefits.map((benefit) => (
            <li key={benefit.title} className="benefit">
              <Image
                src={benefit.image}
                alt=""
                className="benefit__image"
                unoptimized
              />
              <h3 className="benefit__title">{benefit.title}</h3>
              <p className="benefit__text">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <StatsStrip />

      <Testimonials />

      <EnquirySection
        heading="Tell us what your business needs"
        intro="Send us a message, or call and speak to a human on the first ring."
      />
    </>
  );
}
