import AboutHero from "../components/about/AboutHero";
import WhatIsAba from "../components/about/WhatIsAba";
import AbcsOfAba from "../components/about/AbcsOfAba";
import WhoQualifies from "../components/about/WhoQualifies";
import ProgramCardsSlider from "../components/about/ProgramCardsSlider";
import ServiceLocations from "../components/about/ServiceLocations";
import NextSteps from "../components/about/NextSteps";
import AutismResources from "../components/about/AutismResources";
import ContactCta from "../components/about/ContactCta";
import usePageMeta from "../utils/usePageMeta";

export default function AboutAbaTherapy() {
  usePageMeta("About ABA Therapy Services at BlueSprig", "t-default t-page p-about-aba-therapy");

  return (
    <main className="o-main" id="content">
      <AboutHero />
      <WhatIsAba />
      <AbcsOfAba />
      <WhoQualifies />
      <ProgramCardsSlider />
      <ServiceLocations />
      <NextSteps />
      <AutismResources />
      <ContactCta />
    </main>
  );
}
