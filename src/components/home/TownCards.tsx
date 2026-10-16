import Link from "next/link";

import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { MapPinIcon } from "@/components/icons/MapPinIcon";
import { allAreas } from "@/content/areas";
import { business } from "@/content/business";
import {
  townHeadOfficeBadge,
  townLocalBadge,
  townsAllAreasLink,
  townsCopy,
} from "@/content/home";

export function TownCards() {
  const headOffice = allAreas.find(
    (area) => area.town === business.address.addressLocality,
  );
  const otherTowns = allAreas.filter((area) => area !== headOffice);

  return (
    <section className="section" aria-labelledby="towns-heading">
      <div className="container">
        <SectionHeading id="towns-heading" copy={townsCopy} />

        <ul className="townGrid">
          {headOffice === undefined ? null : (
            <li className="townCard townCard--hq darkPanel reveal">
              <div className="townCard__top">
                <span className="badge badge--pink">{townHeadOfficeBadge}</span>
                <span className="arrowCircle" aria-hidden="true">
                  <ArrowUpRightIcon className="arrowCircle__icon" />
                </span>
              </div>
              <h3 className="townCard__name">
                <Link
                  href={`/areas/${headOffice.slug}`}
                  className="stretchedLink"
                >
                  {headOffice.town}
                </Link>
              </h3>
              <p className="townCard__strapline">{headOffice.strapline}</p>
              <p className="townCard__address">
                <MapPinIcon className="townCard__pin" />
                {business.address.streetAddress}
              </p>
            </li>
          )}

          {otherTowns.map((area) => (
            <li key={area.slug} className="townCard card reveal">
              <div className="townCard__top">
                <span className="badge badge--green">{townLocalBadge}</span>
                <span className="arrowCircle" aria-hidden="true">
                  <ArrowUpRightIcon className="arrowCircle__icon" />
                </span>
              </div>
              <h3 className="townCard__name">
                <Link href={`/areas/${area.slug}`} className="stretchedLink">
                  {area.town}
                </Link>
              </h3>
            </li>
          ))}
        </ul>

        <div className="townGrid__more">
          <Link href="/areas" className="buttonSecondary">
            {townsAllAreasLink}
            <ArrowUpRightIcon className="button__icon button__icon--arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
