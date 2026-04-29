import { HeroSection } from "@/components/HeroSection";
import { LatestBlogSection } from "@/components/LatestBlogSection";
import { FeaturedDeployments } from "@/components/FeaturedDeployments";
import { ExperienceSection } from "@/components/ExperienceSection";
import { BackgroundProfileSection } from "@/components/BackgroundProfileSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ContactSection } from "@/components/ContactSection";
import { mergePortfolioContent } from "@/app/lib/portfolioContent";

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.BACKEND_URL ?? "http://localhost:3001";

async function fetchPortfolioContent() {
  try {
    const res = await fetch(`${BACKEND}/api/portfolio/content`, { cache: "no-store" });
    if (!res.ok) return mergePortfolioContent(null);
    const data = await res.json();
    return mergePortfolioContent(data?.content);
  } catch {
    return mergePortfolioContent(null);
  }
}

export default async function Home() {
  const portfolio = await fetchPortfolioContent();

  return (
    <>
      <HeroSection />
      <LatestBlogSection />
      <FeaturedDeployments />
      <ExperienceSection />
      <BackgroundProfileSection profile={portfolio.profile} />
      <SkillsSection skills={portfolio.skills} />
      <ToolsSection projects={portfolio.tools.projects} />
      <ContactSection contact={portfolio.contact} />
    </>
  );
}
