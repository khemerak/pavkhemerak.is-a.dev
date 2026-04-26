"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));

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
          <NavLink href="/">Home</NavLink>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/tools">Tools</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-background text-primary border border-primary px-3 py-1.5 md:px-8 md:py-3 text-sm md:text-base font-label-caps uppercase hover:bg-primary hover:text-background transition-colors flex-shrink-0 active:translate-x-[2px] active:translate-y-[2px]">
          Connect
        </button>
      </div>
    </nav>
  );
};
