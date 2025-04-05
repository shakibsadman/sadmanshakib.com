import React from 'react'
import { getNotionDatabaseContents } from '@/lib/notion'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

// Define types for the Notion data
type NotionPage = {
  id: string
  url: string
  properties: {
    name: {
      title: Array<{
        plain_text: string
      }>
    }
    Type: {
      select: {
        name: string
        color: string
      } | null
    }
    Status: {
      status: {
        name: string
        color: string
      }
    }
    URL: {
      url: string | null
    }
  }
  created_time: string
  last_edited_time: string
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
            {sortedPosts.map((post) => {
              const title = post.properties.name.title[0]?.plain_text || 'Untitled'
              const type = post.properties.Type.select?.name || 'Uncategorized'
              const status = post.properties.Status.status.name
              const statusColor = post.properties.Status.status.color
              const createdDate = new Date(post.created_time).toLocaleDateString()
              const lastEditedDate = new Date(post.last_edited_time).toLocaleDateString()
              
              return (
                <div 
                  key={post.id} 
                  className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <BookOpen size={18} />
                      </div>
                      <div className="flex gap-2">
                        {type && (
                          <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                            {type}
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          statusColor === 'green' ? 'bg-green-500/10 text-green-500' : 
                          statusColor === 'red' ? 'bg-red-500/10 text-red-500' : 
                          'bg-gray-500/10 text-gray-500'
                        }`}>
                          {status}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-textPrimary group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`} className="hover:underline">
                        {title}
                      </Link>
                    </h2>
                    
                    <div className="text-sm text-textSecondary/70 mb-4">
                      <span>Created: {createdDate}</span>
                      <span className="mx-2">•</span>
                      <span>Updated: {lastEditedDate}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read more
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
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
