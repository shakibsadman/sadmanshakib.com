import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPageBlocks, getPageMetadata, processBlocks } from '@/app/api/blog/notion'
import PostHeader from '@/components/blog/post-header'
import NotionRenderer from '@/components/blog/notion-renderer'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const pageMetadata = await getPageMetadata(slug);
    const title = pageMetadata.properties?.name?.title?.[0]?.plain_text || 'Blog Post';
    const description = 'Read this blog post on Sadman Shakib\'s blog about web development, MVP creation, and technology insights.';
    
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        url: `https://sadmanshakib.com/blog/${slug}`,
        images: [
          {
            url: '/dr_sadman_shakib.jpg',
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        publishedTime: pageMetadata.created_time,
        modifiedTime: pageMetadata.last_edited_time,
        authors: ['Sadman Shakib'],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/dr_sadman_shakib.jpg'],
        creator: '@sadmanshakib',
      },
      alternates: {
        canonical: `https://sadmanshakib.com/blog/${slug}`,
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post',
      description: 'Read this blog post on Sadman Shakib\'s blog',
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
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
