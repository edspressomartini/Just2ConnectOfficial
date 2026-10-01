import type { Metadata } from "next";
import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { EnquirySection } from "@/components/EnquirySection";
import { allAreas } from "@/content/areas";
import { business } from "@/content/business";
import { exchangeStatuses } from "@/content/exchange-status";
import { buildPageMetadata } from "@/lib/metadata";

const PATH = "/areas";

/**
 * Towns we serve but have no page for yet. Named in prose rather than linked,
 * because claiming an area and then saying nothing about it is worse than not
 * claiming it, and a page with nothing local in it would be a doorway page.
 */
function townsWithoutPages(): readonly string[] {
  const covered = new Set(allAreas.map((area) => area.town));

  return business.townsServed.filter((town) => !covered.has(town));
}

/** "Harpenden, Harrow and Aylesbury", for a sentence rather than a list. */
function joinTowns(towns: readonly string[]): string {
  if (towns.length <= 1) {
    return towns[0] ?? "";
  }

  const last = towns[towns.length - 1];
  const rest = towns.slice(0, -1);

  return `${rest.join(", ")} and ${last}`;
}

export const metadata: Metadata = buildPageMetadata({
  title: "Areas We Cover",
  description:
    "Business telephone systems and broadband across Hertfordshire, Bedfordshire and Buckinghamshire. What the connectivity is actually like in each town we work in.",
  path: PATH,
});

export default function AreasPage() {
  const remaining = townsWithoutPages();

  return (
    <>
      <section className="areaHero">
        <p className="areaHero__eyebrow">Areas we cover</p>
        <h1 className="areaHero__title">
          Where we work, and what the connectivity is like there
        </h1>
        <p className="areaHero__strapline">
          We are based in Tring and work across Hertfordshire, Bedfordshire and
          Buckinghamshire. Every town is different, so rather than claim we
          cover everywhere, here is what we actually know about each one.
        </p>

        <div className="areaHero__actions">
          <CallLink source="areas-index" className="areaButton">
            Call {business.phone.display}
          </CallLink>
          <Link href="/contact-us" className="areaButton areaButton--ghost">
            Get a quote
          </Link>
        </div>
      </section>

      <section className="areaGrid" aria-label="Towns we cover">
        <ul className="areaGrid__list">
          {allAreas.map((area) => (
            <li key={area.slug} className="areaCard">
              <h2 className="areaCard__town">{area.town}</h2>
              <p className="areaCard__strapline">{area.strapline}</p>
              <Link href={`/areas/${area.slug}`} className="areaCard__link">
                {`What we do in ${area.town}`}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="areaSection" aria-labelledby="exchange-heading">
        <h2 id="exchange-heading" className="areaSection__heading">
          Which exchanges have already stopped selling copper
        </h2>
        <p className="areaSection__text">
          Long before the 2027 deadline, Openreach switches individual
          exchanges to full fibre only. Once that happens you can carry on with
          what you have, but you cannot re-sign, change speed, restart a
          cancelled line, or move to a cheaper provider without moving to full
          fibre at the same time. Shopping around is itself what catches most
          businesses out.
        </p>
        <p className="areaSection__text">
          These are the exchanges covering the towns we work in, checked
          against Openreach&apos;s own stop-sell register.
        </p>

        <div className="exchangeTable__scroll">
          <table className="exchangeTable">
            <caption className="exchangeTable__caption">
              Openreach stop-sell status by exchange
            </caption>
            <thead>
              <tr>
                <th scope="col">Town</th>
                <th scope="col">Exchange</th>
                <th scope="col">Where it stands</th>
              </tr>
            </thead>
            <tbody>
              {exchangeStatuses.map((entry) => (
                <tr key={entry.code}>
                  <th scope="row">{entry.town}</th>
                  {/*
                    * Most exchanges are named after their town, so repeating
                    * the name in both columns reads as a mistake. Only the
                    * ones that differ, like Bowmansgreen, are worth printing.
                    */}
                  <td>
                    {entry.exchange === entry.town ? null : `${entry.exchange} `}
                    <span className="exchangeTable__code">{entry.code}</span>
                  </td>
                  <td>{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="areaSection__text">
          One thing worth being clear about, because it is widely got wrong: a
          stop-sell applies building by building, not across the whole town. It
          only bites where full fibre has actually reached your premises. Where
          it has not, the older services are all still available. Nobody has
          had their town switched off.
        </p>
      </section>

      {remaining.length === 0 ? null : (
        <section className="areaAlso" aria-labelledby="also-heading">
          <h2 id="also-heading" className="areaSection__heading">
            We also work in {joinTowns(remaining)}
          </h2>
          <p className="areaSection__text">
            We have customers in these towns too, we just have not written
            anything up about them yet. Call us and we will tell you what is
            available at your postcode rather than in general.
          </p>
        </section>
      )}

      <EnquirySection
        heading="Not sure what you can get where you are?"
        intro="Send us your postcode and we will confirm exactly which broadband and telephone services are available at your building, with a price."
      />
    </>
  );
}
