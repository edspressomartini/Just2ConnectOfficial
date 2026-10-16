"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import type { FormEvent } from "react";

import { isEmailJsConfigured, publicEnv } from "@/config/public-env";
import { business, telHref } from "@/content/business";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";

enum SubmissionStatus {
  IDLE = "IDLE",
  SENDING = "SENDING",
  SENT = "SENT",
  FAILED = "FAILED",
}

const SUBMIT_LABEL: { readonly [K in SubmissionStatus]: string } = {
  [SubmissionStatus.IDLE]: "Send enquiry",
  [SubmissionStatus.SENDING]: "Sending...",
  [SubmissionStatus.SENT]: "Sent",
  [SubmissionStatus.FAILED]: "Try again",
};

export interface ContactFormProps {
  /** Omit when the surrounding section already has the heading. */
  readonly heading?: string;
  readonly intro?: string;
  /**
   * The heading sits on a dark illustrated background on service pages, and on
   * a light panel on the contact page.
   */
  readonly onLightBackground?: boolean;
}

export function ContactForm({
  heading,
  intro,
  onLightBackground = false,
}: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmissionStatus>(SubmissionStatus.IDLE);

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const form = formRef.current;

    if (form === null) {
      return;
    }

    if (!isEmailJsConfigured()) {
      setStatus(SubmissionStatus.FAILED);
      return;
    }

    setStatus(SubmissionStatus.SENDING);

    try {
      await emailjs.sendForm(
        publicEnv.emailJsServiceId,
        publicEnv.emailJsTemplateId,
        form,
        { publicKey: publicEnv.emailJsPublicKey },
      );
    } catch {
      // The visitor is given the phone number rather than a silent failure.
      setStatus(SubmissionStatus.FAILED);
      return;
    }

    setStatus(SubmissionStatus.SENT);
    form.reset();
    trackEvent(AnalyticsEvent.GENERATE_LEAD, {
      source: "enquiry_form",
      page_path: window.location.pathname,
    });
  }

  const headingClass = onLightBackground
    ? "enquiryForm__heading enquiryForm__heading--onLight"
    : "enquiryForm__heading";

  return (
    <div className="enquiryForm">
      {heading === undefined ? null : (
        <h2 className={headingClass}>{heading}</h2>
      )}
      {intro !== undefined ? <p className="enquiryForm__intro">{intro}</p> : null}

      <form ref={formRef} onSubmit={handleSubmit} noValidate={false}>
        <div className="enquiryForm__field">
          <label className="enquiryForm__label" htmlFor="enquiry-name">
            Your name
          </label>
          <input
            className="enquiryForm__input"
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className="enquiryForm__field">
          <label className="enquiryForm__label" htmlFor="enquiry-email">
            Your email
          </label>
          <input
            className="enquiryForm__input"
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="enquiryForm__field">
          <label className="enquiryForm__label" htmlFor="enquiry-phone">
            Your phone number{" "}
            <span className="enquiryForm__optional">
              (optional, but it is the quickest way to get an answer)
            </span>
          </label>
          <input
            className="enquiryForm__input"
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>

        <div className="enquiryForm__field">
          <label className="enquiryForm__label" htmlFor="enquiry-message">
            How can we help?{" "}
            <span className="enquiryForm__optional">(optional)</span>
          </label>
          <textarea
            className="enquiryForm__textarea"
            id="enquiry-message"
            name="message"
            rows={4}
          />
        </div>

        <div className="enquiryForm__actions">
          <button
            className="enquiryForm__submit"
            type="submit"
            disabled={status === SubmissionStatus.SENDING}
          >
            {SUBMIT_LABEL[status]}
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {status === SubmissionStatus.SENT ? (
          <p className="enquiryForm__status enquiryForm__status--success">
            Thanks for getting in touch. We have your enquiry and will come back
            to you shortly.
          </p>
        ) : null}

        {status === SubmissionStatus.FAILED ? (
          <p className="enquiryForm__status enquiryForm__status--error">
            Sorry, that did not send. Please call us on{" "}
            <a href={telHref} className="enquiryForm__statusLink">
              {business.phone.display}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${business.email}`}
              className="enquiryForm__statusLink"
            >
              {business.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </div>
  );
}
