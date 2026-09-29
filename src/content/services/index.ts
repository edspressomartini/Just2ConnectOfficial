import type { ServiceContent } from "@/types/service-content";
import { businessBroadband } from "./business-broadband";
import { businessMobileSim } from "./business-mobile-sim";
import { sipTrunks } from "./sip-trunks";
import { telephoneSystems } from "./telephone-systems";
import { virtualPhoneNumbers } from "./virtual-phone-numbers";

/** Services promoted in the header's primary navigation. */
export const primaryServices: readonly ServiceContent[] = [
  telephoneSystems,
  businessBroadband,
];

/** Services grouped under the "Other Services" dropdown. */
export const secondaryServices: readonly ServiceContent[] = [
  businessMobileSim,
  virtualPhoneNumbers,
  sipTrunks,
];

export const allServices: readonly ServiceContent[] = [
  ...primaryServices,
  ...secondaryServices,
];
