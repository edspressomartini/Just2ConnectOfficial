import { PhoneIcon } from "@/components/icons/PhoneIcon";
import type { RouteDiagramProps } from "@/types/route-diagram-props";

/**
 * One number fanning out to every device it rings on. Decorative: the card
 * text beside it makes the same point in words.
 */
export function RouteDiagram({ phoneNumber, routes }: RouteDiagramProps) {
  return (
    <div className="routeDiagram" aria-hidden="true">
      <span className="routeDiagram__source">
        <PhoneIcon className="routeDiagram__icon" />
        {phoneNumber}
      </span>
      <ul className="routeDiagram__targets">
        {routes.map((route) => (
          <li key={route} className="routeDiagram__target">
            <span className="routeDiagram__dot" />
            {route}
          </li>
        ))}
      </ul>
    </div>
  );
}
