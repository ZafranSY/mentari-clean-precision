import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Quality",
      description: "Precision-driven cleaning with attention to every detail. Our ISO-certified processes ensure consistently superior results."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most trusted cleaning partner in Klang Valley, setting the standard for professional maintenance services."
    },
    {
      icon: Heart,
      title: "Our Mission",
      description: "Delivering reliable, methodical cleaning solutions that create healthier environments for businesses and homes."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-4">
            Built on Strong Values
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Since 1997, our commitment to excellence has guided every service we provide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="card-clean text-center group hover:card-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;