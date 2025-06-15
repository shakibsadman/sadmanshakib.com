import React from 'react'
import { Metadata } from 'next'
import { getNotionDatabaseContents } from '@/app/api/blog/notion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PostCard from '@/components/blog/post-card'
import type { NotionPage } from '@/app/api/blog/notion'

export const metadata: Metadata = {
  title: 'Blog - Web Development Insights & Tech Tutorials',
  description: 'Explore Sadman Shakib\'s blog for insights on web development, MVP creation, Next.js tutorials, React tips, and modern tech stack guides. Stay updated with the latest in software development.',
  keywords: [
    'web development blog',
    'Next.js tutorials',
    'React tips',
    'MVP development',
    'full stack development',
    'programming insights',
    'tech tutorials',
    'software engineering'
  ],
  openGraph: {
    title: 'Blog - Web Development Insights & Tech Tutorials',
    description: 'Explore Sadman Shakib\'s blog for insights on web development, MVP creation, Next.js tutorials, React tips, and modern tech stack guides.',
    type: 'website',
    url: 'https://sadmanshakib.com/blog',
    images: [
      {
        url: '/dr_sadman_shakib.jpg',
        width: 1200,
        height: 630,
        alt: 'Sadman Shakib Blog - Web Development Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Web Development Insights & Tech Tutorials',
    description: 'Explore Sadman Shakib\'s blog for insights on web development, MVP creation, and modern tech stack guides.',
    images: ['/dr_sadman_shakib.jpg'],
    creator: '@sadmanshakib',
  },
  alternates: {
    canonical: 'https://sadmanshakib.com/blog',
  },
}

// This is a server component
export default async function BlogPage() {
  // Your Notion database ID
  const databaseId = '1843cfb5f9ce80da828df9c498fa7afc'
  
  try {
    // Fetch data from Notion
    const notionData = await getNotionDatabaseContents(databaseId)
    
    // Type assertion to handle the response
    const posts = notionData.results as unknown as NotionPage[]
    
    // Sort posts by last edited time (newest first)
    const sortedPosts = [...posts].sort((a, b) => 
      new Date(b.last_edited_time).getTime() - new Date(a.last_edited_time).getTime()
    )
    
    return (
      <div className="relative py-16 bg-gradient-to-b from-background via-backgroundSecondary/30 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-70" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-block mb-2 px-4 py-1.5 bg-backgroundSecondary/50 rounded-full backdrop-blur-sm border border-border">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                Insights & Updates
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-textPrimary">
              Latest from the <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Blog</span>
            </h1>
            
            <p className="text-textSecondary max-w-2xl mx-auto">
              Discover our latest thoughts, insights and updates on development and design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {sortedPosts.length === 0 && (
            <div className="bg-backgroundSecondary/50 rounded-2xl p-8 border border-border backdrop-blur-sm text-center">
              <p className="text-textSecondary">No blog posts found. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching Notion data:', error)
    return (
      <div className="relative py-16 bg-gradient-to-b from-background via-backgroundSecondary/30 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-textPrimary text-center">
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Blog</span>
          </h1>
          <div className="bg-backgroundSecondary/50 p-6 rounded-2xl text-red-500 border border-red-500/20 backdrop-blur-sm">
            <p className="text-center">Error loading blog posts. Please check the console for details.</p>
          </div>
        </div>
      </div>
    )
  }
}
