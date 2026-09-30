import Image from "next/image";
import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { allAreas } from "@/content/areas";
import { business, mailtoHref } from "@/content/business";
import { guideLinks } from "@/content/navigation";
import { allServices } from "@/content/services";
import emailIcon from "@/images/Footer/emailFooter.svg";
import linkedInIcon from "@/images/Footer/linkedinFooter.svg";
import waves from "@/images/Footer/wavesFooter.svg";

interface FooterLink {
  readonly href: string;
  readonly label: string;
}

const companyLinks: readonly FooterLink[] = [
  { href: "/about-us", label: "Company Information" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

/** Links the towns that have a page of their own, leaves the rest as text. */
function TownName({ town }: { readonly town: string }) {
  const area = allAreas.find((candidate) => candidate.town === town);

  if (area === undefined) {
    return town;
  }

  return (
    <Link href={`/areas/${area.slug}`} className="footer__link">
      {town}
    </Link>
  );
}

/** "Monday to Friday", from the days the business is actually open. */
function openingDays(): string {
  const { days } = business.openingHours;
  const first = days[0];
  const last = days[days.length - 1];

  if (first === undefined || last === undefined) {
    return "";
  }

  return first === last ? first : `${first} to ${last}`;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Image src={waves} alt="" className="wavesFooter" unoptimized />

      <footer className="footer">
        <div className="footer__columns">
          <div className="footer__column footer__column--brand">
            <p className="footer__brand">{business.tradingName}</p>
            <p className="footer__blurb">
              Business telephone systems, broadband and mobile for companies
              across Hertfordshire, Bedfordshire and Buckinghamshire. Local
              people, unlimited support, no hidden costs.
            </p>

            <div className="footer__social">
              <a
                href={business.social.linkedIn}
                className="footer__socialLink"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={linkedInIcon}
                  alt="Just2Connect on LinkedIn"
                  className="footer__socialIcon"
                  unoptimized
                />
              </a>
              <a href={mailtoHref} className="footer__socialLink">
                <Image
                  src={emailIcon}
                  alt={`Email ${business.email}`}
                  className="footer__socialIcon"
                  unoptimized
                />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h2 className="footer__columnTitle">Services</h2>
            <ul className="footer__list">
              {allServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="footer__link">
                    {service.navLabel}
                  </Link>
                </li>
              ))}

              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__columnTitle">Company</h2>
            <ul className="footer__list">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__columnTitle">Get in touch</h2>
            <ul className="footer__list">
              <li>
                <CallLink source="footer" className="footer__contactLink">
                  {business.phone.display}
                </CallLink>
              </li>
              <li>
                <a href={mailtoHref} className="footer__contactLink">
                  {business.email}
                </a>
              </li>
              <li>
                <address className="footer__address">
                  {business.address.streetAddress}
                  <br />
                  {business.address.addressLocality},{" "}
                  {business.address.postalCode}
                </address>
              </li>
              <li className="footer__hours">
                {openingDays()}, {business.openingHours.opens} to{" "}
                {business.openingHours.closes}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <p className="footer__areas">
            Serving businesses across{" "}
            {business.townsServed.map((town, index) => (
              <span key={town}>
                {index > 0 ? ", " : ""}
                <TownName town={town} />
              </span>
            ))}{" "}
            and the surrounding areas.
          </p>

          <p className="footer__legal">
            &copy; {year} {business.tradingName}. {business.legalName}, a
            company registered in England and Wales with company number{" "}
            {business.companyNumber}, registered office:{" "}
            {business.address.streetAddress}, {business.address.addressLocality}
            , {business.address.addressRegion}, {business.address.postalCode}
          </p>
        </div>
      </footer>
    </>
  );
}
