"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

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

interface BlogListResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export default function BlogPage() {
  const [data, setData] = useState<BlogListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch categories once
  useEffect(() => {
    fetch("/api/blog/categories")
      .then((res) => res.json())
      .then((cats: string[]) => setCategories(["ALL", ...cats]))
      .catch(() => setCategories(["ALL"]));
  }, []);

  // Fetch posts on page/filter change
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(page), per_page: "6" });
      if (activeFilter !== "ALL") params.set("category", activeFilter);
      const res = await fetch(`/api/blog/posts?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const json: BlogListResponse = await res.json();
      setData(json);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [page, activeFilter]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    setPage(1);
  };

  const posts = data?.posts ?? [];

  return (
    <div className="w-full mx-auto px-5 md:px-16 lg:px-24 py-10 md:py-12 min-h-screen flex flex-col">
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

        {/* Filters (desktop only) */}
        <div className="mt-8 hidden md:flex flex-wrap gap-4">
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-3 py-1 border font-mono text-[14px] transition-colors ${
                activeFilter === filter
                  ? "border-primary bg-primary/10 text-primary hover:bg-primary hover:text-background"
                  : "border-outline-variant bg-surface text-on-surface hover:border-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-24">
          <div className="flex flex-col items-center gap-4">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent animate-spin" />
            <span className="font-mono text-[14px] text-outline uppercase tracking-widest">
              Fetching entries...
            </span>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!loading && posts.length === 0 && (
        <div className="flex items-center justify-center py-24 border border-dashed border-outline-variant">
          <div className="text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-outline text-4xl mb-2 w-[36px] h-[36px] inline-block overflow-hidden shrink-0">
              search_off
            </span>
            <p className="font-mono text-[14px] text-outline uppercase tracking-widest">
              No entries found
            </p>
          </div>
        </div>
      )}

      {/* Desktop: Masonry Grid */}
      {!loading && posts.length > 0 && (
        <>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {posts.map((post) => (
              <div key={post.slug} className="flex h-full w-full">
                <DesktopBlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Mobile: Stacked List */}
          <div className="md:hidden grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <MobileBlogCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}

      {/* Pagination */}
      {!loading && data && data.totalPages > 1 && (
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-4 font-mono text-[14px]">
            <button
              className="px-4 py-2 border border-outline-variant bg-surface text-on-surface-variant disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors flex items-center gap-1"
              disabled={page <= 1}
              onClick={() => {
                setPage((p) => p - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="material-symbols-outlined text-[16px] w-[16px] h-[16px] inline-block overflow-hidden shrink-0">chevron_left</span>
              PREV
            </button>
            
            <span className="text-on-surface-variant bg-surface px-4 py-2 border border-outline-variant">
              Page {page} of {data.totalPages}
            </span>

            <button
              className="px-4 py-2 border border-outline-variant bg-surface text-on-surface hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
              disabled={page >= data.totalPages}
              onClick={() => {
                setPage((p) => p + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              NEXT
              <span className="material-symbols-outlined text-[16px] w-[16px] h-[16px] inline-block overflow-hidden shrink-0">chevron_right</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ========== Desktop Blog Card (Masonry) ========== */
function DesktopBlogCard({ post }: { post: BlogPost }) {
  const hasImage = !!post.imageUrl;
  const hasCode = !!post.codeSnippet;

  return (
    <Link href={`/blog/${post.slug}`} className="w-full flex h-full">
      <article
        className={`w-full card-ghost bg-surface border border-outline-variant flex flex-col group cursor-pointer hover:border-primary transition-colors duration-200 ${
          !hasImage && !hasCode ? "p-6" : ""
        }`}
      >
        {/* Image */}
        {hasImage && (
          <div className="aspect-video w-full border-b border-outline-variant overflow-hidden relative shrink-0">
            <Image
              alt={post.imageAlt || post.title}
              src={post.imageUrl!}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
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
              <h2 className="text-[17px] font-bold leading-tight text-on-surface mb-3 group-hover:text-primary transition-colors">
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
                      <span className="material-symbols-outlined text-[14px] w-[14px] h-[14px] inline-block overflow-hidden shrink-0">
                        calendar_today
                      </span>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] w-[14px] h-[14px] inline-block overflow-hidden shrink-0">
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

              {(hasImage || !hasCode) && (
                <h2
                  className={`font-bold leading-tight text-on-surface mb-3 group-hover:text-primary transition-colors ${
                    hasImage ? "text-[22px]" : "text-[17px]"
                  }`}
                >
                  {post.title}
                </h2>
              )}

              <p className="font-sans text-[14px] text-on-surface-variant leading-[1.5] line-clamp-3 mb-4">
                {post.excerpt}
              </p>
            </>
          )}

          {hasCode && !hasImage && (
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
              <span className="material-symbols-outlined ml-2 text-[18px] w-[18px] h-[18px] inline-block overflow-hidden shrink-0">
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
          <h2 className="text-[17px] md:text-[22px] font-bold text-on-background mb-3 group-hover:text-primary transition-colors leading-tight">
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
