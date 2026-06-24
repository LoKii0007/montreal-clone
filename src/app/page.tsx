import HeroSection from "@/components/HeroSection";
import PinSection from "@/components/PinSection";
import StorySection from "@/components/StorySection";
import UniversalSection from "@/components/universalSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black relative">
      <HeroSection />
      <div className="h-screen"></div>
      <div className="relative z-20 bg-black">
        <StorySection />
        <UniversalSection />
        <PinSection/>
        <div className="w-full h-screen">
          next
        </div>
      </div>
    </div>
  );
}
