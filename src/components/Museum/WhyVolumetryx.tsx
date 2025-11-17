import { Eye, Zap, Monitor } from 'lucide-react';

const WhyVolumetryx = () => {
  const advantages = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "True-to-Life Immersion",
      description: "Our models capture every detail, subtle texture, material, and geometry. Create a permanent digital record for conservation, condition tracking, and digital restoration."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "The Global Digital-First Exhibit",
      description: "Bring your archives out of the vault. Make 100% of your collection accessible to a global audience of researchers, students, and patrons, 24/7."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Interactive Storytelling",
      description: "Embed digital twins directly into your site. Build immersive virtual tours, interactive lesson plans, and next-generation in-gallery experiences that captivate visitors."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            Unlock Your Collection. Engage the World.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary 3D technology that transforms how cultural artifacts are preserved, studied, and shared.
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