import { TrendingUp, Globe, Heart } from 'lucide-react';

const BusinessUseCases = () => {
  const useCases = [
    {
      icon: <TrendingUp className="w-8 h-8"/>,
      title: "Secure More Sales",
      description: "This is how you stand out, reduce returns, and become the go-to brand in your category.",
      benefits: [
        "Differentiate yourself from competitors",
        "Reduce product returns by setting accurate expectations.",
        "Build reputation as a tech-forward, transparent brand.",
        "Increase conversion rates on product pages."
      ]
    },
    {
      icon: <Globe className="w-8 h-8"/>,
      title: "Attract Global Customers",
      description: "You'll attract more qualified buyers, enable faster product iteration, and ensure design and manufacturing alignment.",
      benefits: [
        "Reach international buyer markets with instant visualization.",
        "Enable remote inspection and quality review for manufacturing.",
        "Accelerate the decision-making process for B2B/wholesale buyers.",
        "Provide a precise digital file for virtual try-ons and AR applications."
      ]
    },
    {
      icon: <Heart className="w-8 h-8"/>,
      title: "Showcase Every Detail",
      description: "Perfectly market complex or high-value products and let customers fall in love with the quality, not just the description.",
      benefits: [
        "Highlight material textures and small details.",
        "Create emotional connections through interaction.",
        "Showcase product scale and ergonomics via AR placement.",
        "Market customizable or luxury features effectively."
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            How Our Virtual Experiences Elevate Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your product marketing and design process with technology that delivers measurable results and competitive advantages.
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
              In today's competitive e-commerce landscape, brands who leverage cutting-edge visualization don't just survive—they thrive.
              Volumetryx gives you the tools to command premium pricing, reduce customer confusion, and build a reputation
              for quality that keeps clients coming back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessUseCases;