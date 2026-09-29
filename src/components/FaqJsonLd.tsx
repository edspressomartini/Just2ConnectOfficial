import type { FaqBlock, ServiceFaq } from "@/types/service-content";

/** Flattens an answer into the single plain-text string schema.org expects. */
function answerText(blocks: readonly FaqBlock[]): string {
  return blocks
    .map((block) =>
      block.kind === "list" ? block.items.join(". ") : block.text,
    )
    .join(" ");
}

export interface FaqJsonLdProps {
  readonly items: readonly ServiceFaq[];
}

/**
 * FAQPage structured data. Google no longer shows FAQ rich results for most
 * sites, but the markup still helps it read the page as an answer to a
 * question, which is what people actually search here.
 */
export function FaqJsonLd({ items }: FaqJsonLdProps) {
  if (items.length === 0) {
    return null;
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerText(item.answer),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
