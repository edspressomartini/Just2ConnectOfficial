import type { HeroChipProps } from "@/types/hero-chip-props";

export function HeroChip({ highlight, detail }: HeroChipProps) {
  return (
    <p className="heroChip">
      <span className="heroChip__strong">{highlight}</span>
      {detail === undefined ? null : (
        <>
          {" "}
          <span aria-hidden="true">·</span> <span>{detail}</span>
        </>
      )}
    </p>
  );
}
