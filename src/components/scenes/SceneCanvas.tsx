import { SCENE_HEIGHT, SCENE_WIDTH } from "@/lib/scene-size";
import type { SceneCanvasProps } from "@/types/scene-canvas-props";

const VIEW_BOX = `0 0 ${SCENE_WIDTH} ${SCENE_HEIGHT}`;
const CANVAS_STYLE = { aspectRatio: `${SCENE_WIDTH} / ${SCENE_HEIGHT}` };

/**
 * The board a scene is drawn on: lines in an SVG underneath, cards placed on
 * top at the same coordinates. Decorative, so the caller hides it from
 * assistive tech.
 */
export function SceneCanvas({ className, links, children }: SceneCanvasProps) {
  return (
    <div className={`sceneCanvas ${className}`} style={CANVAS_STYLE}>
      <svg
        className="sceneCanvas__links"
        viewBox={VIEW_BOX}
        aria-hidden="true"
        focusable="false"
      >
        {links}
      </svg>
      {children}
    </div>
  );
}
