import heroImage from "@/images/Home/grandstream.webp";
import type { ServiceContent } from "@/types/service-content";

export const telephoneSystems: ServiceContent = {
  slug: "telephone-systems",
  navLabel: "Telephone Systems",
  heading: "Telephone Systems",
  strapline: ["VoIP", "Hosted PBX", "Cloud Telephony"],
  metaTitle: "Business Telephone Systems in Hertfordshire",
  metaDescription:
    "Cloud telephone systems for businesses in Hertfordshire, Bedfordshire and Buckinghamshire. VoIP and hosted PBX with unlimited support and 30 day contracts.",
  heroImage,
  heroImageAlt:
    "Grandstream desk phone supplied and configured by Just2Connect",
  fromPrice: {
    amount: "£5.99",
    unit: "a month",
    note: "Including unlimited support and site visits",
  },
  nutshell: [
    "Cloud telephone systems have an array of benefits for businesses of all sizes. Moving a traditional telephone system to the cloud is a cost effective alternative for any business, and maintenance expenses will be a thing of the past.",
  ],
  features: [
    {
      title: "Reliability",
      description:
        "Reliability is a key part of any service, that's why we built our network with critical failover points across multiple data centres.",
    },
    {
      title: "Feature Rich",
      description:
        "We include all value added features with our Hosted PBX service. This gives you everything you need.",
    },
    {
      title: "Latest Handsets",
      description:
        "We supply the latest Grandstream, Polycom, Gigaset, Yealink and Cisco handsets - fully configured and ready to use.",
    },
    {
      title: "Customisable",
      description:
        "All services are configured through our portal. Whether via us, or yourself, there is multilevel access so we are always in full control.",
    },
    {
      title: "Online Provisioning",
      description:
        "Having the ability to provision a service via a user portal is not only more efficient, but also reduces the chance of human error.",
    },
    {
      title: "Desktop App",
      description:
        "Otherwise known as a softphone, use your laptop, tablet or mobile as your office extension.",
    },
    {
      title: "Call Recording",
      description:
        "You have the ability to record all incoming and/or outgoing calls, on any extensions.",
    },
  ],
  faqs: [
    {
      question: "What is VoIP | Hosted PBX | Cloud Telephony?",
      answer: [
        {
          kind: "paragraph",
          text: "They are all different names which essentially mean the same thing. It's a technology that lets you make and receive calls over the internet instead of using traditional phone lines.",
        },
      ],
    },
    {
      question: "Who is this type of telephony suitable for?",
      answer: [
        {
          kind: "paragraph",
          text: "Whether your business is mobile, home, or office-based, a cloud-based VoIP system offers a robust, cost-effective solution to your telephony needs. It's also quick to install, giving you flexibility whether you are setting up or moving office, enjoying rapid growth, or need to take on seasonal staff.",
        },
      ],
    },
    {
      question: "Why should I consider it for my business?",
      answer: [
        {
          kind: "paragraph",
          text: "The two most obvious reasons to move to VoIP are functionality and cost. Calls made over the internet are significantly cheaper than calls using traditional phone lines. You also don't need to pay traditional line rental and because it is internet-based, there aren't any hardware maintenance or upgrade charges.",
        },
        { kind: "paragraph", text: "Other benefits:" },
        {
          kind: "list",
          items: [
            "Technology is quick and easy to install, configure and maintain",
            "Flexible, so you can add new users by just adding a new handset",
            "If you're on the move, keep your current telephone number wherever you relocate",
            "All the features of an enterprise-class phone system at a fraction of the cost of traditional phone lines",
            "Helping remote workers operate seamlessly within the company",
          ],
        },
      ],
    },
    {
      question: "What if I already have a phone system?",
      answer: [
        {
          kind: "paragraph",
          text: "If your current system doesn't provide the features or flexibility you need, suffers reliability issues or if you are moving office and need to review your systems, you could benefit from a cheaper, flexible VoIP phone system - give us a call on 01442 573030.",
        },
      ],
    },
    {
      question:
        "Will switching to a new system mean I lose calls for any length of time?",
      answer: [
        {
          kind: "paragraph",
          text: "No, we will organise the switch so that all new phones are in place on the day your numbers 'port' onto our system. In that way, the second your number ports, your old phones will stop ringing and your new phones will start.",
        },
      ],
    },
    {
      question: "Will switching mean a lot of work for my organisation?",
      answer: [
        {
          kind: "paragraph",
          text: "No, we will manage the whole process on your behalf. We will ask you the occasional question, but that would be the extent of your involvement.",
        },
      ],
    },
    {
      question: "Will we have to buy new phones?",
      answer: [
        {
          kind: "paragraph",
          text: "It is likely that your existing phones may not be suitable for VoIP telephony. There is a great choice of handsets to select from. You can buy them up front, or we can include them in your monthly subscription.",
        },
      ],
    },
    {
      question: "Can I include all of my call costs in my monthly subscription?",
      answer: [
        {
          kind: "paragraph",
          text: "We have a number of different packages to suit the differing needs of our clients, one of which includes all local, national and mobile numbers.",
        },
      ],
    },
  ],
};
