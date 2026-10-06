import type { AreaContent } from "@/types/area-content";

/*
 * Watford (LWWAT) was declared a Full Fibre Priority Exchange on 16 January
 * 2023 in Tranche 11, with stop-sell effective 16 February 2024. That is the
 * earliest of any town we cover, which is the angle this page takes.
 *
 * The SIM router section is the genuinely distinctive part and came from
 * Terry: it is a real installation at a Watford business hub, not a product
 * we are speculatively advertising.
 */
export const watford: AreaContent = {
  slug: "watford",
  town: "Watford",
  metaTitle: "Telephone Systems & Broadband in Watford",
  metaDescription:
    "Full fibre is widely available in Watford and the exchange stop-sell has applied since 2024. For buildings fibre has missed, we use 4G and 5G routers.",
  heading: "Business Broadband and Telephone Systems in Watford",
  strapline:
    "Watford has been under an Openreach stop-sell longer than any town nearby. For the buildings full fibre still has not reached, there is another way in.",
  intro: [
    {
      kind: "paragraph",
      text: "Watford is big enough that no single description of its connectivity is true across the whole town. Full fibre is widely available, several providers have built their own networks here, and there are still individual buildings that cannot get a decent fixed line at all.",
    },
  ],
  sections: [
    {
      heading: "Watford went first, back in February 2024",
      body: [
        {
          kind: "paragraph",
          text: "Openreach named the Watford exchange a Full Fibre Priority Exchange in January 2023, and the stop-sell took effect on 16 February 2024. Of all the towns we cover, Watford has been living with it the longest.",
        },
        {
          kind: "paragraph",
          text: "It applies building by building rather than across the town, and only where full fibre has actually reached your premises. Where it has, full fibre is the only thing Openreach will supply, so there is no renewing your old fibre-to-the-cabinet service, no changing its speed, and no taking it with you to a different provider.",
        },
        {
          kind: "paragraph",
          text: "Because this has been in force for well over two years, a good number of Watford businesses have already met it without recognising what it was. If you have tried to change something about your broadband recently and been told the product you wanted was unavailable, this is why.",
        },
      ],
    },
    {
      heading: "What if your building is one fibre has missed?",
      body: [
        {
          kind: "paragraph",
          text: "Plenty of businesses are in exactly that position, and being told that full fibre is widely available in Watford is no comfort at all when it is not available to you.",
        },
        {
          kind: "paragraph",
          text: "We have several clients in one Watford business hub with that problem. Rather than wait for Openreach to reach them, we connected them using routers with mobile SIMs in, carrying both their broadband and their phone calls over the mobile network instead of a fixed line.",
        },
        {
          kind: "paragraph",
          text: "That works in Watford specifically because mobile data coverage across the town is strong, which is not true everywhere we would consider it. It also costs noticeably less than most fixed broadband products, and because there is no civil engineering involved it can be installed in a morning rather than scheduled for a quarter from now.",
        },
        {
          kind: "paragraph",
          text: "We supply those connections on a thirty day contract. If full fibre reaches your building next year, you move onto it and stop paying for the SIM service. Nobody should be locked into a three year contract for a workaround.",
        },
      ],
    },
    {
      heading: "On site in twenty minutes, at no extra charge",
      body: [
        {
          kind: "paragraph",
          text: "When something needs an engineer in the building rather than on the phone, we can be in Watford in about twenty minutes.",
        },
        {
          kind: "paragraph",
          text: "Site visits are included in what you already pay. That is deliberate: a call-out charge makes a business hesitate before reporting a fault, which means small problems are left alone until they become large ones. It also means your telecoms bill is the same number every month, which is the entire point of a budget.",
        },
      ],
    },
  ],
};
