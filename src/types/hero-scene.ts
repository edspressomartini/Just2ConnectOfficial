import type { ComponentType } from "react";

import type { SceneCaption } from "@/types/scene-caption";

export interface HeroScene {
  readonly caption: SceneCaption;
  readonly Drawing: ComponentType;
}
