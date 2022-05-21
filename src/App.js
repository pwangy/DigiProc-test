import posts from './data/comments.json'

import { Header } from './components/Header'

export const App = () => {
  return (
    <div class="container">
      <Header />
      <article class="comments">
        {posts.map((post) => (
          <div key={post.id} {...post}>
            <p><span>{post.first} {post.last}: </span>{post.comment}</p>
            <p>{post.timestamp} | {post.id}</p>
          </div>
        ))}
      </article> 
    </div>
  )
}