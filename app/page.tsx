import TeamSection from "@/components/sections/TeamSection";
import EventSection from "@/components/sections/EventSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import CounterSection from "@/components/sections/CounterSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <CounterSection />
      <EventSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
