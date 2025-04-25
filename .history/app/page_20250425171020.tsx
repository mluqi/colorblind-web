import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CoilComparison from "@/components/CoilComparison";
import CoilLifeCalculator from "@/components/CoilLifeCalculator";
import CoilProducts from "@/components/CoilProducts";
import CompatibilityGuide from "@/components/CompatibilityGuide";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <AboutUs />
      <CoilProducts />
      <CoilComparison />
      <CoilLifeCalculator />
      <CompatibilityGuide />
    </div>
  );
}
