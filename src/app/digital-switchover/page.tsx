import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { EnquirySection } from "@/components/EnquirySection";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { business } from "@/content/business";
import {
  SWITCH_OFF_DATE_LABEL,
  SWITCH_OFF_ISO_DATE,
  affectedDevices,
  checkSteps,
  faqs,
  serviceStatuses,
  shortVersion,
  timeline,
  type ServiceVerdict,
} from "@/content/digital-switchover";
import { buildPageMetadata } from "@/lib/metadata";

const MS_PER_DAY = 86_400_000;

/*
 * Regenerated daily so the countdown in the hero never goes stale. Next only
 * accepts a literal here, so the day cannot be shared with MS_PER_DAY.
 */
export const revalidate = 86400;

export const metadata = buildPageMetadata({
  title: "2027 Phone Line Switch-Off: Are You Affected?",
  description:
    "The UK analogue phone network closes on 31 January 2027. A plain English check to see whether your business is affected, and what to do about it.",
  path: "/digital-switchover",
});

const verdictModifiers: Readonly<Record<ServiceVerdict, string>> = {
  Stops: "switchOffStatus__badge--stops",
  Changes: "switchOffStatus__badge--changes",
  Unaffected: "switchOffStatus__badge--safe",
};

function daysRemaining(): number {
  const remaining = Date.parse(SWITCH_OFF_ISO_DATE) - Date.now();

  if (remaining <= 0) {
    return 0;
  }

  return Math.ceil(remaining / MS_PER_DAY);
}

