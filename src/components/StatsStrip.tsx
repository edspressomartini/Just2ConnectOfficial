import { StatList } from "@/components/StatList";
import { stats } from "@/content/credentials";

export function StatsStrip() {
  return (
    <section className="statsStrip" aria-label="Just2Connect at a glance">
      <div className="container">
        <StatList stats={stats()} />
      </div>
    </section>
  );
}
