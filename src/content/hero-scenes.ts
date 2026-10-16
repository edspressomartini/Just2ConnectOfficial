import type { BroadbandSceneCopy } from "@/types/broadband-scene-copy";
import type { CallsSceneCopy } from "@/types/calls-scene-copy";
import type { SupportSceneCopy } from "@/types/support-scene-copy";

/*
 * Wording for the drawings the home hero cycles through. Every claim here is
 * made in real text further down the page or on the service page it mirrors.
 */

export const heroScenesPhoneCaption = "Answered locally";

export const callsScene: CallsSceneCopy = {
  caption: {
    label: "Calls",
    title: "One number rings every phone",
  },
  caller: { label: "Incoming call", detail: "To your number" },
  deskPhone: { label: "Desk phone", detail: "Reception" },
  mobile: { label: "Mobile", detail: "X-Pro app" },
  laptop: { label: "Laptop", detail: "Browser softphone" },
};

export const broadbandScene: BroadbandSceneCopy = {
  caption: {
    label: "Broadband",
    title: "Line down? The backup takes over",
  },
  mainLine: { label: "Business fibre", detail: "Main line" },
  backupLine: { label: "Assure-X", detail: "Automatic backup" },
  office: { label: "Your office", detail: "Stays online" },
};

export const supportScene: SupportSceneCopy = {
  caption: {
    label: "Support",
    title: "A real person, on site when needed",
  },
  caller: { label: "You call", detail: "Unlimited support" },
  person: { label: "A real person", detail: "Not a menu" },
  engineer: { label: "Engineer visit", detail: "No call-out charge" },
};
