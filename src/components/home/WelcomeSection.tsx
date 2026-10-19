import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/SectionHeading";
import { welcomeCopy, welcomeImageAlt } from "@/content/home";
import deskPhoneImage from "@/images/Home/grandstream.webp";

export function WelcomeSection() {
  return (
    <section className="section" aria-labelledby="welcome-heading">
      <div className="container welcome">
        <div className="welcome__text">
          <SectionHeading id="welcome-heading" copy={welcomeCopy} />

          <div className="welcome__body reveal">
            <p className="welcome__lead">
              Low-cost, flexible and tailored solutions to meet your business
              requirements.
            </p>
            <p>
              Our professional, friendly, solution-focussed team provide a
              first-class <strong>local service</strong>, ensuring our
              customers&rsquo; needs are at the forefront of everything we do.
            </p>
            <p>
              We offer a range of telephone products and services with
              particular emphasis on{" "}
              <strong>working from multiple locations</strong>, whilst still
              being part of the &lsquo;office&rsquo; phone system. This means
              that wherever you are, or whatever device is available (desk
              phone, computer, tablet or mobile phone),{" "}
              <strong>you will always stay connected to your customers.</strong>
            </p>
            <p>
              We provide a number of broadband options, speeds and price points
              to meet all of your needs.
            </p>
            <p>
              <Link href="/contact-us" className="inlineLink">
                Contact us
              </Link>{" "}
              to find out more. We love to chat all things telephony and
              broadband.
            </p>
          </div>
        </div>

        <div className="welcome__visual tintCard tintCard--navy reveal">
          <Image
            src={deskPhoneImage}
            alt={welcomeImageAlt}
            className="welcome__image"
            sizes="(min-width: 992px) 440px, 80vw"
          />
        </div>
      </div>
    </section>
  );
}
