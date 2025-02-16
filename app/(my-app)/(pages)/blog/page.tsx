import '../../prism.css'
import 'katex/dist/katex.css'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import React from 'react'
import { allBlogs } from 'contentlayer/generated'
export default function page() {

  return (
    <div>
      {allBlogs.map((post) => (
        <MDXLayoutRenderer
          key={post._id}
          code={post.body.code}

        />
      ))}

    </div>
  )
}
