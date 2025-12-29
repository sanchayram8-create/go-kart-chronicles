import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { SubsystemsSection } from "@/components/SubsystemsSection";
import { HistorySection } from "@/components/HistorySection";
import { TeamSection } from "@/components/TeamSection";
import { FabricationSection } from "@/components/FabricationSection";
import { VehiclesSection } from "@/components/VehiclesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AchievementsSection />
        <SubsystemsSection />
        <HistorySection />
        <TeamSection />
        <FabricationSection />
        <VehiclesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
