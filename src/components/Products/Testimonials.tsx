import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <Quote className="w-12 h-12 text-slate-900 mx-auto mb-8" />
          
          <blockquote className="text-2xl md:text-3xl text-gray-900 mb-8 leading-relaxed max-w-4xl mx-auto">
            "VividSpaces transformed our marketing. The realism is breathtaking and has become our single most impressive client-facing tool."
          </blockquote>
          
          <div className="space-y-2">
            <p className="text-lg text-gray-900">
              Jane Doe
            </p>
            <p className="text-gray-600">
              The Beverly Hills Group
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;