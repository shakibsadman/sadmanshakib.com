import React from 'react'
import { getNotionDatabaseContents } from '@/lib/notion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
      <div className="container mx-auto p-4 max-w-5xl dark:bg-gray-900 light:bg-white">
        <h1 className="text-3xl font-bold mb-6 text-textPrimary dark:text-white light:text-gray-900">Blog</h1>
        
        <div className="grid gap-6">
          {sortedPosts.map((post) => {
            const title = post.properties.name.title[0]?.plain_text || 'Untitled'
            const type = post.properties.Type.select?.name || 'Uncategorized'
            const status = post.properties.Status.status.name
            const statusColor = post.properties.Status.status.color
            const createdDate = new Date(post.created_time).toLocaleDateString()
            const lastEditedDate = new Date(post.last_edited_time).toLocaleDateString()
            
            return (
              <div key={post.id} className="bg-backgroundSecondary/50 dark:bg-gray-800 light:bg-gray-100 rounded-2xl p-6 border border-border dark:border-gray-700 light:border-gray-200 backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70 dark:hover:bg-gray-700 light:hover:bg-gray-200 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2 text-textPrimary dark:text-white light:text-gray-900 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`} className="hover:underline">
                        {title}
                      </Link>
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {type && (
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 dark:bg-primary/20 light:bg-primary/10 text-primary font-medium">
                          {type}
                        </span>
                      )}
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        statusColor === 'green' ? 'bg-green-500/10 dark:bg-green-500/20 light:bg-green-500/10 text-green-500' : 
                        statusColor === 'red' ? 'bg-red-500/10 dark:bg-red-500/20 light:bg-red-500/10 text-red-500' : 
                        'bg-gray-500/10 dark:bg-gray-500/20 light:bg-gray-500/10 text-gray-500'
                      }`}>
                        {status}
                      </span>
                    </div>
                    
                    <div className="text-sm text-textSecondary/70 dark:text-gray-400 light:text-gray-500">
                      <span>Created: {createdDate}</span>
                      <span className="mx-2">•</span>
                      <span>Updated: {lastEditedDate}</span>
                    </div>
                  </div>
                  
                  <div className="md:self-center">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 dark:bg-primary/20 light:bg-primary/10 text-primary hover:bg-primary/20 dark:hover:bg-primary/30 light:hover:bg-primary/20 transition-colors"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching Notion data:', error)
    return (
      <div className="container mx-auto p-4 dark:bg-gray-900 light:bg-white">
        <h1 className="text-3xl font-bold mb-6 text-textPrimary dark:text-white light:text-gray-900">Blog</h1>
        <div className="bg-red-500/10 dark:bg-red-500/20 light:bg-red-500/10 p-4 rounded-lg text-red-500 border border-red-500/20 dark:border-red-500/30 light:border-red-500/20">
          <p>Error loading blog posts. Please check the console for details.</p>
        </div>
      </div>
    )
  }
}
