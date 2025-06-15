import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { NotionPage } from '@/app/api/blog/notion';

interface PostCardProps {
  post: NotionPage;
}

export default function PostCard({ post }: PostCardProps) {
  const title = post.properties.name.title[0]?.plain_text || 'Untitled';
  const type = post.properties.Type.select?.name || 'Uncategorized';
  const status = post.properties.Status.status.name;
  const statusColor = post.properties.Status.status.color;
  const createdDate = new Date(post.created_time).toLocaleDateString();
  const lastEditedDate = new Date(post.last_edited_time).toLocaleDateString();
  
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 