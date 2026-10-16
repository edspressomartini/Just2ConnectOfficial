import type { StatListProps } from "@/types/stat-list-props";

/** Large-number statistics. The label leads in the DOM because `dt` precedes `dd`. */
export function StatList({ stats, className }: StatListProps) {
  return (
    <dl className={className === undefined ? "statRow" : `statRow ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="statRow__item">
          <dt className="statRow__label">{stat.label}</dt>
          <dd className="statRow__value">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
