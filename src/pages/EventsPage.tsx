import Navigation from "../components/Events/Navigation";
import HeroSection from '../components/Events/HeroSection';
import WhyVolumetryx from '../components/Events/WhyVolumetryx';
import HowItWorks from '../components/Events/HowItWorks';
import Portfolio from '../components/Events/Portfolio';
import BusinessUseCases from '../components/Events/BusinessUseCases';
import Pricing from '../components/Events/Pricing';
// import Testimonials from '../components/Testimonials';
import Contact from '../components/Events/Contact';

export default function EventsPage() {
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