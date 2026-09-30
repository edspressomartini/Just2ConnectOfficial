import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CallLink } from "@/components/CallLink";
import { ContentBlocks } from "@/components/ContentBlocks";
import { EnquirySection } from "@/components/EnquirySection";
import { Faq } from "@/components/Faq";
import { business } from "@/content/business";
import { allAreas } from "@/content/areas";
import { buildPageMetadata } from "@/lib/metadata";
import type { AreaContent } from "@/types/area-content";

interface AreaPageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

function findArea(slug: string): AreaContent | undefined {
  return allAreas.find((area) => area.slug === slug);
}

export function generateStaticParams(): { slug: string }[] {
  return allAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = findArea(slug);

  if (area === undefined) {
    return {};
  }

  return buildPageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = findArea(slug);

  if (area === undefined) {
    notFound();
  }

  return (
    <>
      <section className="areaHero">
        <p className="areaHero__eyebrow">{area.town}</p>
        <h1 className="areaHero__title">{area.heading}</h1>
        <p className="areaHero__strapline">{area.strapline}</p>

        <div className="areaHero__actions">
          <CallLink source={`area-${area.slug}`} className="areaButton">
            Call {business.phone.display}
          </CallLink>
          <Link href="/contact-us" className="areaButton areaButton--ghost">
            Get a quote
          </Link>
        </div>
      </section>

      <div className="areaIntro panel">
        <ContentBlocks
          blocks={area.intro}
          paragraphClassName="areaIntro__text"
          listClassName="areaIntro__list"
        />
      </div>

      {area.sections.map((section) => (
        <section key={section.heading} className="areaSection">
          <h2 className="areaSection__heading">{section.heading}</h2>
          <ContentBlocks
            blocks={section.body}
            paragraphClassName="areaSection__text"
            listClassName="areaSection__list"
          />
        </section>
      ))}

      <section className="areaLinks" aria-labelledby="area-links-heading">
        <h2 id="area-links-heading" className="areaSection__heading">
          What we do for {area.town} businesses
        </h2>
        <ul className="areaLinks__list">
          <li>
            <Link href="/telephone-systems" className="areaLinks__link">
              Business telephone systems
            </Link>
          </li>
          <li>
            <Link href="/business-broadband" className="areaLinks__link">
              Business broadband and full fibre
            </Link>
          </li>
          <li>
            <Link href="/digital-switchover" className="areaLinks__link">
              The 2027 phone line switch-off, and whether it affects you
            </Link>
          </li>
        </ul>
      </section>

      {area.faqs === undefined ? null : (
        <Faq items={area.faqs} title={`${area.town} questions`} />
      )}

      <EnquirySection
        heading={`Talk to us about ${area.town}`}
        intro={`Tell us your postcode and we will confirm exactly what broadband and telephony you can get in ${area.town}, with a price.`}
      />
    </>
  );
}
