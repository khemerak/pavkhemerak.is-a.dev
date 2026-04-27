import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - pavkhemerak.dev",
  description:
    "Thoughts, tutorials, and deep dives into raw engineering, security vulnerabilities, and architectural patterns.",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  imageUrl?: string;
  imageAlt?: string;
  tags?: string[];
  codeSnippet?: string;
}

const posts: BlogPost[] = [
  {
    slug: "zero-day-exploits-kernel-panic",
    title: "Zero-Day Exploits: Analyzing the latest kernel panic vulnerability",
    excerpt:
      "A deep technical teardown of CVE-2024-XXXX, exploring how attackers are manipulating memory allocation in the Linux kernel to gain root access. Includes proof-of-concept code and mitigation strategies.",
    date: "2024-10-24",
    readTime: "12 min read",
    category: "CYBERSECURITY",
    categoryColor: "border-tertiary/50 text-tertiary",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDb0FBvsBzKX4lm5d1Aii4GqwXKM-2lvNTcl9esC76Ft3piWuLXegnpRhNtGNg9_xBxBS6r1xwqVtWNYoZ29QTXsNNHMb-s3j0sewRmxAng0LDQztsEIyzgIdmau-5rGui4g1aFtiTR4kf9DA2bFGBfZP8Ys6rc3f5s2eQZeATocbZAFEeJvjG7mVbZUfEOb7PyYCy593MXH-bn5XcnuMnOCTN3Ufgu9NK2PetrgreoL2U07TjLlsIccRYGDou09rHyRN0v06UbgQo",
    imageAlt: "Matrix style cascading green code on a dark monitor screen",
  },
  {
    slug: "modular-monolith",
    title: "Why I abandoned microservices for a modular monolith",
    excerpt:
      "The complexity tax of network boundaries, eventual consistency, and distributed tracing finally outweighed the benefits. Here is the architecture we migrated to and the performance metrics that justify the move.",
    date: "2024-10-18",
    readTime: "8 min read",
    category: "ARCHITECTURE",
    categoryColor: "border-outline-variant text-on-surface-variant",
  },
  {
    slug: "smart-contract-security",
    title: "Smart Contract Security: Reentrancy Attacks in 2024",
    excerpt:
      "Despite widespread awareness, reentrancy remains a critical threat. Analyzing recent DeFi exploits and implementing robust guardrails in Solidity.",
    date: "2024-09-30",
    readTime: "15 min read",
    category: "WEB3",
    categoryColor: "border-secondary/50 text-secondary-light",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWzmp6zw8vZV5YK0AJ6XIW-8XKrswHKv5E89w0hClWfCPpN8BvnJNCptG9JA6z0LzW9oSyZTLKLSr4hsJxfWPZlYq6d1vzwgOEmm6PUa92ST16mkcfrsLulIoRKuqsM_nD2rQGrua-2Yk3J-BxvcFkII5EuNTUudfBsDVJIUj6Iu8PHwfDdf_y0YGT4mfFQ7Rpxc4ol_gsXLfvALwZsmdjIYKi2uc1ipIBFFQXMAVUFwN0Vx2zJfzHYkc_CEUl1Z4bU7GnUbb_Yss",
    imageAlt:
      "Abstract digital representation of blockchain network nodes connected by glowing lines",
  },
  {
    slug: "ebpf-network-filters",
    title: "eBPF: Writing high-performance network filters",
    excerpt:
      "Bypassing traditional kernel networking stacks for maximum throughput using extended Berkeley Packet Filter.",
    date: "2024-09-15",
    readTime: "10 min read",
    category: "LINUX",
    categoryColor: "border-outline-variant text-on-surface-variant",
    codeSnippet: `SEC("xdp")
int xdp_drop_all(struct xdp_md *ctx) {
    void *data_end = (void *)(long)ctx->data_end;
    void *data = (void *)(long)ctx->data;
    
    // Drop logic implemented here
    return XDP_DROP;
}`,
  },
  {
    slug: "bypassing-edr-syscalls",
    title: "Bypassing modern EDR solutions with direct syscalls",
    excerpt:
      "An offensive security perspective on evading user-land API hooking. We implement a custom bootloader technique to map NTDLL directly from disk.",
    date: "2024-08-22",
    readTime: "20 min read",
    category: "CYBERSECURITY",
    categoryColor: "border-tertiary/50 text-tertiary",
  },
];

