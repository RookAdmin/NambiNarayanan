import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import BiographySection from "@/components/BiographySection";
import CareerSection from "@/components/CareerSection";
import EspionageCaseSection from "@/components/EspionageCaseSection";
import GallerySection from "@/components/GallerySection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Tribute to Nambi Narayanan | Indian Space Pioneer";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A tribute to Nambi Narayanan, the renowned Indian scientist and aerospace engineer who made significant contributions to ISRO before facing false espionage charges."
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "A tribute to Nambi Narayanan, the renowned Indian scientist and aerospace engineer who made significant contributions to ISRO before facing false espionage charges.";
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="font-sans text-foreground bg-background">
      <Header />
      <HeroSection />
      <QuoteSection />
      <BiographySection />
      <CareerSection />
      <EspionageCaseSection />
      <GallerySection />
      <ResourcesSection />
      <Footer />
    </div>
  );
}
