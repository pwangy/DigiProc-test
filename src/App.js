import React from 'react'

import posts from './data/comments.json'

export const App = () => {
  return (
    <div>
      <article>
        <h1>Changelog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Marius vitae sapien vitae odio viverra placerat. Suspendisse velit leo, placer at ac porttitor et, elementum in enim.</p>
      </article>
      <article>
        {posts.map((post) => (
          <div key={post.id} {...post}>
            <p>{post.first} {post.last}: {post.comment}</p>
            <p>{post.timestamp} | {post.id}</p>
          </div>
        ))}
      </article> 
    </div>
  )
}