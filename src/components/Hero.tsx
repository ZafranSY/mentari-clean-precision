import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional cleaning service in modern office lobby with pristine floors and geometric patterns"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-foreground leading-tight">
            Professional Cleaning Services for Businesses & Homes
            <span className="block text-primary mt-2">Since 1997</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Quiet, methodical cleaning and maintenance — precision you can rely on. 
            Serving Klang Valley & Selangor with ISO-certified quality standards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary font-bold uppercase tracking-wide text-secondary-foreground hover:bg-secondary/90 shadow-premium transition-all duration-300 hover:scale-105 focus-ring"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-ring"
            >
              View Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <span className="font-heading text-sm uppercase tracking-wide font-semibold">ISO Certified</span>
              <span className="text-xs text-muted-foreground text-center">Quality Management Standards</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="font-heading text-sm uppercase tracking-wide font-semibold">Fully Insured</span>
              <span className="text-xs text-muted-foreground text-center">Comprehensive Coverage</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <span className="font-heading text-sm uppercase tracking-wide font-semibold">25+ Years</span>
              <span className="text-xs text-muted-foreground text-center">Trusted Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary/10 to-transparent" />
    </section>
  );
};

export default Hero;