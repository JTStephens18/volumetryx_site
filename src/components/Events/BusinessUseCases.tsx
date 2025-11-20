import { TrendingUp, Globe, Heart } from 'lucide-react';

const BusinessUseCases = () => {
  const useCases = [
    {
      icon: <TrendingUp className="w-8 h-8"/>,
      title: "Secure Higher Design Fees.",
      description: "This is how you stands out and justify premium service fees by eliminating visualization risk.",
      benefits: [
        "Differentiate yourself from competitors",
        "Justify premium rates by offering unparalleled visualization",
        "Build reputation as a tech-forward provider",
        "Increase booking success rates by letting clients feel the space"
      ]
    },
    {
      icon: <Globe className="w-8 h-8"/>,
      title: "Attract Destination Clients",
      description: "Attract high-value, remote clients, eliminate time wasted on unnecessary site visits, and align vendor expectations weeks sooner.",
      benefits: [
        "Reach international or destination markets easily",
        "Accelerate decision-making by providing full spatial context remotely",
        "Streamline vendor coordination pre-event",
        "Reduce unnecessary site visits and associated costs"
      ]
    },
    {
      icon: <Heart className="w-8 h-8"/>,
      title: "Showcase Every Detail",
      description: "Perfectly market unique experiences and let clients explore every aspect of your venue before they book.",
      benefits: [
        "Highlight venue ambiance and unique features",
        "Create emotional connections with potential clients",
        "Visually confirm custom design concepts in advance",
        "Empower planners to accurately test flow and seating layouts"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            How Our Digital Twins Elevate Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your sales process and planning efficiency with technology that delivers measurable results and competitive advantages.
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
              In today's experience-driven market, venues and designers who leverage cutting-edge technology don't just survive—they thrive. 
              Volumetryx gives you the tools to command higher booking rates, save planning hours, and build a reputation 
              for flawless execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessUseCases;