import type { AreaContent } from "@/types/area-content";

/*
 * Tring is the home office, so the claims about response times are stronger
 * here than anywhere else and should stay that way.
 *
 * The exchange point is deliberately the opposite of the Hemel page: Openreach
 * has not named Tring (SMTR) a Full Fibre Priority Exchange, so the only
 * stop-sell in force is the national WLR one from September 2023. Saying so
 * plainly is more use than pretending every town is equally urgent, and it is
 * the kind of thing a reader can check.
 */
export const tring: AreaContent = {
  slug: "tring",
  town: "Tring",
  metaTitle: "Business Broadband and Phone Systems in Tring",
  metaDescription:
    "Digital phone systems and business broadband in Tring, from a provider based in the town. Every one of our Tring clients is already migrated.",
  heading: "Business Broadband and Telephone Systems in Tring",
  strapline:
    "We are based in Tring. Every one of our clients in the town is already on digital services, and none of them lost a day to it.",
  intro: [
    {
      kind: "paragraph",
      text: "Tring is not one business district but several. An independent high street, a number of business parks, and an unusually high concentration of artisan food and drink producers. The connectivity each of them needs is different, but the deadline they are all working to is the same.",
    },
  ],
  sections: [
    {
      heading: "Our Tring clients have already moved",
      body: [
        {
          kind: "paragraph",
          text: "Every client we have in Tring is already on digital telephony. We moved them across in a structured sequence rather than all at once, and at no point was any of them left without phones or broadband.",
        },
        {
          kind: "paragraph",
          text: "That is worth saying because the most common fear about the switchover is a day of silence while something is swapped over. It is avoidable. It only happens when the new service is ordered after the old one has been cancelled, instead of before.",
        },
      ],
    },
    {
      heading: "Tring's exchange has not been upgraded, which cuts both ways",
      body: [
        {
          kind: "paragraph",
          text: "Openreach has not named the Tring exchange a Full Fibre Priority Exchange, unlike Hemel Hempstead, St Albans and Watford. The only restriction in force here is the national one that stopped the sale of new analogue lines in September 2023.",
        },
        {
          kind: "paragraph",
          text: "The good news in that is you still have choices. Fibre to the cabinet is still available where full fibre has not reached, so nothing is being forced on you at short notice.",
        },
        {
          kind: "paragraph",
          text: "The bad news is that it removes the deadline that has prompted businesses in neighbouring towns to act, while doing nothing whatsoever about the real one. Every analogue line in Tring still stops working on 31 January 2027, exactly as it does everywhere else. Having longer is only an advantage if you use it.",
        },
      ],
    },
    {
      heading: "One supplier, one invoice, ten minutes away",
      body: [
        {
          kind: "paragraph",
          text: "We are based in Tring, which means we can be with a business in the town in about ten minutes. For most of our clients here, phones, broadband and mobile all arrive on a single invoice from one company, rather than three bills from three suppliers who each blame the other two when something stops working.",
        },
      ],
    },
    {
      heading:
        "We check whether you are on the right tariff, without being asked",
      body: [
        {
          kind: "paragraph",
          text: "Most telecoms contracts rely on you never looking at them again. Ours do not.",
        },
        {
          kind: "paragraph",
          text: "Once a year we look at each client's actual call usage over the previous twelve months and work out whether they would be better off with calls included in their tariff or paying as they go. Then we tell them, and move them if the answer is yes.",
        },
        {
          kind: "paragraph",
          text: "Sometimes that reduces what a client pays us. We would rather do it than have somebody discover two years later that they have been on the wrong plan the whole time, which is how most people end up changing supplier.",
        },
      ],
    },
  ],
};
