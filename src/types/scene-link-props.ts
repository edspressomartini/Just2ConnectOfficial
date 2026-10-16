import type { ScenePoint } from "@/types/scene-point";

export interface SceneLinkProps {
  readonly from: ScenePoint;
  readonly to: ScenePoint;
  readonly className: string;
}
