import { Eye, Zap, Monitor } from 'lucide-react';

const WhyVividSpaces = () => {
  const advantages = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Unparalleled Realism",
      description: "Our Gaussian Splatting technology captures every detail with photorealistic accuracy that traditional photography simply cannot match."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Total Immersion",
      description: "Buyers can explore properties as if they're physically there, creating emotional connections that drive faster decisions."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Seamless Performance",
      description: "Web and mobile compatible with lightning-fast loading times. No apps, no downloads - just instant access to stunning 3D spaces."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            A Clearer Picture. A Faster Sale.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary 3D technology that transforms how properties are showcased and sold.
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

export default WhyVividSpaces;