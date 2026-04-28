import { HeroSection } from "@/components/HeroSection";
import { LatestBlogSection } from "@/components/LatestBlogSection";
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
      <LatestBlogSection />
      <FeaturedDeployments />
      <ExperienceSection />
      <BackgroundProfileSection />
      <SkillsSection />
      <ToolsSection />
      <ContactSection />
    </>
  );
}
