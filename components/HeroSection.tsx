import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[819px] flex items-center border-b border-[#333333] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D] pointer-events-none"></div>
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 pt-12 pb-16 md:py-24 relative z-10">
        <div className="flex flex-col gap-6 max-w-3xl">
          <SystemStatusIndicator />
          <HeroTitle />
          <HeroDescription />
          <CallToActionButtons />
        </div>
      </div>
    </section>
  );
};

const SystemStatusIndicator: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#333333] w-max">
    <span className="w-2 h-2 rounded-none bg-primary-container animate-pulse"></span>
    <span className="font-mono-code text-mono-code text-primary-container uppercase hidden md:inline">
      SYSTEM.ONLINE
    </span>
    <span className="font-mono-code text-mono-code text-primary-container uppercase md:hidden">
      SYS.STATUS: ONLINE
    </span>
  </div>
);

const HeroTitle: React.FC = () => (
  <h1 className="font-h1 text-[40px] md:text-[64px] text-white uppercase tracking-tighter leading-[1.1]">
    Architecting
    <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary-fixed">
      Systems.
    </span>
    <br />
    Securing
    <br />
    Networks.
  </h1>
);

const HeroDescription: React.FC = () => (
  <p className="font-body text-body md:font-mono-code md:text-mono-code text-outline max-w-2xl border-none md:border-l border-[#333333] md:pl-4">
    Full-Stack Developer & Cybersecurity Analyst specializing in high-performance, hardened digital infrastructure. From developing scalable Spring Boot architectures to auditing OWASP vulnerabilities, I build systems designed to withstand the modern threat landscape.
  </p>
);

const CallToActionButtons: React.FC = () => (
  <div className="flex flex-row gap-3 md:gap-4 mt-4 md:mt-8">
    <a href="#tools" className="flex-1 md:flex-none md:w-auto bg-[#0D0D0D] text-[#00E5FF] border border-[#00E5FF] px-2 md:px-8 py-3 font-label-caps text-[11px] md:text-label-caps uppercase hover:bg-[#00E5FF] hover:text-[#0D0D0D] transition-colors duration-200 flex items-center justify-center gap-1.5 md:gap-2">
      <span className="material-symbols-outlined text-[16px] md:hidden">terminal</span>
      <span className="md:hidden">Projects</span>
      <span className="hidden md:inline">View Projects</span>
      <span className="material-symbols-outlined text-[16px] hidden md:inline">
        arrow_forward
      </span>
    </a>
    <a href="/assets/resume.pdf" download className="flex-1 md:flex-none md:w-auto bg-[#1A1A1A] md:bg-[#0D0D0D] text-white border border-[#333333] px-2 md:px-8 py-3 font-label-caps text-[11px] md:text-label-caps uppercase hover:border-white transition-colors duration-200 flex items-center justify-center gap-1.5 md:gap-2">
      <span className="material-symbols-outlined text-[16px] md:hidden">download</span>
      <span className="md:hidden">Resume</span>
      <span className="hidden md:inline">Fetch Resume</span>
    </a>
  </div>
);
