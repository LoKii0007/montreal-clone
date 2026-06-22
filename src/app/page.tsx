import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black relative">
      <HeroSection />
      <div className="h-screen"></div>
      <StorySection />
    </div>
  );
}
