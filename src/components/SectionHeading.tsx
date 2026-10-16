import type { SectionHeadingAlign } from "@/types/section-heading-align";
import type { SectionHeadingProps } from "@/types/section-heading-props";

const CLASS_BY_ALIGN: { readonly [K in SectionHeadingAlign]: string } = {
  start: "sectionHead reveal",
  center: "sectionHead sectionHead--center reveal",
};

export function SectionHeading({
  id,
  copy,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div className={CLASS_BY_ALIGN[align]}>
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2 id={id} className="sectionHeading">
        {copy.lead}
        {copy.accent === undefined ? null : (
          <>
            {" "}
            <span className="sectionHeading__accent">{copy.accent}</span>
          </>
        )}
      </h2>
      {copy.intro === undefined ? null : (
        <p className="sectionIntro">{copy.intro}</p>
      )}
    </div>
  );
}
