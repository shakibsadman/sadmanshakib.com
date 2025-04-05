import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getPageBlocks, getPageMetadata, processBlocks } from '@/app/api/blog/notion'
import PostHeader from '@/components/blog/post-header'
import NotionRenderer from '@/components/blog/notion-renderer'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  try {
    // Fetch page metadata and blocks
    const pageMetadata = await getPageMetadata(slug);
    const blocks = await getPageBlocks(slug);
    
    // Process blocks for proper rendering
    const processedBlocks = processBlocks(blocks);
    
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-8">
              <PostHeader post={pageMetadata} />
              <NotionRenderer blocks={processedBlocks} />
            </div>
          </div>
        </div>
      </Suspense>
    );
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    notFound();
  }
}
