import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CoilComparison from "@/components/CoilComparison";
import CoilLifeCalculator from "@/components/CoilLifeCalculator";
import CoilProducts from "@/components/CoilProducts";
import CompatibilityGuide from "@/components/CompatibilityGuide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <CoilProducts />
      <CoilComparison />
      <CoilLifeCalculator />
      <CompatibilityGuide />
      <AboutUs />
    </div>
  );
}
