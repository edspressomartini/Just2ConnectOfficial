import { BuildingIcon } from "@/components/icons/BuildingIcon";
import { RouterIcon } from "@/components/icons/RouterIcon";
import { ShieldIcon } from "@/components/icons/ShieldIcon";
import { SceneCanvas } from "@/components/scenes/SceneCanvas";
import { SceneLink } from "@/components/scenes/SceneLink";
import { SceneNode } from "@/components/scenes/SceneNode";
import { broadbandScene } from "@/content/hero-scenes";
import type { ScenePoint } from "@/types/scene-point";

const MAIN_LINE: ScenePoint = { x: 100, y: 62 };
const BACKUP_LINE: ScenePoint = { x: 100, y: 198 };
const OFFICE: ScenePoint = { x: 240, y: 130 };

/** The fibre carries the office, drops, and the backup line takes over. */
export function BroadbandScene() {
  return (
    <SceneCanvas
      className="broadbandScene"
      links={
        <>
          <SceneLink
            from={MAIN_LINE}
            to={OFFICE}
            className="broadbandScene__mainLink"
          />
          <SceneLink
            from={BACKUP_LINE}
            to={OFFICE}
            className="sceneLink--live broadbandScene__backupLink"
          />
        </>
      }
    >
      <SceneNode
        point={MAIN_LINE}
        icon={<RouterIcon className="sceneNode__glyph" />}
        copy={broadbandScene.mainLine}
        className="broadbandScene__main"
        badge="failed"
      />
      <SceneNode
        point={BACKUP_LINE}
        icon={<ShieldIcon className="sceneNode__glyph" />}
        copy={broadbandScene.backupLine}
        className="sceneNode--on broadbandScene__backup"
      />
      <SceneNode
        point={OFFICE}
        icon={<BuildingIcon className="sceneNode__glyph" />}
        copy={broadbandScene.office}
        className="sceneNode--start sceneNode--on broadbandScene__office"
        badge="done"
      />
    </SceneCanvas>
  );
}
