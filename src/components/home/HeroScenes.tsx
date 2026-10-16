"use client";

import { useState } from "react";

import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { BroadbandScene } from "@/components/scenes/BroadbandScene";
import { CallsScene } from "@/components/scenes/CallsScene";
import { SupportScene } from "@/components/scenes/SupportScene";
import {
  broadbandScene,
  callsScene,
  supportScene,
} from "@/content/hero-scenes";
import type { HeroScene } from "@/types/hero-scene";
import type { HeroScenesProps } from "@/types/hero-scenes-props";

const SCENES: readonly HeroScene[] = [
  { caption: callsScene.caption, Drawing: CallsScene },
  { caption: broadbandScene.caption, Drawing: BroadbandScene },
  { caption: supportScene.caption, Drawing: SupportScene },
];

const FIRST_SCENE = 0;

function stepClassName(index: number, activeIndex: number): string {
  if (index < activeIndex) {
    return "heroScenes__step heroScenes__step--done";
  }

  return "heroScenes__step";
}

/**
 * Decorative drawings of what each service does, for the home hero. Hidden
 * from assistive tech, because the sections below make the same points in
 * real text.
 *
 * There is no timer. The bar filling beside the caption is a CSS animation,
 * and the end of that animation moves on to the next scene. Hovering pauses
 * the bar. With reduced motion the bar never animates, so the first scene
 * stays on screen, drawn in its finished state.
 */
export function HeroScenes({ phoneNumber, phoneCaption }: HeroScenesProps) {
  const [activeIndex, setActiveIndex] = useState(FIRST_SCENE);
  const activeScene = SCENES[activeIndex];

  function showNextScene() {
    setActiveIndex((current) => (current + 1) % SCENES.length);
  }

  if (activeScene === undefined) {
    return null;
  }

  return (
    <div className="heroScenes" aria-hidden="true">
      <div className="heroScenes__plate">
        <div className="heroScenes__head">
          <div className="heroScenes__captions">
            {SCENES.map((scene, index) => (
              <p
                key={scene.caption.label}
                className={
                  index === activeIndex
                    ? "heroScenes__caption heroScenes__caption--active"
                    : "heroScenes__caption"
                }
              >
                <span className="heroScenes__label">{scene.caption.label}</span>
                <span className="heroScenes__title">{scene.caption.title}</span>
              </p>
            ))}
          </div>

          <span className="heroScenes__steps">
            {SCENES.map((scene, index) => (
              <span
                key={scene.caption.label}
                className={stepClassName(index, activeIndex)}
              >
                {index === activeIndex ? (
                  <span
                    className="heroScenes__fill"
                    onAnimationEnd={showNextScene}
                  />
                ) : null}
              </span>
            ))}
          </span>
        </div>

        <activeScene.Drawing key={activeIndex} />
      </div>

      <div className="heroScenes__number">
        <span className="heroScenes__numberIcon">
          <PhoneIcon className="heroScenes__numberGlyph" />
        </span>
        <span className="heroScenes__numberText">
          <span className="heroScenes__numberValue">{phoneNumber}</span>
          <span className="heroScenes__numberCaption">{phoneCaption}</span>
        </span>
      </div>
    </div>
  );
}
