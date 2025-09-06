import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield } from "lucide-react";
import logoSuriaMentari from "@/assets/logo-suria-mentari.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Quality Control", href: "/quality" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Us", href: "/about" },
  ];

  const services = [
    { name: "Commercial Cleaning", href: "/services/commercial" },
    { name: "Residential Cleaning", href: "/services/residential" },
    { name: "Specialized Services", href: "/services/specialized" },
    { name: "Maintenance Contracts", href: "/services/contracts" },
  ];

  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary via-secondary to-secondary/90">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-secondary-foreground mb-4">
            Ready for Professional Cleaning?
          </h2>
          <p className="font-body text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover why businesses and homeowners trust Suria Mentari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary focus-ring font-bold uppercase tracking-wide"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +60 12-345 6789
            </Button>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-ring font-bold uppercase tracking-wide"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoSuriaMentari} 
                  alt="Suria Mentari logo" 
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <span className="font-heading text-lg font-bold uppercase tracking-wider">
                    Suria Mentari
                  </span>
                  <div className="text-xs text-background/70">Since 1997</div>
                </div>
              </div>
              <p className="font-body text-sm text-background/80 leading-relaxed">
                Professional cleaning and maintenance services serving Klang Valley & Selangor with precision and reliability.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-background/80">ISO Certified • Fully Insured</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-background">+60 12-345 6789</div>
                    <div className="text-background/70">Mon-Fri 8:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-background">info@suriamentari.com</div>
                    <div className="text-background/70">24/7 Email Support</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-background">Klang Valley & Selangor</div>
                    <div className="text-background/70">Service Area</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                Quick Links
              </h3>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-background/80 hover:text-primary transition-colors focus-ring"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                Our Services
              </h3>
              <nav className="space-y-2">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-sm text-background/80 hover:text-primary transition-colors focus-ring"
                  >
                    {service.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-background/70">
                © {currentYear} Suria Mentari. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="/privacy" className="text-background/70 hover:text-primary transition-colors focus-ring">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-background/70 hover:text-primary transition-colors focus-ring">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;