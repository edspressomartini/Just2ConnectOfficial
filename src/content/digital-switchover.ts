import type { ServiceFaq } from "@/types/service-content";

/**
 * Content for the 2027 PSTN switch-off page.
 *
 * Every figure here is from Openreach's own announcements rather than a
 * competitor's summary, because most pages on this subject repeat each other
 * and several of them are wrong. The three that are most often got wrong:
 * the copper is not pulled out of the ground on the day and still carries
 * broadband, the broadband products move rather than stop, and nobody is cut
 * off with no warning, they land on EVAc. Check a source before editing any
 * of them.
 */

/** ISO date the PSTN closes. Used for the countdown and the JSON-LD. */
export const SWITCH_OFF_ISO_DATE = "2027-01-31";
export const SWITCH_OFF_DATE_LABEL = "31 January 2027";

/**
 * The opening explanation, in Terry's words.
 *
 * The distinction it draws is the one most pages on this subject miss: what
 * stops is the voice service, not the copper. The copper stays and keeps
 * carrying broadband, which is why the broadband products move rather than
 * die. Getting that wrong pushes readers into upgrades they do not need.
 */
export const shortVersion: readonly string[] = [
  `BT Openreach is retiring the network that has carried UK phone calls since the 1800s, which is the old copper lines in buildings. It is not an upgrade offer and it is not something you can opt out of: on ${SWITCH_OFF_DATE_LABEL} you will not be able to make or receive calls on your old copper lines. That service is called analogue telephony. Any other analogue service delivered down the same copper stops working too, including a lot of things that are not phones.`,
  "Everything analogue, including your phone numbers, has to move to a digital service. The good news is that almost every business comes out of this paying less than they did before, with a better service. The bad news is timing. The longer you leave it, the more you pay each month for the copper line you already have, because Openreach is putting its price up steadily to push people onto digital.",
  "The copper itself is not being taken away, though. It will still be used to deliver broadband. If your broadband is FTTC, VDSL, ADSL2+ or anything sold to you as Superfast, it runs over that copper, and it moves to a product called SOGEA that bundles the broadband and the line into one. That is an easy change: no new equipment, no engineer visit, just a call to your provider. The one thing to watch is that the phone service on the line ceases when you move, so if you want to keep the number you have to port it to a digital service at the same time.",
  "If you already have full fibre there is less to it. You port your number to a digital service and the copper line ceases, because full fibre comes into the building on its own new cable.",
  "The old copper line is becoming a technology of the past.",
];

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
      "Take a photo of anything you find, including the labels. If it has a phone number on it and you do not know what it is, send it to us and we will check it out.",
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
      "If you are still not sure, take a photo of the socket and the back of the phone and send it to us. We will check it out for you, and we will not charge you for this service.",
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
 *
 * Phone numbers come first and are marked as stopping, which reads harsher
 * than the usual "do not worry, you keep your number". You only keep it if
 * somebody ports it, so the reassuring version left readers with nothing to
 * do, which is the one outcome that actually loses them the number.
 */
export const serviceStatuses: readonly ServiceStatus[] = [
  {
    service: "Your phone numbers",
    verdict: "Stops",
    detail:
      "Every number has to be ported to a digital service. Do that and you keep it, including the 01 and 0800 numbers you have had for years. Leave it, and it stops working.",
  },
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
    verdict: "Changes",
    detail:
      "Replaced by SOTAP, unless you can get SOGEA or full fibre, and both of those are better. If you make calls on the line as well, the number has to be ported to a digital service.",
  },
  {
    service: "FTTC broadband",
    verdict: "Changes",
    detail:
      "Widely reported as dying on the day, which is not right. It is replaced by SOGEA, unless you can get full fibre. Same connection, no new equipment and no engineer visit. If you make calls on the line as well, the number has to be ported to a digital service.",
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
        text: "That is a safety net, not a plan. EVAc is deliberately stripped back, it is temporary, you cannot order it in advance, and it will cost you more than £50 a month. That is more than most of our customers pay for full fibre broadband. You would still have to migrate afterwards, so it is better done sooner than later.",
      },
    ],
  },
  {
    question: "I only have broadband, no phone. Am I affected?",
    answer: [
      {
        kind: "paragraph",
        text: "Possibly, and it depends on something you cannot see from the router. If your broadband is ADSL or FTTC, it is delivered over a copper line. The broadband itself carries on, but it has to move onto a different product: FTTC becomes SOGEA, and ADSL becomes SOTAP where neither SOGEA nor full fibre can reach you.",
      },
      {
        kind: "paragraph",
        text: "If you are already on SOGEA, which is the same connection without the phone line, or on full fibre, there is nothing to do. Your bill will normally say which. If it does not, send it to us and we will tell you.",
      },
    ],
  },
  {
    question: "Do I lose my phone number?",
    answer: [
      {
        kind: "paragraph",
        text: "Not if it is ported in time, and that is the part worth being clear about. Numbers are not carried over automatically. Somebody has to port yours to the digital service, and once that is done you keep it: the 01442 and 0800 numbers businesses have had on their vans and letterheads for twenty years all move across unchanged for anyone calling you.",
      },
      {
        kind: "paragraph",
        text: "Porting is a standard process and we do it as part of the move. What you cannot do is leave the number on a line that has been switched off and expect to pick it up later.",
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
        text: "The caveat is how many engineers there are. Every business still on copper needs one before the same deadline, and there is a limit to how many jobs can be done in a week. The closer to the date you leave it, the longer you wait for an appointment and the less say you have in when it falls.",
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
