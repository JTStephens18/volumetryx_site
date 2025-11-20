// import Navigation from './components/Navigation';
// import HeroSection from './components/HeroSection';
// import WhyVividSpaces from './components/WhyVividSpaces';
// import HowItWorks from './components/HowItWorks';
// import Portfolio from './components/Portfolio';
// import ReBusinessUseCases from './components/ReBusinessUseCases';
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RealEstatePage from './pages/RealEstatePage';
import CommercialRealEstatePage from './pages/CommercialRealEstatePage';
import MuseumPage from './pages/MuseumPage';
import ProductsPage from './pages/ProductPage';
import EventsPage from "./pages/EventsPage";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/re" element={<RealEstatePage />} />
        <Route path="/cre" element={<CommercialRealEstatePage />} />
        <Route path="/museum" element={<MuseumPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/venues" element={<EventsPage />} />
      </Routes>
    </div>
  );
}