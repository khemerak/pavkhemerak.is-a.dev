"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  categoryColor: string;
  excerpt: string;
}

interface BlogListResponse {
  posts: BlogPost[];
}

export function LatestBlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog/posts?page=1&per_page=3")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: BlogListResponse) => {
        setPosts(data.posts);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-surface py-24 border-y border-border px-5 md:px-16 lg:px-24">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
            <div className="h-8 w-48 bg-surface-bright animate-pulse" />
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-surface-terminal border-y border-border py-16 md:py-24 px-5 md:px-16 lg:px-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b border-outline-variant pb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary animate-pulse" />
            <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.02em] uppercase text-on-surface m-0 leading-none">
              Latest_Intel
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-[14px] font-mono text-outline hover:text-primary transition-colors flex items-center gap-2"
          >
            VIEW_ALL_LOGS
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between p-5 md:p-6 border border-outline-variant bg-surface hover:border-primary transition-all duration-300 neo-brutal-hover h-full min-h-[200px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center gap-2">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 border uppercase ${post.categoryColor}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-[12px] font-mono text-outline-variant">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-[14px] md:text-[17px] font-bold text-on-surface group-hover:text-primary transition-colors leading-[1.3]">
                  {post.title}
                </h3>
                <p className="text-[13px] text-on-surface-variant line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center gap-2 mt-4 font-mono text-[12px] text-outline group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  terminal
                </span>
                Execute_Read
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
