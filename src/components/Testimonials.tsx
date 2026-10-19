import Image from "next/image";

import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/content/testimonials";
import fiveStars from "@/images/icons/FiveStars.svg";
import type { TestimonialsProps } from "@/types/testimonials-props";

/** The line under the name, omitted entirely when we have neither part of it. */
function attributionFor(testimonial: Testimonial): string | undefined {
  if (testimonial.role !== undefined && testimonial.company !== undefined) {
    return `${testimonial.role}, ${testimonial.company}`;
  }

  return testimonial.company ?? testimonial.role;
}

function Attribution({ testimonial }: { readonly testimonial: Testimonial }) {
  const attribution = attributionFor(testimonial);

  return (
    <footer className="testimonial__attribution">
      <div className="testimonial__name">{testimonial.name}</div>
      {attribution === undefined ? null : (
        <div className="testimonial__company">{attribution}</div>
      )}
    </footer>
  );
}

/** Renders the quote with its emphasised fragment marked up. */
function Quote({ testimonial }: { readonly testimonial: Testimonial }) {
  const index = testimonial.quote.indexOf(testimonial.emphasis);

  if (index === -1) {
    return <p className="testimonial__quote">{testimonial.quote}</p>;
  }

  const before = testimonial.quote.slice(0, index);
  const after = testimonial.quote.slice(index + testimonial.emphasis.length);

  return (
    <p className="testimonial__quote">
      {before}
      <mark>{testimonial.emphasis}</mark>
      {after}
    </p>
  );
}

export function Testimonials({ copy }: TestimonialsProps) {
  return (
    <section
      className="section testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <SectionHeading id="testimonials-heading" copy={copy} />
      </div>

      <ul className="testimonialTrack">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name} className="testimonial card">
            <Image
              src={fiveStars}
              alt="Rated five out of five"
              className="testimonial__stars"
              unoptimized
            />

            <blockquote className="testimonial__body">
              <Quote testimonial={testimonial} />
            </blockquote>

            <Attribution testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </section>
  );
}
