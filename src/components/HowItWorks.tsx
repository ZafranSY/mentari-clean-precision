import { Phone, FileText, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Contact Us",
      description: "Reach out via phone, WhatsApp, or our contact form. We'll discuss your cleaning requirements and schedule a consultation."
    },
    {
      number: "02",
      icon: FileText,
      title: "Custom Quote",
      description: "We assess your space and provide a detailed, transparent quote tailored to your specific needs and budget."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Professional Service",
      description: "Our certified team delivers exceptional cleaning using proven methods and eco-friendly products for guaranteed results."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-4">
            How It Works
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Simple, straightforward process to get your space professionally cleaned
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-primary to-primary opacity-30" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg shadow-clean group-hover:shadow-premium transition-all duration-300">
                  {step.number}
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-primary/10 scale-110 group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-background border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-sm text-muted-foreground mb-4">
            Ready to get started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+60123456789"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide rounded hover:bg-primary/90 focus-ring transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-wide rounded focus-ring transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;