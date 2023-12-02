// components/HeroSection.tsx
import Image from "next/image"
import React from "react"

interface HeroSectionProps {
  backgroundImageSrc: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImageSrc }) => {
  return (
    <div className="relative text-royalblue-500 font-ubuntu-mono overflow-hidden">
      <div className="bg-peach-400 bg-opacity-10 border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            I change the world through writing computer understood art that
            empowers people's lives
          </h1>
        </div>
      </div>

      <div className="relative h-64 md:h-[600px] w-full">
        <Image
          src={backgroundImageSrc}
          alt="AI Generated Frontend Workspace"
          layout="fill"
          objectFit="cover"
          className="opacity-60 object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-200"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
    </div>
  )
}

export default HeroSection
