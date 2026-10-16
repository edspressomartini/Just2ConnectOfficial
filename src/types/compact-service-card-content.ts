import type { ComponentType } from "react";

import type { IconProps } from "@/types/icon-props";
import type { ServiceCardContent } from "@/types/service-card-content";

export interface CompactServiceCardContent extends ServiceCardContent {
  readonly icon: ComponentType<IconProps>;
}
