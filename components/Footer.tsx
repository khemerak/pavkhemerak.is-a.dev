import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center px-4 py-8 gap-6 bg-[#0D0D0D] border-t border-[#333333] mt-8 md:flex-row md:justify-between md:px-8 md:py-12 md:mt-0">
      <div className="text-lg font-black text-white uppercase tracking-widest">
        pavkhemerak.dev
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
        <Link
          href="https://github.com/khemerak"
          className="font-mono-code text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors px-2 py-1 border border-transparent hover:border-[#333333] md:px-0 md:py-0 md:border-0 md:hover:border-transparent md:hover:translate-x-1 duration-300"
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/pav-khemerak-6b7270269/"
          className="font-mono-code text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors px-2 py-1 border border-transparent hover:border-[#333333] md:px-0 md:py-0 md:border-0 md:hover:border-transparent md:hover:translate-x-1 duration-300"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/khemerak/pavkhemerak.dev-frontend.git"
          className="font-mono-code text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors px-2 py-1 border border-transparent hover:border-[#333333] md:px-0 md:py-0 md:border-0 md:hover:border-transparent md:hover:translate-x-1 duration-300"
        >
          Source Code
        </Link>
      </div>
      <div className="font-mono-code text-[10px] uppercase tracking-widest text-[#00E5FF] mt-4 md:mt-0 text-center">
        © 2025 PAVKHEMERAK. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};
