import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";
import logoSuriaMentari from "@/assets/logo-suria-mentari.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Quality", href: "/quality" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={logoSuriaMentari} 
            alt="Suria Mentari logo - geometric fan with teal and maroon rays" 
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold uppercase tracking-wider text-foreground">
              Suria Mentari
            </span>
            <span className="text-xs text-muted-foreground">Since 1997</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-body text-sm font-medium text-foreground transition-colors hover:text-primary focus-ring"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="focus-ring">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
          <Button className="bg-secondary font-bold uppercase tracking-wide text-secondary-foreground hover:bg-secondary/90 focus-ring">
            Contact Us Today
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-2">
          <Button variant="outline" size="sm" className="focus-ring">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="focus-ring">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src={logoSuriaMentari} 
                    alt="Suria Mentari logo" 
                    className="h-8 w-8 object-contain"
                  />
                  <span className="font-heading text-lg font-bold uppercase tracking-wider">
                    Suria Mentari
                  </span>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-body text-lg text-foreground transition-colors hover:text-primary focus-ring"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                
                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button variant="outline" className="justify-start focus-ring">
                    <Phone className="mr-3 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button className="bg-secondary font-bold uppercase tracking-wide text-secondary-foreground hover:bg-secondary/90 focus-ring">
                    Contact Us Today
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;