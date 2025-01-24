import React from 'react'
import RichText from "@/components/ui/rich-text";
import {getAllPosts} from "@/modules/blog";

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <div>

      {
        posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <RichText data={post.content} />
          </div>
        ))
      }
      <details>
        <pre>
          {JSON.stringify(posts, null, 2)}
        </pre>
      </details>
    </div>
  )
}
