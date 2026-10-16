"use client";

import { useState } from "react";

import { ConsolePanel } from "@/components/ConsolePanel";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import type { HeroConsoleProps } from "@/types/hero-console-props";

const FIRST_PANEL = 0;

/**
 * Decorative product shot for the home hero. Hidden from assistive tech,
 * because the sections below make the same points in real text.
 *
 * There is no timer. The progress bar under the active tab is a CSS
 * animation, and the end of that animation moves on to the next panel.
 * Hovering pauses the bar. With reduced motion the bar never animates, so the
 * first panel stays on screen.
 */
export function HeroConsole({
  panels,
  phoneNumber,
  phoneCaption,
}: HeroConsoleProps) {
  const [activeIndex, setActiveIndex] = useState(FIRST_PANEL);

  function showNextPanel() {
    setActiveIndex((current) => (current + 1) % panels.length);
  }

  return (
    <div className="heroConsole" aria-hidden="true">
      <div className="heroConsole__window">
        <div className="heroConsole__chrome">
          <span className="heroConsole__lights">
            <span className="heroConsole__light" />
            <span className="heroConsole__light" />
            <span className="heroConsole__light" />
          </span>
          <span className="heroConsole__live">
            <span className="statusChip__dot" />
            Live
          </span>
        </div>

        <div className="heroConsole__tabs">
          {panels.map((panel, index) => (
            <span
              key={panel.tab}
              className={
                index === activeIndex
                  ? "heroConsole__tab heroConsole__tab--active"
                  : "heroConsole__tab"
              }
            >
              {panel.tab}
              {index === activeIndex ? (
                <span
                  className="heroConsole__progress"
                  onAnimationEnd={showNextPanel}
                />
              ) : null}
            </span>
          ))}
        </div>

        <div className="heroConsole__stage">
          {panels.map((panel, index) => (
            <ConsolePanel
              key={panel.tab}
              panel={panel}
              active={index === activeIndex}
            />
          ))}
        </div>
      </div>

      <div className="heroConsole__number">
        <span className="heroConsole__numberIcon">
          <PhoneIcon className="heroConsole__numberGlyph" />
        </span>
        <span className="heroConsole__numberText">
          <span className="heroConsole__numberValue">{phoneNumber}</span>
          <span className="heroConsole__numberCaption">{phoneCaption}</span>
        </span>
      </div>
    </div>
  );
}
