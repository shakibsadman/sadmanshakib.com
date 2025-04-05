import React from 'react'
import { getNotionDatabaseContents } from '@/lib/notion'
import Link from 'next/link'

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
      <div className="container mx-auto p-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        
        <div className="grid gap-6">
          {sortedPosts.map((post) => {
            const title = post.properties.name.title[0]?.plain_text || 'Untitled'
            const type = post.properties.Type.select?.name || 'Uncategorized'
            const status = post.properties.Status.status.name
            const statusColor = post.properties.Status.status.color
            const createdDate = new Date(post.created_time).toLocaleDateString()
            const lastEditedDate = new Date(post.last_edited_time).toLocaleDateString()
            
            return (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">
                      <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                        {title}
                      </Link>
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {type && (
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                          {type}
                        </span>
                      )}
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        statusColor === 'green' ? 'bg-green-100 text-green-800' : 
                        statusColor === 'red' ? 'bg-red-100 text-red-800' : 
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {status}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      <span>Created: {createdDate}</span>
                      <span className="mx-2">•</span>
                      <span>Updated: {lastEditedDate}</span>
                    </div>
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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="bg-red-100 p-4 rounded-lg text-red-700">
          <p>Error loading blog posts. Please check the console for details.</p>
        </div>
      </div>
    )
  }
}
