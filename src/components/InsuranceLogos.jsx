import PlaceholderLink from "./PlaceholderLink";
import { ButtonArrow } from "./Icons";

export default function InsuranceLogos() {
  return (
    <section id="" className="o-featured-logos o-featured-logos--size-normal o-featured-logos--layout-centered">
      <div className="o-featured-logos__container u-container">
        <h2 className="o-featured-logos__heading u-h3">We accept most major insurance providers.</h2>
        <div className="o-featured-logos__grid">
          <div className="o-featured-logos__logo">
            <img className="a-image" src="/images/home/bluecross-200x98.png" alt="BlueCross BlueShield logo" />
            <h3 className="o-featured-logos__logo-title">BlueCross BlueShield</h3>
          </div>
          <div className="o-featured-logos__logo">
            <img className="a-image" src="/images/home/597924957-insurancelogo_aetna-200x98.png" alt="" />
            <h3 className="o-featured-logos__logo-title">Aetna</h3>
          </div>
          <div className="o-featured-logos__logo">
            <img className="a-image" src="/images/home/Anthem-insurance.svg" alt="" />
            <h3 className="o-featured-logos__logo-title">Anthem</h3>
          </div>
          <div className="o-featured-logos__logo">
            <img className="a-image" src="/images/home/597925562-insurancelogo_cigna-200x98.png" alt="" />
            <h3 className="o-featured-logos__logo-title">Cigna</h3>
          </div>
        </div>
        <PlaceholderLink className="o-featured-logos__button a-button a-button--primary">
          <span className="a-button__text">Explore Full List</span>
          <span className="a-button__arrow">
            <ButtonArrow />
          </span>
        </PlaceholderLink>
      </div>
    </section>
  );
}
