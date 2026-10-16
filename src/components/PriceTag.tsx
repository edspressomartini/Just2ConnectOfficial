import type { PriceTagProps } from "@/types/price-tag-props";

/** "From £5.99 a month", with the amount picked out. */
export function PriceTag({ price }: PriceTagProps) {
  return (
    <p className="priceTag">
      From <span className="priceTag__amount">{price.amount}</span>{" "}
      {price.unit}
    </p>
  );
}
