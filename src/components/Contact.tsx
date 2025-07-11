
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform 
              <span className="text-green-600 block">Your Farm?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of farmers who have already revolutionized their operations. 
              Get started with a free consultation and see how our technology can work for you.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-600">hello@agritech.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Visit Us</div>
                  <div className="text-gray-600">123 AgriTech Drive, Silicon Valley, CA</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">
                Schedule a 30-minute call with our agriculture experts to discuss your specific needs and see a personalized demo.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Size (acres)
                  </label>
                  <Input placeholder="e.g., 100" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Crops
                  </label>
                  <Input placeholder="e.g., Corn, Soybeans, Wheat" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your farming goals
                  </label>
                  <Textarea 
                    placeholder="I'm interested in improving yield, reducing costs, implementing sustainable practices..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg group">
                  Request Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
