import type { AreaContent } from "@/types/area-content";

/*
 * Written by Terry from what he has actually installed in the town, which is
 * why it names streets and buildings rather than talking about "the local
 * area". Do not water this down into something that would read the same with
 * another town's name dropped in; that is what makes it worth having.
 */
export const berkhamsted: AreaContent = {
  slug: "berkhamsted",
  town: "Berkhamsted",
  metaTitle: "Business Broadband and Phone Systems in Berkhamsted",
  metaDescription:
    "Full fibre broadband and digital phone systems for Berkhamsted businesses, on the High Street and Northbridge Road. On site in about 20 minutes.",
  heading: "Business Broadband and Telephone Systems in Berkhamsted",
  strapline:
    "Full fibre on the High Street, shared leased lines on Northbridge Road, and an engineer who can be with you in about twenty minutes.",
  intro: [
    {
      kind: "paragraph",
      text: "Berkhamsted has two main commercial areas, and each has its own connectivity problem to solve:",
    },
    {
      kind: "list",
      items: [
        "The High Street, home to a wide range of shops, professional services and other local businesses",
        "Northbridge Road, the town's main industrial and business area",
      ],
    },
  ],
  sections: [
    {
      heading: "Faster broadband on the High Street",
      body: [
        {
          kind: "paragraph",
          text: "Until recently, businesses on the High Street were generally served by fibre to the cabinet, with typical maximum speeds of around 80Mb. Openreach has since been rolling out fibre to the premises across the area, which means local businesses can now get up to 1,000Mb.",
        },
        {
          kind: "paragraph",
          text: "The part worth knowing is that the jump in performance does not come with a jump in price. Fibre to the cabinet starts at £39.95 a month and full fibre at £49.95, so for most High Street businesses this is a tenfold increase in speed for ten pounds.",
        },
      ],
    },
    {
      heading: "Getting Northbridge Road connected",
      body: [
        {
          kind: "paragraph",
          text: "Northbridge Road has traditionally been poorly served by broadband infrastructure, despite being the principal business area in the town. Rather than wait for that to change, we commissioned a number of leased lines several years ago and used them to provide shared connectivity to businesses on the road.",
        },
        {
          kind: "paragraph",
          text: "Where premises have been particularly difficult to reach, we have installed wireless transmitters and receivers to extend that connectivity to them.",
        },
        {
          kind: "paragraph",
          text: "We have also concluded an agreement with Openreach to bring full fibre to Audley House, one of the area's main serviced office centres, and will be extending those services to businesses in the building alongside the existing shared leased line.",
        },
      ],
    },
    {
      heading: "Digital phone systems for Berkhamsted businesses",
      body: [
        {
          kind: "paragraph",
          text: "Better broadband also makes a modern digital phone system possible, which matters more every month as Openreach retires its old analogue network. The two jobs are much easier done together than a year apart, and the upgrade usually pays for itself in what you stop paying for line rental.",
        },
        {
          kind: "paragraph",
          text: "If you are not sure whether your lines are affected, our guide to the 2027 switch-off walks through how to tell from your bill, your building and your sockets.",
        },
      ],
    },
    {
      heading: "Local support, on site in about twenty minutes",
      body: [
        {
          kind: "paragraph",
          text: "Our office is in Tring, which means we can be with a Berkhamsted business in roughly twenty minutes. That is the difference between a problem being solved this morning and a four hour engineer window from a national supplier.",
        },
        {
          kind: "paragraph",
          text: "Faster connectivity, modern digital telephony, and someone local who will actually turn up.",
        },
      ],
    },
  ],
};
