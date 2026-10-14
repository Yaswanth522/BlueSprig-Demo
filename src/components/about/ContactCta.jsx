import PlaceholderLink from "../PlaceholderLink";
import { ButtonArrow } from "../Icons";

export default function ContactCta() {
  return (
    <section className="o-call-to-action o-call-to-action--bg-none">
      <div className="o-call-to-action__container u-container">
        <div className="o-call-to-action__wrapper">
          <div className="o-call-to-action__content m-content m-content--left">
            <h2 className="m-content__heading u-h2">Contact BlueSprig Today</h2>
            <div className="m-content__body u-b2  m-wysiwyg">
              <p>At BlueSprig, our ABA therapy providers make it convenient to receive services that best suit your child’s needs. Our expert staff is available to provide services for as many hours per week as needed to support your child as they grow.</p>
            </div>
            <div className="m-content__buttons">
              <PlaceholderLink className="m-content__button a-button a-button--primary">
                <span className="a-button__text">Find ABA Therapy Near Me</span>
                {" "}
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
