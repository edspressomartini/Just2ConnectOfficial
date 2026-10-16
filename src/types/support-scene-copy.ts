import type { SceneCaption } from "@/types/scene-caption";
import type { SceneNodeCopy } from "@/types/scene-node-copy";

export interface SupportSceneCopy {
  readonly caption: SceneCaption;
  readonly caller: SceneNodeCopy;
  readonly person: SceneNodeCopy;
  readonly engineer: SceneNodeCopy;
}
