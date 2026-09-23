import { useState } from "react";
const projectsData = [
    {
        title: "ntm",
        subtitle: "Go CLI Tool",
        description: "Built a lightweight command-line tool in Go using yt-dlp to download media from URLs. Handled CLI arguments, stream errors, and set up a basic GitHub Actions workflow to build binaries for different platforms automatically.",
        tags: ["GoLang", "yt-dlp"],
        link: "https://github.com/khemerak/ntm"
    },
    {
        title: "mono Subdomain Setup",
        subtitle: "mono Subdomain Setup",
        description: "Registered and configured a personal developer subdomain by forking the is-a.dev repository, setting up CNAME records, and routing domain traffic to my hosting server.",
        tags: ["Git", "GitHub", "DNS Mgt"],
        link: "https://github.com/khemerak/register"
    },
    {
        title: "Dotfiles",
        subtitle: "ArchLinux - Hyprland Ricing",
        description: "Personal Arch-based configuration repository designed for a fast, keyboard-driven development workflow, specifically for Hyprland. Features modular setups for Neovim, terminal emulators, and shell environments, automated via symlink management and shell scripts for reproducible system provisioning across machines.",
        tags: ["ArchLinux", "Bash", "Lua", "Neovim", "Git"],
        link: "https://github.com/khemerak/dotfiles"
    },
    {
        title: "WESTBRIDGE Static Website",
        subtitle: "New look",
        description: "A modern redesign of the WISPP institutional website featuring streamlined navigation, responsive design, and an automated registration workflow with real-time Google Sheets sync and Telegram bot notifications",
        tags: ["NextJS / ReactJS", "TypeScript", "TailwindCSS"],
        link: "https://demo.wispp.edu.kh"
    }

]

function ProjectCard({ title, subtitle, description, tags, link }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={"group border border-mono-surface bg-mono-bg hover:border-mono-secondary transition-colors duration-300 p-4 md:p-6 flex flex-col h-full"}>
            <div className={"mb-4"}>
                <h4 className={"text-md md:text-lg font-normal text-mono-primary mb-3 min-h-12"}>{title} <span className={"text-sm"}>{subtitle}</span></h4>

                <div>
                    <p className={`text-sm text-mono-secondary font-light leading-relaxed transition-all duration-300 ${!isExpanded ? "line-clamp-3" : ""}`}>
                        {description}
                    </p>
                    <button onClick={() => setIsExpanded(!isExpanded)} className={"text-xs text-mono-primary/70 hover:text-mono-primary underline mt-1.5 cursor-pointer inline-block"}>{isExpanded ? "Show less" : "Show more"}</button>
                </div>
            </div>

            <div className="mt-auto pt-4 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 md:gap-3">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-mono-muted border border-mono-border px-3 py-1 bg-mono-surface">
                            {tag}
                        </span>
                    ))}
                </div>

                <a href={link} target="_blank" rel="noopener noreferrer"
                    className="text-mono-secondary hover:text-mono-primary transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    aria-label="View project repository"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

function Projects() {

    return (
        <section id="projects" className="min-h-[80vh] md:min-h-screen flex flex-col p-8 md:p-16 lg:p-24 border-b border-mono-border">
            <h3 className="text-sm uppercase tracking-widest text-mono-muted mb-8 md:mb-12 font-medium">Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl items-start">
                {projectsData.map((project) => (<ProjectCard key={project.title} {...project} />))}
            </div>
        </section>
    )
}

export default Projects;