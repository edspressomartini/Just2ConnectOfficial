import type { ReactNode } from "react";

import type { SceneBadge } from "@/types/scene-badge";
import type { SceneNodeCopy } from "@/types/scene-node-copy";
import type { ScenePoint } from "@/types/scene-point";

export interface SceneNodeProps {
  /**
   * Where the centre of the card sits, or the middle of its left edge with
   * the `sceneNode--start` class.
   */
  readonly point: ScenePoint;
  readonly icon: ReactNode;
  readonly copy: SceneNodeCopy;
  readonly className: string;
  /** A tick or a cross on the corner of the card. */
  readonly badge?: SceneBadge;
}
