import { SectionHeading } from "@/components/SectionHeading";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { credentials } from "@/content/credentials";
import type { CredentialsProps } from "@/types/credentials-props";
import type { SectionCopy } from "@/types/section-copy";

const DEFAULT_COPY: SectionCopy = {
  eyebrow: "Credentials",
  lead: "Why businesses stay with us",
};

export function Credentials({ copy = DEFAULT_COPY }: CredentialsProps) {
  return (
    <section
      className="section credentials"
      aria-labelledby="credentials-heading"
    >
      <div className="container credentials__layout">
        <SectionHeading id="credentials-heading" copy={copy} />

        <ul className="credentialList">
          {credentials.map((item) => (
            <li key={item.title} className="credentialRow reveal">
              <div className="credentialRow__text">
                <h3 className="credentialRow__title">{item.title}</h3>
                <p className="credentialRow__detail">{item.detail}</p>
              </div>
              {item.badge === undefined ? null : (
                <span className="badge badge--green credentialRow__badge">
                  <CheckIcon className="badge__icon" />
                  {item.badge}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
