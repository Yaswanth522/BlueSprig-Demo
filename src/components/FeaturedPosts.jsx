import PlaceholderLink from "./PlaceholderLink";
import { ButtonArrow, PostIcon } from "./Icons";

export default function FeaturedPosts() {
  return (
    <section className="o-featured-posts">
      <div className="o-featured-posts__header u-container">
        <h2 className="o-featured-posts__heading u-h2">Resources</h2>
        <div className="o-featured-posts__buttons">
          <PlaceholderLink className="o-featured-posts__button a-button">
            <span className="a-button__text">Browse all</span>
            <span className="a-button__arrow">
              <ButtonArrow />
            </span>
          </PlaceholderLink>
        </div>
      </div>
      <div className="o-featured-posts__content">
        <ul className="o-featured-posts__grid u-container">
          <li className="o-featured-posts__item">
            <PlaceholderLink className="o-featured-posts__post m-post" aria-label="Open post">
              <figure className="m-post__thumbnail">
                <img className="m-post__image a-image" src="/images/home/Supporting-Families-with-Autism-Spectrum-Disorder-During-the-Holidays--500x273.png" alt="" width="262" height="148" />
              </figure>
              <div className="m-post__content">
                <span className="m-post__category">Autism Resources</span>
                <i className="m-post__icon">
                  <PostIcon />
                </i>
                <h4 className="m-post__title u-h7">Supporting Families with Autism Spectrum Disorder During the Holidays</h4>
                <div className="m-post__button a-button a-button--static a-button--clear a-button--small">
                  <span className="a-button__text">Read</span>
                  <span className="a-button__arrow">
                    <ButtonArrow />
                  </span>
                </div>
              </div>
            </PlaceholderLink>
          </li>
          <li className="o-featured-posts__item">
            <PlaceholderLink className="o-featured-posts__post m-post" aria-label="Open post">
              <figure className="m-post__thumbnail">
                <img className="m-post__image a-image" src="/images/home/at-what-age-is-aba-therapy-most-effective-header-500x282.png" alt="" width="262" height="148" />
              </figure>
              <div className="m-post__content">
                <span className="m-post__category">About ABA Therapy</span>
                <i className="m-post__icon">
                  <PostIcon />
                </i>
                <h4 className="m-post__title u-h7">ABA Therapy Age Limit: When to Start & Effective Age Range</h4>
                <div className="m-post__button a-button a-button--static a-button--clear a-button--small">
                  <span className="a-button__text">Read</span>
                  <span className="a-button__arrow">
                    <ButtonArrow />
                  </span>
                </div>
              </div>
            </PlaceholderLink>
          </li>
          <li className="o-featured-posts__item">
            <PlaceholderLink className="o-featured-posts__post m-post" aria-label="Open post">
              <figure className="m-post__thumbnail">
                <img className="m-post__image a-image" src="/images/home/early-intervention-success-header-500x282.png" alt="A father holds a baby up in the air and smiles." width="262" height="148" />
              </figure>
              <div className="m-post__content">
                <span className="m-post__category">About ABA Therapy</span>
                <i className="m-post__icon">
                  <PostIcon />
                </i>
                <h4 className="m-post__title u-h7">Early Intervention Success Stories from Kids with ASD</h4>
                <div className="m-post__button a-button a-button--static a-button--clear a-button--small">
                  <span className="a-button__text">Read</span>
                  <span className="a-button__arrow">
                    <ButtonArrow />
                  </span>
                </div>
              </div>
            </PlaceholderLink>
          </li>
          <li className="o-featured-posts__item">
            <PlaceholderLink className="o-featured-posts__post m-post" aria-label="Open post">
              <figure className="m-post__thumbnail">
                <img className="m-post__image a-image" src="/images/home/how-does-early-intervention-work-header-500x282.png" alt="Parents with an infant speak to a doctor." width="262" height="148" />
              </figure>
              <div className="m-post__content">
                <span className="m-post__category">About ABA Therapy</span>
                <i className="m-post__icon">
                  <PostIcon />
                </i>
                <h4 className="m-post__title u-h7">How Does Early Intervention Work?</h4>
                <div className="m-post__button a-button a-button--static a-button--clear a-button--small">
                  <span className="a-button__text">Read</span>
                  <span className="a-button__arrow">
                    <ButtonArrow />
                  </span>
                </div>
              </div>
            </PlaceholderLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
