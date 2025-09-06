import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Wrench, ArrowRight } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office cleaning, maintenance, and facility management for businesses of all sizes.",
      features: ["Daily office cleaning", "Floor maintenance", "Window cleaning", "Sanitization"]
    },
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services for apartments, condominiums, and landed properties.",
      features: ["Deep house cleaning", "Regular maintenance", "Move-in/out cleaning", "Post-renovation cleanup"]
    },
    {
      icon: Wrench,
      title: "Specialized Services",
      description: "Expert cleaning for unique environments requiring specialized techniques and equipment.",
      features: ["Industrial cleaning", "High-rise external", "Carpet cleaning", "Pressure washing"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive cleaning solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="card-clean group hover:card-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-ring"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-secondary font-bold uppercase tracking-wide text-secondary-foreground hover:bg-secondary/90 shadow-premium focus-ring"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;