export default function DigitalSwitchoverPage() {
  const days = daysRemaining();

  return (
    <>
      <FaqJsonLd items={faqs} />

      <section className="switchOffHero">
        <p className="switchOffHero__eyebrow">The digital switchover</p>
        <h1 className="switchOffHero__title">
          Every analogue phone line in the UK will be switched off on{" "}
          {SWITCH_OFF_DATE_LABEL}
        </h1>
        <p className="switchOffHero__lead">
          Around 350,000 business premises are still on the old copper network
          and every one of them has to move before the deadline. This page tells
          you, in plain English, whether yours is one of them.
        </p>

        <div className="switchOffHero__countdown">
          {days === 0 ? (
            <p className="switchOffHero__countdownLabel">
              The old network has now closed.
            </p>
          ) : (
            <>
              <p className="switchOffHero__countdownNumber">{days}</p>
              <p className="switchOffHero__countdownLabel">days left to move</p>
            </>
          )}
        </div>

        <div className="switchOffHero__actions">
          <CallLink source="switchover-hero" className="switchOffButton">
            Call {business.phone.display}
          </CallLink>
          <Link
            href="/contact-us"
            className="switchOffButton switchOffButton--ghost"
          >
            Ask us to check your line
          </Link>
        </div>
      </section>

      <section className="switchOffLede panel" aria-labelledby="lede-heading">
        <h2 id="lede-heading" className="switchOffLede__heading">
          The short version
        </h2>
        {shortVersion.map((paragraph) => (
          <p key={paragraph} className="switchOffLede__text">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="switchOffCheck" aria-labelledby="check-heading">
        <h2 id="check-heading" className="sectionTitle">
          Three checks to see if this is you
        </h2>
        <p className="switchOffCheck__intro">
          You do not need an engineer and you do not need to call us to work
          this out. Do these in order and stop as soon as you get a clear
          answer.
        </p>

        <ol className="switchOffCheck__list">
          {checkSteps.map((step, index) => (
            <li key={step.title} className="switchOffStep panel">
              <p className="switchOffStep__number" aria-hidden="true">
                {index + 1}
              </p>
              <h3 className="switchOffStep__title">{step.title}</h3>
              <p className="switchOffStep__lead">{step.lead}</p>

              <ul className="switchOffStep__items">
                {step.items.map((item) => (
                  <li key={item} className="switchOffStep__item">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="switchOffStep__verdict">{step.verdict}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="switchOffDevices" aria-labelledby="devices-heading">
        <h2 id="devices-heading" className="sectionTitle">
          The lines nobody remembers
        </h2>
        <p className="switchOffDevices__intro">
          Most businesses get their phones sorted and then get caught out by
          something else. The reason is almost always the same: these lines are
          billed to a landlord, a managing agent or a maintenance contract, so
          they never appear on the phone bill anyone is looking at. Nobody in
          the building owns them, which is exactly why they get missed.
        </p>

        <ul className="switchOffDevices__grid">
          {affectedDevices.map((device) => (
            <li key={device.name} className="switchOffDevice">
              <h3 className="switchOffDevice__name">{device.name}</h3>
              <p className="switchOffDevice__note">{device.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="switchOffStatus" aria-labelledby="status-heading">
        <h2 id="status-heading" className="sectionTitle">
          What stops, what changes, what is already fine
        </h2>
        <p className="switchOffStatus__intro">
          Plenty of articles imply that everything on copper dies on the day.
          That is not true, and believing it leads people into upgrades they do
          not need. Here is the honest version.
        </p>

        <ul className="switchOffStatus__list">
          {serviceStatuses.map((status) => (
            <li key={status.service} className="switchOffStatus__row">
              <span className="switchOffStatus__service">{status.service}</span>
              <span
                className={`switchOffStatus__badge ${verdictModifiers[status.verdict]}`}
              >
                {status.verdict}
              </span>
              <span className="switchOffStatus__detail">{status.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="switchOffNothing panel"
        aria-labelledby="nothing-heading"
      >
        <h2 id="nothing-heading" className="switchOffNothing__heading">
          What happens if you do nothing
        </h2>
        <p className="switchOffNothing__text">
          You will not be cut off mid-sentence, which is the thing most pages on
          this subject get wrong. Openreach built a last-resort service called
          EVAc for lines that have not moved in time, and from 1 February 2027
          it will start carrying them. Where it is technically possible, a
          broadband service attached to the line is kept running too.
        </p>
        <p className="switchOffNothing__text">
          That is a safety net, not a plan. EVAc is deliberately stripped back,
          it is temporary, you cannot order it in advance, and it will cost you
          more than £50 a month. That is more than most of our customers pay
          for full fibre broadband. You would still have to migrate afterwards,
          so it is better done sooner than later.
        </p>
      </section>

      <section className="switchOffTimeline" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="sectionTitle">
          Why this one is not going to move again
        </h2>
        <p className="switchOffTimeline__intro">
          The most common reason businesses have not acted is that the date
          already slipped once, so they assume it will slip again. Here is what
          actually happened.
        </p>

        <ol className="switchOffTimeline__list">
          {timeline.map((entry) => (
            <li key={entry.date} className="switchOffTimeline__entry">
              <p className="switchOffTimeline__date">{entry.date}</p>
              <p className="switchOffTimeline__text">{entry.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="switchOffNext" aria-labelledby="next-heading">
        <h2 id="next-heading" className="sectionTitle">
          What we do about it
        </h2>
        <p className="switchOffNext__text">
          We have been moving businesses across Hertfordshire, Bedfordshire and
          Buckinghamshire off copper since long before the deadline was
          announced. Send us a recent bill, or a photo of the sockets if you
          cannot find one, and we will tell you exactly what you have, what it
          needs to become and what it will cost. If the answer is that you are
          already fine, we will tell you that too.
        </p>

        <ul className="switchOffNext__links">
          <li>
            <Link href="/telephone-systems" className="switchOffNext__link">
              Replace an analogue or ISDN phone system
            </Link>
          </li>
          <li>
            <Link href="/business-broadband" className="switchOffNext__link">
              Move ADSL or FTTC onto SOGEA or full fibre
            </Link>
          </li>
          <li>
            <Link href="/sip-trunks" className="switchOffNext__link">
              Keep an existing PBX and swap ISDN for SIP
            </Link>
          </li>
        </ul>
      </section>

      <Faq items={faqs} title="Questions we get asked about the switch-off" />

      <EnquirySection
        heading="Not sure where you stand?"
        intro="Send us your bill or a photo of the socket and we will tell you whether you are affected, with no obligation."
      />
    </>
  );
}
