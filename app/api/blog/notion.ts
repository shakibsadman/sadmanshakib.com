import { Client } from '@notionhq/client';
import { BlockObjectResponse, PartialBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Define types for the Notion data
export type NotionPage = {
  id: string;
  url: string;
  properties: {
    name: {
      title: Array<{
        plain_text: string;
      }>;
    };
    Type: {
      select: {
        name: string;
        color: string;
      } | null;
    };
    Status: {
      status: {
        name: string;
        color: string;
      };
    };
    URL: {
      url: string | null;
    };
  };
  created_time: string;
  last_edited_time: string;
};

// Define custom block type for processed blocks
export type ProcessedBlock = PartialBlockObjectResponse | BlockObjectResponse | {
  type: 'ul' | 'ol';
  items: (PartialBlockObjectResponse | BlockObjectResponse)[];
};

// Function to get page blocks
export async function getPageBlocks(pageId: string) {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });
    return response.results;
  } catch (error) {
    console.error('Error fetching page blocks:', error);
    throw error;
  }
}

// Function to get page metadata
export async function getPageMetadata(pageId: string) {
  try {
    const response = await notion.pages.retrieve({
      page_id: pageId,
    });
    return response as unknown as NotionPage;
  } catch (error) {
    console.error('Error fetching page metadata:', error);
    throw error;
  }
}

// Function to get database contents
export async function getNotionDatabaseContents(databaseId: string) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          timestamp: "last_edited_time",
          direction: "descending",
        },
      ],
    });
    
    return response;
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    throw error;
  }
}

// Process blocks for proper rendering (group list items)
export function processBlocks(blocks: (PartialBlockObjectResponse | BlockObjectResponse)[]) {
  let currentListType: string | null = null;
  const processedBlocks: ProcessedBlock[] = [];
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i] as any;
    
    if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
      if (currentListType !== block.type) {
        currentListType = block.type;
        const listType = block.type === 'bulleted_list_item' ? 'ul' : 'ol';
        processedBlocks.push({ type: listType, items: [block] });
      } else {
        const lastBlock = processedBlocks[processedBlocks.length - 1] as { items: any[] };
        lastBlock.items.push(block);
      }
    } else {
      currentListType = null;
      processedBlocks.push(block);
    }
  }
  
  return processedBlocks;
} 