import Navigation from "../components/CRE/Navigation";
import HeroSection from '../components/CRE/HeroSection';
import WhyVolumetryx from '../components/CRE/WhyVolumetryx';
import HowItWorks from '../components/CRE/HowItWorks';
import Portfolio from '../components/CRE/Portfolio';
import BusinessUseCases from '../components/CRE/BusinessUseCases';
import Pricing from '../components/CRE/Pricing';
// import Testimonials from '../components/Testimonials';
import Contact from '../components/CRE/Contact';

// 2. Create the HomePage component
export default function RealEstatePage() {
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