import type { ServiceFaq } from "@/types/service-content";

/**
 * Content for the 2027 PSTN switch-off page.
 *
 * Every figure here is from Openreach's own announcements rather than a
 * competitor's summary, because most pages on this subject repeat each other
 * and several of them are wrong. The two that are most often got wrong:
 * FTTC is not uniformly dead on the day, and nobody is cut off with no
 * warning, they land on EVAc. Check a source before editing either.
 */

/** ISO date the PSTN closes. Used for the countdown and the JSON-LD. */
export const SWITCH_OFF_ISO_DATE = "2027-01-31";
export const SWITCH_OFF_DATE_LABEL = "31 January 2027";

export interface CheckStep {
  readonly title: string;
  readonly lead: string;
  readonly items: readonly string[];
  readonly verdict: string;
}

/**
 * The self-check. This is the part of the page that has to earn its place:
 * a business owner should be able to answer "is this me?" without calling
 * anyone, including us.
 */
export const checkSteps: readonly CheckStep[] = [
  {
    title: "Read your phone bill",
    lead: "Thirty seconds, and it settles it for most people. Find your latest bill and look for any of these words.",
    items: [
      'PSTN, WLR, WLR3, or just "line rental"',
      "ISDN, ISDN2, ISDN2e or ISDN30",
      "Analogue line, single line, or business line",
      "ADSL, or broadband sold together with a phone line",
      "Featureline, Business Highway or Embarq",
    ],
    verdict:
      "Any of those, and you are on the old network. If your bill only mentions SOGEA, full fibre, FTTP, a leased line or a hosted or cloud phone system, that part of your service is already safe.",
  },
  {
    title: "Walk the building",
    lead: "The lines that catch people out are almost never on the phone bill, because nobody in the office ordered them. Go and look in these places.",
    items: [
      "The comms cupboard or cabinet, for old boxes with a phone number written on a label",
      "The lift, and the lift motor room",
      "The fire alarm and intruder alarm panels",
      "The door entry or gate intercom",
      "Reception, the card machine and the till",
      "Anywhere a wire goes into the wall and nobody knows why",
    ],
    verdict:
      "Take a photo of anything you find, including the labels. If it has a phone number on it and you cannot say what it is for, put it on the list.",
  },
  {
    title: "Check the socket",
    lead: "The physical socket tells you what you have, and it is the check nobody explains.",
    items: [
      "A phone plugged straight into a wall socket, no router in between, is an analogue line and it is affected",
      "A master socket with a removable bottom half, usually marked Openreach or BT, means copper comes into the building",
      "A phone plugged into the back of a broadband router is already digital and is fine",
      "A handset on a base station, or a headset plugged into a computer, is already digital and is fine",
    ],
    verdict:
      "If you are still not sure, take a photo of the socket and the back of the phone and send it to us. We will tell you which it is, and there is no charge for answering.",
  },
];

export interface AffectedDevice {
  readonly name: string;
  readonly note: string;
}

/**
 * Ordered roughly by how often each one is missed rather than how common it
 * is. Lifts and alarms come first because they are usually billed to a
 * landlord or a maintenance contract, so they never appear on the phone bill
 * the business is checking.
 */
export const affectedDevices: readonly AffectedDevice[] = [
  {
    name: "Lift emergency phones",
    note: "Legally required to work, and usually on a line the building owner pays for. The single most commonly missed line in the country.",
  },
  {
    name: "Fire and intruder alarms",
    note: "Monitored alarms dial out over a phone line. If the line dies the alarm may still sound locally but nobody is told.",
  },
  {
    name: "Door entry and gate intercoms",
    note: "Often installed years ago by a contractor who is no longer around, on a line nobody has since thought about.",
  },
  {
    name: "Card machines and tills",
    note: "Older PDQ and EPOS terminals dial for authorisation. They fail at the worst possible moment, which is a queue of customers.",
  },
  {
    name: "Telecare and pendant alarms",
    note: "Anything relied on by a vulnerable person. Treat these as the highest priority and do not leave them to last.",
  },
  {
    name: "CCTV and remote monitoring",
    note: "Older systems phone home over copper rather than over the internet.",
  },
  {
    name: "Franking machines and fax",
    note: "Both still surprisingly common, and both quietly stop working.",
  },
  {
    name: "Machinery and plant modems",
    note: "Boilers, refrigeration, barriers and industrial kit often report faults down a phone line.",
  },
];

export type ServiceVerdict = "Stops" | "Changes" | "Unaffected";

export interface ServiceStatus {
  readonly service: string;
  readonly verdict: ServiceVerdict;
  readonly detail: string;
}

/**
 * The myth-busting table. Plenty of pages imply everything copper dies on the
 * day, which is not true and costs their readers money in panic upgrades.
 */
