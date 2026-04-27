import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post - pavkhemerak.dev",
  description:
    "Deep dive into fault-tolerant distributed systems and high-concurrency environments.",
};

export default function BlogPostPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-5 md:px-6 py-10 md:pt-10 md:pb-24 flex flex-col gap-10 md:gap-12">
      {/* Back Navigation */}
      <div>
        <Link
          className="inline-flex items-center gap-2 font-mono text-[14px] text-primary hover:text-primary-fixed transition-colors w-max group"
          href="/blog"
        >
          <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Return to Directory
        </Link>
      </div>
      <div className="mt-6 p-4 bg-surface-terminal border-l-4 border-l-secondary border border-outline-variant text-on-surface flex items-start gap-3 max-w-3xl">
        <span className="material-symbols-outlined text-secondary mt-0.5">warning</span>
        <div className="font-mono text-[13px] leading-relaxed">
          <strong className="block text-secondary mb-1 uppercase tracking-wider">System_Notice: Under_Construction</strong>
          The blog module is currently under active development. All posts displayed below are static, hard-coded placeholders used for architectural demonstration.
        </div>
      </div>
      {/* Article Header */}
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-3">
          <span className="px-2 py-1 border border-outline-variant bg-surface-low label-caps text-primary uppercase">
            Architecture
          </span>
          <span className="px-2 py-1 border border-outline-variant bg-surface-low label-caps text-on-surface-variant uppercase">
            Distributed Systems
          </span>
        </div>
        <h1 className="text-[32px] md:text-[64px] font-extrabold text-on-surface leading-[1.1] tracking-[-0.04em]">
          Architecting Fault-Tolerant Systems in High-Concurrency Environments
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 font-mono text-[14px] text-on-surface-variant border-t border-outline-variant pt-6 mt-2">
          {/* Mobile: Author info */}
          <div className="flex items-center gap-4 md:hidden">
            <Image
              alt="Profile picture of pavkhemerak"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpLfgx7jwx9mIf4Q5E8WxJXUzXKPo8K5T7i4pkZxfu5BdBlX1Y_14TJh-Vv4ue_UhJua6etzEzlZ6g6BK21GYA4KiQQDesHRT75CPDhzbMQpJjh19I_ABGgUOQq2l3GuMvhmBc6En8eEd0pvRaEkA8ChvvpJf6NBlXdYa_Wm2UD3pC_w7YanwWShNwWgsPnDMKjjI9n7UYLoUhXOmuVhkGRtC84Hoisb0cas7g9_mPdShizlkYak-Jpbu51uPNqwbRpeJHb8oCdWI"
              width={48}
              height={48}
              className="rounded-full border border-outline-variant grayscale"
            />
            <div>
              <div className="label-caps text-on-surface uppercase">Pavkhemerak</div>
              <div className="font-mono text-[14px] text-outline-variant">Senior Platform Engineer</div>
            </div>
          </div>
          {/* Desktop: Meta info */}
          <span>SYS_LOG: 2023.10.27</span>
          <span className="hidden md:inline w-1 h-1 bg-outline-variant"></span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">timer</span>
            12 MIN READ
          </span>
        </div>
      </header>

      {/* Hero Graphic */}
      <div className="w-full aspect-video border border-outline-variant bg-surface p-1 group relative overflow-hidden">
        <Image
          alt="Server rack abstract visualization"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwTk_hrbEUA47Qq3yWFwVxr6l-iusKvv7YtZv5PFZaMn4L8IgSlLgBqYNnz_cR1JjgK4_sVQCUanlOCFQj1GNUH13qdYSCbB5uD-rJGbG5BrLOg9hcphZUnfEZN1OGi5Si2QFbe_3x_O2vIvTpVd_gqWskApGKBXjpeH4E5IdHZ4R6q6pnYTGfRrbyEf-PjecYwU1owURgILscgDBt26yfzmUSYMzcKnwkN6HduUjofXx8Y0henncCY2u6hElre3R0ZLKlXA4wktQ"
          fill
          sizes="100vw"
          className="object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Article Body */}
      <article className="flex flex-col gap-8 font-sans text-[16px] text-on-surface leading-relaxed">
        <p className="text-lg md:text-xl text-on-surface-variant font-mono leading-relaxed">
          The illusion of a perfectly stable system is the first trap an engineer
          falls into. At scale, failure is not an anomaly; it is a fundamental
          operational state. Designing for concurrency requires abandoning the
          assumption of reliability.
        </p>

        <h2 className="text-[28px] md:text-[48px] font-bold text-on-surface mt-8 border-b border-outline-variant pb-4 tracking-[-0.02em]">
          Embracing the Chaos Paradigm
        </h2>

        <p>
          When dealing with microservices communicating over unpredictable
          networks, the naive approach is to build stronger retry mechanisms.
          However, this often leads to retry storms, cascading failures, and
          ultimately, system collapse. We must shift from building walls to
          building bulkheads.
        </p>

        {/* Neo-Brutalist Callout */}
        <div className="border border-primary bg-[#080f11] p-6 relative my-4">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          <div className="flex items-start gap-4 ml-4">
            <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">
              warning
            </span>
            <div>
              <h4 className="font-mono text-[14px] text-primary uppercase mb-2">
                Critical Insight
              </h4>
              <p className="font-sans text-[16px] text-on-surface-variant m-0">
                A service that fails quickly and cleanly is vastly superior to a
                service that degrades slowly, holding resources hostage and
                creating unpredictable latency tails across the entire
                infrastructure.
              </p>
            </div>
          </div>
        </div>

        <p>
          Implementing circuit breakers and rigorous timeout policies at every
          network boundary isolates faults. The following example demonstrates a
          resilient execution wrapper in Go, prioritizing immediate failure over
          prolonged degradation.
        </p>

        {/* Code Block */}
        <div className="border border-outline-variant bg-surface-terminal flex flex-col my-6 shadow-[4px_4px_0px_0px_rgba(51,51,51,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(51,51,51,1)] hover:border-primary">
          <div className="border-b border-outline-variant flex justify-between items-center px-4 py-2 bg-surface">
            <span className="font-mono text-[14px] text-on-surface-variant">
              breaker.go
            </span>
            <div className="flex gap-2">
              <div className="w-3 h-3 border border-outline-variant"></div>
              <div className="w-3 h-3 border border-outline-variant"></div>
              <div className="w-3 h-3 border border-outline-variant"></div>
            </div>
          </div>
          <div className="p-4 md:p-6 overflow-x-auto">
            <pre className="font-mono text-[13px] md:text-[14px] text-primary-fixed leading-loose">
              <code>{`func ExecuteWithBreaker(cb *CircuitBreaker, req Request) (Response, error) {
    if !cb.AllowRequest() {
        return nil, ErrCircuitOpen
    }

    ctx, cancel := context.WithTimeout(context.Background(), 50*time.Millisecond)
    defer cancel()

    resp, err := performNetworkCall(ctx, req)
    
    if err != nil {
        cb.RecordFailure()
        return nil, err
    }

    cb.RecordSuccess()
    return resp, nil
}`}</code>
            </pre>
          </div>
        </div>

        <h3 className="text-[24px] md:text-[32px] font-bold text-on-surface mt-6">
          Metrics Over Intuition
        </h3>

        <p>
          You cannot optimize what you do not measure. Telemetry is not an
          afterthought; it is the central nervous system of a distributed
          application. Track P99 latencies, error rates, and saturation points
          religiously.
        </p>

        <blockquote className="pl-6 border-l-[4px] border-primary text-[24px] md:text-[32px] font-bold text-on-surface-variant my-8 py-2 leading-[1.2]">
          &ldquo;Hope is not a strategy. Engineering requires instrumentation.&rdquo;
        </blockquote>
      </article>

      {/* Post Footer Actions */}
      <div className="border-t border-outline-variant pt-8 mt-4 md:mt-12 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors bg-surface">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
          <button className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors bg-surface">
            <span className="material-symbols-outlined text-[20px]">
              bookmark
            </span>
          </button>
        </div>
        <Link
          className="inline-flex items-center gap-2 font-mono text-[14px] text-on-surface hover:text-primary transition-colors uppercase tracking-wider"
          href="/blog"
        >
          Next Entry
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
