import type { AreaContent } from "@/types/area-content";

/*
 * Two exchanges serve St Albans businesses and both are Full Fibre Priority
 * Exchanges with stop-sell already in force: St Albans (LNSTB), declared
 * 2 May 2025 in Tranche 20 with stop-sell from 5 June 2026, and Bowmansgreen
 * (LNBGN), declared 19 October 2021 in Tranche 6 with stop-sell from
 * 1 November 2022.
 *
 * As with the Hemel page, the stop-sell applies premises by premises and only
 * where full fibre has actually reached the building. Do not simplify that
 * into "St Albans is switched off", which is wrong and would be the single
 * easiest thing on this site to catch us out on.
 */
export const stAlbans: AreaContent = {
  slug: "st-albans",
  town: "St Albans",
  metaTitle: "Business Broadband and Phone Systems in St Albans",
  metaDescription:
    "St Albans businesses moved to digital phones early, and both local exchanges are now under an Openreach stop-sell. What that means, and how to choose a provider.",
  heading: "Business Broadband and Telephone Systems in St Albans",
  strapline:
    "St Albans moved earlier than most of Hertfordshire, and has more broadband providers to choose between than anywhere nearby. Both facts have consequences.",
  intro: [
    {
      kind: "paragraph",
      text: "St Albans has taken up digital phone services faster than most of the county. Two things drove it: the Openreach switch-off, and the steep rises in the cost of keeping an old analogue line, which made waiting an expensive decision rather than a free one.",
    },
  ],
  sections: [
    {
      heading: "Both St Albans exchanges are already under stop-sell",
      body: [
        {
          kind: "paragraph",
          text: "Businesses in St Albans are served by two Openreach exchanges, and both have been named Full Fibre Priority Exchanges. The Bowmansgreen exchange went into stop-sell on 1 November 2022, and the St Albans exchange followed on 5 June 2026. Both restrictions are live now.",
        },
        {
          kind: "paragraph",
          text: "The detail that matters, and that is widely got wrong, is that this applies to individual buildings rather than to the town. It takes effect only where full fibre has actually reached your premises. Where it has, full fibre is the only product Openreach will now supply there, so you cannot re-sign your existing fibre-to-the-cabinet service, change its speed, or move it to another provider.",
        },
        {
          kind: "paragraph",
          text: "That last one is the trap. Changing supplier counts as a new order, so the act of shopping around is itself what triggers the upgrade. Better to know that before you start than halfway through.",
        },
      ],
    },
    {
      heading: "More providers than anywhere nearby, which is a mixed blessing",
      body: [
        {
          kind: "paragraph",
          text: "St Albans has attracted more alternative network builders than its neighbours. Several companies other than Openreach have laid their own full fibre in the city, and for once that genuinely does mean choice rather than the same product with different logos on it.",
        },
        {
          kind: "paragraph",
          text: "The complication is that these networks do not cover the same streets, they do not all offer the same guarantees when something breaks, and a cheap headline price from a network that has not reached your road is not an option at all. Comparing them properly means knowing which ones are actually live at your address.",
        },
        {
          kind: "paragraph",
          text: "We are not tied to one network, so we can tell you what is genuinely available at your building and what the difference between them is worth to you.",
        },
      ],
    },
    {
      heading: "Good phones need good broadband underneath them",
      body: [
        {
          kind: "paragraph",
          text: "Once your phones run over the internet, your broadband stops being the thing that carries email and becomes the thing that carries your phone calls. A connection that is perfectly adequate for browsing can still make you sound terrible on the phone, because call quality depends on consistency rather than headline speed.",
        },
        {
          kind: "paragraph",
          text: "This is why we would rather quote for both together. Putting a modern phone system on top of a connection that cannot carry it properly is a good way to conclude that digital phones are worse than the old ones.",
        },
      ],
    },
    {
      heading: "Fifteen years of doing exactly this",
      body: [
        {
          kind: "paragraph",
          text: "We have worked in digital telecoms for over fifteen years, which means we were moving businesses onto internet-based phone systems long before Openreach set a date that made everyone else do it.",
        },
        {
          kind: "paragraph",
          text: "The technology is the easy half. The harder half is moving a working business from one system to another without it losing calls on the day, and that is mostly experience rather than cleverness.",
        },
      ],
    },
  ],
};
