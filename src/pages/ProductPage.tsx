import Navigation from "../components/Products/Navigation";
import HeroSection from '../components/Products/HeroSection';
import WhyVolumetryx from '../components/Products/WhyVolumetryx';
import HowItWorks from '../components/Products/HowItWorks';
import Portfolio from '../components/Products/Portfolio';
import BusinessUseCases from '../components/Products/BusinessUseCases';
import Pricing from '../components/Products/Pricing';
// import Testimonials from '../components/Testimonials';
import Contact from '../components/Products/Contact';

export default function ProductsPage() {
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