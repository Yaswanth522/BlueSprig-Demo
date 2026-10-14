import PlaceholderLink from "./PlaceholderLink";
import { ButtonArrow } from "./Icons";

export default function AbaIntroCta() {
  return (
    <section className="o-call-to-action o-call-to-action--bg-none">
      <div className="o-call-to-action__container u-container">
        <div className="o-call-to-action__wrapper">
          <div className="o-call-to-action__content m-content m-content--left m-content--heading-only">
            <h2 className="m-content__heading u-h2">Applied Behavior Analysis (ABA) is the most notable behavioral intervention for individuals with Autism Spectrum Disorder.</h2>
            <div className="m-content__buttons">
              <PlaceholderLink className="m-content__button a-button a-button--primary">
                <span className="a-button__text">About ABA Therapy</span>
                <span className="a-button__arrow">
                  <ButtonArrow />
                </span>
              </PlaceholderLink>
              <PlaceholderLink className="m-content__button a-button a-button--secondary">
                <span className="a-button__text">Services</span>
                <span className="a-button__arrow">
                  <ButtonArrow />
                </span>
              </PlaceholderLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
