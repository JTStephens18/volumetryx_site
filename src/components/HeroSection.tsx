import { ImageWithFallback } from './figma/ImageWithFallback';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustedByLogos = [
    "Sotheby's", "Coldwell Banker", "Re/Max", "Century 21", "Keller Williams"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1706809019104-02d83b4541ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yJTIwM0R8ZW58MXx8fHwxNzU5NDE3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury modern house interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
          Experience Real Estate in a <span className="text-blue-400">New Dimension</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Transform properties into immersive 3D experiences that sell faster and showcase every detail with stunning realism.
        </p>

        {/* Interactive 3D Model Placeholder */}
        <div className="relative mb-12">
          <div className="w-full max-w-2xl mx-auto h-64 md:h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg border border-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-white/80">Interactive 3D Model</p>
              <p className="text-sm text-white/60">Click and drag to explore</p>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors"
        >
          Schedule a Demo
        </button>
      </div>

      {/* Trusted By Section */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-white/60 mb-4">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedByLogos.map((logo, index) => (
              <div key={index} className="text-white/80 px-4 py-2 border border-white/20 rounded-md backdrop-blur-sm">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;