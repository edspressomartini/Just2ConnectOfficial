import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { ConsoleStatus } from "@/components/ConsoleStatus";
import { PriceTag } from "@/components/PriceTag";
import { SectionHeading } from "@/components/SectionHeading";
import { CompactServiceCard } from "@/components/home/CompactServiceCard";
import { RouteDiagram } from "@/components/home/RouteDiagram";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { RouterIcon } from "@/components/icons/RouterIcon";
import { business } from "@/content/business";
import {
  broadbandCard,
  broadbandStatusRows,
  compactServiceCards,
  otherServices,
  otherServicesHeading,
  servicesCopy,
  telephonyCard,
  telephonyRoutes,
} from "@/content/home";

export function ServicesBento() {
  const telephonyPrice = telephonyCard.service.fromPrice;
  const broadbandPrice = broadbandCard.service.fromPrice;

  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="container">
        <SectionHeading id="services-heading" copy={servicesCopy} />

        <ul className="bento">
          <li className="bentoCard bentoCard--feature card reveal">
            <div className="bentoCard__top">
              <span className="bentoCard__icon">
                <PhoneIcon className="bentoCard__iconGlyph" />
              </span>
              <span className="arrowCircle" aria-hidden="true">
                <ArrowUpRightIcon className="arrowCircle__icon" />
              </span>
            </div>

            <div className="bentoCard__split">
              <div className="bentoCard__body">
                <h3 className="bentoCard__title">
                  <Link
                    href={`/${telephonyCard.service.slug}`}
                    className="stretchedLink"
                  >
                    {telephonyCard.title}
                  </Link>
                </h3>
                <p className="bentoCard__text">{telephonyCard.description}</p>
                {telephonyPrice === undefined ? null : (
                  <PriceTag price={telephonyPrice} />
                )}
              </div>

              <RouteDiagram
                phoneNumber={business.phone.display}
                routes={telephonyRoutes}
              />
            </div>
          </li>

          <li className="bentoCard bentoCard--dark darkPanel reveal">
            <div className="bentoCard__top">
              <span className="bentoCard__icon">
                <RouterIcon className="bentoCard__iconGlyph" />
              </span>
              <span className="arrowCircle" aria-hidden="true">
                <ArrowUpRightIcon className="arrowCircle__icon" />
              </span>
            </div>

            <h3 className="bentoCard__title">
              <Link
                href={`/${broadbandCard.service.slug}`}
                className="stretchedLink"
              >
                {broadbandCard.title}
              </Link>
            </h3>
            <p className="bentoCard__text">{broadbandCard.description}</p>

            {/* Illustrative, so kept out of the reading order. */}
            <ul className="bentoStatus" aria-hidden="true">
              {broadbandStatusRows.map((row) => (
                <li key={row.label} className="bentoStatus__row">
                  <span className="bentoStatus__label">{row.label}</span>
                  <ConsoleStatus status={row.status} tone={row.tone} />
                </li>
              ))}
            </ul>

            {broadbandPrice === undefined ? null : (
              <PriceTag price={broadbandPrice} />
            )}
          </li>

          {compactServiceCards.map((card) => (
            <CompactServiceCard key={card.service.slug} card={card} />
          ))}
        </ul>

        <div className="alsoSupply reveal">
          <h3 className="alsoSupply__title">{otherServicesHeading}</h3>
          <ul className="pillList">
            {otherServices.map((item) => (
              <li key={item} className="pillList__item">
                {item}
              </li>
            ))}
          </ul>
          <p className="alsoSupply__note">
            Prices on enquiry.{" "}
            <CallLink source="home-other-services" className="inlineLink">
              Call {business.phone.display}
            </CallLink>
          </p>
        </div>
      </div>
    </section>
  );
}
