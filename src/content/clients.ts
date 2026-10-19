import type { StaticImageData } from "next/image";

import Arrow from "@/images/Contact/Arrow.svg";
import AskRupert from "@/images/Contact/AskRupert.png";
import Azuki from "@/images/Contact/Azuki.png";
import BBYO from "@/images/Contact/BBYO.jpg";
import Brash from "@/images/Contact/Brash.png";
import Chamberlain from "@/images/Contact/Chamberlain.svg";
import ChilternDoors from "@/images/Contact/ChilternDoors.png";
import Composites from "@/images/Contact/Composites.jpg";
import DavyAssociates from "@/images/Contact/DavyAssociates.png";
import Dyslexia from "@/images/Contact/Dyslexia.png";
import EIC from "@/images/Contact/EIC.png";
import Enterprise from "@/images/Contact/Enterprise.png";
import FootClinic from "@/images/Contact/FootClinic.png";
import GoodEgg from "@/images/Contact/GoodEgg.jpg";
import Greens from "@/images/Contact/Greens.jpg";
import HarpendenGolf from "@/images/Contact/HarpendenGolf.png";
import HJP from "@/images/Contact/HJP.png";
import Hospice from "@/images/Contact/Hospice.png";
import HSD from "@/images/Contact/HSD.png";
import Indigo from "@/images/Contact/Indigo.svg";
import MCA from "@/images/Contact/MCA.jpg";
import NA from "@/images/Contact/NA.png";
import PES from "@/images/Contact/PES.jpg";
import Sabrefish from "@/images/Contact/Sabrefish.png";
import TBC from "@/images/Contact/TBC.jpg";
import TravelTimeWorld from "@/images/Contact/TravelTimeWorld.png";
import Vine from "@/images/Contact/Vine.jpg";
import Yellowyoyo from "@/images/Contact/Yellowyoyo.svg";

export interface ClientLogo {
  readonly name: string;
  readonly logo: StaticImageData;
  /** Applies a small corner radius, for logos that are square photographs. */
  readonly rounded?: boolean;
}

export const clientLogos: readonly ClientLogo[] = [
  { name: "Hospice of St Francis", logo: Hospice },
  { name: "Arrow", logo: Arrow },
  { name: "Indigo", logo: Indigo },
  { name: "EIC", logo: EIC },
  { name: "HJP", logo: HJP },
  { name: "Harpenden Golf Club", logo: HarpendenGolf },
  { name: "TravelTime World", logo: TravelTimeWorld },
  { name: "Yellowyoyo", logo: Yellowyoyo },
  { name: "Brash", logo: Brash },
  { name: "HSD", logo: HSD },
  { name: "TBC", logo: TBC },
  { name: "Davy Associates", logo: DavyAssociates },
  { name: "Sabrefish", logo: Sabrefish },
  { name: "Azuki", logo: Azuki, rounded: true },
  { name: "BBYO", logo: BBYO },
  { name: "Chamberlain", logo: Chamberlain },
  { name: "Chiltern Doors", logo: ChilternDoors },
  { name: "Composites", logo: Composites },
  { name: "Dyslexia", logo: Dyslexia },
  { name: "Enterprise", logo: Enterprise },
  { name: "The Foot Clinic", logo: FootClinic, rounded: true },
  { name: "Good Egg", logo: GoodEgg },
  { name: "Greens of Berkhamsted", logo: Greens, rounded: true },
  { name: "MCA", logo: MCA },
  { name: "NA", logo: NA },
  { name: "PES", logo: PES },
  { name: "Ask Rupert", logo: AskRupert, rounded: true },
  { name: "Vine", logo: Vine },
];
