import { Eye, Zap, Monitor } from 'lucide-react';

const WhyVolumetryx = () => {
  const advantages = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Total Utility & Immersion",
      description: "Enable stakeholders, tenants, and engineers to conduct virtual walk-throughs, verify conditions, and plan tenant improvements with 1:1 photorealistic accuracy."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "The As-Built Data Hub",
      description: "Your property scan is a data factory. Extract unlimited hi-res photos, generate detailed as-built floor plans, and get precise measurements for BOMA calculations."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Seamless Performance",
      description: "Our 3D experiences are built for the web. They work on desktop and mobile with no special apps required, giving investors instant access."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            Actionable Data. Accelerated Deals.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary 3D technology that transforms how commercial properties are leased, managed, and sold.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl mb-4 text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVolumetryx;