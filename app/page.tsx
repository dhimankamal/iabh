import TeamSection from "@/components/sections/TeamSection";
import EventSection from "@/components/sections/EventSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import CounterSection from "@/components/sections/CounterSection";
import PartnerSection from "@/components/sections/PartnerSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <CounterSection />
      <EventSection />
      {/* <PartnerSection /> */}
      <TeamSection />
      <TeamSection />
      <TeamSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
