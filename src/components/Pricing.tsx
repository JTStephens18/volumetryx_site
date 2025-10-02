import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
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
      name: "Essential",
      price: "$995",
      subtitle: "Starting at",
      description: "Ideal for standard homes and condos.",
      features: [
        "Up to 3,000 sq ft",
        "High-Fidelity 3D Model",
        "Web & Mobile Compatible", 
        "Standard Hosting",
        "High-Resolution 4K Video Fly-through"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Premium",
      price: "$1,795", 
      subtitle: "Starting at",
      description: "The perfect solution for luxury homes and large properties.",
      features: [
        "Up to 8,000 sq ft",
        "Everything in Essential, plus:",
        "Branded Virtual Tour",
        "Schematic Floor Plan Generation",
        "Dedicated Account Manager"
      ],
      popular: true,
      buttonText: "Get Started",
      buttonVariant: "default" as const
    },
    {
      name: "Bespoke / Enterprise",
      price: "Custom Quote",
      subtitle: "",
      description: "For developers, architects, and portfolio clients.",
      features: [
        "Unlimited Scale",
        "Everything in Premium, plus:",
        "Multi-Property Packages",
        "API Access for Custom Integrations",
        "Pre-Construction Visualization"
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
            Transparent Pricing for Uncompromising Quality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the package that best fits your property's scale and ambition.
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
            All packages include comprehensive support and training. 
            <br />
            Custom solutions available for unique requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;