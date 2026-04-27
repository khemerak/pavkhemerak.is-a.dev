import React from "react";
import Image from "next/image";

export function BackgroundProfileSection() {

  return (
    <section id="profile" className="w-full max-w-[1280px] mx-auto px-5 md:px-16 py-10 md:py-16 scroll-mt-24 space-y-12">
      {/* Section 1: Header & Identity */}
      <header className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant border border-outline-variant">
        <div className="md:col-span-3 bg-background p-8 flex flex-col items-center justify-center md:border-r border-outline-variant">
          <div className="w-full aspect-square border border-outline-variant overflow-hidden bg-black">
            <Image
              alt="Personnel Photo"
              src="https://drive.google.com/uc?export=view&id=1JBE2nVPd8FoQxz-pbdZde20yjf_3ze6q"
              width={400}
              height={400}
              className="w-full h-full object-cover grayscale contrast-[1.2] hover:grayscale-0 hover:contrast-100 transition-all duration-300"
            />
          </div>
        </div>
        <div className="md:col-span-9 bg-background p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-[32px] md:text-[48px] font-extrabold uppercase text-primary leading-tight tracking-tighter mb-4">
              PAV KHEMERAK
            </h1>
            <div className="flex flex-wrap gap-4 font-mono text-[12px]">
              <span className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 border border-secondary">
                <span className="w-2 h-2 bg-secondary shadow-[0_0_8px_rgba(144,216,135,0.6)]"></span>
                STATUS: ONLINE
              </span>
              <span className="bg-surface-bright text-on-surface-variant px-3 py-1 border border-outline-variant">
                CLEARANCE: FULL-STACK
              </span>
              <span className="bg-surface-bright text-on-surface-variant px-3 py-1 border border-outline-variant">
                ROLE: CYBER_ANALYST
              </span>
            </div>
          </div>
          {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-zinc-500 uppercase tracking-widest border-t border-outline-variant pt-6 text-[12px]">
            <div>
              <p className="text-[10px] mb-1">Origin</p>
              <p className="text-on-surface font-bold">CAMBODIAN</p>
            </div>
            <div>
              <p className="text-[10px] mb-1">Access_ID</p>
              <p className="text-on-surface font-bold">PX-8892-ALPHA</p>
            </div>
            <div>
              <p className="text-[10px] mb-1">Auth_Level</p>
              <p className="text-on-surface font-bold">S_TIER_ENG</p>
            </div>
            <div>
              <p className="text-[10px] mb-1">Last_Login</p>
              <p className="text-on-surface font-bold">01:44:22_UTC</p>
            </div>
          </div> */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 border-t border-outline-variant">
            {/* Each item is contained in a rigid, bordered box to match the compartmentalized style */}
            {[
              { label: "Origin", value: "CAMBODIAN" },
              { label: "Code_Name", value: "PRINZE" },
              { label: "Age", value: "22" },
              { label: "status", value: "ONLINE" },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-4 ${index !== 3 ? 'border-r border-outline-variant' : ''} font-mono uppercase`}
              >
                <p className="text-[10px] text-secondary tracking-[0.1em] mb-1">
                  {item.label}
                </p>
                <p className="text-on-surface text-[12px] font-bold tracking-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Section 2: Technical Architecture (Bento Grid Style) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-background border border-outline-variant p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-outline-variant">
            SYS_SKILLS_V4
          </div>
          <h2 className="text-[24px] md:text-[32px] font-bold text-primary uppercase mb-8 flex items-center gap-4">
            <span className="material-symbols-outlined">memory</span>
            Technical Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Column 1 */}
            <div className="space-y-6 border-l-2 border-outline-variant pl-6">
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[14px] uppercase">
                  <span>Core_Systems</span>
                  <span className="text-tertiary-light">████████░░ 80%</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">REACT</span>
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">TYPESCRIPT</span>
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">NODE.JS</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[14px] uppercase">
                  <span>Data_Nexus</span>
                  <span className="text-tertiary-light">██████░░░░ 60%</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">POSTGRESQL</span>
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">REDIS</span>
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="space-y-6 border-l-2 border-outline-variant pl-6">
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[14px] uppercase">
                  <span>Cloud_Infrastructure</span>
                  <span className="text-tertiary-light">█████████░ 90%</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">AWS</span>
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">DOCKER</span>
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">KUBERNETES</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[14px] uppercase">
                  <span>Cyber_Defense</span>
                  <span className="text-tertiary-light">███████░░░ 70%</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">PEN-TESTING</span>
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono">SEC-OPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-low border border-outline-variant p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-mono text-[16px] text-primary uppercase mb-4">Terminal_Directives</h3>
            <div className="font-mono text-sm space-y-2 text-zinc-400">
              <p>&gt; init search_array</p>
              <p>&gt; loading technical_stack...</p>
              <p>&gt; [OK] 256ms</p>
              <p className="text-tertiary-light">&gt; system_integrity_100%</p>
            </div>
          </div>
          <div className="mt-8 aspect-video border border-outline-variant bg-black relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#01daf3 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            ></div>
            <div className="p-4 flex flex-col h-full justify-center items-center">
              <span className="material-symbols-outlined text-4xl text-primary animate-pulse">
                radar
              </span>
              <p className="font-mono text-[12px] mt-2 text-primary">SCANNING_NETWORK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Professional Timeline */}
      <section className="space-y-8">
        <h2 className="text-[24px] md:text-[32px] font-bold text-primary uppercase flex items-center gap-4">
          <span className="material-symbols-outlined">history</span>
          Professional Timeline
        </h2>
        <div className="relative border-l-2 border-outline-variant ml-4 space-y-12 pb-8">
          {/* Timeline Item 1 */}
          <div className="relative pl-12">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary border-4 border-black"></div>
            <div className="bg-surface-low border border-outline-variant p-6 neo-shadow transition-all duration-200 group hover:border-primary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-tighter">
                    2021 — PRESENT
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-on-surface uppercase group-hover:text-primary transition-colors">
                    Lead Systems Architect
                  </h3>
                  <p className="font-mono text-[14px] text-zinc-500">NEURAL_DYNAMICS_CORP</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  hub
                </span>
              </div>
              <p className="font-sans text-[14px] text-zinc-400 max-w-3xl leading-relaxed">
                Overseeing the deployment of high-frequency data pipelines and distributed cloud architectures. Implemented a zero-trust security protocol across 14 global data centers.
              </p>
            </div>
          </div>
          {/* Timeline Item 2 */}
          <div className="relative pl-12">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-outline-variant border-4 border-black"></div>
            <div className="bg-surface-low border border-outline-variant p-6 neo-shadow transition-all duration-200 group hover:border-primary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-tighter">
                    2018 — 2021
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-on-surface uppercase group-hover:text-primary transition-colors">
                    Full-Stack Security Engineer
                  </h3>
                  <p className="font-mono text-[14px] text-zinc-500">QUANTUM_CRYPT_SOLUTIONS</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  shield_lock
                </span>
              </div>
              <p className="font-sans text-[14px] text-zinc-400 max-w-3xl leading-relaxed">
                Developed end-to-end encrypted communication frameworks for financial institutions. Optimized legacy codebase for 40% performance gains in high-load environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Security Credentials & Education */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-[24px] md:text-[32px] font-bold text-primary uppercase flex items-center gap-4">
            <span className="material-symbols-outlined">verified_user</span>
            Security Credentials
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-surface-terminal border border-outline-variant p-6 font-mono border-l-4 border-l-tertiary-light">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-zinc-600">CERTIFICATE_ID: CS-9021</p>
                  <h4 className="text-on-surface font-bold text-[14px]">AWS Certified Solutions Architect</h4>
                  <p className="text-xs text-zinc-500 mt-2">Issued: 2023.04.12 // No Expiry</p>
                </div>
                <span
                  className="material-symbols-outlined text-tertiary-light"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
              </div>
            </div>
            <div className="bg-surface-terminal border border-outline-variant p-6 font-mono border-l-4 border-l-tertiary-light">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-zinc-600">CERTIFICATE_ID: OSCP-7822</p>
                  <h4 className="text-on-surface font-bold text-[14px]">Offensive Security Certified Professional</h4>
                  <p className="text-xs text-zinc-500 mt-2">Issued: 2022.11.05 // Active</p>
                </div>
                <span
                  className="material-symbols-outlined text-tertiary-light"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-[24px] md:text-[32px] font-bold text-primary uppercase flex items-center gap-4">
            <span className="material-symbols-outlined">school</span>
            Education
          </h2>
          <div className="bg-surface-terminal border border-outline-variant p-8 h-full">
            <ul className="space-y-8">
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-primary">
                <p className="font-mono text-[10px] text-zinc-500">2022 — 2025</p>
                <h4 className="font-mono text-on-surface uppercase font-bold text-[14px]">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="font-sans text-[14px] text-zinc-400">ROYAL_UNIVERSITY_OF_PHNOM_PENH</p>
              </li>
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-primary">
                <p className="font-mono text-[10px] text-zinc-500">2018 — 2021</p>
                <h4 className="font-mono text-on-surface uppercase font-bold text-[14px]">
                  High School Deploma in Science and Mathematics
                </h4>
                <p className="font-sans text-[14px] text-zinc-400">PONLOK_KHMER_SCHOOL</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
