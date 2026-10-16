import { ConsoleStatus } from "@/components/ConsoleStatus";
import { PriceTag } from "@/components/PriceTag";
import type { ConsolePanelProps } from "@/types/console-panel-props";

export function ConsolePanel({ panel, active }: ConsolePanelProps) {
  return (
    <div
      className={active ? "consolePanel consolePanel--active" : "consolePanel"}
    >
      <p className="consolePanel__title">{panel.title}</p>

      <ul className="consolePanel__rows">
        {panel.rows.map((row) => (
          <li key={row.label} className="consolePanel__row">
            <span className="consolePanel__rowText">
              <span className="consolePanel__label">{row.label}</span>
              <span className="consolePanel__detail">{row.detail}</span>
            </span>
            <ConsoleStatus status={row.status} tone={row.tone} />
          </li>
        ))}
      </ul>

      <div className="consolePanel__foot">
        <p className="consolePanel__footnote">{panel.footnote}</p>
        {panel.price === undefined ? null : <PriceTag price={panel.price} />}
      </div>
    </div>
  );
}
