import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductGallery from "@/components/ProductGallery";
import SpecsSection from "@/components/SpecsSection";
import SizeGuide from "@/components/SizeGuide";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CheckoutHandler from "@/components/CheckoutHandler";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CheckoutHandler />
      <HeroSection />
      <FeaturesSection />
      <ProductGallery />
      <SpecsSection />
      <SizeGuide />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
