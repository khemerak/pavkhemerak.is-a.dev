"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={`flex-1 flex flex-col items-center justify-center h-full gap-1 transition-colors ${
        isActive
          ? "text-[#00E5FF] bg-[#151d1e] border-t-2 border-[#00E5FF] pt-1"
          : "text-outline hover:text-white pt-[6px]"
      }`}
    >
      <span className="material-symbols-outlined text-[24px]">{icon}</span>
      <span className="font-label-caps text-[10px]">{label}</span>
    </Link>
  );
};

export const BottomNavBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-between items-center bg-[#0D0D0D] border-t border-[#333333] md:hidden h-16">
      <NavItem href="/" icon="folder" label="Projects" />
      <NavItem href="/blog" icon="article" label="Blog" />
      <NavItem href="/skills" icon="history" label="Skills" />
      <NavItem href="/tools" icon="terminal" label="Stack" />
    </nav>
  );
};
