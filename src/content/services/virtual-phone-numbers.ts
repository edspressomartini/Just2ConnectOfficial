import heroImage from "@/images/ProductPage/virtualPhoneNumbersHero.svg";
import type { ServiceContent } from "@/types/service-content";

export const virtualPhoneNumbers: ServiceContent = {
  slug: "virtual-phone-numbers",
  navLabel: "Virtual Phone Numbers",
  heading: "Virtual Phone Numbers",
  strapline: ["Geographic", "National", "Freephone Numbers"],
  metaTitle: "Virtual Phone Numbers for Business",
  metaDescription:
    "Local, national and freephone virtual numbers with time of day routing, call recording and voicemail to email. No equipment needed.",
  heroImage,
  heroImageAlt: "Illustration of a virtual phone number service",
  nutshell: [
    "Project the right image for your business by choosing a local, national or freephone number. Calls are diverted automatically to a number of your choice and at a time convenient to you.",
  ],
  features: [
    {
      title: "Tailored Phone Numbers",
      description: "Select an 01, 02, 03 or a freephone 0800 number.",
    },
    {
      title: "Time of Day Routing",
      description:
        "Only receive calls when convenient to you. Out of hours, send them straight to your voicemail.",
    },
    {
      title: "Call Recording",
      description: "Optional recording available for all inbound calls.",
    },
    {
      title: "Voicemail",
      description:
        "Customise your business voicemail message and receive messages as an email attachment.",
    },
    {
      title: "Fax to Email",
      description:
        "Use an inbound number for a fax service. Faxes are sent as an email attachment.",
    },
  ],
  faqs: [
    {
      question: "Do I need to buy any equipment?",
      answer: [
        {
          kind: "paragraph",
          text: "No equipment is necessary. Simply use your existing mobile or office phone to receive calls.",
        },
      ],
    },
    {
      question: "Can I have more than one number?",
      answer: [
        {
          kind: "paragraph",
          text: "Yes, you can have as many numbers as you wish. Choose from an 01, 02, 03 or 0800 number. You can direct all incoming calls to one number or select a different one for each Smart Inbound Number.",
        },
      ],
    },
    {
      question: "What happens if I miss a call?",
      answer: [
        {
          kind: "paragraph",
          text: "You can set up calls to re-direct to another mobile or landline just in case you can't answer, or send them directly to voicemail. Your Smart Inbound Number comes with its own voicemail account, so you can tailor the outgoing message that the caller hears to reflect your business details.",
        },
      ],
    },
    {
      question:
        "Can I change the number that calls are diverted to, if I am away from work?",
      answer: [
        {
          kind: "paragraph",
          text: "Yes, you can go into the online portal and change the number that calls are diverted to any time you wish. Alternatively, call us and we will do it for you.",
        },
      ],
    },
  ],
};
