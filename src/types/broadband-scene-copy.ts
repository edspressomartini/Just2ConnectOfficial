import type { SceneCaption } from "@/types/scene-caption";
import type { SceneNodeCopy } from "@/types/scene-node-copy";

export interface BroadbandSceneCopy {
  readonly caption: SceneCaption;
  readonly mainLine: SceneNodeCopy;
  readonly backupLine: SceneNodeCopy;
  readonly office: SceneNodeCopy;
}
