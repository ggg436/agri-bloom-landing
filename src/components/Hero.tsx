
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Sprout } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-green-600">
          <Leaf size={120} />
        </div>
        <div className="absolute bottom-32 right-32 text-green-600">
          <Sprout size={100} />
        </div>
        <div className="absolute top-1/2 left-1/3 text-green-600">
          <Leaf size={80} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sprout size={16} />
                Smart Agriculture Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Growing the Future with
                <span className="text-green-600 block">Smart Technology</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Revolutionize your farming with AI-powered insights, precision agriculture, 
                and sustainable solutions that increase yields while protecting our planet.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Farms Connected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">25%</div>
                <div className="text-sm text-gray-600">Yield Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">30%</div>
                <div className="text-sm text-gray-600">Water Savings</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8 h-96 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern farming with technology" 
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -left-6 top-16 bg-white rounded-lg shadow-lg p-4 border border-green-100">
              <div className="text-green-600 font-semibold">Soil Health</div>
              <div className="text-2xl font-bold text-gray-900">94%</div>
              <div className="text-xs text-gray-500">Optimal</div>
            </div>
            
            <div className="absolute -right-6 bottom-16 bg-white rounded-lg shadow-lg p-4 border border-blue-100">
              <div className="text-blue-600 font-semibold">Water Usage</div>
              <div className="text-2xl font-bold text-gray-900">-30%</div>
              <div className="text-xs text-gray-500">This Season</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
