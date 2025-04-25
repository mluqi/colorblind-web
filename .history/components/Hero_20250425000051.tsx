import Image from "next/image";
import GlitchText from "@/components/GlitchText/GlitchText";

const Hero = () => {
  return (
    <section id="home" className="h-full xl:pt-8 pb-8">
      <div className="container mx-auto h-full">
        <div className="">
          <div className="">
            <GlitchText
              className="text-4xl font-bold"
            >
              Not Bad for Your Vaping
            </GlitchText>
          </div>

          <div className="">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
