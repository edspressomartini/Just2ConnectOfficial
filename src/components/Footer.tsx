import Image from "next/image";
import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { business, mailtoHref } from "@/content/business";
import emailIcon from "@/images/Footer/emailFooter.svg";
import linkedInIcon from "@/images/Footer/linkedinFooter.svg";
import waves from "@/images/Footer/wavesFooter.svg";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Image src={waves} alt="" className="wavesFooter" unoptimized />

      <footer className="footer">
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

        <p className="footer__contact">
          <CallLink source="footer" className="footer__contactLink">
            {business.phone.display}
          </CallLink>
          <a href={mailtoHref} className="footer__contactLink">
            {business.email}
          </a>
        </p>

        <ul className="footer__links">
          <li>
            <Link href="/about-us" className="footer__link">
              Company Information
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="footer__link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="footer__link">
              Privacy Policy
            </Link>
          </li>
        </ul>

        <p className="footer__areas">
          Serving businesses across {business.townsServed.join(", ")} and the
          surrounding areas.
        </p>

        <p className="footer__title">
          &copy; {year} {business.tradingName}
        </p>

        <p className="footer__legal">
          {business.legalName}, a company registered in England and Wales with
          company number {business.companyNumber}, registered office:{" "}
          {business.address.streetAddress}, {business.address.addressLocality},{" "}
          {business.address.addressRegion}, {business.address.postalCode}
        </p>
      </footer>
    </>
  );
}
