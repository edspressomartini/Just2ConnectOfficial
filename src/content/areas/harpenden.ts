import type { AreaContent } from "@/types/area-content";

/*
 * Harpenden's exchange is SMHR. It is *not* a Full Fibre Priority Exchange,
 * so the only stop-sell that applies is the national one from September 2023.
 * Openreach lists Harpenden in its October 2025 Full Fibre build programme,
 * so the position here will change.
 *
 * The fact worth having, and the reason this page is not interchangeable with
 * the others, is that Harpenden has two full fibre networks rather than one.
 * CityFibre names Harpenden on its own list of connected locations, and
 * Harpenden was called out by name when CityFibre took the Project Gigabit
 * contract for Buckinghamshire, Hertfordshire and East Berkshire. Terry's
 * "whole of market" point is therefore literally true here in a way it is not
 * in Tring or Berkhamsted, where Openreach is the only game in town.
 *
 * Harpenden Golf Club is named with Terry's say-so, since he wrote the
 * paragraph for this page. Hammonds End, Redbourn Lane, AL5 2AX. The club
 * extended its clubhouse with a £75,000 Sport England grant, which is the
 * work he refers to. The date is deliberately not published: he did not give
 * one, and the grant year is not necessarily the year we did the cabling.
 */
export const harpenden: AreaContent = {
  slug: "harpenden",
  town: "Harpenden",
  metaTitle: "Business Broadband and Phone Systems in Harpenden",
  metaDescription:
    "Harpenden businesses can choose between two full fibre networks. We are whole of market across Openreach and CityFibre, and we do the cabling too.",
  heading: "Business Broadband and Telephone Systems in Harpenden",
  strapline:
    "Harpenden has two separate full fibre networks in the ground. That is unusual, and it means the right answer depends on your postcode rather than on the provider.",
  intro: [
    {
      kind: "paragraph",
      text: "Harpenden is one of Hertfordshire's premier towns. It has an affluent demographic, excellent connections into London, and a lot of boutique commercial businesses rather than large offices. None of that removes the need for fast broadband and telephony that keeps working, and that is where we spend our time here.",
    },
  ],
  sections: [
    {
      heading: "Two full fibre networks, which is rarer than it sounds",
      body: [
        {
          kind: "paragraph",
          text: "Most towns around here have one full fibre network, built by Openreach, and the choice you are offered is really the same product with a different logo on the bill. Harpenden is one of the few places nearby where that is not the case. CityFibre has built here as well, and lists Harpenden among the towns where its network is live.",
        },
        {
          kind: "paragraph",
          text: "We work on a whole of market basis, which means we are not an agent for one network. We can take the best of what the infrastructure providers offer, Openreach and CityFibre included, and put together the fastest and most cost-effective service for your building.",
        },
        {
          kind: "paragraph",
          text: "The catch with two networks is that they do not cover the same streets, and a good headline price on a network that has not reached your road is not an offer at all. Checking which ones are genuinely live at your address is the first thing we do, and it takes us a few minutes.",
        },
      ],
    },
    {
      heading: "Harpenden is not under an early stop-sell, but the date still applies",
      body: [
        {
          kind: "paragraph",
          text: "The Harpenden exchange has not been named a Full Fibre Priority Exchange, so unlike Watford, Hemel Hempstead and St Albans there is no early restriction forcing businesses here onto full fibre ahead of everyone else. The national stop-sell from September 2023 is what applies, which means no new analogue lines and no changes to the old ones.",
        },
        {
          kind: "paragraph",
          text: "That is a reprieve on the paperwork rather than on the deadline. Every analogue line still has to be gone by 31 January 2027, and Openreach is in the middle of its full fibre build here, so the position will change.",
        },
      ],
    },
    {
      heading: "Moving from fibre to the cabinet to full fibre",
      body: [
        {
          kind: "paragraph",
          text: "Most of our recent work in Harpenden has been upgrading clients from traditional fibre to the cabinet broadband, which still uses the old copper for the last stretch, onto full fibre that comes into the building on its own cable.",
        },
        {
          kind: "paragraph",
          text: "Typically we had already moved those clients onto digital telephony some time before, which makes the broadband upgrade straightforward. The phones are not sitting on the line being replaced, so there is no sequencing problem and no day where one depends on the other.",
        },
      ],
    },
    {
      heading: "The part that gets forgotten: the handsets need a network",
      body: [
        {
          kind: "paragraph",
          text: "When people plan a move to digital telephony they think about the phone system and the broadband, and then overlook the fact that every handset now needs to reach the internet. That happens over ethernet cabling or over WiFi, and if neither is in the right place the new phones have nothing to plug into.",
        },
        {
          kind: "paragraph",
          text: "We have years of experience putting structured cabling into offices, from adding a couple of ethernet points to a complete digital fit-out. Doing both halves ourselves is what lets us move a business from the old technology to the new one without a gap in the middle.",
        },
      ],
    },
    {
      heading: "Harpenden Golf Club, years ahead of the game",
      body: [
        {
          kind: "paragraph",
          text: "Harpenden Golf Club is a good example of how this works in practice. The club was expanding its clubhouse, so while the building work was going on we installed ethernet cabling to every part of it.",
        },
        {
          kind: "paragraph",
          text: "That let us move the club across to digital telephony at the same time, in one go, rather than cabling the building twice. They were years ahead of the game, and they will not be among the businesses trying to get this done in the weeks before the deadline.",
        },
      ],
    },
  ],
};
