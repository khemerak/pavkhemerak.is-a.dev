export interface PortfolioProject {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  status: string;
  statusColor: string;
  language: string;
  filename: string;
  imageUrl: string;
  imageAlt: string;
  primaryAction: { label: string; icon: string; href?: string };
  secondaryAction: { label: string; icon?: string; href?: string };
}

export interface PortfolioContent {
  profile: {
    displayName: string;
    tags: string[];
    facts: { label: string; value: string }[];
  };
  skills: {
    languages: { keyword: string; name: string; delay?: string }[];
    linux: { name: string; label: string; labelColor: string }[];
    ecosystems: string[];
  };
  tools: {
    projects: PortfolioProject[];
  };
  contact: {
    location: string;
    email: string;
    socials: { label: string; href: string; icon: string }[];
  };
}

export const DEFAULT_PORTFOLIO_CONTENT: PortfolioContent = {
  profile: {
    displayName: "PAV KHEMERAK",
    tags: ["STATUS: ONLINE", "CLEARANCE: FULL-STACK", "ROLE: CYBER_ANALYST"],
    facts: [
      { label: "Origin", value: "CAMBODIAN" },
      { label: "Code_Name", value: "PRINZE" },
      { label: "Age", value: "22" },
      { label: "Status", value: "ONLINE" },
    ],
  },
  skills: {
    languages: [
      { keyword: "fn", name: "Rust" },
      { keyword: "const", name: "JavaScript", delay: "delay-75" },
      { keyword: "def", name: "Python", delay: "delay-100" },
      { keyword: "public", name: "Java", delay: "delay-150" },
      { keyword: "*", name: "C/C++", delay: "delay-200" },
      { keyword: "using", name: "C#", delay: "delay-250" },
      { keyword: "<?", name: "PHP", delay: "delay-300" },
      { keyword: "SELECT", name: "SQL", delay: "delay-500" },
      { keyword: "interface", name: "TypeScript", delay: "delay-100" },
      { keyword: "#", name: "SHELL", delay: "delay-200" },
    ],
    linux: [
      { name: "Arch Linux / Windows", label: "Daily Driver", labelColor: "text-tertiary bg-tertiary/10" },
      { name: "Pop!_OS", label: "Secondary", labelColor: "text-zinc-500 bg-zinc-800/50" },
      { name: "i3wm / Hyprland", label: "WM/Compositor", labelColor: "text-primary bg-primary/10" },
    ],
    ecosystems: ["Full-Stack Web Development", "Pentesting", "Next.js", "Spring Boot", "Solana (Rust)", "Web3", "AI", "Blockchain", "Cloud Computing"],
  },
  tools: {
    projects: [
      {
        title: "Ket — Fast, Interactive Download Manager",
        description: "A minimalist, high-velocity CLI utility designed for organizing and retrieving technical snippets and study resources.",
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
        primaryAction: { label: "View Source", icon: "terminal", href: "https://github.com/khemerak/ket.git" },
        secondaryAction: { label: "Documentation", icon: "menu_book", href: "https://github.com/khemerak/ket.git" },
      },
    ],
  },
  contact: {
    location: "CAMBODIA // PHNOM_PENH // TOUL KORK",
    email: "pavkhemerak.official@gmail.com",
    socials: [
      { label: "GitHub", href: "https://github.com/khemerak", icon: "terminal" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/pav-khemerak-6b7270269/", icon: "connect_without_contact" },
      { label: "TELEGRAM", href: "https://t.me/pavkhemerak", icon: "send" },
    ],
  },
};

export function mergePortfolioContent(content: unknown): PortfolioContent {
  if (!content || typeof content !== "object") return DEFAULT_PORTFOLIO_CONTENT;
  const incoming = content as Partial<PortfolioContent>;
  return {
    profile: {
      displayName: incoming.profile?.displayName ?? DEFAULT_PORTFOLIO_CONTENT.profile.displayName,
      tags: incoming.profile?.tags ?? DEFAULT_PORTFOLIO_CONTENT.profile.tags,
      facts: incoming.profile?.facts ?? DEFAULT_PORTFOLIO_CONTENT.profile.facts,
    },
    skills: {
      languages: incoming.skills?.languages ?? DEFAULT_PORTFOLIO_CONTENT.skills.languages,
      linux: incoming.skills?.linux ?? DEFAULT_PORTFOLIO_CONTENT.skills.linux,
      ecosystems: incoming.skills?.ecosystems ?? DEFAULT_PORTFOLIO_CONTENT.skills.ecosystems,
    },
    tools: {
      projects: incoming.tools?.projects ?? DEFAULT_PORTFOLIO_CONTENT.tools.projects,
    },
    contact: {
      location: incoming.contact?.location ?? DEFAULT_PORTFOLIO_CONTENT.contact.location,
      email: incoming.contact?.email ?? DEFAULT_PORTFOLIO_CONTENT.contact.email,
      socials: incoming.contact?.socials ?? DEFAULT_PORTFOLIO_CONTENT.contact.socials,
    },
  };
}
