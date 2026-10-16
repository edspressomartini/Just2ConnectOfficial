import type { ComponentType, ReactNode } from "react";

import { CheckIcon } from "@/components/icons/CheckIcon";
import { CrossIcon } from "@/components/icons/CrossIcon";
import { scenePosition } from "@/lib/scene-position";
import type { IconProps } from "@/types/icon-props";
import type { SceneBadge } from "@/types/scene-badge";
import type { SceneNodeProps } from "@/types/scene-node-props";

const BADGE_ICONS: Readonly<Record<SceneBadge, ComponentType<IconProps>>> = {
  done: CheckIcon,
  failed: CrossIcon,
};

function renderBadge(badge: SceneBadge | undefined): ReactNode {
  if (badge === undefined) {
    return null;
  }

  const BadgeIcon = BADGE_ICONS[badge];
  return (
    <span className={`sceneNode__badge sceneNode__badge--${badge}`}>
      <BadgeIcon className="sceneNode__badgeIcon" />
    </span>
  );
}

export function SceneNode({
  point,
  icon,
  copy,
  className,
  badge,
}: SceneNodeProps) {
  return (
    <div className={`sceneNode ${className}`} style={scenePosition(point)}>
      <span className="sceneNode__icon">{icon}</span>
      <span className="sceneNode__text">
        <span className="sceneNode__label">{copy.label}</span>
        <span className="sceneNode__detail">{copy.detail}</span>
      </span>
      {renderBadge(badge)}
    </div>
  );
}
