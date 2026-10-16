import type { ReactNode } from "react";

export interface SceneCanvasProps {
  readonly className: string;
  /** `SceneLink`s, drawn underneath the cards. */
  readonly links: ReactNode;
  readonly children: ReactNode;
}
