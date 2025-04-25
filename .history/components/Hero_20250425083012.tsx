"use client"

import Image from "next/image";
import FuzzyText from "@/components/FuzzyText/FuzzyText";
import { Button } from "@/components/ui/button";

const hoverIntensity = 0.1;
const enableHover = true;

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <div className="container mx-auto px-6 xl:px-20">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="text-center xl:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
              >
                Not Bad
              </FuzzyText>
              <br />
              <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
                className="text-accent"
              >
                for Your Vaping
              </FuzzyText>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-80">
              Experience the next level of vaping with stylish design and bold flavor.
            </p>
            <Button className="text-lg px-6 py-3 rounded-full shadow-md bg-white text-black hover:bg-gray-200 transition">
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative w-[280px] h-[380px] md:w-[400px] md:h-[500px]">
            <Image
              src="/images/vape-product.png"
              alt="Vape Product"
              layout="fill"
              objectFit="contain"
              priority
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
