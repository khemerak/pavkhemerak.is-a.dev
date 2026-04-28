import React from "react";
import { PixelatedImage } from "./PixelatedImage";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[819px] flex items-center border-b border-[#333333] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D] pointer-events-none"></div>
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 pt-12 pb-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
            <SystemStatusIndicator />
            <HeroTitle />
            <HeroDescription />
            <CallToActionButtons />
          </div>
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-center items-center relative">
            <div className="w-full max-w-[360px] aspect-square border border-[#333333] overflow-hidden bg-black relative group shadow-[0_0_30px_rgba(0,229,255,0.05)] hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] transition-shadow duration-500">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00E5FF] z-20 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00E5FF] z-20 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00E5FF] z-20 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00E5FF] z-20 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute inset-0 bg-[#00E5FF]/5 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
              
              <PixelatedImage
                alt="Pav Khemerak"
                src="/assets/img/profile.PNG"
                width={800}
                height={800}
                pixelSize={16}
                className="w-full h-full object-cover grayscale contrast-[1.2] opacity-70 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
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
