import { TrendingUp, Globe, Heart } from 'lucide-react';

const BusinessUseCases = () => {
  const useCases = [
    {
      icon: <TrendingUp className="w-8 h-8"/>,
      title: "For Curators & Archivists",
      description: "Preserve your collection with permanent digital records that enable remote research and long-term conservation tracking.",
      benefits: [
        "Create permanent, non-degrading digital records",
        "Enable remote, non-invasive research and study",
        "Track artifact condition over time",
        "Digitally reconstruct damaged or incomplete objects"
      ]
    },
    {
      icon: <Globe className="w-8 h-8"/>,
      title: "For Educators & Outreach",
      description: "Transform your collection into interactive educational content to engage a global audience and make hidden archives accessible to all.",
      benefits: [
        "Reach a global student and patron base",
        "Develop interactive online learning materials",
        "Create virtual hands-on artifact studies",
        "Make hidden collections visible to the public"
      ]
    },
    {
      icon: <Heart className="w-8 h-8"/>,
      title: "For Directors & Exhibit Designers",
      description: "Innovate the visitor experience, visualize new exhibits in 3D, and develop new digital revenue streams to attract a modern audience.",
      benefits: [
        "Design new revenue streams (digital tickets/assets)",
        "Plan and visualize new exhibits in 3D",
        "Attract tech-savvy patrons and donors",
        "Supplement physical exhibits with digital layers"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            How Our Digital Twins Advance Your Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your institution with technology that delivers new avenues for research, education, and public outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-br from-blue-600 to-slate-900 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {useCase.icon}
                </div>
                
                <h3 className="text-xl mb-4 text-gray-900">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="mt-auto">
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl mb-4 text-gray-900">
              The Bottom Line
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              In today's connected world, institutions that make their collections accessible don't just preserve history, they shape its future.
              Volumetryx gives you the tools to safeguard your artifacts permanently, engage a global audience, 
              and build a sustainable model that secures your legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessUseCases;