import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WhyVividSpaces from './components/WhyVividSpaces';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import BusinessUseCases from './components/BusinessUseCases';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyVividSpaces />
      <BusinessUseCases />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}