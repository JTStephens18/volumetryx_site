import Navigation from '../components/Navigation';
import ReHeroSection from '../components/ReHeroSection';
import ReWhyVolumetryx from '../components/ReWhyVolumetryx';
import ReHowItWorks from '../components/ReHowItWorks';
import RePortfolio from '../components/RePortfolio';
import ReBusinessUseCases from '../components/ReBusinessUseCases';
import RePricing from '../components/RePricing';
import Testimonials from '../components/Testimonials';
import ReContact from '../components/ReContact';

// 2. Create the HomePage component
export default function RealEstatePage() {
  return (
    <>
      <Navigation />
      <ReHeroSection />
      <ReWhyVolumetryx />
      <ReBusinessUseCases />
      <ReHowItWorks />
      <RePortfolio />
      {/* <RePricing /> */}
      {/* <Testimonials /> */}
      <ReContact />
    </>
  );
}