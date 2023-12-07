// components/HeroSection.tsx

import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  backgroundImageSrc: string; // The path to the AI-generated background image
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImageSrc }) => {
  return (
    <div className="relative text-white">
      <div className="bg-primary-blue bg-opacity-30 absolute inset-0 z-0">
        <Image
          src={backgroundImageSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Frontend Engineer Workspace"
          className="opacity-60"
        />
        <div className="backdrop-filter backdrop-blur-sm border border-light-grey border-opacity-50" />
      </div>
      <div className="relative z-10 flex flex-col justify-center h-screen px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ubuntu-mono font-bold mb-4">
            Empowering the Future: Innovating a World Where Technology and
            Humanity Converge for a Brighter Tomorrow
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
