import { Client } from "@notionhq/client";
import {NotionToMarkdown} from "notion-to-md"
import type { 
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Initialize the NotionToMarkdown instance
const notionToMarkdown = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
  id: string;
  title: string;
  type: string;
  status: string;
  statusColor: string;
  createdDate: string;
  lastEditedDate: string;
}

interface NotionBlogProperties {
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
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    const databaseId = process.env.NOTION_BLOG_DATABASE_ID || "1843cfb5f9ce80da828df9c498fa7afc";
    if (!databaseId) throw new Error("NOTION_BLOG_DATABASE_ID is not defined");

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: limit,
      sorts: [
        {
          timestamp: "last_edited_time",
          direction: "descending",
        },
      ],
    });

    const posts = response.results.map((page) => {
      const pageObj = page as PageObjectResponse;
      const props = pageObj.properties as unknown as NotionBlogProperties;

      return {
        id: page.id,
        title: props.name.title[0]?.plain_text || "Untitled",
        type: props.Type?.select?.name || "Uncategorized",
        status: props.Status.status.name,
        statusColor: props.Status.status.color,
        createdDate: new Date(pageObj.created_time).toLocaleDateString(),
        lastEditedDate: new Date(pageObj.last_edited_time).toLocaleDateString(),
      };
    });

    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getPostBySlug(id: string): Promise<BlogPost | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: id });
    const pageObj = page as PageObjectResponse;
    const props = pageObj.properties as unknown as NotionBlogProperties;
    
    return {
      id: page.id,
      title: props.name.title[0]?.plain_text || "Untitled",
      type: props.Type?.select?.name || "Uncategorized",
      status: props.Status.status.name,
      statusColor: props.Status.status.color,
      createdDate: new Date(pageObj.created_time).toLocaleDateString(),
      lastEditedDate: new Date(pageObj.last_edited_time).toLocaleDateString(),
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
} 