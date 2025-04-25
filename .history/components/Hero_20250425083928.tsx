"use client"

import Image from "next/image";
import FuzzyText from "@/components/FuzzyText/FuzzyText";
import { Button } from "@/components/ui/button"
import GlitchText from "./GlitchText/GlitchText";

const hoverIntensity = 0.1;
const enableHover = true;

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center bg-black text-white"
    >
      <div className="container mx-auto px-6 xl:px-20">
        <div className="flex flex-col xl:flex-row xl:items-start items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="text-left xl:max-w-2xl w-full">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              <FuzzyText
                baseIntensity={0.3}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
              >
                Not Bad
              </FuzzyText>
              <br />
              <FuzzyText
                baseIntensity={0.3}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
              >
                for Your Vaping
              </FuzzyText>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              Bold. Smooth. Just the way it should be.
            </p>
            <Button className="text-lg px-6 py-3 rounded-full shadow-md bg-red-600 hover:bg-red-700 transition text-white">
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative w-[280px] h-[380px] md:w-[400px] md:h-[500px]">
            <Image
              src="/assets/hero.png"
              alt="Vape Product"
              layout="fill"
              objectFit="contain"
              priority
              className="drop-shadow-[0_10px_20px_rgba(255,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
