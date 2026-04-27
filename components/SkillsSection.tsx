import React from "react";

export function SkillsSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-5 md:px-16 py-10 md:py-12">
      {/* Page Header */}
      <header className="mb-10 md:mb-12 flex flex-col gap-2">
        <div className="font-mono text-[14px] text-primary flex items-center gap-2 md:hidden">
          <span className="text-tertiary">pavkhemerak@sys</span>
          <span className="text-on-surface-variant">~</span> $ ./fetch_skills.sh
        </div>
        <h1 className="text-[40px] md:text-[64px] font-extrabold text-on-background leading-[1.1] tracking-[-0.04em]">
          <span className="md:hidden">Skill_Matrix</span>
          <span className="hidden md:inline">TECHNICAL SKILLS</span>
          <span className="text-primary animate-pulse">_</span>
        </h1>
        <p className="font-sans text-[16px] text-on-surface-variant max-w-2xl leading-[1.6] border-l-2 border-primary pl-4 mt-4 md:border-l-0 md:pl-0 md:mt-0">
          A technical manifest of languages, frameworks, and environments. Built
          for precision, performance, and aggressive minimalism.
        </p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Terminal Window - Foundations */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <FoundationsTerminal />
        </div>

        {/* Right Column - Cards */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <LinuxCard />
          <EcosystemsCard />
        </div>
      </div>

      {/* Mobile: Additional skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:hidden">
        <SkillTagCard
          title="Architecture"
          filename="sys/Architecture.yml"
          color="secondary"
          tags={["RESTful APIs", "GRAPHQL", "MVC PATTERNS", "MICROSERVICES"]}
        />
        <SkillTagCard
          title="Infrastructure"
          filename="sys/Infra.yml"
          color="secondary"
          tags={[
            "DOCKER",
            "AWS (EC2, S3)",
            "VERCEL",
            "GITHUB ACTIONS",
            "POSTGRESQL",
            "MONGODB",
          ]}
        />
      </div>
    </section>
  );
}

/* ========== Terminal Window: Foundations ========== */
function FoundationsTerminal() {
  const languages = [
    { keyword: "const", name: "JavaScript", delay: "" },
    { keyword: "def", name: "Python", delay: "delay-75" },
    { keyword: "public", name: "Java", delay: "delay-100" },
    { keyword: "*", name: "C/C++", delay: "delay-150" },
    { keyword: "using", name: "C#", delay: "delay-200" },
    { keyword: "<?", name: "PHP", delay: "delay-300" },
    { keyword: "SELECT", name: "SQL", delay: "delay-500" },
  ];

  return (
    <div className="bg-[#080808] border border-[#333333] relative overflow-hidden h-full flex flex-col group">
      <div className="scanline-overlay absolute inset-0"></div>
      {/* Terminal Header */}
      <div className="border-b border-[#333333] px-4 py-2 flex items-center justify-between bg-[#111]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full border border-[#333333] bg-[#222]"></div>
          <div className="w-3 h-3 rounded-full border border-[#333333] bg-[#222]"></div>
          <div className="w-3 h-3 rounded-full border border-[#333333] bg-[#222]"></div>
        </div>
        <span className="font-mono text-[14px] text-zinc-500">
          ~/system/foundations.sh
        </span>
        <span className="material-symbols-outlined text-zinc-500 text-sm">
          code
        </span>
      </div>
      {/* Terminal Body */}
      <div className="p-6 font-mono text-[14px] leading-loose relative z-20 flex-grow flex flex-col justify-center">
        <div className="text-zinc-500 mb-4"># Core Language Competencies</div>
        <div className="flex flex-wrap gap-x-6 gap-y-4">
          {languages.map(({ keyword, name, delay }) => (
            <div
              key={name}
              className={`flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-300 ${delay}`}
            >
              <span className="text-primary">{keyword}</span>
              <span className="text-on-surface border-b border-[#333333] pb-1 hover:border-primary hover:text-primary cursor-crosshair transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center animate-pulse">
          <span className="text-primary mr-2">root@pavkhemerak:~#</span>
          <span className="w-2 h-4 bg-primary inline-block"></span>
        </div>
      </div>
    </div>
  );
}

/* ========== Linux Card ========== */
function LinuxCard() {
  const items = [
    { name: "Arch Linux / Windows", label: "Daily Driver", labelColor: "text-tertiary bg-tertiary/10" },
    { name: "Pop!_OS", label: "Secondary", labelColor: "text-zinc-500 bg-zinc-800/50" },
    { name: "i3wm / Hyprland", label: "WM/Compositor", labelColor: "text-primary bg-primary/10" },
  ];

  return (
    <div className="bg-[#1A1A1A] border border-[#333333] p-6 group hover:border-primary transition-colors duration-300 relative h-full">
      <div className="absolute inset-0 bg-[#333333] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
      <div className="flex justify-between items-start mb-6 border-b border-[#333333] pb-4">
        <h3 className="text-[32px] font-bold text-on-surface">Linux</h3>
        <span
          className="material-symbols-outlined text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          terminal
        </span>
      </div>
      <div className="flex flex-col gap-3 font-mono text-[14px]">
        {items.map(({ name, label, labelColor }) => (
          <div
            key={name}
            className="flex justify-between items-center bg-[#080808] border border-[#333333] px-3 py-2 group-hover:border-primary/50 transition-colors"
          >
            <span className="text-on-surface-variant">{name}</span>
            <span
              className={`text-[10px] ${labelColor} px-2 py-1 uppercase tracking-wider`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========== Ecosystems Card ========== */
function EcosystemsCard() {
  const tags = ["Full-Stack Web Development", "Pentesting", "Next.js", "Spring Boot", "Solana (Rust)", "Web3", "AI", "Blockchain", "Cloud Computing"];

  return (
    <div className="bg-[#1A1A1A] border border-[#333333] p-6 group hover:border-primary transition-colors duration-300 relative h-full">
      <div className="flex justify-between items-start mb-6 border-b border-[#333333] pb-4">
        <h3 className="text-[32px] font-bold text-on-surface">Ecosystems</h3>
        <span className="material-symbols-outlined text-primary">layers</span>
      </div>
      <div className="flex flex-wrap gap-2 label-caps uppercase">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-[#333333] bg-[#080808] text-on-surface px-3 py-2 hover:border-primary hover:text-primary cursor-default transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ========== Mobile Skill Tag Card ========== */
interface SkillTagCardProps {
  title: string;
  filename: string;
  color: "primary" | "secondary" | "tertiary";
  tags: string[];
}

function SkillTagCard({ title, filename, tags }: SkillTagCardProps) {
  return (
    <article className="bg-surface border border-outline-variant relative group hover:-translate-y-1 transition-transform duration-300">
      {/* Terminal Header */}
      <div className="bg-surface-high border-b border-outline-variant px-3 py-2 flex items-center justify-between">
        <div className="flex gap-[6px]">
          <div className="w-[10px] h-[10px] bg-error rounded-none border border-[#000]"></div>
          <div className="w-[10px] h-[10px] bg-secondary rounded-none border border-[#000]"></div>
          <div className="w-[10px] h-[10px] bg-tertiary rounded-none border border-[#000]"></div>
        </div>
        <div className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase">
          {filename}
        </div>
        <div></div>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-[20px] font-bold text-on-surface uppercase tracking-tight border-b border-outline-variant pb-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-on-surface-variant/10 border border-on-surface-variant/30 text-on-surface label-caps px-3 py-[6px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
