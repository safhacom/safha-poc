import React from "react";
import Image from "next/image";
//import { SearchBar } from './SearchBar'; // Make sure to create this component

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage }) => {
  return (
    <div className="relative h-screen flex flex-col justify-between">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt="Luxurious Home"
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F0F2F5]/30"></div>
      </div>
      <div className="z-10 p-8"></div>
      <div className="z-10 p-8 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2E4053]">
          Building Dreams, Creating Futures
        </h1>
        <p className="text-xl md:text-3xl text-[#5D6D7E]">
          Your Journey to the Perfect Home Begins Here!
        </p>
        <button className="bg-[#1ABC9C] text-white font-bold py-2 px-4 rounded hover:bg-[#17a589] transition-colors">
          View Listings
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
