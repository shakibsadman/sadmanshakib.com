import React from 'react';
import { ProcessedBlock } from '@/app/api/blog/notion';
import DynamicCodeBlock from './dynamic-code-block';

interface NotionRendererProps {
  blocks: ProcessedBlock[];
}

// Render block content based on type
function renderBlockContent(block: any) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {block.paragraph.rich_text.map((text: any, index: number) => (
            <span 
              key={index} 
              className={`
                ${text.annotations.bold ? 'font-bold' : ''} 
                ${text.annotations.italic ? 'italic' : ''} 
                ${text.annotations.underline ? 'underline' : ''}
                ${text.annotations.code ? 'font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded' : ''}
                ${text.annotations.strikethrough ? 'line-through' : ''}
              `}
            >
              {text.plain_text}
            </span>
          ))}
        </p>
      );
    case 'heading_1':
      return (
        <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
          {block.heading_1.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">
          {block.heading_2.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="text-xl font-bold mt-5 mb-2 text-gray-900 dark:text-white">
          {block.heading_3.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </h3>
      );
    case 'bulleted_list_item':
      return (
        <li className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-disc">
          {block.bulleted_list_item.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </li>
      );
    case 'numbered_list_item':
      return (
        <li className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">
          {block.numbered_list_item.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </li>
      );
    case 'code':
      return (
        <DynamicCodeBlock 
          language={block.code.language} 
          code={block.code.rich_text.map((text: any) => text.plain_text).join('')}
          caption={block.code.caption?.length > 0 ? block.code.caption[0].plain_text : undefined}
        />
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-1 my-4 text-gray-700 dark:text-gray-300 italic">
          {block.quote.rich_text.map((text: any, index: number) => (
            <span key={index}>{text.plain_text}</span>
          ))}
        </blockquote>
      );
    case 'divider':
      return <hr className="my-6 border-gray-200 dark:border-gray-700" />;
    case 'image':
      const imageUrl = block.image.type === 'external' 
        ? block.image.external.url 
        : block.image.file.url;
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
      );
    default:
      return null;
  }
}

export default function NotionRenderer({ blocks }: NotionRendererProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600">
      {blocks.map((block, index) => {
        if ('type' in block && block.type === 'ul') {
          return (
            <ul key={index} className="my-4">
              {(block as any).items.map((item: any, itemIndex: number) => (
                <React.Fragment key={itemIndex}>
                  {renderBlockContent(item)}
                </React.Fragment>
              ))}
            </ul>
          );
        } else if ('type' in block && block.type === 'ol') {
          return (
            <ol key={index} className="my-4">
              {(block as any).items.map((item: any, itemIndex: number) => (
                <React.Fragment key={itemIndex}>
                  {renderBlockContent(item)}
                </React.Fragment>
              ))}
            </ol>
          );
        } else {
          return (
            <React.Fragment key={index}>
              {renderBlockContent(block)}
            </React.Fragment>
          );
        }
      })}
    </div>
  );
} 