import PlaceholderLink from "./PlaceholderLink";
import { ButtonArrow } from "./Icons";
import useSnapSlider from "../utils/useSnapSlider";

const REASONS = [
  "We create individualized plans for family guidance that best meets the needs of the family and the child.",
  "We believe that coordinating care with a client’s treatment team will create the best outcomes for our clients.",
  "We participate in research that enhances the effectiveness of our field so all children with autism can achieve greater outcomes.",
];

// Each entry is a list of paragraphs. The first keeps the empty trailing
// paragraph it has on the live site, which affects its vertical spacing.
const TESTIMONIALS = [
  ["“The staff was extremely helpful and caring. I will definitely refer BlueSprig to family and friends. They helped my son set and achieve goals and reach milestones. Thank you to all the excellent staff.”", "\u00a0"],
  ["“We had a wonderful experience with BlueSprig and loved all of the staff that worked with us.”"],
  ["“The entire staff at the Westchase center are absolute angels. I don’t know where we would be without all their guidance and support. You can see how much they care for every single kiddo that attends. We are so grateful for everything they’ve done for our son.”"],
  ["“Our family will be grateful to the wonderful caring staff at BlueSprig Stafford.”"],
  ["“Every staff at this location is so lovable and they really take their job seriously in order to provide the child the therapy that they need!!! I love all the staff here and we will miss them”"],
  ["“We had a wonderful experience with BlueSprig. They helped my child so much. We were sad to go.”"],
  ["“The staff were so supportive, professional, and helpful at a very challenging time for our family. I’m so grateful that we made the choice to go with BlueSprig. All our questions were answered, behaviors improved significantly and my daughter is doing very well in pre-k. Thank you so much BlueSprig.”"],
  ["“We are gonna miss this place. The staff is amazing and is truly helping these kids for the better.”"],
];

export default function ReasonsAndTestimonials() {
  const { listRef, current, handleScroll, prev, next } = useSnapSlider(TESTIMONIALS.length, { loop: true });

  return (
    <section id="testimonials" className="o-reasons-and-testimonials">
      <div className="o-reasons-and-testimonials__container u-container">
        <div className="o-reasons-and-testimonials__reasons-wrapper">
          <h2 className="o-reasons-and-testimonials__heading u-h2">Why Choose BlueSprig?</h2>
          <ul className="o-reasons-and-testimonials__reasons">
            {REASONS.map((reason) => (
              <li key={reason} className="o-reasons-and-testimonials__reason">
                {reason}
              </li>
            ))}
          </ul>
          <PlaceholderLink className="o-reasons-and-testimonials__button a-button">
            <span className="a-button__text">About Us</span>
            <span className="a-button__arrow">
              <ButtonArrow />
            </span>
          </PlaceholderLink>
        </div>
        <div className="o-reasons-and-testimonials__testimonials-wrapper">
          <div className="o-reasons-and-testimonials__testimonials m-testimonials-slider">
            <div className="enhanced-css-slider">
              <ul className="m-testimonials-slider__list" ref={listRef} onScroll={handleScroll}>
                {TESTIMONIALS.map((paragraphs) => (
                  <li key={paragraphs[0]} className="m-testimonials-slider__item">
                    <div className="m-testimonials-slider__testimonial">
                      <div className="m-testimonials-slider__testimonial__content ">
                        <div className="m-wysiwyg">
                          {paragraphs.map((text, i) => (
                            <p key={i}>{text}</p>
                          ))}
                        </div>
                      </div>
                      <div className="m-testimonials-slider__testimonial__author">Anonymous Family</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="m-testimonials-slider__navigation m-slider-navigation">
                <button
                  className="m-slider-navigation__arrow prev a-arrow-button a-arrow-button--left"
                  type="button"
                  aria-label="Previous"
                  onClick={prev}
                >
                  <span className="a-arrow-button__arrow">
                    <ButtonArrow />
                  </span>
                </button>
                <div className="m-slider-navigation__pagination">
                  <span className="current">{current + 1}</span>{" "}
                  <span className="total">of {TESTIMONIALS.length}</span>
                </div>
                <button
                  className="m-slider-navigation__arrow next a-arrow-button"
                  type="button"
                  aria-label="Next"
                  onClick={next}
                >
                  <span className="a-arrow-button__arrow">
                    <ButtonArrow />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <p className="o-reasons-and-testimonials__disclaimer u-b3">
            Testimonials were unsolicited from families no longer receiving services in accordance with the BACB Code of Ethics
          </p>
        </div>
      </div>
    </section>
  );
}
