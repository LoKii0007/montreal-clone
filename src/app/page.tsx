import DisplayTextSection from "@/components/DisplayTextSection";
import ExpoCardsSection from "@/components/ExpoCardsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PinSection from "@/components/PinSection";
import PointSection from "@/components/PointSection";
import StorySection from "@/components/StorySection";
import TicketSection from "@/components/TicketSection";
import UniversalSection from "@/components/universalSection";
import VariantsSection from "@/components/VariantsSection";
import VelocitySection from "@/components/VelocitySection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black relative">
      <HeroSection />
      <div className="h-screen"></div>
      <div className="relative z-20 bg-black w-full">
        <StorySection />
        <UniversalSection />
        <PinSection />
        <DisplayTextSection />
        <VelocitySection/>
        <TicketSection/>
        <PointSection />
        <ExpoCardsSection />
        <VariantsSection />
        <Footer />
      </div>
    </div>
  );
}
