"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogPost } from "@/app/api/blog/actions";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-backgroundSecondary/30 to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-70" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 container px-4 md:px-6 max-w-6xl mx-auto"
      >
        <div className="text-center space-y-3 mb-12">
          <motion.div variants={itemVariants} className="inline-block mb-2 px-4 py-1.5 bg-backgroundSecondary/50 rounded-full backdrop-blur-sm border border-border">
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Insights & Updates
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-textPrimary">
            Latest from the <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Blog</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-textSecondary max-w-2xl mx-auto">
            Discover our latest thoughts, insights and updates on development and design
          </motion.p>
        </div>
        
        <motion.div variants={containerVariants} className="grid gap-6">
          {posts.map((post) => (
            <motion.div 
              key={post.id} 
              variants={itemVariants}
              className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-textPrimary group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.type && (
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        {post.type}
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      post.statusColor === 'green' ? 'bg-green-500/10 text-green-500' : 
                      post.statusColor === 'red' ? 'bg-red-500/10 text-red-500' : 
                      'bg-gray-500/10 text-gray-500'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                  
                  <div className="text-sm text-textSecondary/70">
                    <span>Created: {post.createdDate}</span>
                    <span className="mx-2">•</span>
                    <span>Updated: {post.lastEditedDate}</span>
                  </div>
                </div>
                
                <div className="md:self-center">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div variants={itemVariants} className="text-center mt-10">
          <Link href="/blog">
            <Button 
              variant="outline" 
              className="group border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}