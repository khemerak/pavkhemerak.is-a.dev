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

        {/* Education */}
        <div className="bg-background border border-outline-variant p-8 relative overflow-hidden h-full flex flex-col">
          <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-outline-variant">
            ACADEMIC_RECORD
          </div>
          <h2 className="text-[24px] md:text-[32px] font-bold text-primary uppercase mb-8 flex items-center gap-4">
            <span className="material-symbols-outlined">school</span>
            Education
          </h2>
          <div className="space-y-8 border-l-2 border-outline-variant pl-6 flex-1">
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-2 h-2 bg-primary"></div>
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[14px] uppercase text-on-surface">
                  <span>Bachelor of Science in Computer Science</span>
                </div>
                <p className="font-mono text-[10px] text-zinc-500">2022 — 2025</p>
                <div className="flex gap-2 flex-wrap mt-2">
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono text-zinc-400">ROYAL_UNIVERSITY_OF_PHNOM_PENH</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-2 h-2 bg-primary"></div>
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[14px] uppercase text-on-surface">
                  <span>High School Diploma in Science & Math</span>
                </div>
                <p className="font-mono text-[10px] text-zinc-500">2018 — 2021</p>
                <div className="flex gap-2 flex-wrap mt-2">
                  <span className="bg-surface text-[10px] px-2 py-0.5 border border-outline-variant font-mono text-zinc-400">PONLOK_KHMER_SCHOOL</span>
                </div>
              </div>
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
                    2025 — Present
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-on-surface uppercase group-hover:text-primary transition-colors">
                    IT Officer & Freelance Full-Stack Developer
                  </h3>
                  <p className="font-mono text-[14px] text-zinc-500">WESTBRIDGE_INTERNATIONAL_SCHOOL_OF_PHNOM_PENH</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  hub
                </span>
              </div>
              <p className="font-sans text-[14px] text-zinc-400 max-w-3xl leading-relaxed">
                Responsible for maintaining the school's IT infrastructure, providing technical support to students and staff, and managing network security.
              </p>
            </div>
          </div>
          {/* Timeline Item 2 - Academic & Independent Experience */}
          <div className="relative pl-12">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-outline-variant border-4 border-black"></div>
            <div className="bg-surface-low border border-outline-variant p-6 neo-shadow transition-all duration-200 group hover:border-primary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-tighter">
                    2022 — 2025
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-on-surface uppercase group-hover:text-primary transition-colors">
                    Technical Consultant & Peer Mentor
                  </h3>
                  <p className="font-mono text-[14px] text-zinc-500">INDEPENDENT / ACADEMIC PROJECTS</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  terminal
                </span>
              </div>
              <p className="font-sans text-[14px] text-zinc-400 max-w-3xl leading-relaxed">
                Supported peer developers through systematic code reviews and in-depth logic explanations.
                Architected and managed cloud deployments using AWS (EC2, S3, Amplify) for web applications.
                Curated a specialized repository of technical research and study resources to streamline project development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Certificates & Education */}
      <section className="space-y-8">
        {/* Row A: Certificates (full-width) */}
        <div className="space-y-6">
          <h2 className="text-[24px] md:text-[32px] font-bold text-primary uppercase flex items-center gap-4">
            <span className="material-symbols-outlined">verified_user</span>
            Certificates
          </h2>

          {/* AWS Certificates */}
          <div className="space-y-3">
            <p className="font-mono text-[11px] text-secondary tracking-widest uppercase border-b border-outline-variant pb-2">
              // Amazon Web Services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "AWS Cloud Architecting", url: "https://drive.google.com/file/d/1AXrfp-zt0Tdr2Al1dfBiKdEbhFqGC-w3/view?usp=drive_link" },
                { name: "AWS Data Engineering", url: "https://drive.google.com/file/d/1KhXf2a1QDxPNonjM_YpbwUjK0jroqFHL/view?usp=drive_link" },
                { name: "AWS Machine Learning Foundations", url: "https://drive.google.com/file/d/1d70RIgqfcJ88jkCwehtPYRjdMJNIuBWj/view?usp=drive_link" },
                { name: "AWS Cloud Foundations", url: "https://drive.google.com/file/d/1pYq5_Ys1PcVoIODliiRtkCCGXVmSL8y8/view?usp=drive_link" },
              ].map((cert, i) => (
                <a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface-terminal border border-outline-variant p-5 font-mono border-l-4 border-l-tertiary-light flex items-center justify-between hover:border-primary hover:bg-surface transition-all duration-200"
                >
                  <div>
                    <p className="text-[10px] text-zinc-600 mb-1">AWS_CERT</p>
                    <h4 className="text-on-surface font-bold text-[13px] group-hover:text-primary transition-colors">{cert.name}</h4>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-tertiary-light transition-colors text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* CCNA Certificates */}
          <div className="space-y-3">
            <p className="font-mono text-[11px] text-secondary tracking-widest uppercase border-b border-outline-variant pb-2">
              // Cisco — CCNA
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "CCNA Enterprise Networking, Security & Automation", url: "https://drive.google.com/file/d/1nQun-4i-U__WZ2OEekTunCjGv964e6kx/view?usp=drive_link" },
                { name: "CCNA Introduction to Networking", url: "https://drive.google.com/file/d/1GtXUN5fArocOWU3VX_bahdzMger6b-2G/view?usp=drive_link" },
              ].map((cert, i) => (
                <a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface-terminal border border-outline-variant p-5 font-mono border-l-4 border-l-primary flex items-center justify-between hover:border-primary hover:bg-surface transition-all duration-200"
                >
                  <div>
                    <p className="text-[10px] text-zinc-600 mb-1">CCNA_CERT</p>
                    <h4 className="text-on-surface font-bold text-[13px] group-hover:text-primary transition-colors">{cert.name}</h4>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Fortinet Certificates */}
          <div className="space-y-3">
            <p className="font-mono text-[11px] text-secondary tracking-widest uppercase border-b border-outline-variant pb-2">
              // Fortinet — NSE / FCF / FCA
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "FCA Cybersecurity", url: "https://drive.google.com/file/d/1eTQMLw9e3CXOSGL6Zawo7kUb-t5xr4M5/view?usp=drive_link" },
                { name: "FCF Getting Started in Cybersecurity 3.0", url: "https://drive.google.com/file/d/1csOp1rhNG7QymRk1EARAzb7umLDqOQGN/view?usp=drive_link" },
                { name: "FCF Intro to the Threat Landscape 3.0", url: "https://drive.google.com/file/d/147v4Mk1v7MSvpZIFyviyZHekUUcRAuBo/view?usp=drive_link" },
                { name: "FCF Technical Intro to Cybersecurity 2.0", url: "https://drive.google.com/file/d/1OnyO5xGbdE36X2jrTt19TCz6Vn4cCdpD/view?usp=drive_link" },
              ].map((cert, i) => (
                <a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface-terminal border border-outline-variant p-5 font-mono border-l-4 border-l-[#DA291C] flex items-center justify-between hover:border-[#DA291C] hover:bg-surface transition-all duration-200"
                >
                  <div>
                    <p className="text-[10px] text-zinc-600 mb-1">FORTINET_CERT</p>
                    <h4 className="text-on-surface font-bold text-[13px] group-hover:text-[#DA291C] transition-colors">{cert.name}</h4>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-[#DA291C] transition-colors text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shield
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Row B: Badges */}
        <div className="grid grid-cols-1 gap-8">
          {/* Badges */}
          <div className="space-y-6">
            <h2 className="text-[24px] md:text-[32px] font-bold text-primary uppercase flex items-center gap-4">
              <span className="material-symbols-outlined">military_tech</span>
              Badges
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { issuer: "AWS", name: "Cloud Architecting", imgId: "1fTEKXNt1SOU1Lenw0xIFRGfO7hOgR8O8" },
                { issuer: "AWS", name: "Data Engineering", imgId: "16hxbzgUK169I8Zgz7SoDIRZfK5Fcr90X" },
                { issuer: "AWS", name: "Machine Learning Foundations", imgId: "1yzE7u-k3vfZZzQXfnNHqdc5FiWuS99fs" },
                { issuer: "AWS", name: "Cloud Foundations", imgId: "1qBlwy8HGKJXGdoV66WJpcREtwcHZOD1b" },
                { issuer: "CCNA", name: "Enterprise Networking, Security & Auto", imgId: "11z6rxo87f1F1V0-8jodJiTxmRSOqKwwi" },
                { issuer: "CCNA", name: "Introduction to Networking", imgId: "149tr0a5bYWc1ZowFus-vZXlrGAfso1oa" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="bg-surface-terminal border border-outline-variant p-3 font-mono flex flex-col items-center gap-3 hover:border-tertiary-light hover:bg-surface transition-all duration-200"
                >
                  <div className="w-full aspect-square relative bg-black overflow-hidden border border-outline-variant">
                    <Image
                      src={`https://drive.google.com/uc?export=view&id=${badge.imgId}`}
                      alt={`${badge.issuer} ${badge.name} Badge`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="text-center space-y-0.5">
                    <p className="text-[9px] text-secondary uppercase tracking-widest">{badge.issuer}_BADGE</p>
                    <p className="text-on-surface text-[10px] font-bold leading-tight">{badge.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
