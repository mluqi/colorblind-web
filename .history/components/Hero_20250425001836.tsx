

import Image from "next/image";
import GlitchText from "@/components/GlitchText/GlitchText";
import FuzzyText from "@/components/FuzzyText/FuzzyText";

const hoverIntensity = 0.1;
const enableHover = true;

const Hero = () => {
  return (
    <section id="home" className="h-full xl:pt-8 pb-8">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 pt-6 xl:gap-10">
          <div className="text-center xl:text-left xl:order-none">
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={hoverIntensity}
              enableHover={enableHover}
            >
              404
            </FuzzyText>
          </div>

          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
