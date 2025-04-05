"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostCard from "@/components/blog/post-card";
import { NotionPage } from "@/app/api/blog/notion";

interface BlogSectionProps {
  posts: NotionPage[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-backgroundSecondary/30 to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-70" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-block mb-2 px-4 py-1.5 bg-backgroundSecondary/50 rounded-full backdrop-blur-sm border border-border">
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Insights & Updates
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            Latest from the <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Blog</span>
          </h2>
          
          <p className="text-textSecondary max-w-2xl mx-auto">
            Discover our latest thoughts, insights and updates on development and design
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-border bg-backgroundSecondary text-textPrimary hover:bg-backgroundSecondary/80 transition-colors"
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}