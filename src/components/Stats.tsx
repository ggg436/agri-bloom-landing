
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Farmers",
      description: "Trust our platform daily"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "Worldwide presence"
    },
    {
      icon: TrendingUp,
      number: "35%",
      label: "Average Yield Increase",
      description: "Across all crops"
    },
    {
      icon: Award,
      number: "15+",
      label: "Industry Awards",
      description: "For innovation excellence"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Proven Results Across the Globe
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join thousands of farmers who have transformed their operations with our technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-green-100 mb-2">{stat.label}</div>
                <div className="text-green-200 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
