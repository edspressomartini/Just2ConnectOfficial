import heroImage from "@/images/ProductPage/mobileSimHero.svg";
import type { ServiceContent } from "@/types/service-content";

export const businessMobileSim: ServiceContent = {
  slug: "business-mobile-sim",
  navLabel: "Mobile SIM",
  heading: "Business Mobile SIM & eSIM",
  strapline: [
    "30 Day Contracts",
    "Unlimited Calls",
    "Unlimited Texts",
    "Unlimited Data",
  ],
  metaTitle: "Business Mobile SIM & eSIM",
  metaDescription:
    "Business SIM-only plans on EE, Vodafone and O2 with unlimited calls, texts and data on a 30 day contract. Keep your existing mobile number.",
  heroImage,
  heroImageAlt: "Illustration of a business mobile SIM card",
  fromPrice: {
    amount: "£10.99",
    unit: "a month",
    note: "Unlimited calls and texts with 2GB of data, on a 30 day contract",
  },
  nutshell: [
    "We provide a range of flexible SIM-only plans on EE, Vodafone or O2. You don't have to be tied to a long contract. With our tariffs, 30 days notice is all we need to cancel a SIM.",
  ],
  features: [
    {
      title: "30 Day Contract",
      description:
        "With our tariffs, 30 days notice is all we need to cancel a SIM contract.",
    },
    {
      title: "Unlimited Calls, Texts and Data",
      description:
        "Choose from a range of products including unlimited everything.",
    },
    {
      title: "Nationwide Coverage",
      description: "SIMs available on EE, Vodafone or O2.",
    },
    {
      title: "Simple to Provision",
      description:
        "Place an order and you'll be live within 24 hrs - often before.",
    },
    {
      title: "Transfer Your Existing Number",
      description: "Transfer your existing mobile number at no cost.",
    },
    {
      title: "2nd eSIM for Your Mobile",
      description:
        "This gives you a second SIM option (for selected handsets).",
    },
  ],
  faqs: [
    {
      question: "Can I keep my existing number?",
      answer: [
        {
          kind: "paragraph",
          text: "Yes, just request a PAC code from your existing supplier - you can get the code by texting the word 'PAC' to 65075.",
        },
      ],
    },
    {
      question: "Is the contract really only on a 30 day basis?",
      answer: [
        {
          kind: "paragraph",
          text: "Yes, all of our SIMs are on a 30 day contract basis.",
        },
      ],
    },
    {
      question: "What is an eSIM?",
      answer: [
        {
          kind: "paragraph",
          text: "An eSIM is a virtual SIM card for selected mobile phones. It provides a second mobile number, allowing you to use one for business and one for personal on the same handset.",
        },
      ],
    },
    {
      question: "Will an eSIM work on all mobile handsets?",
      answer: [
        {
          kind: "paragraph",
          text: "Newer iPhones, Google Pixels and Samsung Galaxy handsets support an eSIM. If you want to find out more, give us a call on 01442 573030.",
        },
      ],
    },
  ],
};
