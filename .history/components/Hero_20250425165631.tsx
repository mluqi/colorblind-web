"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import GlitchText from "./GlitchText/GlitchText";
import ScrollVelocity from './ScrollVelocity/ScrollVelocity';
  

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start md:pt-20 bg-transparent text-white relative pt-0"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16">
          {/* Left Content - Adjusted padding-top */}
          <div className="text-left w-full xl:w-1/2 space-y-6 md:space-y-8 z-10 pt-8 md:pt-12">
            <div className="flex flex-col space-y-2">
              <span className="text-red-500 font-medium tracking-wider">
                PREBUILD COIL
              </span>
              <GlitchText
                speed={0.5}
                enableShadows={true}
                enableOnHover={false}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Not Bad for Your Vaping
              </GlitchText>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-lg">
              Bold. Smooth. Just the way it should be.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="text-lg px-8 py-6 rounded-full shadow-lg bg-red-600 hover:bg-red-700 transition-all transform hover:scale-105 text-white font-semibold">
                Shop Now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 rounded-full border-white/30 hover:border-white/50 hover:bg-white/5 transition-all transform hover:scale-105 font-semibold">
                Learn More
              </Button>
            </div>
            
            <div className="pt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>100+ Flavors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Image - Adjusted position */}
          <div className="relative w-full xl:w-1/2 flex justify-center xl:justify-end z-10 mt-8 md:mt-12">
            <div className="relative w-[280px] h-[380px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px]">
              <Image
                src="/assets/colorblind.png"
                alt="Vape Product"
                fill
                priority
                className="object-contain drop-shadow-[0_15px_30px_rgba(255,0,0,0.3)] hover:drop-shadow-[0_20px_40px_rgba(255,0,0,0.4)] transition-all"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;