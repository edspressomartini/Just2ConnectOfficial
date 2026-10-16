import { sceneCurve } from "@/lib/scene-curve";
import type { SceneLinkProps } from "@/types/scene-link-props";

/**
 * A line between two cards, drawn underneath them so the cards cover its
 * ends. The track is the line itself; the flow is the moving dashes on top.
 */
export function SceneLink({ from, to, className }: SceneLinkProps) {
  const path = sceneCurve(from, to);

  return (
    <g className={`sceneLink ${className}`}>
      <path className="sceneLink__track" d={path} pathLength={1} />
      <path className="sceneLink__flow" d={path} />
    </g>
  );
}
