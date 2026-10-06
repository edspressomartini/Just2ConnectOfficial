import Image from "next/image";
import type { ReactNode } from "react";

import { EnquirySection } from "@/components/EnquirySection";
import { Faq } from "@/components/Faq";
import { ContentBlocks } from "@/components/ContentBlocks";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Col, Row } from "@/components/layout/Grid";
import type { ServiceContent } from "@/types/service-content";

export interface ServicePageProps {
  readonly service: ServiceContent;
  /** Extra sections rendered between the features and the FAQ. */
  readonly children?: ReactNode;
}

export function ServicePage({ service, children }: ServicePageProps) {
  const isSvgHero = service.heroImage.src.endsWith(".svg");

  return (
    <>
      <section className="serviceHero">
        <Row>
          <Col xs={12} md={7} className="serviceHero__text">
            <h1 className="serviceHero__title">{service.heading}</h1>
            <p className="serviceHero__strapline">
              {service.strapline.map((fragment, index) => (
                <span key={fragment}>
                  {index > 0 ? (
                    <span className="serviceHero__separator" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  {fragment}
                </span>
              ))}
            </p>

            {service.fromPrice === undefined ? null : (
              <p className="serviceHero__price">
                <span className="serviceHero__priceLead">From </span>
                <span className="serviceHero__priceAmount">
                  {service.fromPrice.amount}
                </span>{" "}
                {service.fromPrice.unit}
                {service.fromPrice.note === undefined ? null : (
                  <span className="serviceHero__priceNote">
                    {service.fromPrice.note}
                  </span>
                )}
              </p>
            )}
          </Col>

          <Col xs={12} md={5}>
            <div className="serviceHero__imageWrap">
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt}
                className="serviceHero__image"
                unoptimized={isSvgHero}
                preload
              />
            </div>
          </Col>
        </Row>
      </section>

      <section className="nutshell panel" aria-labelledby="nutshell-heading">
        <h2 id="nutshell-heading" className="nutshell__heading">
          Overview
        </h2>
        {service.nutshell.map((paragraph) => (
          <p key={paragraph} className="nutshell__text">
            {paragraph}
          </p>
        ))}
      </section>

      <FeatureGrid
        features={service.features}
        title={service.featuresHeading}
      />

      {service.addOns === undefined ? null : (
        <section className="addOnSection" aria-labelledby="addons-heading">
          <h2 id="addons-heading" className="sectionTitle">
            {service.addOns.heading}
          </h2>

          <ul className="addOnList">
            {service.addOns.items.map((addOn) => (
              <li key={addOn.title} className="addOn panel">
                <h3 className="addOn__title">{addOn.title}</h3>
                <ContentBlocks
                  blocks={addOn.body}
                  paragraphClassName="addOn__text"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {children}

      <Faq items={service.faqs} />

      {/*
        * The heading is used as written rather than lowercased, because
        * lowercasing turns SIM and eSIM into sim and esim.
        */}
      <EnquirySection heading={`Interested in ${service.heading}?`} />
    </>
  );
}
