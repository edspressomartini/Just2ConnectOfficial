import { berkhamsted } from "@/content/areas/berkhamsted";
import type { AreaContent } from "@/types/area-content";

/*
 * Towns we have something specific to say about. The rest of `townsServed`
 * deliberately has no page: a town page with nothing local in it is a doorway
 * page, and one of those would drag the others down with it.
 */
export const allAreas: readonly AreaContent[] = [berkhamsted];
