import type { StatusChipProps } from "@/types/status-chip-props";

export function StatusChip({ highlight, detail }: StatusChipProps) {
  return (
    <p className="statusChip">
      <span className="statusChip__dot" aria-hidden="true" />
      <span className="statusChip__strong">{highlight}</span>
      {detail === undefined ? null : (
        <>
          {" "}
          <span aria-hidden="true">·</span> <span>{detail}</span>
        </>
      )}
    </p>
  );
}
