import React from "react";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="border-b border-[#333333]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Experience Timeline */}
        <div className="px-4 py-12 md:p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#333333] flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8 md:hidden">
            <span className="material-symbols-outlined text-primary">history</span>
            <h2 className="text-[32px] font-bold text-white tracking-tight uppercase">Experience</h2>
          </div>
          <h2 className="hidden md:block text-[48px] font-bold text-white tracking-tighter uppercase mb-12">
            Execution_Log
          </h2>
          <div className="flex flex-col gap-8 relative before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-[#333333]">
            <TimelineItem
              period="2025 - PRESENT"
              title="IT Officer"
              company="Westbridge International School of Phnom Penh"
              description="Responsible for maintaining the school's IT infrastructure, providing technical support to students and staff, and managing network security."
              isActive
            />
            <TimelineItem
              period="2022 -2025"
              title="Undergraduate of Computer Science and Engineering"
              company="Royal University of Phnom Penh"
            />
          </div>
        </div>

        {/* Code Terminal Block */}
        <div className="bg-[#080F11] p-4 md:p-8 flex flex-col">
          <div className="flex items-center gap-2 border-b border-[#333333] pb-4 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#333333]"></span>
            <span className="w-3 h-3 rounded-full bg-[#333333]"></span>
            <span className="w-3 h-3 rounded-full bg-[#333333]"></span>
            <span className="font-mono text-[12px] text-outline ml-4">core_engine.rs</span>
          </div>
          <pre className="font-mono text-[13px] md:text-[14px] text-outline overflow-x-auto leading-relaxed">
            <span className="text-secondary">pub async fn</span>{" "}
            <span className="text-primary">initialize_node</span>(config: NodeConfig) -&gt; Result&lt;()&gt;{" {"}
            {"\n"}
            {"    "}<span className="text-secondary">let</span> swarm = <span className="text-primary">build_swarm</span>(config.keypair)?;{"\n"}
            {"\n"}
            {"    "}<span className="text-secondary">let</span> metrics = <span className="text-primary">MetricsRegistry::new</span>();{"\n"}
            {"    "}<span className="text-secondary">let</span> db_pool = <span className="text-primary">connect_db</span>(&amp;config.db_url).<span className="text-tertiary">await</span>?;{"\n"}
            {"\n"}
            {"    "}<span className="text-secondary">if</span> config.archive_mode {"{"}{"\n"}
            {"        "}<span className="text-primary">log::info!</span>(<span className="text-tertiary">&quot;Starting in archive mode&quot;</span>);{"\n"}
            {"        "}<span className="text-primary">sync_historical_state</span>(db_pool.clone()).<span className="text-tertiary">await</span>?;{"\n"}
            {"    "}{"}"}{"\n"}
            {"\n"}
            {"    "}<span className="text-secondary">loop</span> {"{"}{"\n"}
            {"        "}<span className="text-primary">tokio::select!</span> {"{"}{"\n"}
            {"            "}event = swarm.<span className="text-primary">next</span>() =&gt; <span className="text-primary">handle_p2p_event</span>(event),{"\n"}
            {"            "}_ = <span className="text-primary">shutdown_signal</span>() =&gt; <span className="text-secondary">break</span>,{"\n"}
            {"        "}{"}"}{"\n"}
            {"    "}{"}"}{"\n"}
            {"\n"}
            {"    "}<span className="text-primary">Ok</span>(()){"\n"}
            {"}"}{"\n"}
            <span className="animate-pulse">_</span>
          </pre>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  period: string;
  title: string;
  company: string;
  description?: string;
  isActive?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  period,
  title,
  company,
  description,
  isActive = false,
}) => (
  <div className="relative pl-6 md:pl-8">
    <span
      className={`absolute left-[-4px] top-2 w-2 h-2 md:w-3 md:h-3 rounded-none ${isActive
        ? "bg-primary border-2 border-primary"
        : "bg-[#333333] border-2 border-[#333333]"
        }`}
    ></span>
    <div className="flex flex-col gap-1 md:gap-2">
      <span
        className={`font-mono text-[12px] ${isActive ? "text-primary" : "text-outline"
          }`}
      >
        {period}
      </span>
      <h3 className="text-[20px] md:text-[24px] font-bold text-white uppercase leading-tight">
        {title}
      </h3>
      <span className="font-mono text-[14px] text-outline">{company}</span>
      {description && (
        <p className="font-mono text-[14px] text-on-surface-variant mt-2">
          {description}
        </p>
      )}
    </div>
  </div>
);
