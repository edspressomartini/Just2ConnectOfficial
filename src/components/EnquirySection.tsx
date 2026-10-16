import { CallLink } from "@/components/CallLink";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { business } from "@/content/business";
import { openingHoursSummary } from "@/lib/opening-hours-summary";

export interface EnquirySectionProps {
  readonly eyebrow?: string;
  readonly heading?: string;
  /** Second half of the heading, shown in the accent colour. */
  readonly accent?: string;
  readonly intro?: string;
}

/** Closing enquiry block used at the foot of the home and service pages. */
export function EnquirySection({
  eyebrow = "Get in touch",
  heading = "Talk to us",
  accent,
  intro = "Tell us what you need and we will come back to you with a straight answer and a price.",
}: EnquirySectionProps) {
  return (
    <section
      className="section enquirySection"
      aria-labelledby="enquiry-heading"
    >
      <div className="container">
        <div className="enquirySection__panel darkPanel">
          <div className="enquirySection__text">
            <SectionHeading
              id="enquiry-heading"
              copy={{ eyebrow, lead: heading, accent, intro }}
            />
            <div className="enquirySection__call">
              <CallLink source="enquiry_section" className="buttonPrimary">
                <PhoneIcon className="button__icon" />
                Call {business.phone.display}
              </CallLink>
              <p className="enquirySection__hours">{openingHoursSummary()}</p>
            </div>
          </div>

          <div className="enquirySection__formCard">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
