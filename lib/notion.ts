'use server'
import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Function to fetch database contents
export async function getNotionDatabaseContents(databaseId: string) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      
    });
    
    return response;
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    throw error;
  }
} 