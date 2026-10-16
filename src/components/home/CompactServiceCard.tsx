import Link from "next/link";

import { PriceTag } from "@/components/PriceTag";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import type { CompactServiceCardProps } from "@/types/compact-service-card-props";

export function CompactServiceCard({ card }: CompactServiceCardProps) {
  const Icon = card.icon;
  const price = card.service.fromPrice;

  return (
    <li className="bentoCard card reveal">
      <div className="bentoCard__top">
        <span className="bentoCard__icon">
          <Icon className="bentoCard__iconGlyph" />
        </span>
        <span className="arrowCircle" aria-hidden="true">
          <ArrowUpRightIcon className="arrowCircle__icon" />
        </span>
      </div>
      <h3 className="bentoCard__title">
        <Link href={`/${card.service.slug}`} className="stretchedLink">
          {card.title}
        </Link>
      </h3>
      <p className="bentoCard__text">{card.description}</p>
      {price === undefined ? null : <PriceTag price={price} />}
    </li>
  );
}
