import { CheckIcon } from "@/components/icons/CheckIcon";
import type { ConsoleStatusProps } from "@/types/console-status-props";
import type { ConsoleTone } from "@/types/console-tone";

const CLASS_BY_TONE: { readonly [K in ConsoleTone]: string } = {
  live: "consoleStatus consoleStatus--live",
  idle: "consoleStatus consoleStatus--idle",
  done: "consoleStatus consoleStatus--done",
};

export function ConsoleStatus({ status, tone }: ConsoleStatusProps) {
  return (
    <span className={CLASS_BY_TONE[tone]}>
      {tone === "done" ? (
        <CheckIcon className="consoleStatus__icon" />
      ) : (
        <span className="consoleStatus__dot" />
      )}
      {status}
    </span>
  );
}
