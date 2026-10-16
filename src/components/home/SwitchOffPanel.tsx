import Link from "next/link";

import { SectionHeading } from "@/components/SectionHeading";
import { StatList } from "@/components/StatList";
import { SwitchOffReceipt } from "@/components/home/SwitchOffReceipt";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { switchOffCopy, switchOffCta, switchOffStats } from "@/content/home";
import { daysRemaining } from "@/lib/switch-off";

export function SwitchOffPanel() {
  const days = daysRemaining();
  const stats = switchOffStats(days);

  return (
    <section className="section" aria-labelledby="switch-off-heading">
      <div className="container">
        <div className="switchOff darkPanel">
          <div className="switchOff__grid">
            <div className="switchOff__text">
              <SectionHeading id="switch-off-heading" copy={switchOffCopy} />
              <Link href="/digital-switchover" className="buttonOnDark">
                {switchOffCta}
                <ArrowUpRightIcon className="button__icon button__icon--arrow" />
              </Link>
            </div>

            <SwitchOffReceipt />
          </div>

          <StatList stats={stats} className="statRow--three switchOff__stats" />
        </div>
      </div>
    </section>
  );
}