const filters = ["ALL", "Cybersecurity", "Linux", "Web3", "Architecture"];

export default function BlogPage() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-5 md:px-16 py-10 md:py-12">
      {/* Header Section */}
      <section className="mb-12 md:mb-16 border-b border-outline-variant pb-8">
        <h1 className="text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.04em] text-on-background">
          <span className="hidden md:inline text-primary">/blog</span>
          <span className="md:hidden">Terminal Output</span>
        </h1>
        <p className="font-sans md:font-sans text-[16px] text-on-surface-variant max-w-2xl leading-[1.6] mt-4">
          <span className="hidden md:inline">
            Thoughts, tutorials, and deep dives into raw engineering, security
            vulnerabilities, and architectural patterns. Unfiltered and highly
            technical.
          </span>
          <span className="md:hidden font-mono text-[14px] text-outline">
            &gt; Executing query: SELECT * FROM thoughts WHERE type =
            &apos;technical&apos; ORDER BY date DESC;
          </span>
        </p>

        {/* Construction Notice */}
        <div className="mt-6 p-4 bg-surface-terminal border-l-4 border-l-secondary border border-outline-variant text-on-surface flex items-start gap-3 max-w-3xl">
          <span className="material-symbols-outlined text-secondary mt-0.5">warning</span>
          <div className="font-mono text-[13px] leading-relaxed">
            <strong className="block text-secondary mb-1 uppercase tracking-wider">System_Notice: Under_Construction</strong>
            The blog module is currently under active development. All posts displayed below are static, hard-coded placeholders used for architectural demonstration.
          </div>
        </div>

        {/* Filters (desktop only) */}
        <div className="mt-8 hidden md:flex flex-wrap gap-4">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`px-3 py-1 border font-mono text-[14px] transition-colors ${
                i === 0
                  ? "border-primary bg-primary/10 text-primary hover:bg-primary hover:text-background"
                  : "border-outline-variant bg-surface text-on-surface hover:border-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Desktop: Masonry Grid */}
      <div className="hidden md:block masonry-grid">
        {posts.map((post) => (
          <DesktopBlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Mobile: Stacked List */}
      <div className="md:hidden grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <MobileBlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination (desktop) / Load More (mobile) */}
      <div className="mt-12 md:mt-16 flex justify-center">
        {/* Desktop pagination */}
        <div className="hidden md:flex gap-2 font-mono text-[14px]">
          <button className="px-4 py-2 border border-outline-variant bg-surface text-on-surface-variant disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            &lt; PREV
          </button>
          <button className="w-10 h-10 border border-primary bg-primary/10 text-primary flex items-center justify-center">
            1
          </button>
          <button className="w-10 h-10 border border-outline-variant bg-surface text-on-surface-variant hover:border-primary hover:text-primary flex items-center justify-center">
            2
          </button>
          <button className="w-10 h-10 border border-outline-variant bg-surface text-on-surface-variant hover:border-primary hover:text-primary flex items-center justify-center">
            3
          </button>
          <button className="px-4 py-2 border border-outline-variant bg-surface text-on-surface hover:border-primary hover:text-primary transition-colors">
            NEXT &gt;
          </button>
        </div>

        {/* Mobile load more */}
        <button className="md:hidden bg-background border border-outline-variant text-on-background font-mono text-[14px] px-8 py-3 hover:border-primary hover:text-primary transition-colors flex items-center gap-2 group">
          <span className="material-symbols-outlined text-sm group-hover:animate-bounce">
            download
          </span>
          LOAD_MORE.sh
        </button>
      </div>
    </div>
  );
}

/* ========== Desktop Blog Card (Masonry) ========== */
function DesktopBlogCard({ post }: { post: BlogPost }) {
  const hasImage = !!post.imageUrl;
  const hasCode = !!post.codeSnippet;

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={`masonry-item card-ghost bg-surface border border-outline-variant flex flex-col group cursor-pointer hover:border-primary transition-colors duration-200 ${
          !hasImage && !hasCode ? "p-6" : ""
        }`}
      >
        {/* Image */}
        {hasImage && (
          <div className="h-48 lg:h-64 border-b border-outline-variant overflow-hidden relative">
            <Image
              alt={post.imageAlt || post.title}
              src={post.imageUrl!}
              fill
              className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span
                className={`px-2 py-1 bg-surface/80 border ${post.categoryColor} label-caps text-[10px] backdrop-blur-sm`}
              >
                {post.category}
              </span>
            </div>
          </div>
        )}

        {/* Code Snippet */}
        {hasCode && !hasImage && (
          <>
            <div className="p-6 border-b border-outline-variant">
              <div className="flex gap-2 mb-4">
                <span
                  className={`px-2 py-1 bg-surface border ${post.categoryColor} label-caps text-[10px]`}
                >
                  {post.category}
                </span>
              </div>
              <h2 className="text-[24px] font-bold leading-tight text-on-surface mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
            </div>
            <div className="bg-surface-terminal p-4 border-b border-outline-variant font-mono text-[12px] text-tertiary overflow-hidden">
              <pre>
                <code>{post.codeSnippet}</code>
              </pre>
            </div>
          </>
        )}

        {/* Text content */}
        <div className={`${hasImage ? "p-6" : ""} flex flex-col flex-grow`}>
          {!hasImage && !hasCode && (
            <div className="flex gap-2 mb-4">
              <span
                className={`px-2 py-1 bg-surface border ${post.categoryColor} label-caps text-[10px]`}
              >
                {post.category}
              </span>
            </div>
          )}

          {(hasImage || (!hasImage && !hasCode)) && (
            <>
              <div className="flex items-center gap-4 text-on-surface-variant font-mono text-[12px] mb-3">
                {hasImage && (
                  <>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        calendar_today
                      </span>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                      {post.readTime}
                    </span>
                  </>
                )}
                {!hasImage && !hasCode && (
                  <>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>

              {!hasCode && (
                <h2
                  className={`font-bold leading-tight text-on-surface mb-3 group-hover:text-primary transition-colors ${
                    hasImage ? "text-[32px]" : "text-[24px]"
                  }`}
                >
                  {post.title}
                </h2>
              )}

              <p className="font-sans text-[16px] text-on-surface-variant leading-[1.6] line-clamp-3 mb-6">
                {post.excerpt}
              </p>
            </>
          )}

          {hasCode && (
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-on-surface-variant font-mono text-[12px] mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <p className="font-sans text-[16px] text-on-surface-variant leading-[1.6] line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          )}

          {hasImage && (
            <div className="mt-auto flex items-center text-primary font-mono text-[14px] group-hover:translate-x-2 transition-transform duration-200">
              Read full payload
              <span className="material-symbols-outlined ml-2 text-[18px]">
                arrow_forward
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

/* ========== Mobile Blog Card ========== */
function MobileBlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-surface border border-outline-variant group relative overflow-hidden flex flex-col">
        <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
        <div className="p-5 md:p-6 flex flex-col h-full relative z-0">
          <div className="flex items-center justify-between mb-4 border-b border-outline-variant pb-2">
            <time className="font-mono text-[14px] text-primary">{post.date}</time>
            <span className="label-caps bg-surface-high text-on-surface-variant px-2 py-1 border border-outline-variant">
              {post.category}
            </span>
          </div>
          <h2 className="text-[24px] md:text-[32px] font-bold text-on-background mb-3 group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h2>
          <p className="font-sans text-[16px] text-outline leading-[1.6] mb-6 flex-grow">
            {post.excerpt}
          </p>
          {post.tags && (
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-outline-variant">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-primary bg-background px-2 py-0.5 border border-outline-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="absolute inset-0 z-20">
          <span className="sr-only">Read {post.title}</span>
        </span>
      </article>
    </Link>
  );
}
