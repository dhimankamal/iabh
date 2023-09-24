import TeamSection from "@/components/sections/TeamSection";
import EventSection from "@/components/sections/EventSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TeamSection />
      <EventSection />
      <ContactSection />
    </main>
  );
}
