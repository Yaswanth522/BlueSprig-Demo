import PlaceholderLink from "./PlaceholderLink";
import { ButtonArrow } from "./Icons";

export default function ProgramCards() {
  return (
    <section id="" className="o-featured-program-cards">
      <div className="o-featured-program-cards__container u-container">
        <div className="o-featured-program-cards__content-wrapper">
          <div className="o-featured-program-cards__content m-content m-content--left m-content--heading-only">
            <div className="m-content__kicker u-h6">Programs</div>
            <h2 className="m-content__heading u-h4">Compassionate, personalized ABA therapy that grows with your child.</h2>
          </div>
          <div className="o-featured-program-cards__content-bg" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="735.063" height="564.84" viewBox="0 0 735.063 564.84">
              <path d="M736.9,395.783c-120.375,346.373-996.4,141.777-627-272.712,220.306-257,725.319-47.435,633.851,235.366Z" transform="translate(-19.645 -6.788)" fill="#fcf1e8" />
            </svg>
          </div>
        </div>
        <div className="o-featured-program-cards__cards">
          <article className="o-featured-program-cards__card m-content-card">
            <div className="m-content-card__wrapper">
              <div className="m-content-card__content m-content m-content--left">
                <h3 className="m-content__heading u-h6">Early Intervention: Treatment starts here.</h3>
                <div className="m-content__body u-b3  m-wysiwyg">
                  <p>Our Sprouts (ages 0–4) and Sprigs (ages 4–6) programs help build foundational skills in communication, play, and independence—laying the groundwork for school readiness.</p>
                </div>
                <div className="m-content__buttons">
                  <PlaceholderLink className="m-content__button a-button a-button--clear a-button--small">
                    <span className="a-button__text">Learn more</span>
                    <span className="a-button__arrow">
                      <ButtonArrow />
                    </span>
                  </PlaceholderLink>
                </div>
              </div>
            </div>
          </article>
          <article className="o-featured-program-cards__card m-content-card">
            <div className="m-content-card__wrapper">
              <div className="m-content-card__content m-content m-content--left">
                <h3 className="m-content__heading u-h6">Specialty Services</h3>
                <div className="m-content__body u-b3  m-wysiwyg">
                  <p>Resources offering intensive and deeply personalized care concentrated on providing targeted therapy for specific concerns</p>
                </div>
                <div className="m-content__buttons">
                  <PlaceholderLink className="m-content__button a-button a-button--clear a-button--small">
                    <span className="a-button__text">Learn more</span>
                    <span className="a-button__arrow">
                      <ButtonArrow />
                    </span>
                  </PlaceholderLink>
                </div>
              </div>
            </div>
          </article>
          <article className="o-featured-program-cards__card m-content-card">
            <div className="m-content-card__wrapper">
              <div className="m-content-card__content m-content m-content--left">
                <h3 className="m-content__heading u-h6">Intervention for Older Clients</h3>
                <div className="m-content__body u-b3  m-wysiwyg">
                  <p>Children who can benefit from continued support may transition into Explorers (ages 7–12) and Trailblazers (ages 13–18). These programs are reserved for families who are already enrolled, ensuring ABA therapy evolves with each child’s needs as they grow.</p>
                </div>
                <div className="m-content__buttons">
                  <PlaceholderLink className="m-content__button a-button a-button--clear a-button--small">
                    <span className="a-button__text">Learn more</span>
                    <span className="a-button__arrow">
                      <ButtonArrow />
                    </span>
                  </PlaceholderLink>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="o-featured-program-cards__graphics">
          <svg xmlns="http://www.w3.org/2000/svg" width="244.075" height="212.182" viewBox="0 0 244.075 212.182">
            <g transform="translate(-990.05 -212.965)">
              <path d="M222.558,148.407C188.5,274.51-59.324,200.023,45.178,49.123,107.5-44.442,250.372,31.853,224.5,134.811Z" transform="translate(970.405 212.721)" fill="#2bacaf" />
              <path d="M57.032,59.765c-22.322-5.433-10.308-49.34,16.68-31.623,16.729,10.547,3.935,36.006-14.28,31.9Z" transform="translate(1152.63 189.009)" fill="#f4a262" />
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="197.515" height="195.813" viewBox="0 0 197.515 195.813">
            <path d="M192.458,152.786c-37.258,67.75-140.327,39.624-168.3-22.047a74.491,74.491,0,0,1-4-50.159c6-22.4,21.524-40.7,38.468-55.853C75.595,9.543,97.559,1.69,120.294,3.684c20.479,1.8,39.651,11.745,54.615,25.54a100.31,100.31,0,0,1,31.551,60.006,87.225,87.225,0,0,1-3.273,36.942c-2.833,9.256-7.427,18.058-10.961,27.067-.977,2.489,3.081.825,3.672-.674,7.042-17.935,15.046-34.356,15.156-54.106.124-19.984-6.877-39.431-18.223-55.729C170.3,10.369,129.165-8.116,90.545,3.478,68.7,10.038,50.7,26.405,36.59,43.762,24.611,58.506,15.767,76.083,13.883,95.173c-3.315,33.627,17.756,63.349,44.768,81.118,21.841,14.372,48.88,21.841,74.984,18.884,26.572-3.026,49.21-18.842,62.028-42.154,1.458-2.654-2.311-1.87-3.2-.234" transform="translate(-13.539 0)" fill="#1e4c77" />
          </svg>
        </div>
        <img className="o-featured-program-cards__image a-image" src="/images/home/Homepage-were-here-to-answer-any-questions-e1770926982950-768x768.jpg" alt="" width="420" height="420" />
      </div>
    </section>
  );
}
