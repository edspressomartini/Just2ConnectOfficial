export interface Testimonial {
  readonly quote: string;
  /** Fragment of `quote` to render in the accent colour. */
  readonly emphasis: string;
  readonly name: string;
  /*
   * Optional, because the reviews taken from the Google Business Profile carry
   * only a reviewer name. The companies were confirmed by Terry afterwards;
   * the job titles were not, so those stay off rather than being guessed at.
   */
  readonly role?: string;
  readonly company?: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Fantastic company to work with. Terry and his team have been exceptional throughout our migration to a new phone system, guiding us through both the planning and implementation stages with expertise and professionalism.",
    emphasis: "exceptional throughout our migration",
    name: "David Pinkham",
    company: "Pinkham Blair",
  },
  {
    quote:
      "The best decision we made was transferring to Just2Connect. The service provided from start to finish has been exceptional and continues to be so with the after care.",
    emphasis: "The best decision we made",
    name: "Lesley Baker",
    company: "Heirs & Graces",
  },
  {
    quote:
      "It was the best thing we ever did! Terry and his team offer a first-class service - highly recommend them",
    emphasis: "best thing we ever did!",
    name: "Jackie Steadman",
    role: "Founder",
    company: "TravelTimeWorld",
  },
  {
    quote:
      "I have used the services of Just2Connect for several years and in that time I have always experienced excellent customer service, as well as responsive and supportive communications. Terry and his team consistently go over and above to ensure we are fully connected.",
    emphasis: "go over and above",
    name: "Emma Power",
    company: "Sunnyside Rural Trust",
  },
  {
    quote:
      "Terry Martin is the epitome of great service who goes out of his way to make sure everything is first rate. Use him. You will not be disappointed",
    emphasis: "the epitome of great service",
    name: "Bryan Wright",
    role: "Director",
    company: "Yellowyoyo",
  },
  {
    quote:
      "Just2Connect is an excellent supplier of VoIP and internet services. Terry is extremely professional, knowledgeable and reliable, and the level of service provided is consistently very high.",
    emphasis: "professional, knowledgeable and reliable",
    name: "Yaniv Monfort",
    company: "FNS Ltd",
  },
  {
    quote:
      "Excellent service, always helpful and on hand should we require assistance. Highly recommended.",
    emphasis: "always helpful and on hand",
    name: "Michelle Lee",
    company: "EIC Insurance",
  },
  {
    quote:
      "Amazing and excellent are just not enough to describe the level of service received from this company - and fantastic value",
    emphasis: "fantastic value",
    name: "Chris Davy",
    role: "Owner",
    company: "Davy Associates",
  },
  {
    quote:
      "Reliable, responsive and helpful for my business needs. I would highly recommend them to anyone",
    emphasis: "Reliable, responsive and helpful",
    name: "David Green",
    role: "Owner",
    company: "Greens Of Berkhamsted",
  },
  {
    quote: "Very helpful and a pleasure to deal with",
    emphasis: "pleasure to deal with",
    name: "Jamie Rankin",
    role: "CEO",
    company: "Micklefield Hall",
  },
];
