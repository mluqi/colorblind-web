import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CoilComparison from "@/components/CoilComparison";


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
