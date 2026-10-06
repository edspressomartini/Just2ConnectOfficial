import type { AreaContent } from "@/types/area-content";

/*
 * Openreach has not named the Luton exchange (SMLT) a Full Fibre Priority
 * Exchange, so the only restriction here is the national WLR stop-sell from
 * September 2023. That is consistent with the patchy fixed-line coverage this
 * page describes rather than a coincidence, which is why the two sit together.
 *
 * Terry named both clients in his draft. They are anonymised here because
 * publishing a named client's connectivity problems is their decision rather
 * than ours. If they say yes, the names go back in; the rest of the detail is
 * already as specific as it can be.
 */
export const luton: AreaContent = {
  slug: "luton",
  town: "Luton",
  metaTitle: "Telephone Systems & Broadband in Luton",
  metaDescription:
    "Digital phones work everywhere in Luton. Broadband does not. Starlink, SIM routers and fixed lines, for businesses the fibre rollout has not reached.",
  heading: "Business Broadband and Telephone Systems in Luton",
  strapline:
    "Every business in Luton can have a digital phone system. Not every business in Luton can get the broadband to run one, and that is the problem worth solving first.",
  intro: [
    {
      kind: "paragraph",
      text: "Luton splits neatly in two. Digital telephony is available across the whole town with no exceptions. Broadband is not, and there are pockets where what is available is genuinely poor.",
    },
    {
      kind: "paragraph",
      text: "Since a digital phone system depends entirely on the connection underneath it, those pockets are where the real work is.",
    },
  ],
  sections: [
    {
      heading: "Luton's exchange was never upgraded",
      body: [
        {
          kind: "paragraph",
          text: "Openreach has named exchanges across Hertfordshire as Full Fibre Priority Exchanges, which happens once roughly three quarters of the premises they serve can get full fibre. Hemel Hempstead, St Albans and Watford have all been through it.",
        },
        {
          kind: "paragraph",
          text: "Luton has not. The only restriction in force here is the national one that stopped the sale of new analogue lines in September 2023.",
        },
        {
          kind: "paragraph",
          text: "That is not a reprieve, it is a symptom. It means full fibre has not reached enough of the town to trigger the threshold, which is precisely the situation the businesses described below find themselves in. The 31 January 2027 deadline applies here in full, regardless.",
        },
      ],
    },
    {
      heading: "When there is no usable fixed line at all",
      body: [
        {
          kind: "paragraph",
          text: "One of our clients is a food business on the edge of Luton Airport. You would reasonably expect somewhere on the perimeter of an international airport to be well connected. It is not.",
        },
        {
          kind: "paragraph",
          text: "They can get neither full fibre nor fibre to the cabinet. The only thing Openreach can supply there is SOTAP, the copper product for premises that can get nothing better, which in practice means the sort of speeds people were complaining about fifteen years ago.",
        },
        {
          kind: "paragraph",
          text: "We solved it with a Starlink satellite connection. It gets them around 250Mb, it went in easily, and the monthly cost is reasonable compared with what they were getting before.",
        },
        {
          kind: "paragraph",
          text: "The part that actually mattered was latency rather than speed. Phone calls over the internet need the delay on the connection to stay below about 100 milliseconds, otherwise people start talking over each other and the call feels broken no matter how fast the line is. Older satellite broadband was hopeless at this, which is why it was never an answer for telephony. Starlink comfortably clears it, and that is what turned it from a broadband fix into a phones fix too.",
        },
      ],
    },
    {
      heading: "Moving premises without losing your number",
      body: [
        {
          kind: "paragraph",
          text: "Another Luton client, a door showroom, moved premises recently and wanted to keep their phone numbers.",
        },
        {
          kind: "paragraph",
          text: "On an analogue line that is a job with an Openreach appointment attached, and often a new number if you have moved far enough. On a digital system the numbers are not tied to a building at all.",
        },
        {
          kind: "paragraph",
          text: "We got broadband into the new showroom ahead of the move. They unplugged the phones, carried them over, plugged them in, and were taking calls again immediately. No transfer date, no period of diverting to a mobile, no change of number on their signage and vans.",
        },
        {
          kind: "paragraph",
          text: "This is worth knowing before you sign a lease rather than after. It is one of the genuine advantages of the switchover, and it only works if the broadband at the new address is sorted out first.",
        },
      ],
    },
    {
      heading: "Close enough to turn up",
      body: [
        {
          kind: "paragraph",
          text: "We are twenty minutes or less from Luton. Most problems are fixed remotely, because most problems can be, but when one cannot be we come out.",
        },
        {
          kind: "paragraph",
          text: "If you are not sure what your building can actually get, we will check it and tell you, including when the honest answer is that there is nothing worth changing yet.",
        },
      ],
    },
  ],
};
