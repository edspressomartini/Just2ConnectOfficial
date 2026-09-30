import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import type { ContentBlock } from "@/types/content-block";
import type { ServiceFaq } from "@/types/service-content";

function AnswerBlock({ block }: { readonly block: ContentBlock }) {
  if (block.kind === "list") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p>{block.text}</p>;
}

export interface FaqProps {
  readonly items: readonly ServiceFaq[];
  readonly title?: string;
}

/**
 * Native `<details>` disclosure. Replaces the Material UI accordion: it works
 * without JavaScript and is keyboard accessible by default.
 */
export function Faq({ items, title = "FAQ" }: FaqProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="faqSection" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="sectionTitle">
        {title}
      </h2>

      <div className="faqList">
        {items.map((item) => (
          <details key={item.question} className="faqItem">
            <summary className="faqItem__question">
              {item.question}
              <ChevronDownIcon className="faqItem__chevron" />
            </summary>
            <div className="faqItem__answer">
              {item.answer.map((block, index) => (
                <AnswerBlock
                  key={block.kind === "list" ? `list-${index}` : block.text}
                  block={block}
                />
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
