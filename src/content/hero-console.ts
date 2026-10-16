import { businessBroadband } from "@/content/services/business-broadband";
import { businessMobileSim } from "@/content/services/business-mobile-sim";
import { telephoneSystems } from "@/content/services/telephone-systems";
import type { ConsolePanelContent } from "@/types/console-panel-content";
import type { ConsoleRow } from "@/types/console-row";

export const heroConsolePhoneCaption = "Answered locally";

/** Also shown on the broadband card further down the home page. */
export const broadbandStatusRows: readonly ConsoleRow[] = [
  {
    label: "Main connection",
    // Not "full fibre": the price beside it is the fibre-to-the-cabinet one.
    detail: "Business fibre",
    status: "Connected",
    tone: "live",
  },
  {
    label: "Assure-X failover",
    detail: "Automatic backup line",
    status: "Standby",
    tone: "idle",
  },
  {
    label: "IP address",
    detail: "Same on either line",
    status: "Kept",
    tone: "done",
  },
];

/**
 * The screens the home hero cycles through, in order. Every claim here is
 * made in real text further down the page or on the service page it mirrors.
 */
export const heroConsolePanels: readonly ConsolePanelContent[] = [
  {
    tab: "Calls",
    title: "Incoming call",
    rows: [
      {
        label: "Desk phone",
        detail: "Reception",
        status: "Ringing",
        tone: "ringing",
      },
      {
        label: "Mobile app",
        detail: "X-Pro on your mobile",
        status: "Ringing",
        tone: "ringing",
      },
      {
        label: "Laptop",
        detail: "Browser softphone",
        status: "Ringing",
        tone: "ringing",
      },
    ],
    footnote: "One number. Every device.",
    price: telephoneSystems.fromPrice,
  },
  {
    tab: "Broadband",
    title: "Connection status",
    rows: broadbandStatusRows,
    footnote: "Takes over the moment the line drops.",
    price: businessBroadband.fromPrice,
  },
  {
    tab: "Mobile",
    title: "Business SIM",
    rows: [
      {
        label: "Contract",
        detail: "30 days' notice to cancel",
        status: "30 days",
        tone: "done",
      },
      {
        label: "Tariff",
        detail: "Unlimited calls and texts",
        status: "Flexible",
        tone: "done",
      },
      {
        label: "Network",
        detail: "EE, Vodafone or O2",
        status: "Best coverage",
        tone: "live",
      },
    ],
    footnote: "Keep your mobile number at no cost.",
    price: businessMobileSim.fromPrice,
  },
  {
    tab: "Support",
    title: "Support request",
    rows: [
      {
        label: "Your call",
        detail: "Picked up by a person, not a menu",
        status: "Answered",
        tone: "live",
      },
      {
        label: "Engineer visit",
        detail: "On site when it's needed",
        status: "Included",
        tone: "done",
      },
      {
        label: "Call-out charge",
        detail: "Never added to your bill",
        status: "£0",
        tone: "done",
      },
    ],
    footnote: "Unlimited support, included as standard.",
  },
];
