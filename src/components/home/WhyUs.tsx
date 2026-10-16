import { SectionHeading } from "@/components/SectionHeading";
import { homeBenefits, whyUsCopy } from "@/content/home";
import type { TintTone } from "@/types/tint-tone";

const CLASS_BY_TINT: { readonly [K in TintTone]: string } = {
  pink: "whyCard tintCard tintCard--pink reveal",
  navy: "whyCard tintCard tintCard--navy reveal",
  green: "whyCard tintCard tintCard--green reveal",
  plain: "whyCard tintCard reveal",
};

export function WhyUs() {
  return (
    <section className="section whyUs" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading id="why-heading" copy={whyUsCopy} />

        <ul className="whyGrid">
          {homeBenefits.map((benefit) => (
            <li key={benefit.title} className={CLASS_BY_TINT[benefit.tint]}>
              <span className="badge">{benefit.badge}</span>
              <h3 className="whyCard__title">{benefit.title}</h3>
              <p className="whyCard__text">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
