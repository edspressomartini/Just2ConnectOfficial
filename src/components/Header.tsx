"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { CallLink } from "@/components/CallLink";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { business } from "@/content/business";
import { primaryServices, secondaryServices } from "@/content/services";
import logo from "@/images/Just2Connect_Logo.svg";

const HOME_PATH = "/";
const ABOUT_PATH = "/about-us";
const CONTACT_PATH = "/contact-us";

interface NavLinkProps {
  readonly href: string;
  readonly label: string;
  readonly className: string;
  readonly currentPath: string;
  readonly onNavigate: () => void;
}

function NavLink({
  href,
  label,
  className,
  currentPath,
  onNavigate,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      aria-current={currentPath === href ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent): void {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (dropdownRef.current?.contains(target) === true) {
        return;
      }

      setIsDropdownOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  function closeNavigation(): void {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }

  return (
    <header className="siteHeader">
      <div className="siteHeader__bar">
        <Link
          href={HOME_PATH}
          className="siteHeader__logo"
          onClick={closeNavigation}
        >
          <Image
            src={logo}
            alt="Just2Connect"
            className="siteHeader__logoImage"
            priority
            unoptimized
          />
        </Link>

        <div className="siteHeader__spacer" />

        <nav className="siteNav" aria-label="Main">
          <ul className="siteNav__list">
            <li>
              <NavLink
                href={HOME_PATH}
                label="Home"
                className="siteNav__link"
                currentPath={pathname}
                onNavigate={closeNavigation}
              />
            </li>

            {primaryServices.map((service) => (
              <li key={service.slug}>
                <NavLink
                  href={`/${service.slug}`}
                  label={service.navLabel}
                  className="siteNav__link"
                  currentPath={pathname}
                  onNavigate={closeNavigation}
                />
              </li>
            ))}

            <li className="siteNav__dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="siteNav__link siteNav__dropdownToggle"
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen((open) => !open)}
              >
                Other Services
                <ChevronDownIcon className="siteNav__chevron" />
              </button>

              {isDropdownOpen ? (
                <ul className="siteNav__menu">
                  {secondaryServices.map((service) => (
                    <li key={service.slug}>
                      <NavLink
                        href={`/${service.slug}`}
                        label={service.navLabel}
                        className="siteNav__menuLink"
                        currentPath={pathname}
                        onNavigate={closeNavigation}
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>

            <li>
              <NavLink
                href={ABOUT_PATH}
                label="About"
                className="siteNav__link"
                currentPath={pathname}
                onNavigate={closeNavigation}
              />
            </li>
            {/*
              * Hidden once the button below appears. Between 992px and
              * 1100px the bar has no room for the button, so the plain link
              * keeps contact reachable at every width.
              */}
            <li className="siteNav__contactItem">
              <NavLink
                href={CONTACT_PATH}
                label="Contact"
                className="siteNav__link"
                currentPath={pathname}
                onNavigate={closeNavigation}
              />
            </li>
          </ul>
        </nav>

        {/*
          * Contact as a button rather than a seventh nav link, so the bar
          * gains a visible call to action without gaining width.
          */}
        <Link
          href={CONTACT_PATH}
          className="headerQuote"
          aria-current={pathname === CONTACT_PATH ? "page" : undefined}
          onClick={closeNavigation}
        >
          Get a quote
        </Link>

        <CallLink source="header" className="headerCall">
          <PhoneIcon className="headerCall__icon" />
          <span className="headerCall__label">{business.phone.display}</span>
          <span className="visuallyHidden">Call Just2Connect</span>
        </CallLink>

        <button
          type="button"
          className="siteHeader__burger"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="visuallyHidden">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span className="siteHeader__burgerLine" aria-hidden="true" />
          <span className="siteHeader__burgerLine" aria-hidden="true" />
          <span className="siteHeader__burgerLine" aria-hidden="true" />
        </button>
      </div>

      {isMenuOpen ? (
        <nav id="mobile-navigation" className="mobileNav" aria-label="Main">
          <ul className="mobileNav__list">
            <li>
              <NavLink
                href={HOME_PATH}
                label="Home"
                className="mobileNav__link"
                currentPath={pathname}
                onNavigate={closeNavigation}
              />
            </li>

            {primaryServices.map((service) => (
              <li key={service.slug}>
                <NavLink
                  href={`/${service.slug}`}
                  label={service.navLabel}
                  className="mobileNav__link"
                  currentPath={pathname}
                  onNavigate={closeNavigation}
                />
              </li>
            ))}

            <li>
              <span className="mobileNav__groupLabel">Other services</span>
            </li>

            {secondaryServices.map((service) => (
              <li key={service.slug}>
                <NavLink
                  href={`/${service.slug}`}
                  label={service.navLabel}
                  className="mobileNav__link"
                  currentPath={pathname}
                  onNavigate={closeNavigation}
                />
              </li>
            ))}

            <li>
              <NavLink
                href={ABOUT_PATH}
                label="About"
                className="mobileNav__link"
                currentPath={pathname}
                onNavigate={closeNavigation}
              />
            </li>
            <li>
              <NavLink
                href={CONTACT_PATH}
                label="Get a quote"
                className="mobileNav__link"
                currentPath={pathname}
                onNavigate={closeNavigation}
              />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
