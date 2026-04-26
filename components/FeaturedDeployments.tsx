import React from "react";
import Link from "next/link";
import Image from "next/image";

export const FeaturedDeployments: React.FC = () => {
  return (
    <section className="border-b border-[#333333] px-4 py-12 md:px-8 md:py-24">
      <div className="max-w-[1280px] w-full mx-auto">
        <SectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <DeploymentCard
            title="Etherscan Bot Analyzer"
            description="Real-time MEV bot tracking and transaction analysis engine built for high-frequency trading data aggregation."
            tags={["Rust", "Go", "PostgreSQL"]}
            status="Active"
            type="Web3"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCPd8HJ7vqkiVtpjmMxHGzvMsMrXrs3DjW4IW47JUI9BLyC1Eut38oaQnwq0fxI5ndF3fwrWERg6SHBel6D6dso0oe-s5beSYGx5RRyPdMfYcdJMcuj8gzQqlWXQ7g-OiacUiCIXn3889TOq8UKGbeMhdg2sjqj-hGOOxyzqZqeCNDfuSDDTb3QvMZ8AbVA5NZIJxnzmE2HNIBFoA04lTP3t4q01wkG5s6l6-RuGHYuUd85V8MiY78mGuXsiFaUlZGXCs3Mn41m8XU"
            imageAlt="Etherscan Bot Analyzer preview"
            dataAlt="Dark computer screen showing complex lines of code and glowing green terminal output in a dark room"
          />
          <DeploymentCard
            title="Decentralized Web3 Chat"
            description="End-to-end encrypted messaging protocol utilizing IPFS for storage and Ethereum for identity verification."
            tags={["React", "Solidity", "IPFS"]}
            status="Deployed"
            type="P2P"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBSxDNhr4IFLj4TdsTp_1kchUS3GF1F1gh29QM8ZIcaigDyUnJgJcgiU9uwGZ6FfWUPY_eaMJtBrOiaRDiJGinQ_OrDGUbt_6PhSbqtBpat1gadddKznrD0hvC1hzgyXokkjBywWuvp0RiUMzwFercLvaOwDUWIEOOzDuS8tUqBCPUg7YFD4BhOpz_H-fBWP0BsKC3rIMamm8Wmjc6-HWGdPsFJIyeiyIOSy9TuOr4EdPnx8ht5cNCdOJBEY0A61OPKzlLuuec1p6g"
            imageAlt="Decentralized Web3 Chat preview"
            dataAlt="Abstract digital visualization of connected nodes resembling a decentralized network on a dark background"
          />
        </div>
        
        <button className="md:hidden w-full mt-6 bg-transparent text-white border border-[#333333] py-3 px-4 font-label-caps text-label-caps uppercase hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
          View All Projects
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

const SectionHeader: React.FC = () => (
  <div className="flex items-center md:items-end justify-start md:justify-between mb-8 md:mb-16 pb-0 md:pb-4 border-b-0 md:border-b border-[#333333] gap-3">
    <span className="material-symbols-outlined text-primary md:hidden">folder_open</span>
    <h2 className="font-h3 text-h3 md:font-h2 md:text-h2 text-white tracking-tight md:tracking-tighter uppercase">
      <span className="md:hidden">Projects</span>
      <span className="hidden md:inline">Featured_Deployments</span>
    </h2>
    <Link
      className="hidden md:block font-mono-code text-mono-code text-primary hover:text-white transition-colors ml-auto"
      href="/deployments"
    >
      VIEW_ALL_//
    </Link>
  </div>
);

interface DeploymentCardProps {
  title: string;
  description: string;
  tags: string[];
  status: string;
  type: string;
  imageUrl: string;
  imageAlt: string;
  dataAlt: string;
}

const DeploymentCard: React.FC<DeploymentCardProps> = ({
  title,
  description,
  tags,
  status,
  type,
  imageUrl,
  imageAlt,
  dataAlt,
}) => {
  return (
    <article className="group bg-[#1A1A1A] border border-[#333333] hover:border-primary transition-colors duration-300 relative overflow-hidden md:overflow-visible">
      <div className="hidden md:block absolute -inset-1 bg-transparent border border-transparent group-hover:border-primary/20 group-hover:translate-x-1 group-hover:translate-y-1 transition-all -z-10"></div>
      <div className="h-40 md:h-auto md:aspect-video bg-[#0D0D0D] border-b border-[#333333] overflow-hidden relative">
        <Image
          alt={imageAlt}
          src={imageUrl}
          fill
          className="object-cover opacity-60 md:grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-opacity md:transition-all mix-blend-luminosity md:mix-blend-normal group-hover:mix-blend-normal duration-500"
          data-alt={dataAlt}
        />
        <div className="absolute top-2 left-2 md:top-4 md:left-4 flex gap-2">
          <span className="px-2 py-0.5 md:py-1 bg-[#0D0D0D]/80 md:backdrop-blur-none backdrop-blur border border-[#333333] font-mono-code text-[10px] text-[#00e639] uppercase">
            {status}
          </span>
          <span className="px-2 py-0.5 md:py-1 bg-[#0D0D0D]/80 md:backdrop-blur-none backdrop-blur border border-[#333333] font-mono-code text-[10px] text-primary uppercase hidden md:inline-block">
            {type}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
        <h3 className="font-h3 text-[24px] md:text-h3 text-white leading-tight md:leading-normal">{title}</h3>
        <p className="font-body text-[14px] md:font-mono-code md:text-mono-code text-outline line-clamp-2 md:line-clamp-none">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2 md:mt-4 md:pt-4 border-t-0 md:border-t border-[#333333]">
          {tags.map((tag) => (
            <span key={tag} className="bg-[#00E5FF]/10 md:bg-[#0D0D0D] text-primary md:text-outline-variant font-mono-code text-[10px] md:text-[12px] px-2 py-1 border border-[#00E5FF]/20 md:border-[#333333]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
