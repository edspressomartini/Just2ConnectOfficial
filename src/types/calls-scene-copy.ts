import type { SceneCaption } from "@/types/scene-caption";
import type { SceneNodeCopy } from "@/types/scene-node-copy";

export interface CallsSceneCopy {
  readonly caption: SceneCaption;
  readonly caller: SceneNodeCopy;
  readonly deskPhone: SceneNodeCopy;
  readonly mobile: SceneNodeCopy;
  readonly laptop: SceneNodeCopy;
}
