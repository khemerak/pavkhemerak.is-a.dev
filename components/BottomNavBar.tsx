"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
  isSamePage: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, isActive, isSamePage }) => {
  const className = `flex-1 flex flex-col items-center justify-center h-full gap-1 transition-colors ${isActive
      ? "text-[#00E5FF] bg-[#151d1e] border-t-2 border-[#00E5FF] pt-1"
      : "text-outline hover:text-white pt-[6px]"
    }`;

  if (href.startsWith("/#") && isSamePage) {
    return (
      <a href={href.replace("/", "")} className={className}>
        <span className="material-symbols-outlined text-[24px]">{icon}</span>
        <span className="font-label-caps text-[10px]">{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="material-symbols-outlined text-[24px]">{icon}</span>
      <span className="font-label-caps text-[10px]">{label}</span>
    </Link>
  );
};

export const BottomNavBar: React.FC = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = ["profile", "tools"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const getIsActive = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      return pathname === "/" && activeSection === id;
    }
    if (href === "/") {
      return pathname === "/" && activeSection === "";
    }
    return pathname === href || (href !== "/" && pathname?.startsWith(href));
  };

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-between items-center bg-[#0D0D0D] border-t border-[#333333] md:hidden h-16">
      <NavItem href="/" icon="folder" label="Projects" isActive={getIsActive("/")} isSamePage={pathname === "/"} />
      <NavItem href="/#profile" icon="person" label="Profile" isActive={getIsActive("/#profile")} isSamePage={pathname === "/"} />
      <NavItem href="/#tools" icon="terminal" label="Stack" isActive={getIsActive("/#tools")} isSamePage={pathname === "/"} />
      <NavItem href="/blog" icon="article" label="Blog" isActive={getIsActive("/blog")} isSamePage={pathname === "/"} />
    </nav>
  );
};
