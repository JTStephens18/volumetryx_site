import { Scan, Cpu, PlayCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Scan className="w-8 h-8" />,
      title: "SCAN",
      description: "Our team captures your property using advanced 3D scanning technology, ensuring every corner is documented with precision."
    },
    {
      number: "02", 
      icon: <Cpu className="w-8 h-8" />,
      title: "PROCESS",
      description: "We transform the raw scan data into a stunning Gaussian Splat model using cutting-edge AI and proprietary algorithms."
    },
    {
      number: "03",
      icon: <PlayCircle className="w-8 h-8" />,
      title: "EXPERIENCE",
      description: "Your clients get instant access to an immersive 3D experience that works seamlessly across all devices and platforms."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            From Physical Space to Digital Twin in Three Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures rapid delivery without compromising on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="text-6xl text-gray-200 mb-4">
                    {step.number}
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white w-16 h-16 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl mb-4 text-gray-900 mt-8">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-12 flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="absolute right-0 w-2 h-2 bg-gray-300 transform rotate-45 translate-x-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;