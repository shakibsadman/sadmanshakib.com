import React, { Suspense } from 'react'
import { getNotionDatabaseContents } from '@/lib/notion'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Client } from '@notionhq/client'
import { BlockObjectResponse, PartialBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import DynamicCodeBlock from '@/components/blog/dynamic-code-block'

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

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

// Define custom block type for processed blocks
type ProcessedBlock = PartialBlockObjectResponse | BlockObjectResponse | {
  type: 'ul' | 'ol'
  items: (PartialBlockObjectResponse | BlockObjectResponse)[]
}

// Function to get page blocks
async function getPageBlocks(pageId: string) {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    })
    return response.results
  } catch (error) {
    console.error('Error fetching page blocks:', error)
    throw error
  }
}

// Function to get page metadata
async function getPageMetadata(pageId: string) {
  try {
    const response = await notion.pages.retrieve({
      page_id: pageId,
    })
    return response as unknown as NotionPage
  } catch (error) {
    console.error('Error fetching page metadata:', error)
    throw error
  }
}

// Render block content based on type
function renderBlockContent(block: any) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {block.paragraph.rich_text.map((text: any, index: number) => (
            <span key={index} className={`${text.annotations.bold ? 'font-bold' : ''} ${text.annotations.italic ? 'italic' : ''} ${text.annotations.underline ? 'underline' : ''}`}>
              {text.plain_text}
            </span>
          ))}
        </p>
      )
    case 'heading_1':
      return (
        <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
          {block.heading_1.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h1>
      )
    case 'heading_2':
      return (
        <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">
          {block.heading_2.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h2>
      )
    case 'heading_3':
      return (
        <h3 className="text-xl font-bold mt-5 mb-2 text-gray-900 dark:text-white">
          {block.heading_3.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h3>
      )
    case 'bulleted_list_item':
      return (
        <li className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-disc">
          {block.bulleted_list_item.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </li>
      )
    case 'numbered_list_item':
      return (
        <li className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">
          {block.numbered_list_item.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </li>
      )
    case 'code':
      return (
        <DynamicCodeBlock 
          language={block.code.language} 
          code={block.code.rich_text.map((text: any) => text.plain_text).join('')}
          caption={block.code.caption?.length > 0 ? block.code.caption[0].plain_text : undefined}
        />
      )
    case 'quote':
      return (
        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-1 my-4 text-gray-700 dark:text-gray-300 italic">
          {block.quote.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </blockquote>
      )
    case 'divider':
      return <hr className="my-6 border-gray-200 dark:border-gray-700" />
    case 'image':
      const imageUrl = block.image.type === 'external' 
        ? block.image.external.url 
        : block.image.file.url
      return (
        <figure className="my-6">
          <img 
            src={imageUrl} 
            alt={block.image.caption?.length > 0 ? block.image.caption[0].plain_text : 'Image'} 
            className="rounded-lg mx-auto"
          />
          {block.image.caption?.length > 0 && (
            <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
              {block.image.caption[0].plain_text}
            </figcaption>
          )}
        </figure>
      )
    default:
      return null
  }
}

export default async function BlogPostPage({ params }: {params:Promise<{slug:string}>}) {
  const { slug } = await  params
  
  try {
    // Fetch page metadata and blocks
    const pageMetadata = await getPageMetadata(slug)
    const blocks = await getPageBlocks(slug)
    
    // Extract page details
    const title = pageMetadata.properties.name.title[0]?.plain_text || 'Untitled'
    const type = pageMetadata.properties.Type.select?.name || 'Uncategorized'
    const status = pageMetadata.properties.Status.status.name
    const statusColor = pageMetadata.properties.Status.status.color
    const lastEditedDate = new Date(pageMetadata.last_edited_time).toLocaleDateString()
    
    // Group list items for proper rendering
    let currentListType: string | null = null
    const processedBlocks: ProcessedBlock[] = []
    
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i] as any
      
      if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
        if (currentListType !== block.type) {
          currentListType = block.type
          const listType = block.type === 'bulleted_list_item' ? 'ul' : 'ol'
          processedBlocks.push({ type: listType, items: [block] })
        } else {
          const lastBlock = processedBlocks[processedBlocks.length - 1] as { items: any[] }
          lastBlock.items.push(block)
        }
      } else {
        currentListType = null
        processedBlocks.push(block)
      }
    }
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {type && (
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                  {type}
                </span>
              )}
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                statusColor === 'green' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300' : 
                statusColor === 'red' ? 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300' : 
                'bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
              }`}>
                {status}
              </span>
            </div>
            
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white tracking-tight">
              {title}
            </h1>
            
            <div className="flex items-center mb-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Last updated: {lastEditedDate}</span>
              </div>
              
          
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600">
              {processedBlocks.map((block, index) => {
                if ('type' in block && block.type === 'ul') {
                  return (
                    <ul key={index} className="my-4">
                      {(block as any).items.map((item: any, itemIndex: number) => (
                        <React.Fragment key={itemIndex}>
                          {renderBlockContent(item)}
                        </React.Fragment>
                      ))}
                    </ul>
                  )
                } else if ('type' in block && block.type === 'ol') {
                  return (
                    <ol key={index} className="my-4">
                      {(block as any).items.map((item: any, itemIndex: number) => (
                        <React.Fragment key={itemIndex}>
                          {renderBlockContent(item)}
                        </React.Fragment>
                      ))}
                    </ol>
                  )
                } else {
                  return (
                    <React.Fragment key={index}>
                      {renderBlockContent(block)}
                    </React.Fragment>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
      </Suspense>
    )
  } catch (error) {
    console.error('Error fetching Notion page:', error)
    notFound()
  }
}
