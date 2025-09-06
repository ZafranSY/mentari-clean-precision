import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValuesSection from "@/components/ValuesSection";
import ServicesPreview from "@/components/ServicesPreview";
import HowItWorks from "@/components/HowItWorks";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded focus-ring z-50"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content">
        <Hero />
        <ValuesSection />
        <ServicesPreview />
        <HowItWorks />
        <CaseStudiesPreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;