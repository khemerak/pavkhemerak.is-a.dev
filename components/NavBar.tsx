"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
  return (
    <Link
      className={`label-caps transition-all duration-200 active:scale-95 ${
        isActive
          ? "text-primary border-b border-primary pb-1"
          : "text-outline hover:text-primary cursor-crosshair"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export const NavBar: React.FC = () => {
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
      { rootMargin: "-30% 0px -70% 0px" } // Adjust these margins to trigger active state nicely
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
    handleScroll(); // Check initial scroll

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
    <nav className="glass-nav flex justify-between items-center px-4 md:px-8 py-4 h-16">
      <div className="flex items-center gap-8 w-3/4 md:w-auto">
        <Link
          className="text-xl font-black text-foreground tracking-widest uppercase truncate"
          href="/"
        >
          pavkhemerak.dev
        </Link>
        <div className="hidden md:flex gap-6">
          <NavLink href="/" isActive={getIsActive("/")}>Home</NavLink>
          <NavLink href="/#profile" isActive={getIsActive("/#profile")}>Profile</NavLink>
          <NavLink href="/#tools" isActive={getIsActive("/#tools")}>Tools</NavLink>
          <NavLink href="/blog" isActive={getIsActive("/blog")}>Blog</NavLink>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/#contact"
          className="bg-background text-primary border border-primary px-3 py-1.5 md:px-8 md:py-3 text-sm md:text-base font-label-caps uppercase hover:bg-primary hover:text-background transition-colors flex-shrink-0 active:translate-x-[2px] active:translate-y-[2px] text-center"
        >
          Connect
        </Link>
      </div>
    </nav>
  );
};
