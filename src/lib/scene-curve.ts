import type { ScenePoint } from "@/types/scene-point";

/**
 * SVG path for an S-shaped line that leaves `from` and arrives at `to`
 * travelling sideways.
 */
export function sceneCurve(from: ScenePoint, to: ScenePoint): string {
  const bend = (from.x + to.x) / 2;

  return `M ${from.x} ${from.y} C ${bend} ${from.y} ${bend} ${to.y} ${to.x} ${to.y}`;
}
