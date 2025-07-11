
import { Cpu, Droplets, BarChart3, Smartphone, Satellite, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze crop data to provide actionable insights for optimal farming decisions."
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated irrigation systems that optimize water usage based on soil moisture, weather forecasts, and crop needs."
    },
    {
      icon: BarChart3,
      title: "Yield Prediction",
      description: "Accurate harvest forecasting using historical data, weather patterns, and real-time field conditions."
    },
    {
      icon: Smartphone,
      title: "Mobile Monitoring",
      description: "Complete farm management from your smartphone with real-time alerts and remote monitoring capabilities."
    },
    {
      icon: Satellite,
      title: "Satellite Imaging",
      description: "High-resolution satellite imagery for crop health monitoring, pest detection, and field mapping."
    },
    {
      icon: Shield,
      title: "Crop Protection",
      description: "Early warning systems for diseases, pests, and adverse weather conditions to protect your investment."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge Technology for
            <span className="text-green-600 block">Modern Agriculture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines the latest in agricultural technology 
            to help farmers make data-driven decisions and maximize their success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <feature.icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
