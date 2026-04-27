import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  status: string;
  statusColor: string;
  language: string;
  filename: string;
  imageUrl: string;
  imageAlt: string;
  lastCommit: string;
  primaryAction: { label: string; icon: string; href?: string };
  secondaryAction: { label: string; icon?: string; href?: string };
}

const projects: Project[] = [
  {
    title: "Ket — Fast, Interactive Download Manager",
    description:
      "A minimalist, high-velocity CLI utility designed for organizing and retrieving technical snippets and study resources. Built to integrate seamlessly with tiling window managers and Linux-based workflows.",
    tags: [
      { label: "SHELL", color: "text-secondary bg-secondary/10 border-secondary/30" },
      { label: "TOOL", color: "text-primary bg-primary/10 border-primary/30" },
      { label: "DOWNLOADER", color: "text-on-surface bg-outline-variant/20 border-outline-variant" },
    ],
    status: "STABLE",
    statusColor: "text-secondary-fixed-dim bg-secondary-fixed-dim/10",
    language: "Rust",
    filename: "ket.exe",
    imageUrl: "/assets/img/ket.png",
    imageAlt: "Ket CLI Tool Preview",
    lastCommit: "Last commit: 1w ago",
    primaryAction: { label: "View Source", icon: "terminal", href: "https://github.com/khemerak/ket.git" },
    secondaryAction: { label: "Documentation", icon: "menu_book", href: "https://github.com/khemerak/ket.git" },
  },
  // {
  //   title: "Etherscan Bot Analyzer",
  //   description:
  //     "A high-performance Python tool designed to monitor and analyze smart contract interactions on the Ethereum blockchain via the Etherscan API. Identifies patterns indicative of bot activity.",
  //   tags: [
  //     { label: "PYTHON", color: "text-primary bg-primary/10 border-primary/30" },
  //     { label: "WEB3", color: "text-tertiary bg-tertiary/10 border-tertiary/30" },
  //     { label: "API", color: "text-on-surface bg-outline-variant/20 border-outline-variant" },
  //   ],
  //   status: "PRODUCTION",
  //   statusColor: "text-tertiary-fixed-dim bg-tertiary-fixed-dim/10",
  //   language: "Python",
  //   filename: "analyzer.py", // Changed extension to match language
  //   imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrqS0Jt-zR5TZeWpzG0ASFfO35h_Dyk6pMrwylgT3yRH88-h7ucij9amvHbtL2JR349rhOksLZGVJvguLo699t-bM2cXEXNmAHN2psJqn360FK5y9Y51_EgDqqp5KVFubgbwsQz0I39IavbHfNyg9WKe39KymEJqQUkEXBTX7OUDbz7y5D8eMvy5FDD8wznW8VXmHzMsV6vGGc3RsGHauDniWL6iitfDk_DOP-AiFvLPd-JQmrVcYTtNOn4d1eU0QmOTWet4n6hwQ",
  //   imageAlt: "Etherscan Bot Analyzer Preview",
  //   lastCommit: "Last commit: 2d ago",
  //   primaryAction: { label: "View Source", icon: "terminal" },
  //   secondaryAction: { label: "Documentation" },
  // },
  // {
  //   title: "Decentralized Web3 Chat",
  //   description:
  //     "A secure, end-to-end encrypted messaging application built on top of decentralized protocols. Features wallet-based authentication and on-chain message hashes for non-repudiation.",
  //   tags: [
  //     { label: "REACT NATIVE", color: "text-primary bg-primary/10 border-primary/30" },
  //     { label: "IPFS", color: "text-tertiary bg-tertiary/10 border-tertiary/30" },
  //     { label: "SOLIDITY", color: "text-on-surface bg-outline-variant/20 border-outline-variant" },
  //   ],
  //   status: "BETA",
  //   statusColor: "text-primary-fixed-dim bg-primary-fixed-dim/10",
  //   language: "TypeScript",
  //   filename: "index.tsx",
  //   imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLLNdynclroTPRewHWVteXr3bmyRRRMXtObIgCImP6L_BiCvxhMFXrNvdri2-mZ_lLqgnAufUA5PTWgqIkfRg7I969jN1Kcco9Khrgrl1WWMSQaiQRL6kCS011xxm0513pwm7DcabTu0i0zajhop30DQGHZs7Gxe84R14gd5iAnaBPWC0sV0ghtyID-W4N4Au3Mksp_m2bK4MyE6eQLJpmscITw_N4T6pNilLIORyfgLnBPaGBZH8y-o5mqvb1CEf20Yy7BmTk8lo",
  //   imageAlt: "Web3 Chat App Preview",
  //   lastCommit: "Last commit: 5h ago",
  //   primaryAction: { label: "Launch App", icon: "open_in_new" },
  //   secondaryAction: { label: "Smart Contracts", icon: "code" },
  // },
];

