import Image from "next/image";

import { CallLink } from "@/components/CallLink";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { Col, Row } from "@/components/layout/Grid";
import { business, mailtoHref } from "@/content/business";
import { clientLogos } from "@/content/clients";
import contactIllustration from "@/images/Contact/contactFormIllustration.svg";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact Us",
  description: `Call Just2Connect on ${business.phone.display} or send an enquiry. Business telephone systems and broadband across Hertfordshire, Bedfordshire and Buckinghamshire.`,
  path: "/contact-us",
});

export default function ContactPage() {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    business.address;

  return (
    <>
      <section className="contactHero">
        <h1 className="pageHeading">Contact Us</h1>
        <p className="contactHero__intro">
          Call us and you will get a person, not a phone menu. Or send us the
          details and we will come back to you with a straight answer and a
          price.
        </p>
      </section>

      <section className="contactPanel panel">
        <Row alignStart>
          <Col xs={12} md={5}>
            <div className="contactDetails">
              <ul className="contactDetails__list">
                <li className="contactDetails__item">
                  <PhoneIcon className="contactDetails__icon" />
                  <CallLink
                    source="contact_page"
                    className="contactDetails__value contactDetails__value--link"
                  >
                    {business.phone.display}
                  </CallLink>
                </li>

                <li className="contactDetails__item">
                  <a
                    href={mailtoHref}
                    className="contactDetails__value contactDetails__value--link"
                  >
                    {business.email}
                  </a>
                </li>

                <li className="contactDetails__item">
                  <address className="contactDetails__address">
                    {streetAddress}
                    <br />
                    {addressLocality}
                    <br />
                    {addressRegion}
                    <br />
                    {postalCode}
                  </address>
                </li>

                <li className="contactDetails__item">
                  <span className="contactDetails__value">
                    {business.openingHours.days[0]} to{" "}
                    {
                      business.openingHours.days[
                        business.openingHours.days.length - 1
                      ]
                    }
                    , {business.openingHours.opens} to{" "}
                    {business.openingHours.closes}
                  </span>
                </li>
              </ul>

              <Image
                src={contactIllustration}
                alt=""
                className="contactDetails__illustration"
                unoptimized
              />
            </div>
          </Col>

          <Col xs={12} md={7} className="contactFormColumn">
            <ContactForm
              heading="Send us an enquiry"
              intro="Add your phone number and we will usually call back the same working day."
              onLightBackground
            />
          </Col>
        </Row>
      </section>

      <section className="clientSection" aria-labelledby="clients-heading">
        <h2 id="clients-heading" className="clientSection__title">
          You would be in good company
        </h2>
        <p className="clientSection__strapline">
          A few of the businesses across Hertfordshire, Bedfordshire and
          Buckinghamshire that we look after.
        </p>

        <ul className="clientGrid">
          {clientLogos.map((client) => (
            <li key={client.name} className="clientGrid__item">
              <Image
                src={client.logo}
                alt={client.name}
                className={
                  client.rounded === true
                    ? "clientGrid__logo clientGrid__logo--rounded"
                    : "clientGrid__logo"
                }
                sizes="160px"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
