import PlaceholderLink from "./PlaceholderLink";
import { ButtonArrow } from "./Icons";

export default function GetStartedCta() {
  return (
    <section className="o-call-to-action o-call-to-action--bg-none">
      <div className="o-call-to-action__container u-container">
        <div className="o-call-to-action__wrapper">
          <div className="o-call-to-action__content m-content m-content--left">
            <h2 className="m-content__heading u-h2">Ready to Get Started with ABA Therapy Today?</h2>
            <div className="m-content__body u-b2  m-wysiwyg">
              <p>Ready to take the next step? We’re here to help. Whether you’re looking to learn more about ABA therapy services or you are ready to get started, our team is here to support you every step of the way.</p>
            </div>
            <div className="m-content__buttons">
              <PlaceholderLink className="m-content__button a-button a-button--primary">
                <span className="a-button__text">Find A Location Near You</span>
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
