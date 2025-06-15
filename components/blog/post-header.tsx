import React from 'react';
import Link from 'next/link';
import { NotionPage } from '@/app/api/blog/notion';

interface PostHeaderProps {
  post: NotionPage;
}

export default function PostHeader({ post }: PostHeaderProps) {
  const title = post.properties.name.title[0]?.plain_text || 'Untitled';
  const type = post.properties.Type.select?.name || 'Uncategorized';
  const status = post.properties.Status.status.name;
  const statusColor = post.properties.Status.status.color;
  const lastEditedDate = new Date(post.last_edited_time).toLocaleDateString();
  
  return (
    <>
      <Link href="/blog" className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Blog
      </Link>
      
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
    </>
  );
} 