export const serviceStatuses: readonly ServiceStatus[] = [
  {
    service: "Analogue phone lines",
    verdict: "Stops",
    detail:
      "Every PSTN and WLR line is withdrawn. This is the actual switch-off.",
  },
  {
    service: "ISDN2 and ISDN30",
    verdict: "Stops",
    detail:
      "Withdrawn on the same date. SIP trunks are the direct replacement and usually cost less.",
  },
  {
    service: "ADSL broadband",
    verdict: "Stops",
    detail:
      "ADSL rides on top of an analogue line. Take the line away and the broadband goes with it.",
  },
  {
    service: "FTTC broadband",
    verdict: "Changes",
    detail:
      "Widely reported as dying on the day, which is not quite right. FTTC sold with a phone line has to move, because the line goes. The same connection without the line is SOGEA, and that carries on.",
  },
  {
    service: "SOGEA",
    verdict: "Unaffected",
    detail:
      "This is one of the places you are moving to, not one of the things being switched off.",
  },
  {
    service: "Full fibre and leased lines",
    verdict: "Unaffected",
    detail: "No copper involved, so nothing to do.",
  },
  {
    service: "Your phone numbers",
    verdict: "Unaffected",
    detail:
      "You keep them. Numbers are ported across to the new service, including 01 and 0800 numbers you have had for years.",
  },
];

export interface TimelineEntry {
  readonly date: string;
  readonly text: string;
}

export const timeline: readonly TimelineEntry[] = [
  {
    date: "September 2023",
    text: "National stop-sell. No new analogue lines anywhere in the UK, and no upgrades or house moves on the old ones.",
  },
  {
    date: "May 2024",
    text: "The deadline moved once, from December 2025 to 31 January 2027, so that telecare users could be migrated safely. This is why people assume it will move again.",
  },
  {
    date: "Through 2026",
    text: "Openreach raised the wholesale price of a legacy line three times, by 20% in April and 40% in both July and October, doubling it over the year. Waiting is now measurably more expensive than moving.",
  },
  {
    date: SWITCH_OFF_DATE_LABEL,
    text: "The PSTN and ISDN close. Openreach then begins decommissioning the physical network, so there is nothing to go back to.",
  },
];

export const faqs: readonly ServiceFaq[] = [
  {
    question: "Will it be delayed again like last time?",
    answer: [
      {
        kind: "paragraph",
        text: "It moved once, in May 2024, from the end of 2025 to 31 January 2027. That delay existed so telecare and vulnerable customers could be moved safely, not because the programme was in trouble, and Openreach has been unambiguous that there is no further extension.",
      },
      {
        kind: "paragraph",
        text: "Even if you do not take that on trust, waiting already costs money. You have not been able to order a new analogue line since September 2023, and the wholesale price of the lines that remain doubled during 2026.",
      },
    ],
  },
  {
    question: "What actually happens on the day if I do nothing?",
    answer: [
      {
        kind: "paragraph",
        text: "You are not simply cut off, which is what most articles imply. Lines that have not moved may be shifted onto EVAc, an emergency voice service Openreach built specifically so the network could be closed on time. Where it is technically possible, a linked broadband service will be kept running too.",
      },
      {
        kind: "paragraph",
        text: "It is not a solution, and it is not somewhere to sit. It is deliberately basic, it is temporary, you cannot order it in advance, and it costs providers £35 a month wholesale before anyone adds a retail margin. That is more than most businesses pay us for full fibre. You still have to migrate afterwards, only by then you are doing it in a queue.",
      },
    ],
  },
  {
    question: "I only have broadband, no phone. Am I affected?",
    answer: [
      {
        kind: "paragraph",
        text: "Possibly, and it depends on something you cannot see from the router. If your broadband is ADSL, or FTTC sold alongside a line rental charge, there is an analogue line underneath it and that line is going.",
      },
      {
        kind: "paragraph",
        text: "If it is SOGEA, which is the same connection without the phone line, or full fibre, you are already on the new world and there is nothing to do. Your bill will normally say which. If it does not, send it to us and we will tell you.",
      },
    ],
  },
  {
    question: "Do I lose my phone number?",
    answer: [
      {
        kind: "paragraph",
        text: "No. Numbers are ported to the new service, including the 01442 and 0800 numbers businesses have had on their vans and letterheads for twenty years. Porting is a standard process and the number is unchanged for anyone calling you.",
      },
    ],
  },
  {
    question: "What does it cost to move?",
    answer: [
      {
        kind: "paragraph",
        text: "Usually less than staying. A hosted phone system starts at £5.99 per user a month and SOGEA broadband at £39.95 a month, against a legacy line whose wholesale price doubled during 2026.",
      },
      {
        kind: "paragraph",
        text: "Most businesses come off this cheaper than they went in, with better call features than the old line ever had. Call us on 01442 573030 and we will price your actual site rather than a generic package.",
      },
    ],
  },
  {
    question: "How long does the move take?",
    answer: [
      {
        kind: "paragraph",
        text: "A straightforward site is a couple of weeks end to end, most of which is waiting for the connection and for numbers to port. The work itself is not disruptive and the old service normally stays live until the new one is proven.",
      },
      {
        kind: "paragraph",
        text: "The caveat is engineering capacity. Everyone still on copper has to move through the same engineers before the same date, so the closer to the deadline you leave it, the longer the wait and the less choice you have.",
      },
    ],
  },
  {
    question: "Who is responsible for the lift line and the alarm line?",
    answer: [
      {
        kind: "paragraph",
        text: "Whoever pays for it, which is frequently not the business using it. Lift and alarm lines are often on a landlord's account or bundled into a maintenance contract, which is exactly why they are the lines that get missed.",
      },
      {
        kind: "paragraph",
        text: "If you rent your premises, ask your landlord or managing agent in writing who is migrating those lines and when. A lift emergency phone that does not work is a safety issue, not an inconvenience.",
      },
    ],
  },
];
