"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostDetail {
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
  content: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`/api/blog/posts/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: BlogPostDetail) => {
        setPost(data);
        document.title = `${data.title} - pavkhemerak.dev`;
        // Track page view (fire-and-forget)
        fetch(`/api/blog/posts/${slug}/view`, { method: "POST" }).catch(() => {});
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full max-w-[800px] mx-auto px-5 md:px-6 py-10 md:pt-10 md:pb-24 flex flex-col gap-10 md:gap-12 min-h-screen">
        {/* Back Navigation Skeleton */}
        <div className="w-40 h-6 bg-surface-high animate-pulse border border-outline-variant" />

        {/* Article Header Skeleton */}
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            <div className="w-20 h-8 bg-surface-high animate-pulse border border-outline-variant" />
            <div className="w-20 h-8 bg-surface-high animate-pulse border border-outline-variant" />
          </div>
          <div className="w-full h-12 bg-surface-high animate-pulse" />
          <div className="w-3/4 h-12 bg-surface-high animate-pulse" />
          <div className="w-64 h-6 bg-surface-high animate-pulse mt-2" />
        </header>

        {/* Hero Image Skeleton */}
        <div className="w-full aspect-video border border-outline-variant bg-surface-high animate-pulse p-1" />

        {/* Article Body Skeleton */}
        <article className="flex flex-col gap-4">
          <div className="w-full h-4 bg-surface-high animate-pulse" />
          <div className="w-full h-4 bg-surface-high animate-pulse" />
          <div className="w-11/12 h-4 bg-surface-high animate-pulse" />
          <div className="w-full h-4 bg-surface-high animate-pulse mt-4" />
          <div className="w-10/12 h-4 bg-surface-high animate-pulse" />
          <div className="w-full h-4 bg-surface-high animate-pulse" />
        </article>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="w-full max-w-[800px] mx-auto px-5 md:px-6 py-10 flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <span className="material-symbols-outlined text-outline text-6xl">error</span>
        <h1 className="text-[32px] font-bold text-on-surface">Post Not Found</h1>
        <p className="font-mono text-[14px] text-outline">
          The requested entry does not exist in the database.
        </p>
        <Link href="/blog" className="btn-primary">
          Return to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[800px] mx-auto px-5 md:px-6 py-10 md:pt-10 md:pb-24 flex flex-col gap-10 md:gap-12 min-h-screen">
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

      {/* Article Header */}
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-3">
          <span className={`px-2 py-1 border bg-surface-low label-caps uppercase ${post.categoryColor}`}>
            {post.category}
          </span>
          {post.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 border border-outline-variant bg-surface-low label-caps text-on-surface-variant uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-[32px] md:text-[64px] font-extrabold text-on-surface leading-[1.1] tracking-[-0.04em]">
          {post.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 font-mono text-[14px] text-on-surface-variant border-t border-outline-variant pt-6 mt-2">
          <span>SYS_LOG: {post.date}</span>
          <span className="hidden md:inline w-1 h-1 bg-outline-variant"></span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">timer</span>
            {post.readTime.toUpperCase()}
          </span>
        </div>
      </header>

      {/* Hero Image (if available) */}
      {post.imageUrl && (
        <div className="w-full aspect-video border border-outline-variant bg-surface p-1 group relative overflow-hidden">
          <Image
            alt={post.imageAlt || post.title}
            src={post.imageUrl}
            fill
            sizes="100vw"
            priority
            className="object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}

      {/* Article Body — rendered from Markdown */}
      <article className="prose-cyber">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-[28px] md:text-[48px] font-bold text-on-surface mt-10 mb-6 border-b border-outline-variant pb-4 tracking-[-0.02em]">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-[24px] md:text-[32px] font-bold text-on-surface mt-8 mb-4">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="font-sans text-[16px] text-on-surface leading-relaxed mb-6">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="text-on-surface font-bold">{children}</strong>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside font-sans text-[16px] text-on-surface leading-relaxed mb-6 space-y-2 pl-2">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside font-sans text-[16px] text-on-surface leading-relaxed mb-6 space-y-2 pl-2">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-on-surface-variant">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="pl-6 border-l-[4px] border-primary text-[24px] md:text-[32px] font-bold text-on-surface-variant my-8 py-2 leading-[1.2]">
                {children}
              </blockquote>
            ),
            code: ({ className, children }) => {
              const isBlock = className?.includes("language-");
              if (isBlock) {
                return (
                  <div className="border border-outline-variant bg-surface-terminal flex flex-col my-6 shadow-[4px_4px_0px_0px_rgba(51,51,51,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(51,51,51,1)] hover:border-primary">
                    <div className="border-b border-outline-variant flex justify-between items-center px-4 py-2 bg-surface">
                      <span className="font-mono text-[14px] text-on-surface-variant">
                        {className?.replace("language-", "") || "code"}
                      </span>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 border border-outline-variant"></div>
                        <div className="w-3 h-3 border border-outline-variant"></div>
                        <div className="w-3 h-3 border border-outline-variant"></div>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 overflow-x-auto">
                      <pre className="font-mono text-[13px] md:text-[14px] text-primary-fixed leading-loose">
                        <code>{children}</code>
                      </pre>
                    </div>
                  </div>
                );
              }
              return (
                <code className="font-mono text-[14px] text-primary bg-surface-terminal px-2 py-0.5 border border-outline-variant">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => <>{children}</>,
            table: ({ children }) => (
              <div className="overflow-x-auto my-6 border border-outline-variant">
                <table className="w-full font-mono text-[14px]">{children}</table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-surface-high border-b border-outline-variant">
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th className="px-4 py-3 text-left text-primary label-caps">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-3 text-on-surface-variant border-b border-outline-variant">
                {children}
              </td>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-primary hover:text-primary-fixed underline decoration-primary/30 hover:decoration-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            hr: () => <hr className="border-outline-variant my-8" />,
            img: ({ src, alt }) => {
              if (!src) return null;
              return (
                <div className="w-full aspect-video border border-outline-variant bg-surface p-1 relative overflow-hidden my-6">
                  <Image
                    src={src as string}
                    alt={alt || "Blog image"}
                    fill
                    sizes="(max-width: 800px) 100vw, 800px"
                    className="object-contain"
                  />
                </div>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>

      {/* Post Footer Actions */}
      <div className="border-t border-outline-variant pt-8 mt-4 md:mt-12 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors bg-surface">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
          <button className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors bg-surface">
            <span className="material-symbols-outlined text-[20px]">bookmark</span>
          </button>
        </div>
        <Link
          className="inline-flex items-center gap-2 font-mono text-[14px] text-on-surface hover:text-primary transition-colors uppercase tracking-wider"
          href="/blog"
        >
          All Entries
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
