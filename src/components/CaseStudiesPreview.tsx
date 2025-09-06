import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import caseStudyOffice from "@/assets/case-study-office.jpg";
import caseStudyHome from "@/assets/case-study-home.jpg";

const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      id: 1,
      image: caseStudyOffice,
      title: "Corporate Tower Deep Clean",
      location: "Kuala Lumpur CBD",
      challenge: "25-floor office building requiring comprehensive sanitization and maintenance",
      result: "99% client satisfaction, 40% reduction in cleaning time through systematic approach",
      metrics: [
        { icon: TrendingUp, label: "Efficiency", value: "40% faster" },
        { icon: Clock, label: "Completion", value: "3 days" },
        { icon: Users, label: "Satisfaction", value: "99%" }
      ]
    },
    {
      id: 2,
      image: caseStudyHome,
      title: "Luxury Condominium",
      location: "Mont Kiara, KL",
      challenge: "Post-renovation cleanup for high-end residential complex",
      result: "Pristine handover condition, repeat contract secured for ongoing maintenance",
      metrics: [
        { icon: TrendingUp, label: "Quality Score", value: "A+" },
        { icon: Clock, label: "Timeline", value: "On schedule" },
        { icon: Users, label: "Referrals", value: "12 units" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-4">
            Proven Results
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Real projects, measurable outcomes. See how we deliver excellence for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study) => (
            <Card key={study.id} className="card-clean group hover:card-premium transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={`Case study: ${study.title} showing before and after cleaning transformation`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium uppercase tracking-wide">{study.location}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground mb-2">
                  {study.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Challenge</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Result</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.result}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {study.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center w-8 h-8 mx-auto mb-1 rounded-full bg-primary/10">
                        <metric.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-xs font-semibold text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-ring"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;