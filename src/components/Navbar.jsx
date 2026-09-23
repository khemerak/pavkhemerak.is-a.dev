import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
    { name: "Home", path: "/", sectionId: "home" },
    { name: "About", path: "/about", sectionId: "about" },
    { name: "Educations", path: "/educations", sectionId: "educations" },
    { name: "Skills", path: "/skills", sectionId: "skills" },
    { name: "Projects", path: "/projects", sectionId: "projects" },
    { name: "Contact", path: "/contact", sectionId: "contact" }
];

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isManualNavRef = useRef(false);
    const [isOpen, setIsOpen] = useState(false);

    const initialSection = location.pathname.replace(/^\//, "").replace(/\/$/, "") || "home";
    const [activeSection, setActiveSection] = useState(initialSection);

    useEffect(() => {
        const currentPathSection = location.pathname.replace(/^\//, "").replace(/\/$/, "") || "home";
        setActiveSection(currentPathSection);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const sectionIds = ["home", "about", "educations", "skills", "projects", "contact"];

        const handleScroll = () => {
            if (isManualNavRef.current) return;

            let currentSection = "home";
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
                currentSection = "contact";
            } else {
                const scrollPosition = window.scrollY + 200;
                for (let i = sectionIds.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sectionIds[i]);
                    if (section && section.offsetTop <= scrollPosition) {
                        currentSection = sectionIds[i];
                        break;
                    }
                }
            }

            setActiveSection(currentSection);

            const targetPath = currentSection === "home" ? "/" : `/${currentSection}`;
            if (window.location.pathname !== targetPath) {
                window.history.replaceState(null, "", targetPath);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e, item) => {
        e.preventDefault();
        isManualNavRef.current = true;
        setActiveSection(item.sectionId);
        setIsOpen(false);
        navigate(item.path);

        const element = document.getElementById(item.sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }

        setTimeout(() => {
            isManualNavRef.current = false;
        }, 800);
    };

    return (
        <header className="sticky top-0 z-40 w-full md:w-64 md:h-screen md:shrink-0 bg-mono-bg/95 md:bg-mono-bg backdrop-blur md:backdrop-blur-none border-b md:border-b-0 md:border-r border-mono-border">
            <div className="flex md:hidden items-center justify-between px-6 py-4">
                <a
                    href="/"
                    onClick={(e) => scrollToSection(e, navItems[0])}
                    className="text-sm font-medium tracking-wide text-mono-primary hover:text-mono-secondary transition-colors"
                >
                    Pav Khemerak
                </a>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    className="p-1.5 text-mono-secondary hover:text-mono-primary hover:bg-mono-surface transition-colors focus:outline-none cursor-pointer"
                >
                    {isOpen ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-mono-border bg-mono-bg">
                    <ul className="flex flex-col py-2">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.sectionId;
                            return (
                                <li key={item.name} className="w-full">
                                    <a
                                        href={item.path}
                                        onClick={(e) => scrollToSection(e, item)}
                                        className={`nav-link block w-full px-6 py-3 text-sm font-medium transition-colors ${isActive
                                                ? "text-mono-primary bg-mono-surface border-l-2 border-mono-primary"
                                                : "text-mono-secondary hover:text-mono-primary hover:bg-mono-surface/50"
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            <div className="hidden md:flex flex-col justify-center h-full">
                <ul className="w-full flex flex-col gap-4 text-sm font-medium text-mono-secondary tracking-wide">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.sectionId;
                        return (
                            <li className="w-full" key={item.name}>
                                <a
                                    href={item.path}
                                    onClick={(e) => scrollToSection(e, item)}
                                    className={`nav-link block w-full px-12 py-3 whitespace-nowrap cursor-pointer transition-colors duration-200 ${isActive
                                            ? "text-mono-primary bg-mono-surface font-medium"
                                            : "text-mono-secondary hover:text-mono-primary"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
