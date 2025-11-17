import Navigation from "../components/Museum/Navigation";
import HeroSection from '../components/Museum/HeroSection';
import WhyVolumetryx from '../components/Museum/WhyVolumetryx';
import HowItWorks from '../components/Museum/HowItWorks';
import Portfolio from '../components/Museum/Portfolio';
import BusinessUseCases from '../components/Museum/BusinessUseCases';
import Pricing from '../components/Museum/Pricing';
// import Testimonials from '../components/Testimonials';
import Contact from '../components/Museum/Contact';

export default function MuseumPage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WhyVolumetryx />
      <BusinessUseCases />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}