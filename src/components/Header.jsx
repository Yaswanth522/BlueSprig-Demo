import { useEffect, useState } from "react";
import PlaceholderLink from "./PlaceholderLink";
import { ButtonArrow, LocationIcon } from "./Icons";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (name) => setOpenMenu((open) => (open === name ? null : name));
  const closeMenus = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  // One meganav at a time; close it on an outside click or Escape.
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e) => {
      if (!e.target.closest(".m-meganav-toggle")) setOpenMenu(null);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  // The theme locks page scroll behind the open mobile menu via body.noscroll.
  useEffect(() => {
    document.body.classList.toggle("noscroll", mobileOpen);
  }, [mobileOpen]);

  return (
    <header className={`o-header${mobileOpen ? " o-header--mobile-open" : ""}`} style={{ viewTransitionName: "site-header" }}>
      <div className="o-header__container u-container">
        <PlaceholderLink className="o-header__logo" to="/" onClick={closeMenus}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="159.447" height="60" viewBox="0 0 159.447 60">
            <defs>
              <clipPath id="a">
                <rect width="159.447" height="60" fill="none" />
              </clipPath>
            </defs>
            <g clipPath="url(#a)">
              <path d="M570.643,143.156c-1.664-1.383-4.1-2.036-6.085-2.865a8.389,8.389,0,0,1-2.493-1.443,2.938,2.938,0,0,1-1-2.244,3.143,3.143,0,0,1,1.1-2.364,5.034,5.034,0,0,1,3.432-1.1,4.925,4.925,0,0,1,3.34,1.01,2.759,2.759,0,0,1,.941,2.125,3.162,3.162,0,0,1-.114.872,1.5,1.5,0,0,0-.076.459,1.023,1.023,0,0,0,.277.728.925.925,0,0,0,.65.269,1.253,1.253,0,0,0,1.148-1.333l.016-.218a4.04,4.04,0,0,0-1.626-3.124,7.221,7.221,0,0,0-4.556-1.393,7.024,7.024,0,0,0-4.237,1.346,4.524,4.524,0,0,0-1.842,3.62,4.258,4.258,0,0,0,1.858,3.619c1.654,1.209,4.06,1.761,6.027,2.635a7.036,7.036,0,0,1,2.468,1.636,3.891,3.891,0,0,1,.993,2.743A3.67,3.67,0,0,1,569.318,151a6.25,6.25,0,0,1-3.809,1.226,5.5,5.5,0,0,1-3.9-1.366,4.054,4.054,0,0,1-1.252-2.892,3.58,3.58,0,0,1,.176-1.1,1.965,1.965,0,0,0,.09-.533,1,1,0,0,0-.283-.731.967.967,0,0,0-.66-.261,1.384,1.384,0,0,0-1.3,1.361,2.783,2.783,0,0,0-.034.5,5.13,5.13,0,0,0,1.9,3.922,7.863,7.863,0,0,0,5.2,1.7c4.277,0,7.048-2.894,7.058-5.667a4.943,4.943,0,0,0-1.864-4" transform="translate(-459.25 -109.012)" fill="#56b5e6" />
              <path d="M649.089,169.776a5.23,5.23,0,0,0-4.193,2.049v-1.379a.332.332,0,0,0-.04-.183.349.349,0,0,0-.3-.163h-2.748l-.068.062-.082.082-.151.144.233.233.068.057h.857a.347.347,0,0,1,.259.118.467.467,0,0,1,.094.325V189.1l-.06.008h-.935l-.146.141-.151.151.237.225.06.059h3.859l.135-.139.156-.145-.233-.227-.058-.065h-.917l-.044,0-.022-.061v-8.087a4.607,4.607,0,0,0,1.7,1.48,5.942,5.942,0,0,0,2.685.565,5.806,5.806,0,0,0,4.56-1.946,7.025,7.025,0,0,0,1.571-4.655v-.3a6.158,6.158,0,0,0-1.9-4.762,6.493,6.493,0,0,0-4.423-1.562m-2.621,11.886a4.452,4.452,0,0,1-1.571-1.992v-6.68a4.518,4.518,0,0,1,4.193-2.64,3.913,3.913,0,0,1,3,1.277,6.472,6.472,0,0,1,1.347,4.474v.3a8.146,8.146,0,0,1-1.005,4.349,3.518,3.518,0,0,1-3.149,1.675,4.923,4.923,0,0,1-2.816-.761" transform="translate(-527.648 -139.643)" fill="#56b5e6" />
              <path d="M733.938,169.721h0c-.092-.006-.181-.012-.273-.012-2.073.014-4.1,1.655-5.3,3.729v-2.814h.281l.163-.143.147-.147-.235-.226-.074-.062h-3.5l-.062.062-.088.082-.135.144.223.226.062.064h.961a.4.4,0,0,1,.273.15.574.574,0,0,1,.1.351v11.12l-.066.012h-1.2l-.148.135-.159.146.231.235.066.058h4.339l.136-.143.154-.151-.239-.22-.06-.061h-1.1l-.058-.008-.006-.06v-7.4a5.008,5.008,0,0,1,4.526-3.385,4.494,4.494,0,0,1,.9.087,1.252,1.252,0,0,0,.305.032,1.02,1.02,0,0,0,.721-.254.777.777,0,0,0,.271-.591c.006-.466-.413-.912-1.142-.953" transform="translate(-596.203 -139.588)" fill="#56b5e6" />
              <path d="M791.019,182.815l-.2.064a.325.325,0,0,0-.094.223.634.634,0,0,1-.165.463.574.574,0,0,1-.429.17.556.556,0,0,1-.492-.239.92.92,0,0,1-.171-.529v-10.78h.291l.159-.14.149-.15-.243-.23-.064-.058h-3.452l-.145.144-.146.144.227.233.064.057h.911a.4.4,0,0,1,.267.149.537.537,0,0,1,.1.351v9.6a2.434,2.434,0,0,0,.5,1.6,1.844,1.844,0,0,0,1.453.621,2.19,2.19,0,0,0,1.252-.312,1.266,1.266,0,0,0,.534-1.093.312.312,0,0,0-.1-.223Z" transform="translate(-646.51 -141.15)" fill="#56b5e6" />
              <path d="M828.635,157.3a2.222,2.222,0,0,1,1.258-.371,2.348,2.348,0,0,1,.735.114,1.1,1.1,0,0,0,.279.036.919.919,0,0,0,.907-.915.838.838,0,0,0-.249-.584,1.29,1.29,0,0,0-.73-.331v-.006c-.131-.013-.267-.025-.393-.025a2.925,2.925,0,0,0-2.938,2.752,2.589,2.589,0,0,0,.052.472,7.866,7.866,0,0,0-3.2-.639,7.27,7.27,0,0,0-4.259,1.221,4.487,4.487,0,0,0-1.858,3.768v.246a4.935,4.935,0,0,0,1.69,3.818,2.971,2.971,0,0,0-2.055,2.84,2.572,2.572,0,0,0,1.17,2.2,3.129,3.129,0,0,0-1.588,2.7,3.292,3.292,0,0,0,1.469,2.665,7.947,7.947,0,0,0,4.74,1.214h1.369a6.77,6.77,0,0,0,4.491-1.379,3.9,3.9,0,0,0,1.423-2.972,3.51,3.51,0,0,0-.933-2.4,3.572,3.572,0,0,0-2.635-1.058H821.02a2.1,2.1,0,0,1-1.493-.5,1.46,1.46,0,0,1-.472-1.1,1.834,1.834,0,0,1,1.493-1.773,6.972,6.972,0,0,0,3.787.966,6.55,6.55,0,0,0,4.523-1.521,4.864,4.864,0,0,0,1.57-3.695v-.246a4.522,4.522,0,0,0-2.137-3.961,1.789,1.789,0,0,1-.158-.741v-.032a.978.978,0,0,1,.5-.757m-7.45,9.092a5.215,5.215,0,0,1-.988-3.356v-.246a4.417,4.417,0,0,1,1.291-3.447,4.205,4.205,0,0,1,2.864-.992,4.113,4.113,0,0,1,2.84.992,4.438,4.438,0,0,1,1.268,3.447v.246a5.225,5.225,0,0,1-.979,3.356,4.452,4.452,0,0,1-6.3,0m7.59,10.491a6.059,6.059,0,0,1-3.745,1.011h-1.369a5.527,5.527,0,0,1-3.719-1.1,2.981,2.981,0,0,1-1.019-2.273,2.8,2.8,0,0,1,1-2.231,4.348,4.348,0,0,0,1.13.143h6.322a2.391,2.391,0,0,1,2.513,2.376,2.593,2.593,0,0,1-1.114,2.073" transform="translate(-672.367 -127.669)" fill="#56b5e6" />
              <path d="M290.437,144.946a8.139,8.139,0,0,0-3.44-1.228,7.454,7.454,0,0,0,2.454-1.178,3.723,3.723,0,0,0-.409-6.49,8.876,8.876,0,0,0-4.255-1.056h-6.942a.337.337,0,0,0-.247.094l-.09.216a.349.349,0,0,0,.084.22.335.335,0,0,0,.253.1h1.292v18.025h-1.292a.4.4,0,0,0-.259.081.334.334,0,0,0-.108.233.323.323,0,0,0,.108.232.382.382,0,0,0,.259.083h7.55a9.043,9.043,0,0,0,4.915-1.341,4.8,4.8,0,0,0,2.308-4.108,4.6,4.6,0,0,0-2.181-3.882m-2.547-2.37a5.529,5.529,0,0,1-3.47.928h-3.251v-7.881h3.538a5.23,5.23,0,0,1,3.073.842,3.488,3.488,0,0,1,1.361,3.034,3.686,3.686,0,0,1-1.25,3.078m2.589,6.253a4.56,4.56,0,0,1-1.487,3.711,5.553,5.553,0,0,1-3.6,1.109h-4.227v-9.511h3.538a7.321,7.321,0,0,1,4.168.96,4.158,4.158,0,0,1,1.6,3.731" transform="translate(-228.23 -111.035)" fill="#1b4d79" />
              <path d="M370.506,149.053l-.2.064a.323.323,0,0,0-.1.223.545.545,0,0,1-.215.472.82.82,0,0,1-.528.161.685.685,0,0,1-.6-.27,1,1,0,0,1-.195-.632V131.137h.295l.149-.141.155-.152-.237-.223-.066-.06h-3.757l-.157.138-.146.146.239.23.064.063h1.262a.242.242,0,0,1,.223.126.693.693,0,0,1,.1.371v16.891a2.2,2.2,0,0,0,.622,1.628,2.241,2.241,0,0,0,1.608.591,2.131,2.131,0,0,0,1.278-.347,1.241,1.241,0,0,0,.5-1.058.3.3,0,0,0-.094-.223Z" transform="translate(-300.143 -107.388)" fill="#1b4d79" />
              <path d="M411.644,182.815l-.191.064a.252.252,0,0,0-.106.223.659.659,0,0,1-.159.463.564.564,0,0,1-.434.17.578.578,0,0,1-.5-.239.957.957,0,0,1-.163-.529V172.092a.456.456,0,0,0-.137-.359.484.484,0,0,0-.363-.125H408.7a.5.5,0,0,0-.357.125.456.456,0,0,0-.137.359v5.573a11.864,11.864,0,0,1-1.834,4.376,3.884,3.884,0,0,1-3.1,1.855,2.113,2.113,0,0,1-1.628-.511c-.433-.439-.763-1.314-.763-3.006v-8.193h.71l.154-.143.149-.147-.235-.226-.068-.062h-3.871l-.143.144-.156.144.235.233.064.057h.921a.335.335,0,0,1,.255.118.458.458,0,0,1,.1.325V180.3a4.1,4.1,0,0,0,1.264,3.349,4.356,4.356,0,0,0,2.876.882,4.482,4.482,0,0,0,3.5-1.884,10.277,10.277,0,0,0,1.577-2.957v2.6a2.5,2.5,0,0,0,.494,1.6,1.876,1.876,0,0,0,1.461.621,2.205,2.205,0,0,0,1.254-.312,1.228,1.228,0,0,0,.526-1.093.324.324,0,0,0-.094-.223Z" transform="translate(-326.883 -141.15)" fill="#1b4d79" />
              <path d="M493.757,177.9a.962.962,0,0,0-.688-.279.89.89,0,0,0-.59.221.82.82,0,0,0-.271.637,1.284,1.284,0,0,0,.058.367,2.029,2.029,0,0,1,.084.544,2.725,2.725,0,0,1-.977,1.961,3.959,3.959,0,0,1-2.665.953,4.149,4.149,0,0,1-2.585-.69,4.378,4.378,0,0,1-1.339-1.9l-.02-.187a1.479,1.479,0,0,1,.5-1.088c.955-.97,3.3-1.505,5.306-2.006a6.034,6.034,0,0,0,2.332-1.171,2.918,2.918,0,0,0,1.106-2.186,3.086,3.086,0,0,0-1.327-2.559,5.71,5.71,0,0,0-3.289-.914,6.656,6.656,0,0,0-4.911,2.031,6.817,6.817,0,0,0-1.836,4.709,7.1,7.1,0,0,0,1.445,4.642,5.794,5.794,0,0,0,4.618,1.9,6.1,6.1,0,0,0,3.711-1.275,3.833,3.833,0,0,0,1.646-2.877,1.193,1.193,0,0,0-.307-.829m-2.105-3.076a2.517,2.517,0,0,1-1.485,1.071h0c-1.182.348-2.521.627-3.635,1.059a5.159,5.159,0,0,0-1.465.8,2.381,2.381,0,0,0-.439.467c-.034-.521-.056-1.055-.056-1.584,0-.26.016-.525.016-.78a7.481,7.481,0,0,1,1.152-4.028,3.907,3.907,0,0,1,3.4-1.625,3.05,3.05,0,0,1,2.334.793,2.7,2.7,0,0,1,.642,1.914,3.556,3.556,0,0,1-.466,1.912" transform="translate(-396.982 -139.495)" fill="#1b4d79" />
              <path d="M791.265,136.878a1.941,1.941,0,0,0,1.349-.511,1.913,1.913,0,0,0,0-2.63,1.961,1.961,0,0,0-1.349-.512,1.936,1.936,0,0,0-1.365.512,1.882,1.882,0,0,0,0,2.63,1.918,1.918,0,0,0,1.365.511" transform="translate(-649.264 -109.58)" fill="#1b4d79" />
              <path d="M40.466,47.433h-.014a1.087,1.087,0,0,0-.143-.062,3.161,3.161,0,0,0-.7,0,1.455,1.455,0,0,0-1.3,1.037h-.014c-.116.487-.654.961-1.638,1.346a13.143,13.143,0,0,1-8,.027,3.616,3.616,0,0,1-.715-.37,2.145,2.145,0,0,1-.7-.618c-.357-.563-.116-1.165.731-1.677.066-.038.145-.079.219-.114a6.1,6.1,0,0,1,.566-.256,11.542,11.542,0,0,1,3.518-.629,5.63,5.63,0,0,0,2.705-.5.161.161,0,0,0,0-.269c-.038-.012-.088-.038-.139-.052v-.012c-1.718-.613-3.357-1.165-4.781-1.614h-.012c-.718-.243-1.369-.447-1.963-.614-.008-.256-.024-.487-.036-.718-.1-1.6-.257-2.842-.369-4.124l-.1-1.331c-.026-.293-.038-.588-.05-.9-.193-4.432,3.588-14.871,6.123-17.563.293-.512,5.941,1.718,11.193-4.674C48.459,9.325,48.484,1.385,50.318.015,24.838-.5,23.6,12.427,30.409,17.32a38.951,38.951,0,0,1,15.923-15.1C35.968,8.635,26.622,25.8,25.693,35.229a18.292,18.292,0,0,0-3.572-3.948c1.052-3.471-2.073-7.469-8.451-7.981C5.6,22.649,0,28.772,0,28.772c10.647.447,15.754,12.553,20.69,5.237A23.2,23.2,0,0,0,9.607,27.425c1.054.09,9.563,1.039,14.221,7.636a7.956,7.956,0,0,1,1.14,2.486,13.779,13.779,0,0,1,.51,3.942c0,.258,0,.515-.01.772a36.866,36.866,0,0,1-1.782,9.389c0,.014,0,.014-.014.024a21.572,21.572,0,0,0-.319-8.5c-1.425.666-3.536,1.6-6.069,2.639a3.365,3.365,0,0,1-.722-.039c-.821-.127-1.114-.576-1.138-1.115h-.012a4.017,4.017,0,0,0-1.7-1.279,13.307,13.307,0,0,0-8.148.012c-2.23.856-2.216,2.228,0,3.076a11.01,11.01,0,0,0,3.536.626V47.1a5.9,5.9,0,0,1,2.7.511.21.21,0,0,1,.03.283c-5.419,1.948-9.968,3.291-9.968,3.291l-.032.025s1.686.809,4.3,1.949a.04.04,0,0,1-.026.012c.933.409,2,.859,3.167,1.331a5.306,5.306,0,0,0,1.957.281,1.492,1.492,0,0,0,1.309-1.023c.138-.489.676-.948,1.65-1.334a13.172,13.172,0,0,1,7.955-.038c2.137.859,2.1,2.191-.1,3.022a10.969,10.969,0,0,1-3.5.641,5.957,5.957,0,0,0-2.651.487c-.207.2.2.5.7.756,2.346.833,4.359,1.472,5.818,1.934,1.551.487,2.521.769,2.521.769l.042-.014s3.546-1.727,8.654-3.8a4.512,4.512,0,0,1,.723.013,1.477,1.477,0,0,1,1.343,1.038h.026c.114.489.678.974,1.65,1.332a13.018,13.018,0,0,0,8.084,0c2.244-.832,2.308-2.242.08-3.087a14.917,14.917,0,0,0-3.257-.627c-1.612-.116-2.727-.155-3.061-.463-.06-.076-.166-.177-.086-.282,5.134-1.818,9.308-3.061,9.35-3.075l.024-.013s-1.154-.573-3.139-1.485c-1.292-.589-2.946-1.319-4.893-2.1" transform="translate(0 0)" fill="#1b4d79" />
            </g>
          </svg>
          <span className="u-sr-only">Bluesprig Autism</span>
        </PlaceholderLink>
        <div className="o-header__content">
          <nav className="o-header__top-nav m-header-top-nav">
            <ul className="m-header-top-nav__list">
              <li className="m-header-top-nav__item">
                <PlaceholderLink className="m-header-top-nav__link a-link">Florida Autism Center</PlaceholderLink>
              </li>
              <li className="m-header-top-nav__item">
                <PlaceholderLink className="m-header-top-nav__link a-link">Trumpet Behavioral Health</PlaceholderLink>
              </li>
              <li className="m-header-top-nav__item">
                <PlaceholderLink className="m-header-top-nav__link a-link">
                  <i className="m-header-top-nav__link__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.842" height="16" viewBox="0 0 16.842 16">
                      <path d="M18.158,6.368H14.789V4.684A1.678,1.678,0,0,0,13.105,3H9.737A1.678,1.678,0,0,0,8.053,4.684V6.368H4.684A1.671,1.671,0,0,0,3.008,8.053L3,17.316A1.678,1.678,0,0,0,4.684,19H18.158a1.678,1.678,0,0,0,1.684-1.684V8.053A1.678,1.678,0,0,0,18.158,6.368Zm-5.053,0H9.737V4.684h3.368Z" transform="translate(-3 -3)" fill="#53b7e8" />
                    </svg>
                  </i>
                  Careers
                </PlaceholderLink>
              </li>
              <li className="m-header-top-nav__item">
                <PlaceholderLink className="m-header-top-nav__link a-link">Refer a Patient</PlaceholderLink>
              </li>
              <li className="m-header-top-nav__item">
                <PlaceholderLink className="m-header-top-nav__link a-link">Parent Login</PlaceholderLink>
              </li>
              <li className="m-header-top-nav__item">
                <PlaceholderLink className="m-header-top-nav__link a-link">Online Payment</PlaceholderLink>
              </li>
            </ul>
            <div className="m-header-top-nav__search m-search-toggle">
              <div className="m-search-toggle__trigger" aria-label="Search">
                <i className="m-search-toggle__trigger-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.277" height="14.286" viewBox="0 0 14.277 14.286">
                    <path d="M14.967,13.711h-.662l-.234-.226a5.459,5.459,0,1,0-.586.586l.226.234v.662l3.559,3.559a.882.882,0,1,0,1.248-1.248Zm-5.025,0a3.768,3.768,0,1,1,3.768-3.768A3.763,3.763,0,0,1,9.942,13.711Z" transform="translate(-4.498 -4.498)" fill="currentColor" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13.435" height="13.436" viewBox="0 0 13.435 13.436">
                    <g transform="translate(-760.782 -267.782)">
                      <path d="M7.5,18h15" transform="translate(769.621 251.165) rotate(45)" fill="none" stroke="#4d4d4d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M0,0H15" transform="translate(772.803 269.196) rotate(135)" fill="none" stroke="#4d4d4d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </i>
                <input className="m-search-toggle__trigger-input" type="checkbox" autoComplete="off" aria-label="Toggle search" />
                <div className="m-search-toggle__trigger-bg" aria-hidden="true">
                  <svg width="50" height="45" viewBox="0 0 50 45" version="1.1" id="svg25" xmlns="http://www.w3.org/2000/svg">
                    <defs id="defs13">
                      <filter id="stb" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse">
                        <feOffset dy="5" input="SourceAlpha" id="feOffset2" />
                        <feGaussianBlur stdDeviation="15" result="b" id="feGaussianBlur4" />
                        <feFlood floodColor="#0d3357" floodOpacity="0.149" id="feFlood6" />
                        <feComposite operator="in" in2="b" id="feComposite8" result="result1" />
                        <feComposite in="SourceGraphic" in2="result1" id="feComposite10" />
                      </filter>
                    </defs>
                    <g transform="translate(-3574.842,83.5)" id="g23">
                      <g transform="translate(-1380.158,-83.5)" id="g21">
                        <path d="M 20,0 V 0 A 20,20 0 0 1 40,20 V 40 H 0 V 20 A 20,20 0 0 1 20,0 Z" transform="translate(4965)" fill="#ffffff" id="path15" />
                        <g transform="translate(4910,-15)" filter="url(#stb)" id="g19">
                          <path d="M 30,30 H 10 V 20 A 10.011,10.011 0 0 0 20,10 h 10 z" transform="translate(35,30)" fill="#ffffff" id="path17" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="m-search-toggle__content">
                  <form onSubmit={(e) => e.preventDefault()} className="m-search-toggle__form">
                    <div className="m-search-toggle__input m-field">
                      <label htmlFor="field_1026224773" className="m-field__label a-label">Enter keyword</label>
                      <input id="field_1026224773" className="m-field__field m-field__input  a-input" type="search" name="s" placeholder=" " autoComplete="off" />
                      <button className="m-field__search-button m-field__search-button--large a-button a-button--small" type="submit" aria-label="Search">
                        <span className="a-button__text">Search</span>
                        <span className="a-button__arrow">
                          <ButtonArrow />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </nav>
          <nav className="o-header__bottom-nav m-header-bottom-nav">
            <ul className="m-header-bottom-nav__list">
              <li className="m-header-bottom-nav__item">
                <div className="m-meganav-toggle">
                  <div className="m-meganav-toggle__trigger">
                    <span className="m-meganav-toggle__trigger-text">
                      Services
                      <span className="m-meganav-toggle__arrow" aria-hidden="true">
                        <ButtonArrow />
                      </span>
                    </span>
                    <input className="m-meganav-toggle__trigger-input" type="checkbox" autoComplete="off" aria-label="Toggle Services menu" checked={openMenu === "Services"} onChange={() => toggleMenu("Services")} />
                  </div>
                  <div className="m-meganav-toggle__content" inert={openMenu !== "Services"}>
                    <div className="m-meganav-toggle__content-header">
                      <span className="m-meganav-toggle__content-title u-h3">
                        <span className="m-meganav-toggle__arrow-back" aria-hidden="true">
                          <ButtonArrow />
                        </span>
                        Services
                      </span>
                      <PlaceholderLink className="m-meganav-toggle__content-button a-button a-button--small">
                        <span className="a-button__text">Overview</span>
                        <span className="a-button__arrow">
                          <ButtonArrow />
                        </span>
                      </PlaceholderLink>
                    </div>
                    <div className="m-meganav-toggle__content-body m-services-meganav-content">
                      <div className="m-services-meganav-content__cta m-content m-content--left">
                        <div className="m-content__heading u-h7">ABA Therapy</div>
                        <div className="m-content__body u-b3  m-wysiwyg">
                          <p>We provide a range of ABA therapy services to children with autism across the United States.</p>
                        </div>
                        <div className="m-content__buttons">
                          <PlaceholderLink className="m-content__button a-button a-button--small" to="/about-aba-therapy" onClick={closeMenus}>
                            <span className="a-button__text">About ABA Therapy</span>
                            <span className="a-button__arrow">
                              <ButtonArrow />
                            </span>
                          </PlaceholderLink>
                        </div>
                      </div>
                      <div className="m-services-meganav-content__programs">
                        <span className="m-services-meganav-content__block-heading u-h7">Programs</span>
                        <ul className="m-services-meganav-content__link-list m-services-meganav-content__extra-links m-link-list">
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">ABA Growth Pathway</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                        </ul>
                        <div className="m-services-meganav-content__link-accordions m-link-accordions">
                          <ul className="m-link-accordions__list">
                            <li className="m-link-accordions__item">
                              <details className="m-link-accordions__accordion m-small-accordion">
                                <summary id="accordion_1866058779" className="m-small-accordion__toggle">
                                  <div className="m-small-accordion__left">
                                    <p className="m-small-accordion__heading">Early Intervention ABA Therapy</p>
                                  </div>
                                  <div className="m-small-accordion__right">
                                    <span className="m-small-accordion__arrow">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                        <g transform="translate(1 1)">
                                          <line y2="20" transform="translate(10)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                          <line x2="20" transform="translate(0 10)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </g>
                                      </svg>
                                    </span>
                                  </div>
                                </summary>
                                <div id="accordion_1866058779_panel" className="m-small-accordion__panel">
                                  <div className="m-small-accordion__body">
                                    <ul className="m-link-accordions__link-list m-link-list">
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">Overview</span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">
                                            Sprouts
                                            <small className="a-arrow-link__subtitle">Ages 0-4</small>
                                          </span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">
                                            Sprigs
                                            <small className="a-arrow-link__subtitle">Ages 4-6</small>
                                          </span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </details>
                            </li>
                            <li className="m-link-accordions__item">
                              <details className="m-link-accordions__accordion m-small-accordion">
                                <summary id="accordion_1907961662" className="m-small-accordion__toggle">
                                  <div className="m-small-accordion__left">
                                    <p className="m-small-accordion__heading">Adolescent ABA Therapy</p>
                                  </div>
                                  <div className="m-small-accordion__right">
                                    <span className="m-small-accordion__arrow">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                        <g transform="translate(1 1)">
                                          <line y2="20" transform="translate(10)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                          <line x2="20" transform="translate(0 10)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </g>
                                      </svg>
                                    </span>
                                  </div>
                                </summary>
                                <div id="accordion_1907961662_panel" className="m-small-accordion__panel">
                                  <div className="m-small-accordion__body">
                                    <ul className="m-link-accordions__link-list m-link-list">
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">Overview</span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">
                                            Branching Out Explorers
                                            <small className="a-arrow-link__subtitle">Ages 7-12</small>
                                          </span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">
                                            Branching Out Trailblazers
                                            <small className="a-arrow-link__subtitle">Ages 13-18</small>
                                          </span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </details>
                            </li>
                            <li className="m-link-accordions__item">
                              <details className="m-link-accordions__accordion m-small-accordion">
                                <summary id="accordion_688176737" className="m-small-accordion__toggle">
                                  <div className="m-small-accordion__left">
                                    <p className="m-small-accordion__heading">Specialty Services</p>
                                  </div>
                                  <div className="m-small-accordion__right">
                                    <span className="m-small-accordion__arrow">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                        <g transform="translate(1 1)">
                                          <line y2="20" transform="translate(10)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                          <line x2="20" transform="translate(0 10)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </g>
                                      </svg>
                                    </span>
                                  </div>
                                </summary>
                                <div id="accordion_688176737_panel" className="m-small-accordion__panel">
                                  <div className="m-small-accordion__body">
                                    <ul className="m-link-accordions__link-list m-link-list">
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">Overview</span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">The Behavior Center</span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                      <li className="m-link-list__item">
                                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                                          <span className="a-arrow-link__text">Adolescent ABA Therapy Center | BlueSprig Autism Services</span>
                                          <span className="a-arrow-link__arrow">
                                            <ButtonArrow />
                                          </span>
                                        </PlaceholderLink>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </details>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="m-services-meganav-content__service-settings">
                        <span className="m-services-meganav-content__block-heading u-h7">Service Settings</span>
                        <ul className="m-services-meganav-content__link-list m-link-list">
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Center-Based ABA Therapy</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Home-Based ABA Therapy</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Community-Based ABA Therapy</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Virtual ABA Therapy</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">School-Based ABA Therapy</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="m-header-bottom-nav__item">
                <PlaceholderLink className="m-header-bottom-nav__link a-link">Locations</PlaceholderLink>
              </li>
              <li className="m-header-bottom-nav__item">
                <PlaceholderLink className="m-header-bottom-nav__link a-link">Insurance</PlaceholderLink>
              </li>
              <li className="m-header-bottom-nav__item">
                <div className="m-meganav-toggle">
                  <div className="m-meganav-toggle__trigger">
                    <span className="m-meganav-toggle__trigger-text">
                      Resources
                      <span className="m-meganav-toggle__arrow" aria-hidden="true">
                        <ButtonArrow />
                      </span>
                    </span>
                    <input className="m-meganav-toggle__trigger-input" type="checkbox" autoComplete="off" aria-label="Toggle Resources menu" checked={openMenu === "Resources"} onChange={() => toggleMenu("Resources")} />
                  </div>
                  <div className="m-meganav-toggle__content" inert={openMenu !== "Resources"}>
                    <div className="m-meganav-toggle__content-header">
                      <span className="m-meganav-toggle__content-title u-h3">
                        <span className="m-meganav-toggle__arrow-back" aria-hidden="true">
                          <ButtonArrow />
                        </span>
                        Resources
                      </span>
                      <PlaceholderLink className="m-meganav-toggle__content-button a-button a-button--small">
                        <span className="a-button__text">Overview</span>
                        <span className="a-button__arrow">
                          <ButtonArrow />
                        </span>
                      </PlaceholderLink>
                    </div>
                    <div className="m-meganav-toggle__content-body m-resources-meganav-content">
                      <div className="m-resources-meganav-content__types">
                        <span className="m-resources-meganav-content__type u-h7">Types</span>
                        <ul className="m-link-list">
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">What to Expect in ABA Therapy</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Assessment Process</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Frequently Asked Questions</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Virtual Tour</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">ABCs of ABA</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Refer a Patient</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Blog</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">Podcast</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                          <li className="m-link-list__item">
                            <PlaceholderLink className="m-link-list__link a-arrow-link">
                              <span className="a-arrow-link__text">BlueSprig in the Community</span>
                              <span className="a-arrow-link__arrow">
                                <ButtonArrow />
                              </span>
                            </PlaceholderLink>
                          </li>
                        </ul>
                      </div>
                      <ul className="m-resources-meganav-content__featured">
                        <li className="m-resources-meganav-content__featured-item">
                          <span className="m-resources-meganav-content__featured-item-title">Autism Acceptance and Awareness Day</span>
                          <PlaceholderLink className="m-resources-meganav-content__featured-item-button a-button a-button--clear a-button--small">
                            <span className="a-button__text">Read</span>
                            <span className="a-button__arrow">
                              <ButtonArrow />
                            </span>
                          </PlaceholderLink>
                        </li>
                        <li className="m-resources-meganav-content__featured-item">
                          <span className="m-resources-meganav-content__featured-item-title">Tips for Developing Healthy Self-Esteem in Your Child with Autism</span>
                          <PlaceholderLink className="m-resources-meganav-content__featured-item-button a-button a-button--clear a-button--small">
                            <span className="a-button__text">Read</span>
                            <span className="a-button__arrow">
                              <ButtonArrow />
                            </span>
                          </PlaceholderLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="m-header-bottom-nav__item">
                <div className="m-meganav-toggle">
                  <div className="m-meganav-toggle__trigger">
                    <span className="m-meganav-toggle__trigger-text">
                      About Us
                      <span className="m-meganav-toggle__arrow" aria-hidden="true">
                        <ButtonArrow />
                      </span>
                    </span>
                    <input className="m-meganav-toggle__trigger-input" type="checkbox" autoComplete="off" aria-label="Toggle About Us menu" checked={openMenu === "About Us"} onChange={() => toggleMenu("About Us")} />
                  </div>
                  <div className="m-meganav-toggle__content" inert={openMenu !== "About Us"}>
                    <div className="m-meganav-toggle__content-header">
                      <span className="m-meganav-toggle__content-title u-h3">
                        <span className="m-meganav-toggle__arrow-back" aria-hidden="true">
                          <ButtonArrow />
                        </span>
                        About Us
                      </span>
                      <PlaceholderLink className="m-meganav-toggle__content-button a-button a-button--small">
                        <span className="a-button__text">Overview</span>
                        <span className="a-button__arrow">
                          <ButtonArrow />
                        </span>
                      </PlaceholderLink>
                    </div>
                    <ul className="m-meganav-toggle__content-body m-about-meganav-content m-link-list">
                      <li className="m-link-list__item">
                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                          <span className="a-arrow-link__text">Our Story</span>
                          <span className="a-arrow-link__arrow">
                            <ButtonArrow />
                          </span>
                        </PlaceholderLink>
                      </li>
                      <li className="m-link-list__item">
                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                          <span className="a-arrow-link__text">Advisory Board</span>
                          <span className="a-arrow-link__arrow">
                            <ButtonArrow />
                          </span>
                        </PlaceholderLink>
                      </li>
                      <li className="m-link-list__item">
                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                          <span className="a-arrow-link__text">Leadership Team</span>
                          <span className="a-arrow-link__arrow">
                            <ButtonArrow />
                          </span>
                        </PlaceholderLink>
                      </li>
                      <li className="m-link-list__item">
                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                          <span className="a-arrow-link__text">Affiliated Companies</span>
                          <span className="a-arrow-link__arrow">
                            <ButtonArrow />
                          </span>
                        </PlaceholderLink>
                      </li>
                      <li className="m-link-list__item">
                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                          <span className="a-arrow-link__text">Clinical Committees</span>
                          <span className="a-arrow-link__arrow">
                            <ButtonArrow />
                          </span>
                        </PlaceholderLink>
                      </li>
                      <li className="m-link-list__item">
                        <PlaceholderLink className="m-link-list__link a-arrow-link">
                          <span className="a-arrow-link__text">Contributions to the Field</span>
                          <span className="a-arrow-link__arrow">
                            <ButtonArrow />
                          </span>
                        </PlaceholderLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="m-header-bottom-nav__item">
                <PlaceholderLink className="m-header-bottom-nav__link a-link">Outcomes</PlaceholderLink>
              </li>
            </ul>
            <form className="m-header-bottom-nav__location-search m-location-search m-location-search--prefill-local-storage m-location-search--auto-submit-form" onSubmit={(e) => e.preventDefault()}>
              <div className="m-location-search__input m-field">
                <label htmlFor="field_1291206526" className="m-field__label a-label">Enter zip or city</label>
                <input id="field_1291206526" className="m-field__field m-field__input  a-input" type="search" placeholder=" " autoComplete="off" />
                <button className="m-field__search-button m-field__search-button--large a-button a-button--small" type="submit" aria-label="Find Center">
                  <span className="a-button__text">Find Center</span>
                  <span className="a-button__arrow">
                    <ButtonArrow />
                  </span>
                </button>
              </div>
              <div className="m-location-search__suggestions-wrapper">
                <button className="m-location-search__find-location a-button a-button--clear a-button--small a-button--no-arrow" type="button">
                  <i className="a-button__icon">
                    <LocationIcon />
                  </i>
                  <span className="a-button__text">Use my current location</span>
                </button>
                <ul className="m-location-search__suggestions" />
              </div>
              <input className="m-location-search__search-address a-input" type="hidden" name="address" />
              <input className="m-location-search__search-lat a-input" type="hidden" name="lat" />
              <input className="m-location-search__search-lng a-input" type="hidden" name="lng" />
            </form>
          </nav>
        </div>
        <div className="o-header__mobile-nav">
          <button id="menu-toggle" className="o-header__hamburger a-hamburger" type="button" aria-label="click to open or close main menu" aria-controls="main-menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
            <span className="a-hamburger__line" />
            <span className="a-hamburger__line" />
            <span className="a-hamburger__line" />
          </button>
        </div>
      </div>
    </header>
  );
}
