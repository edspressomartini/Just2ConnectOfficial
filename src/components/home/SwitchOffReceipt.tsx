import { ConsoleStatus } from "@/components/ConsoleStatus";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { switchOffReceipt } from "@/content/home";

/** Illustrated before-and-after card. Decorative: the heading says the same. */
export function SwitchOffReceipt() {
  return (
    <div className="switchReceipt" aria-hidden="true">
      <p className="switchReceipt__title">{switchOffReceipt.title}</p>

      <div className="switchReceipt__move">
        <span className="switchReceipt__from">{switchOffReceipt.from}</span>
        <ArrowUpRightIcon className="switchReceipt__arrow" />
        <span className="switchReceipt__to">{switchOffReceipt.to}</span>
      </div>

      <div className="switchReceipt__row">
        <span className="switchReceipt__label">
          {switchOffReceipt.numberLabel}
        </span>
        <ConsoleStatus status={switchOffReceipt.numberStatus} tone="done" />
      </div>

      <p className="switchReceipt__ready">
        <CheckIcon className="switchReceipt__readyIcon" />
        {switchOffReceipt.ready}
      </p>
    </div>
  );
}
