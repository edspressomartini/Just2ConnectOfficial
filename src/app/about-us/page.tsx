import Image from "next/image";

import { EnquirySection } from "@/components/EnquirySection";
import { Credentials } from "@/components/Credentials";
import { StatsStrip } from "@/components/StatsStrip";
import { Col, Row } from "@/components/layout/Grid";
import { business } from "@/content/business";
import { people } from "@/content/people";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Telecoms and business broadband for companies across Hertfordshire, Bedfordshire and Buckinghamshire since 2009. Chamber of Commerce member.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      <section className="aboutHero">
        <h1 className="pageHeading">About Just2Connect</h1>
        <div className="aboutHero__text">
          <p>
            Just2Connect have provided telecom and broadband solutions to
            businesses <strong>since {business.foundingYear}</strong>. We
            understand the importance of value for money and exceptional
            customer support.
          </p>
          <p>
            We pride ourselves on being an approachable, professional business
            offering{" "}
            <strong>low-cost, flexible and tailored solutions</strong> to meet
            your needs.
          </p>
        </div>
      </section>

      <StatsStrip />

      <Credentials />

      <section className="personSection" aria-labelledby="people-heading">
        <h2 id="people-heading" className="personSection__title">
          Meet Our CEO
        </h2>

        {people.map((person) => (
          <Row key={person.name} alignStart>
            <Col xs={12} md={4}>
              <div className="personPhotoWrap">
                <Image
                  src={person.photo}
                  alt={`${person.name}, ${person.role} of Just2Connect`}
                  className="personPhoto"
                  sizes="(max-width: 960px) 60vw, 30vw"
                />
              </div>
            </Col>

            <Col xs={12} md={8}>
              <div className="personDetails">
                <p className="personDetails__role">{person.role}</p>
                <h3 className="personDetails__name">{person.name}</h3>
                {person.bio.map((paragraph) => (
                  <p key={paragraph} className="personDetails__bio">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        ))}
      </section>

      <EnquirySection heading="Want to talk to us?" />
    </>
  );
}
