import HeroBanner from "../components/HeroBanner";
import AbaIntroCta from "../components/AbaIntroCta";
import ProgramCards from "../components/ProgramCards";
import GrowthPathwayCta from "../components/GrowthPathwayCta";
import SupportYouCanTrust from "../components/SupportYouCanTrust";
import WhyFamiliesChoose from "../components/WhyFamiliesChoose";
import ServiceSettings from "../components/ServiceSettings";
import HowAbaWorks from "../components/HowAbaWorks";
import QuestionsCta from "../components/QuestionsCta";
import GetStartedCta from "../components/GetStartedCta";
import ReasonsAndTestimonials from "../components/ReasonsAndTestimonials";
import InsuranceLogos from "../components/InsuranceLogos";
import FeaturedPosts from "../components/FeaturedPosts";
import FindServicesCta from "../components/FindServicesCta";
import usePageMeta from "../utils/usePageMeta";

export default function Home() {
  usePageMeta("BlueSprig | ABA Therapy & Autism Treatment Centers", "p-home t-home t-page");

  return (
    <main className="o-main" id="content">
      <HeroBanner />
      <AbaIntroCta />
      <ProgramCards />
      <GrowthPathwayCta />
      <SupportYouCanTrust />
      <WhyFamiliesChoose />
      <ServiceSettings />
      <HowAbaWorks />
      <QuestionsCta />
      <GetStartedCta />
      <ReasonsAndTestimonials />
      <InsuranceLogos />
      <FeaturedPosts />
      <FindServicesCta />
    </main>
  );
}
