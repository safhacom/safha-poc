import HeroSection from "@/components/HeroSection"
import NavigationHeader from "@/components/NavigationHeader"

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <HeroSection backgroundImageSrc="/ai-background.png" />
    </>
  )
}
