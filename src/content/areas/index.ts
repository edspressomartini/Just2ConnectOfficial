import { berkhamsted } from "@/content/areas/berkhamsted";
import { harpenden } from "@/content/areas/harpenden";
import { hemelHempstead } from "@/content/areas/hemel-hempstead";
import { luton } from "@/content/areas/luton";
import { stAlbans } from "@/content/areas/st-albans";
import { tring } from "@/content/areas/tring";
import { watford } from "@/content/areas/watford";
import type { AreaContent } from "@/types/area-content";

/*
 * Towns we have something specific to say about. The rest of `townsServed`
 * deliberately has no page: a town page with nothing local in it is a doorway
 * page, and one of those would drag the others down with it.
 */
export const allAreas: readonly AreaContent[] = [
  berkhamsted,
  harpenden,
  hemelHempstead,
  luton,
  stAlbans,
  tring,
  watford,
];
