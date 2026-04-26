import { HeroSection } from "@/components/HeroSection";
import { FeaturedDeployments } from "@/components/FeaturedDeployments";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDeployments />
      <ExperienceSection />
    </>
  );
}
