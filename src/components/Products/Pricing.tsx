import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      name: "Digital Showcase",
      price: "$199",
      subtitle: "Starting at",
      description: "Standard e-commerce listings needing interaction",
      features: [
        "Link to a High-Fidelity, interactive 3D Model",
        "Up to 15 High-Resolution Renders", 
        "Standard Hosting",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Marketing Powerhouse",
      price: "$349", 
      subtitle: "Starting at",
      description: "Flagship products requiring maximum impact",
      features: [
        "Everything in Digital Listing, plus:",
        "Up to 30 High-Resolution Photos",
        "One 30-Second Video Spin/Fly Around",
        "Augmented Reality (AR) Ready Model",
      ],
      popular: true,
      buttonText: "Get Started",
      buttonVariant: "default" as const
    },
    {
      name: "Bespoke / Enterprise",
      price: "Custom Quote",
      subtitle: "",
      description: "Catalog roll-outs, complex products, and unique needs",
      features: [
        "Everything in Marketing Powerhouse, plus:",
        "Digital Twin File",
        "Customs material / texture swaps",
        "Batch pricing models",
      ],
      popular: false,
      buttonText: "Contact Us",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            The All-in-One package for Every Listing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the solution that best fits your marketing needs. Simple, transparent pricing for a superior product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 ${
                pkg.popular 
                  ? 'border-2 border-slate-900 shadow-xl' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl mb-2 text-gray-900">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  {pkg.subtitle && (
                    <span className="text-sm text-gray-500">{pkg.subtitle} </span>
                  )}
                  <span className="text-3xl text-gray-900">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className={`text-sm ${
                      feature.includes('Everything in') ? 'text-gray-900' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={scrollToContact}
                variant={pkg.buttonVariant}
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-slate-900 hover:bg-slate-800 text-white' 
                    : ''
                }`}
              >
                {pkg.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All packages include comprehensive support. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;