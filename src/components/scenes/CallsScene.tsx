import { DeskPhoneIcon } from "@/components/icons/DeskPhoneIcon";
import { LaptopIcon } from "@/components/icons/LaptopIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { SmartphoneIcon } from "@/components/icons/SmartphoneIcon";
import { SceneCanvas } from "@/components/scenes/SceneCanvas";
import { SceneLink } from "@/components/scenes/SceneLink";
import { SceneNode } from "@/components/scenes/SceneNode";
import { callsScene } from "@/content/hero-scenes";
import type { ScenePoint } from "@/types/scene-point";

const CALLER: ScenePoint = { x: 92, y: 130 };
const DESK_PHONE: ScenePoint = { x: 222, y: 48 };
const MOBILE: ScenePoint = { x: 222, y: 130 };
const LAPTOP: ScenePoint = { x: 222, y: 212 };

/** A call rings every device at once, then the desk phone picks it up. */
export function CallsScene() {
  return (
    <SceneCanvas
      className="callsScene"
      links={
        <>
          <SceneLink
            from={CALLER}
            to={DESK_PHONE}
            className="sceneLink--live callsScene__answeredLink"
          />
          <SceneLink
            from={CALLER}
            to={MOBILE}
            className="callsScene__ringLink"
          />
          <SceneLink
            from={CALLER}
            to={LAPTOP}
            className="callsScene__ringLink"
          />
        </>
      }
    >
      <SceneNode
        point={CALLER}
        icon={<PhoneIcon className="sceneNode__glyph" />}
        copy={callsScene.caller}
        className="sceneNode--on"
      />
      <SceneNode
        point={DESK_PHONE}
        icon={<DeskPhoneIcon className="sceneNode__glyph" />}
        copy={callsScene.deskPhone}
        className="sceneNode--start sceneNode--on callsScene__device callsScene__deskPhone"
        badge="done"
      />
      <SceneNode
        point={MOBILE}
        icon={<SmartphoneIcon className="sceneNode__glyph" />}
        copy={callsScene.mobile}
        className="sceneNode--start callsScene__device callsScene__mobile"
      />
      <SceneNode
        point={LAPTOP}
        icon={<LaptopIcon className="sceneNode__glyph" />}
        copy={callsScene.laptop}
        className="sceneNode--start callsScene__device callsScene__laptop"
      />
    </SceneCanvas>
  );
}
