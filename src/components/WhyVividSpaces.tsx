import { Eye, Zap, Monitor } from 'lucide-react';

const WhyVividSpaces = () => {
  const advantages = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Total Immersion",
      description: "Our models allow buyers to move freely and naturally anywhere in the space. Look under counters and peek around corners with stunning photorealism that lets you truly experience the feel and flow of the home."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "The Ultimate Content Engine",
      description: "Your property scan is more than a tour; it's a content factory. Generate unlimited high-resolution photos from any angle, cinematic video fly-throughs, and dozens of social media clips, all without a second visit."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Seamless Performance",
      description: "Our 3D experiences are built for the web. They work on desktop and mobile with no special apps required, giving buyers instant access."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
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