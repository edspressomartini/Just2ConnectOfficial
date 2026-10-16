import type { CSSProperties } from "react";

import { SCENE_HEIGHT, SCENE_WIDTH } from "@/lib/scene-size";
import type { ScenePoint } from "@/types/scene-point";

const PERCENT = 100;

/**
 * Moves an element's top-left corner to a point of a scene drawing. The scene
 * styles then pull the card back over the point: centred on it, or hanging
 * off it by its left edge with `sceneNode--start`.
 */
export function scenePosition({ x, y }: ScenePoint): CSSProperties {
  return {
    left: `${(x / SCENE_WIDTH) * PERCENT}%`,
    top: `${(y / SCENE_HEIGHT) * PERCENT}%`,
  };
}