export function ToolsSection() {
  return (
    <section id="tools" className="w-full max-w-[1280px] mx-auto px-5 md:px-16 py-10 md:pt-16 md:pb-16 scroll-mt-24">
      {/* Header Section */}
      <section className="mb-12 md:mb-16 border-b border-outline-variant pb-8">
        <h1 className="text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.04em]">
          <span className="hidden md:inline text-primary">Tools &amp; Projects</span>
          <span className="md:hidden text-on-background">
            Systems &amp; <br />
            <span className="text-primary">Architecture</span>
          </span>
        </h1>
        <p className="font-sans text-[16px] text-on-surface-variant max-w-2xl leading-[1.6] mt-4">
          A showcase of technical experiments, open-source contributions, and
          production-ready applications built focusing on performance and
          scalability.
        </p>
      </section>

      {/* Projects Grid */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}

        {/* Decorative Empty State */}
        <div className="hidden md:flex border border-dashed border-outline-variant items-center justify-center min-h-[300px] opacity-50">
          <div className="text-center">
            <span className="material-symbols-outlined text-outline text-4xl mb-2">
              construction
            </span>
            <p className="font-mono text-[14px] text-outline uppercase tracking-widest">
              More systems initializing...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-surface border border-outline-variant hover:border-primary transition-colors duration-300 relative group flex flex-col">
      {/* Ghost Border Hover Effect */}
      <div className="absolute inset-0 border border-primary translate-x-1 translate-y-1 -z-10 opacity-0 group-hover:opacity-50 transition-all duration-300 pointer-events-none"></div>

      {/* Terminal Header */}
      <div className="w-full border-b border-outline-variant bg-surface-high px-3 py-2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
        <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
        <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
        <span className="font-mono text-[10px] text-on-surface-variant ml-2 opacity-70">
          {project.filename}
        </span>
      </div>

      {/* Image Container */}
      <div className="w-full h-48 md:h-64 border-b border-outline-variant bg-surface relative overflow-hidden">
        <Image
          alt={project.imageAlt}
          src={project.imageUrl}
          fill
          className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`font-mono text-[12px] label-caps border px-2 py-1 ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Desktop: Status bar (hidden on mobile since tags already show) */}
        <div className="hidden md:flex justify-between items-center mb-3">
          <span
            className={`label-caps px-2 py-1 ${project.statusColor}`}
          >
            {project.status}
          </span>
          <span className="font-mono text-[14px] text-outline flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">code</span>
            {project.language}
          </span>
        </div>

        <h2 className="text-[24px] md:text-[32px] font-bold text-on-background mb-3 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h2>
        <p className="font-sans text-[16px] text-on-surface-variant leading-[1.6] mb-6">
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-outline-variant mt-auto">
          {project.primaryAction.href ? (
            <a
              href={project.primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-primary text-primary font-mono text-[14px] py-3 px-6 hover:bg-primary hover:text-background transition-colors w-full sm:w-auto text-center flex justify-center items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                {project.primaryAction.icon}
              </span>
              {project.primaryAction.label}
            </a>
          ) : (
            <button className="bg-background border border-primary text-primary font-mono text-[14px] py-3 px-6 hover:bg-primary hover:text-background transition-colors w-full sm:w-auto text-center flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                {project.primaryAction.icon}
              </span>
              {project.primaryAction.label}
            </button>
          )}

          {project.secondaryAction.href ? (
            <a
              href={project.secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-outline-variant text-on-surface font-mono text-[14px] py-3 px-6 hover:border-on-surface transition-colors w-full sm:w-auto text-center flex justify-center items-center gap-2"
            >
              {project.secondaryAction.icon && (
                <span className="material-symbols-outlined text-[18px]">
                  {project.secondaryAction.icon}
                </span>
              )}
              {project.secondaryAction.label}
            </a>
          ) : (
            <button className="bg-background border border-outline-variant text-on-surface font-mono text-[14px] py-3 px-6 hover:border-on-surface transition-colors w-full sm:w-auto text-center flex justify-center items-center gap-2">
              {project.secondaryAction.icon && (
                <span className="material-symbols-outlined text-[18px]">
                  {project.secondaryAction.icon}
                </span>
              )}
              {project.secondaryAction.label}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
