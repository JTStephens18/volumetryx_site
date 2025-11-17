import { TrendingUp, Globe, Heart } from 'lucide-react';

const BusinessUseCases = () => {
  const useCases = [
    {
      icon: <TrendingUp className="w-8 h-8"/>,
      title: "Win More Mandates",
      description: "This is how you stand out, justify your commission, and become the go-to agent in your market.",
      benefits: [
        "Differentiate yourself from competitors",
        "Justify advisory fees",
        "Build reputation as a tech-forward firm",
        "Increase pitch presentation success rates"
      ]
    },
    {
      icon: <Globe className="w-8 h-8"/>,
      title: "Attract Global Capital",
      description: "You'll attract more qualified buyers, waste less time on pointless showings, and close deals weeks sooner.",
      benefits: [
        "Reach international investors & tenants",
        "Shorten the due diligence process",
        "Accelerate decision-making",
        "Enable remote fit-out planning & measurement"
      ]
    },
    {
      icon: <Heart className="w-8 h-8"/>,
      title: "Market Complex Assets",
      description: "Perfectly market unique properties and let their strengths shine through to the right audience.",
      benefits: [
        "Perfectly showcase industrial utility",
        "Highlight complex MEP systems",
        "Showcase property flow and layout",
        "Market unique architectural features"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            How Our Digital Twins Elevate Your Brokerage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your CRE practice with technology that delivers measurable ROI and a clear competitive advantage.
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
              In today's competitive market, agents who leverage cutting-edge technology don't just survive—they thrive. 
              Volumetryx gives you the tools to command higher commissions, close deals faster, and build a reputation 
              that keeps clients coming back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessUseCases;