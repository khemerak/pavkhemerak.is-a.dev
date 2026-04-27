import { HeroSection } from "@/components/HeroSection";
import { FeaturedDeployments } from "@/components/FeaturedDeployments";
import { ExperienceSection } from "@/components/ExperienceSection";
import { BackgroundProfileSection } from "@/components/BackgroundProfileSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDeployments />
      <ExperienceSection />
      <BackgroundProfileSection />
      <SkillsSection />
      <ToolsSection />
      <ContactSection />
    </>
  );
}
