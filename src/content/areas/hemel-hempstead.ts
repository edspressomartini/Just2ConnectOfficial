import type { AreaContent } from "@/types/area-content";

/*
 * Built from Terry's notes plus the Openreach exchange record, which is the
 * part that makes this page worth having. Openreach declared the Hemel
 * Hempstead exchange (SMHH) an FTTP Priority Exchange on 17 January 2025 as
 * part of Tranche 19, with stop-sell effective 14 February 2026.
 *
 * The detail everyone gets wrong, including most competitor pages: the
 * stop-sell applies premises by premises, not to the whole exchange area. It
 * only bites where full fibre has actually reached that building. Check
 * Openreach before editing any of this.
 */
export const hemelHempstead: AreaContent = {
  slug: "hemel-hempstead",
  town: "Hemel Hempstead",
  metaTitle: "Telephone Systems & Broadband in Hemel Hempstead",
  metaDescription:
    "Full fibre reaches most of Hemel Hempstead and the exchange stop-sell is already in force. What that means for your phones and broadband, in plain terms.",
  heading: "Business Broadband and Telephone Systems in Hemel Hempstead",
  strapline:
    "Full fibre now reaches most of the town, the Openreach stop-sell is already in force, and most local businesses have not moved yet.",
  intro: [
    {
      kind: "paragraph",
      text: "Hemel Hempstead is further through the change to digital phones and full fibre than almost anywhere else nearby. The infrastructure is largely built. What has not happened is businesses actually moving onto it.",
    },
  ],
  sections: [
    {
      heading: "The fibre arrived before the businesses did",
      body: [
        {
          kind: "paragraph",
          text: "Openreach has invested around £10 million building a full fibre network across Hemel Hempstead, which now reaches roughly 75 per cent of properties. More than 34,000 homes and businesses in the town can order it today.",
        },
        {
          kind: "paragraph",
          text: "By Openreach's own figures, fewer than two in five have done so. The reason is simple and catches a lot of people out: upgrades do not happen automatically. Openreach builds the network past your door, and then nothing at all happens until somebody places an order.",
        },
        {
          kind: "paragraph",
          text: "It is not for want of being told. BT and Dacorum Borough Council have run public forums and roadshows locally about the switchover. Information has not been the bottleneck. Most businesses simply have other things to deal with, and a phone system that still works is rarely the most urgent of them.",
        },
      ],
    },
    {
      heading: "The Hemel exchange stop-sell has already happened",
      body: [
        {
          kind: "paragraph",
          text: "This is the part specific to Hemel Hempstead, and it is worth five minutes of anyone's time.",
        },
        {
          kind: "paragraph",
          text: "Openreach named the Hemel Hempstead exchange a Full Fibre Priority Exchange in January 2025, and the resulting stop-sell took effect on 14 February 2026. That is nearly a year before the national switch-off date, and it is already in force.",
        },
        {
          kind: "paragraph",
          text: "What it means is commonly misunderstood, so here it is precisely. The restriction applies building by building, not to the town as a whole. It only applies where full fibre has actually reached your premises. Where it has, full fibre is now the only thing Openreach will supply there, and that means:",
        },
        {
          kind: "list",
          items: [
            "You cannot renew or re-sign your existing fibre-to-the-cabinet service",
            "You cannot move to a new provider and keep the service you are on, because changing supplier counts as a new order",
            "You cannot change your speed up or down on the old product",
            "If you cease a line and later want it back, you cannot have the old one back",
          ],
        },
        {
          kind: "paragraph",
          text: "If full fibre has not yet reached your building, none of this applies to you yet, and fibre to the cabinet is still available. It will apply the moment Openreach connects your premises.",
        },
        {
          kind: "paragraph",
          text: "In practice the business most likely to be caught out is the one shopping around for a cheaper deal, who discovers that the act of switching is itself the thing that forces the upgrade. That is much easier to handle as a planned move than as a surprise halfway through changing supplier.",
        },
      ],
    },
    {
      heading: "What Hemel businesses are actually doing with digital phones",
      body: [
        {
          kind: "paragraph",
          text: "Replacing analogue lines because Openreach is retiring them is the dull reason to move. These are the reasons businesses locally are choosing to, well ahead of being made to:",
        },
        {
          kind: "list",
          items: [
            "Connecting the phone system to their CRM, so a customer's record opens as the call comes in rather than being hunted for while they wait",
            "Using AI to answer, route and take messages from calls that would otherwise ring out, which tends to matter most to the smallest businesses with nobody spare to pick up",
            "Keeping staff working from home on the same phone system as the office, on the same extension numbers, instead of running a separate arrangement for them",
          ],
        },
        {
          kind: "paragraph",
          text: "None of these are possible on an analogue line. They are the reason the switchover is worth treating as an upgrade rather than a chore.",
        },
      ],
    },
    {
      heading: "Working out where you stand",
      body: [
        {
          kind: "paragraph",
          text: "If you are not sure whether full fibre has reached your building, or whether the stop-sell affects you, we will check it for you and tell you where you stand. There is no charge for that and no obligation attached to it.",
        },
        {
          kind: "paragraph",
          text: "Our office is in Tring, about twenty minutes from Hemel Hempstead, so when something needs an engineer on site rather than on the phone, you get one.",
        },
      ],
    },
  ],
};
