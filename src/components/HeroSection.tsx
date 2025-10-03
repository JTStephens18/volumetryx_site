import { ImageWithFallback } from './figma/ImageWithFallback';
import { Application, Entity } from '@playcanvas/react'
import { Camera, GSplat, Script } from '@playcanvas/react/components'
// import { CameraControls } from 'playcanvas/scripts/esm/camera-controls.mjs'
import { useSplat } from '@playcanvas/react/hooks'

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

  function ToyCat() {
    // const { asset } = useSplat('https://developer.playcanvas.com/assets/toy-cat.sog');
    const { asset } = useSplat('https://superspl.at/view?id=99dbe907');
    if (!asset) return null;

    return (
        <Entity position={[0, -0.7, 0]} rotation={[0, 0, 180]}>
            <GSplat asset={asset} />
        </Entity>
    );
}

  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background */}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
          Experience Real Estate in a <span className="text-blue-600">New Dimension</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Transform properties into immersive 3D experiences that sell faster and showcase every detail with stunning realism.
        </p>

        {/* Interactive 3D Model Placeholder */}
        <div className="relative">
          <div className="w-full max-w-2xl mx-auto aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg border-2 border-blue-600 backdrop-blur-sm flex items-center justify-center">
            {/* <Application graphicsDeviceOptions={{ antialias: false }} >
              <Entity name="Camera" position={[0, 0, 2.5]}>
                  <Camera />
                  <Script script={CameraControls} />
              </Entity>
              <ToyCat />
          </Application> */}
          {/* <iframe id="viewer" width="800" height="500" allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=99dbe907"></iframe> */}
          {/* <iframe id="viewer" width="800" height="500" allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=20f257fe"></iframe> */}
          <iframe id="viewer" className="w-full h-full rounded-lg" allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=32bcdb1d"></iframe>
          </div>
        </div>
        {/* <button 
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors"
        >
          Schedule a Demo
        </button> */}
      </div>

      {/* Trusted By Section */}
      {/* <div className="absolute bottom-8 left-0 right-0 z-10">
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
      </div> */}
    </section>
  );
};

export default HeroSection;