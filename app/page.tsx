import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CoilComparison from "@/components/CoilComparison";
import CoilLifeCalculator from "@/components/CoilLifeCalculator";
import CoilProducts from "@/components/CoilProducts";
import CompatibilityGuide from "@/components/CompatibilityGuide";
import ContactUs from "@/components/Contactus";
import StoreSlider from "@/components/StoreSlider";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutUs />
      <CoilProducts />
      <StoreSlider />
      {/* <CoilComparison /> */}
      <CoilLifeCalculator />
      <CompatibilityGuide />
      <ContactUs />
    </div>
  );
}
