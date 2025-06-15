import { MetadataRoute } from 'next'
import { getProjects } from './(my-app)/projects/actions'
import { getNotionDatabaseContents } from './api/blog/notion'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sadmanshakib.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  let dynamicPages: MetadataRoute.Sitemap = []

  try {
    // Get blog posts from Notion
    const databaseId = '1843cfb5f9ce80da828df9c498fa7afc'
    const notionData = await getNotionDatabaseContents(databaseId)
    
    const blogPages = notionData.results.map((post: any) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(post.last_edited_time),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    dynamicPages = [...dynamicPages, ...blogPages]
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  try {
    // Get projects
    const projectsData = await getProjects()
    
    const projectPages = projectsData.docs.map((project: any) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(project.updatedAt || project.createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    dynamicPages = [...dynamicPages, ...projectPages]
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error)
  }

  return [...staticPages, ...dynamicPages]
} 