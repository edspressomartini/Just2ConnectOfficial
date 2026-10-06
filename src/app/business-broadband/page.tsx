import Image from "next/image";

import { ContentBlocks } from "@/components/ContentBlocks";
import { ServicePage } from "@/components/ServicePage";
import {
  broadbandResilience,
  broadbandSpeedTiers,
  businessBroadband,
} from "@/content/services/business-broadband";
import speed1 from "@/images/ProductPage/Speed1.svg";
import speed2 from "@/images/ProductPage/Speed2.svg";
import speed3 from "@/images/ProductPage/Speed3.svg";
import { buildServiceMetadata } from "@/lib/metadata";

export const metadata = buildServiceMetadata(businessBroadband);

const tierImages = [speed1, speed2, speed3];

export default function BusinessBroadbandPage() {
  return (
    <ServicePage service={businessBroadband}>
      <section className="speedSection" aria-labelledby="speeds-heading">
        <h2 id="speeds-heading" className="sectionTitle">
          Broadband Speeds
        </h2>
        <p className="speedSection__strapline">
          Typical speeds. What is available depends on your postcode, so tell
          us where you are and we will confirm exactly what you can get.
        </p>

        <ul className="speedGrid">
          {broadbandSpeedTiers.map((tier, index) => (
            <li key={tier.name} className="speedCard">
              <Image
                src={tierImages[index] ?? speed1}
                alt=""
                className="speedCard__image"
                unoptimized
              />
              <h3 className="speedCard__name">{tier.name}</h3>
              <p className="speedCard__technology">{tier.technology}</p>

              <dl className="speedCard__figures">
                <div className="speedCard__figure">
                  <dt className="speedCard__label">Download</dt>
                  <dd className="speedCard__value">
                    {tier.downloadMbps}
                    <span className="speedCard__unit">MB</span>
                  </dd>
                </div>
                <div className="speedCard__figure">
                  <dt className="speedCard__label">Upload</dt>
                  <dd className="speedCard__value">
                    {tier.uploadMbps}
                    <span className="speedCard__unit">MB</span>
                  </dd>
                </div>
              </dl>

              <dl className="speedCard__specs">
                <dt className="speedCard__specLabel">Delivery</dt>
                <dd className="speedCard__specValue">{tier.delivery}</dd>
                <dt className="speedCard__specLabel">Sharing</dt>
                <dd className="speedCard__specValue">{tier.sharing}</dd>
                <dt className="speedCard__specLabel">Support</dt>
                <dd className="speedCard__specValue">{tier.support}</dd>
              </dl>

              <p className="speedCard__bestFor">{tier.bestFor}</p>

              {/*
                * Always rendered, so the price line sits on the same baseline
                * across all three cards.
                */}
              <p className="speedCard__price">
                {tier.fromPrice === undefined
                  ? "Ask us for a price"
                  : `From ${tier.fromPrice}`}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="resilienceSection panel"
        aria-labelledby="resilience-heading"
      >
        <h2 id="resilience-heading" className="resilienceSection__heading">
          {broadbandResilience.heading}
        </h2>
        <ContentBlocks
          blocks={broadbandResilience.body}
          paragraphClassName="resilienceSection__text"
        />
      </section>
    </ServicePage>
  );
}
