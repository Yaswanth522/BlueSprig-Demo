import PlaceholderLink from "../PlaceholderLink";
import { ButtonArrow } from "../Icons";
import useSnapSlider from "../../utils/useSnapSlider";

const PROGRAM_COUNT = 3;

export default function ProgramCardsSlider() {
  const { listRef, current, handleScroll, prev, next, atStart, atEnd } = useSnapSlider(PROGRAM_COUNT);
  const arrowClass = (disabled) => (disabled ? " a-arrow-button--disabled" : "");

  return (
    <section className="o-featured-cards-slider">
      <div className="o-featured-cards-slider__container u-container">
        <div className="o-featured-cards-slider__wrapper">
          <div className="o-featured-cards-slider__content m-content m-content--left">
            <h2 className="m-content__heading u-h3">Personalized Treatment that Grows with Your Child</h2>
            <div className="m-content__body u-b2  m-wysiwyg">
              <p>We provide collaborative ABA therapy that supports your whole family. After your child’s assessment, their provider will work with you to create a personal treatment plan based on your child’s strengths and goals. ABA is not a one-size-fits-all treatment. Each plan is tailored to the child and family. As your child grows, our programs adjust as clinically appropriate, offering support from early intervention through the teenage years.</p>
            </div>
          </div>
          <div className="o-featured-cards-slider__slider-wrapper">
            <div className="o-featured-cards-slider__fade" aria-hidden="true" />
            <div className="enhanced-css-slider">
              <ul className="o-featured-cards-slider__slider" ref={listRef} onScroll={handleScroll}>
                <li className="o-featured-cards-slider__item">
                  <article className="o-featured-cards-slider__card m-program-card">
                    <div className="m-program-card__content m-content m-content--left m-content--heading-only">
                      <h3 className="m-content__heading u-h7">Early Intervention ABA Therapy</h3>
                    </div>
                    <div className="m-program-card__image">
                      <img src="/images/about/BlueSprig_Group-Session-Images_1.4.1-1_crop-1024x576.jpg" alt="" />
                      <PlaceholderLink className="m-program-card__button a-button a-button--small">
                        <span className="a-button__text">Learn More</span>
                        {" "}
                        <span className="a-button__arrow">
                          <ButtonArrow />
                        </span>
                      </PlaceholderLink>
                    </div>
                  </article>
                </li>
                <li className="o-featured-cards-slider__item">
                  <article className="o-featured-cards-slider__card m-program-card">
                    <div className="m-program-card__content m-content m-content--left m-content--heading-only">
                      <h3 className="m-content__heading u-h7">Intervention for Adolescents</h3>
                    </div>
                    <div className="m-program-card__image">
                      <img src="/images/about/Intervention-for-Adolescents-with-Autism-banner-image-e1715095788925-1024x579.jpg" alt="" />
                      <PlaceholderLink className="m-program-card__button a-button a-button--small">
                        <span className="a-button__text">Learn More</span>
                        {" "}
                        <span className="a-button__arrow">
                          <ButtonArrow />
                        </span>
                      </PlaceholderLink>
                    </div>
                  </article>
                </li>
                <li className="o-featured-cards-slider__item">
                  <article className="o-featured-cards-slider__card m-program-card">
                    <div className="m-program-card__content m-content m-content--left m-content--heading-only">
                      <h3 className="m-content__heading u-h7">Specialty Services</h3>
                    </div>
                    <div className="m-program-card__image">
                      <img src="/images/about/2023-Video-Series_Still-33-crop-1024x732.jpg" alt="" />
                      <PlaceholderLink className="m-program-card__button a-button a-button--small">
                        <span className="a-button__text">Learn More</span>
                        {" "}
                        <span className="a-button__arrow">
                          <ButtonArrow />
                        </span>
                      </PlaceholderLink>
                    </div>
                  </article>
                </li>
              </ul>
              <div className="o-featured-cards-slider__navigation m-slider-navigation">
                <button
                  className={`m-slider-navigation__arrow prev a-arrow-button${arrowClass(atStart)} a-arrow-button--left`}
                  type="button"
                  aria-label="Previous"
                  disabled={atStart}
                  onClick={prev}
                >
                  <span className="a-arrow-button__arrow">
                    <ButtonArrow />
                  </span>
                </button>
                <div className="m-slider-navigation__pagination">
                  <span className="current">{current + 1}</span>{" "}
                  <span className="total">of {PROGRAM_COUNT}</span>
                </div>
                <button
                  className={`m-slider-navigation__arrow next a-arrow-button${arrowClass(atEnd)}`}
                  type="button"
                  aria-label="Next"
                  disabled={atEnd}
                  onClick={next}
                >
                  <span className="a-arrow-button__arrow">
                    <ButtonArrow />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
