import { HeadsetIcon } from "@/components/icons/HeadsetIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { VanIcon } from "@/components/icons/VanIcon";
import { SceneCanvas } from "@/components/scenes/SceneCanvas";
import { SceneLink } from "@/components/scenes/SceneLink";
import { SceneNode } from "@/components/scenes/SceneNode";
import { supportScene } from "@/content/hero-scenes";
import type { ScenePoint } from "@/types/scene-point";

const CALLER: ScenePoint = { x: 92, y: 130 };
const PERSON: ScenePoint = { x: 222, y: 62 };
const ENGINEER: ScenePoint = { x: 222, y: 198 };
/** Roughly the middle of a card's icon, measured from its left edge. */
const ICON_INSET = 23;
const PERSON_ICON: ScenePoint = { x: PERSON.x + ICON_INSET, y: PERSON.y };
const ENGINEER_ICON: ScenePoint = {
  x: ENGINEER.x + ICON_INSET,
  y: ENGINEER.y,
};

/** A call for help reaches a person, who sends an engineer out. */
export function SupportScene() {
  return (
    <SceneCanvas
      className="supportScene"
      links={
        <>
          <SceneLink
            from={CALLER}
            to={PERSON}
            className="sceneLink--live supportScene__callLink"
          />
          <SceneLink
            from={PERSON_ICON}
            to={ENGINEER_ICON}
            className="sceneLink--live supportScene__visitLink"
          />
        </>
      }
    >
      <SceneNode
        point={CALLER}
        icon={<PhoneIcon className="sceneNode__glyph" />}
        copy={supportScene.caller}
        className="sceneNode--on"
      />
      <SceneNode
        point={PERSON}
        icon={<HeadsetIcon className="sceneNode__glyph" />}
        copy={supportScene.person}
        className="sceneNode--start sceneNode--on supportScene__person"
        badge="done"
      />
      <SceneNode
        point={ENGINEER}
        icon={<VanIcon className="sceneNode__glyph" />}
        copy={supportScene.engineer}
        className="sceneNode--start sceneNode--on supportScene__engineer"
        badge="done"
      />
    </SceneCanvas>
  );
}
