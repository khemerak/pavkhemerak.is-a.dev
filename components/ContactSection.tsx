"use client";

import React, { useState } from "react";
import type { PortfolioContent } from "@/app/lib/portfolioContent";

export function ContactSection({ contact }: { contact: PortfolioContent["contact"] }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    priority: "GENERAL_CORRESPONDENCE",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Transmission failed");

      setStatus("success");
      setFormData({ name: "", email: "", priority: "GENERAL_CORRESPONDENCE", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };
  return (
    <section id="contact" className="w-full max-w-[1280px] mx-auto px-5 md:px-16 py-10 md:py-16 scroll-mt-24">
      {/* Main Content Area */}
      <div className="neo-shadow bg-surface border border-outline-variant mb-12 relative overflow-hidden group">
        {/* Ghost Border Hover Effect (optional, matches other sections) */}
        <div className="absolute inset-0 border border-primary translate-x-1 translate-y-1 -z-10 opacity-0 group-hover:opacity-50 transition-all duration-300 pointer-events-none"></div>

        {/* Header Section */}
        <div className="border-b border-outline-variant p-8 md:p-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-3 h-3 bg-secondary"></span>
            <span className="font-mono text-[14px] text-secondary uppercase tracking-[0.2em]">
              Signal Transmission Protocol
            </span>
          </div>
          <h1 className="text-[40px] md:text-[64px] font-extrabold tracking-tighter text-on-surface leading-none uppercase">
            ESTABLISH CONNECTION
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Contact Form Section */}
          <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-outline-variant p-8 md:p-12">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-mono text-[12px] uppercase text-outline">
                    Subject_Identify
                  </label>
                  <input
                    className="w-full bg-surface-terminal border border-outline-variant p-4 font-mono text-[14px] text-on-surface transition-all placeholder:text-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="FULL_NAME"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-mono text-[12px] uppercase text-outline">
                    Return_Address
                  </label>
                  <input
                    className="w-full bg-surface-terminal border border-outline-variant p-4 font-mono text-[14px] text-on-surface transition-all placeholder:text-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="EMAIL@DOMAIN.COM"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[12px] uppercase text-outline">
                  Transmission_Priority
                </label>
                <select
                  className="w-full bg-surface-terminal border border-outline-variant p-4 font-mono text-[14px] text-on-surface transition-all focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer"
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                >
                  <option value="GENERAL_CORRESPONDENCE">GENERAL_CORRESPONDENCE</option>
                  <option value="PROJECT_INQUIRY">PROJECT_INQUIRY</option>
                  <option value="TECHNICAL_CONSULTATION">TECHNICAL_CONSULTATION</option>
                  <option value="SECURITY_DISCLOSURE">SECURITY_DISCLOSURE</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[12px] uppercase text-outline">
                  Message_Payload
                </label>
                <textarea
                  className="w-full bg-surface-terminal border border-outline-variant p-4 font-mono text-[14px] text-on-surface transition-all placeholder:text-outline resize-none focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="ENTER_ENCRYPTED_MESSAGE..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                className="w-full md:w-auto px-12 py-4 bg-background border border-primary text-primary font-mono text-[14px] uppercase tracking-widest hover:bg-primary hover:text-background transition-colors active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:text-primary"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "TRANSMITTING..." : status === "success" ? "DELIVERED" : status === "error" ? "FAILED_RETRY" : "SEND MESSAGE"}
              </button>
            </form>
          </div>

          {/* Sidebar Section */}
          <aside className="lg:col-span-4 p-8 md:p-12 bg-surface-low">
            <div className="space-y-12">
              {/* Data Points */}
              <section className="space-y-6">
                <div className="space-y-1">
                  <span className="block font-mono text-[12px] text-secondary uppercase">
                    Node_Location
                  </span>
                  <p className="font-mono text-[14px] text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    {contact.location}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="block font-mono text-[12px] text-secondary uppercase">
                    Direct_Comms
                  </span>
                  <p className="font-mono text-[14px] text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">
                      mail
                    </span>
                    {contact.email}
                  </p>
                </div>
                {/* <div className="space-y-2">
                  <span className="block font-mono text-[12px] text-secondary uppercase">
                    Encryption_Key
                  </span>
                  <div className="bg-surface-terminal border border-outline-variant p-4 overflow-hidden">
                    <p className="font-mono text-[10px] text-outline break-all">
                      -----BEGIN PGP PUBLIC KEY BLOCK-----<br />
                      mQENBF4jRzYBCADL2n5v6p7x9z...<br />
                      ...mQENBF4jRzYBCADL2n5v6p7x9z<br />
                      -----END PGP PUBLIC KEY BLOCK-----
                    </p>
                  </div>
                </div> */}
              </section>

              {/* Social Links */}
              <section className="space-y-4">
                <span className="block font-mono text-[12px] text-secondary uppercase">
                  Network_Nodes
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {contact.socials.map((social) => (
                    <a
                      key={social.label}
                      className="flex items-center justify-between px-4 py-3 border border-outline-variant bg-primary/5 hover:bg-primary hover:text-background hover:border-primary transition-colors group"
                      href={social.href}
                    >
                      <span className="font-mono text-[14px] uppercase group-hover:text-background">{social.label}</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:text-background">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="border border-secondary/30 p-6 bg-secondary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20">
                  <span className="material-symbols-outlined text-[48px] text-secondary">
                    security
                  </span>
                </div>
                <h4 className="font-mono text-[14px] text-secondary mb-2 uppercase">
                  System Status
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary animate-pulse"></span>
                  <span className="font-mono text-[12px] text-secondary">
                    ENCRYPTED_TUNNEL: ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Secondary Bento Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-outline-variant bg-surface p-8 neo-shadow hover:border-primary transition-colors duration-300 group">
          <span className="material-symbols-outlined text-primary mb-4 text-3xl">
            schedule
          </span>
          <h3 className="font-mono text-[16px] text-on-surface mb-2 uppercase group-hover:text-primary transition-colors">
            Response_Time
          </h3>
          <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
            Synchronous transmission usually within 24 standard cycles.
          </p>
        </div>
        <div className="border border-outline-variant bg-surface p-8 neo-shadow hover:border-primary transition-colors duration-300 group">
          <span className="material-symbols-outlined text-primary mb-4 text-3xl">
            forum
          </span>
          <h3 className="font-mono text-[16px] text-on-surface mb-2 uppercase group-hover:text-primary transition-colors">
            Direct_Chat
          </h3>
          <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
            Available for urgent security incidents or protocol failures.
          </p>
        </div>
        <div className="border border-outline-variant bg-surface p-8 neo-shadow hover:border-primary transition-colors duration-300 group">
          <span className="material-symbols-outlined text-primary mb-4 text-3xl">
            location_searching
          </span>
          <h3 className="font-mono text-[16px] text-on-surface mb-2 uppercase group-hover:text-primary transition-colors">
            Global_Presence
          </h3>
          <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
            Currently operating across GMT+7 / GMT+9 temporal zones.
          </p>
        </div>
      </div>
    </section>
  );
}
