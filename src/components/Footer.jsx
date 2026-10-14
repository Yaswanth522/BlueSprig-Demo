import PlaceholderLink from "./PlaceholderLink";
import { ButtonArrow } from "./Icons";

export default function Footer() {
  return (
    <footer className="o-footer" style={{"viewTransitionName": "site-footer"}}>
      <div className="o-footer__top">
        <div className="o-footer__top-container u-container">
          <div className="o-footer__content m-footer-content">
            <div className="m-footer-content__cta">
              <h2 className="m-footer-content__cta-heading u-h3">Helping those with autism, their families, and those who care for them live their best lives.</h2>
              <PlaceholderLink className="m-footer-content__cta-button a-button">
                <span className="a-button__text">Find ABA Therapy Near Me</span>
                <span className="a-button__arrow">
                  <ButtonArrow />
                </span>
              </PlaceholderLink>
            </div>
            <div className="m-footer-content__address m-wysiwyg">
              <p>
                300 International Parkway
                <br />
                Ste 200
                <br />
                Lake Mary, FL 32746
              </p>
            </div>
            <ul className="m-footer-content__socials">
              <li className="m-footer-content__social">
                <PlaceholderLink className="m-footer-content__social-icon a-icon-button">
                  <i className="a-icon-button__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7.498" height="14" viewBox="0 0 7.498 14">
                      <path d="M8.616,7.875l.389-2.534H6.574V3.7A1.267,1.267,0,0,1,8,2.328H9.108V.171A13.478,13.478,0,0,0,7.146,0,3.093,3.093,0,0,0,3.835,3.41V5.341H1.609V7.875H3.835V14H6.574V7.875Z" transform="translate(-1.609)" fill="currentColor" />
                    </svg>
                  </i>
                  <span className="u-sr-only">Facebook</span>
                </PlaceholderLink>
              </li>
              <li className="m-footer-content__social">
                <PlaceholderLink className="m-footer-content__social-icon a-icon-button">
                  <i className="a-icon-button__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13.997" viewBox="0 0 14 13.997">
                      <path d="M7,5.648a3.589,3.589,0,1,0,3.589,3.589A3.583,3.583,0,0,0,7,5.648Zm0,5.922A2.333,2.333,0,1,1,9.329,9.236,2.337,2.337,0,0,1,7,11.569ZM11.569,5.5a.837.837,0,1,1-.837-.837A.835.835,0,0,1,11.569,5.5Zm2.377.85a4.142,4.142,0,0,0-1.131-2.933A4.17,4.17,0,0,0,9.882,2.287c-1.156-.066-4.619-.066-5.775,0A4.164,4.164,0,0,0,1.175,3.414,4.156,4.156,0,0,0,.044,6.347c-.066,1.156-.066,4.619,0,5.775a4.142,4.142,0,0,0,1.131,2.933,4.175,4.175,0,0,0,2.933,1.131c1.156.066,4.619.066,5.775,0a4.142,4.142,0,0,0,2.933-1.131,4.17,4.17,0,0,0,1.131-2.933c.066-1.156.066-4.616,0-5.772Zm-1.493,7.012a2.362,2.362,0,0,1-1.331,1.331A15.426,15.426,0,0,1,7,14.974a15.546,15.546,0,0,1-4.126-.281A2.362,2.362,0,0,1,1.54,13.362a15.426,15.426,0,0,1-.281-4.126A15.546,15.546,0,0,1,1.54,5.11,2.362,2.362,0,0,1,2.87,3.78,15.426,15.426,0,0,1,7,3.5a15.546,15.546,0,0,1,4.126.281A2.362,2.362,0,0,1,12.453,5.11a15.426,15.426,0,0,1,.281,4.126A15.417,15.417,0,0,1,12.453,13.362Z" transform="translate(0.005 -2.238)" fill="currentColor" />
                    </svg>
                  </i>
                  <span className="u-sr-only">Instagram</span>
                </PlaceholderLink>
              </li>
              <li className="m-footer-content__social">
                <PlaceholderLink className="m-footer-content__social-icon a-icon-button">
                  <i className="a-icon-button__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <path d="M3.134,14H.231V4.654h2.9ZM1.681,3.379a1.689,1.689,0,1,1,1.681-1.7A1.7,1.7,0,0,1,1.681,3.379ZM14,14H11.1V9.45c0-1.084-.022-2.475-1.509-2.475-1.509,0-1.74,1.178-1.74,2.4V14h-2.9V4.654H7.736V5.929h.041a3.05,3.05,0,0,1,2.746-1.509C13.46,4.419,14,6.354,14,8.866V14Z" transform="translate(0 0)" fill="currentColor" />
                    </svg>
                  </i>
                  <span className="u-sr-only">LinkedIn</span>
                </PlaceholderLink>
              </li>
              <li className="m-footer-content__social">
                <PlaceholderLink className="m-footer-content__social-icon a-icon-button">
                  <i className="a-icon-button__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9.844" viewBox="0 0 14 9.844">
                      <path d="M14.757,6.04A1.759,1.759,0,0,0,13.52,4.794,41.572,41.572,0,0,0,8.05,4.5a41.572,41.572,0,0,0-5.47.294A1.759,1.759,0,0,0,1.343,6.04,18.454,18.454,0,0,0,1.05,9.432a18.454,18.454,0,0,0,.293,3.392A1.733,1.733,0,0,0,2.58,14.049a41.572,41.572,0,0,0,5.47.294,41.572,41.572,0,0,0,5.47-.294,1.733,1.733,0,0,0,1.238-1.226,18.454,18.454,0,0,0,.293-3.392,18.454,18.454,0,0,0-.293-3.392ZM6.618,11.513V7.35l3.659,2.082L6.618,11.513Z" transform="translate(-1.05 -4.5)" fill="currentColor" />
                    </svg>
                  </i>
                  <span className="u-sr-only">YouTube</span>
                </PlaceholderLink>
              </li>
              <li className="m-footer-content__social">
                <PlaceholderLink className="m-footer-content__social-icon a-icon-button">
                  <i className="a-icon-button__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.249" height="14" viewBox="0 0 12.249 14">
                      <path d="M12.258,5.741A5.745,5.745,0,0,1,8.9,4.668V9.556A4.446,4.446,0,1,1,5.065,5.15V7.609A2.041,2.041,0,1,0,6.494,9.556V0H8.9a3.314,3.314,0,0,0,.051.606A3.342,3.342,0,0,0,10.426,2.8a3.321,3.321,0,0,0,1.832.551Z" transform="translate(-0.009)" fill="currentColor" />
                    </svg>
                  </i>
                  <span className="u-sr-only">TikTok</span>
                </PlaceholderLink>
              </li>
            </ul>
          </div>
          <div className="o-footer__navigation m-footer-navigation">
            <nav className="m-footer-navigation__group">
              <PlaceholderLink className="m-footer-navigation__parent a-button a-button--clear-inverted">
                <span className="a-button__text">Services</span>
                <span className="a-button__arrow">
                  <ButtonArrow />
                </span>
              </PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child a-link a-link--inverted">Early Intervention ABA Therapy</PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child a-link a-link--inverted">Adolescent ABA Therapy</PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child a-link a-link--inverted">Specialty Services</PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child m-footer-navigation__child--highlight a-link a-link--inverted">Insurance</PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child m-footer-navigation__child--highlight a-link a-link--inverted">Refer a Patient</PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child m-footer-navigation__child--highlight a-link a-link--inverted">Events</PlaceholderLink>
            </nav>
            <nav className="m-footer-navigation__group">
              <PlaceholderLink className="m-footer-navigation__parent a-button a-button--clear-inverted">
                <span className="a-button__text">Resources</span>
                <span className="a-button__arrow">
                  <ButtonArrow />
                </span>
              </PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child m-footer-navigation__child--highlight a-link a-link--inverted">Blog</PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child m-footer-navigation__child--highlight a-link a-link--inverted">Podcast</PlaceholderLink>
            </nav>
            <nav className="m-footer-navigation__group">
              <PlaceholderLink className="m-footer-navigation__parent a-button a-button--clear-inverted">
                <span className="a-button__text">About Us</span>
                <span className="a-button__arrow">
                  <ButtonArrow />
                </span>
              </PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child m-footer-navigation__child--highlight a-link a-link--inverted">Careers</PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child a-link a-link--inverted">Benefits</PlaceholderLink>
              <PlaceholderLink className="m-footer-navigation__child a-link a-link--inverted">Apply Today</PlaceholderLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="o-footer__bottom">
        <div className="o-footer__bottom-container u-container">
          <div className="o-footer__legal">
            <div className="o-footer__links">
              <PlaceholderLink className="o-footer__link a-link a-link--inverted">Notice of Privacy Practices</PlaceholderLink>
              <PlaceholderLink className="o-footer__link a-link a-link--inverted">Notice of Privacy Practices Spanish</PlaceholderLink>
              <PlaceholderLink className="o-footer__link a-link a-link--inverted">Privacy Policy</PlaceholderLink>
              <PlaceholderLink className="o-footer__link a-link a-link--inverted">Mobile Terms and Conditions</PlaceholderLink>
              <PlaceholderLink className="o-footer__link a-link a-link--inverted">Machine Readable Files</PlaceholderLink>
              <PlaceholderLink className="o-footer__link a-link a-link--inverted">Media and Sponsorship Requests</PlaceholderLink>
              <PlaceholderLink className="o-footer__link a-link a-link--inverted">Sitemap</PlaceholderLink>
            </div>
            <p className="o-footer__copyright">© BlueSprig Pediatrics 2026. All rights reserved.</p>
          </div>
          <div className="o-footer__logos">
            <div className="o-footer__logo">
              <img className="a-image" src="/images/home/seal1.png" alt="Accrediting Alliance Training & Development seal" width="204" height="100" />
            </div>
            <div className="o-footer__logo">
              <img className="a-image" src="/images/home/ace-big.png" alt="" width="204" height="100" />
            </div>
            <div className="o-footer__logo">
              <img className="a-image" src="/images/home/casp-big.png" alt="Council of Autism Service Providers member seal" width="204" height="100" />
            </div>
            <PlaceholderLink className="o-footer__logo">
              <img className="a-image" src="/images/home/TIME_US_Best_PrivateCompanies_White-827x1024.png" alt="" width="204" height="100" />
            </PlaceholderLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
