import { useState } from 'react'

import posts from '../data/comments.json'
import { Comment } from './Comment'

export const CommentList = () => {
	const [view, setView] = useState(false)

    const handleMore = (e) => {
		e.preventDefault()
		console.log('getting more!')
		setView(true)
	}

	const handleLess = (e) => {
		e.preventDefault()
		console.log('shrinking to less')
		setView(false)
	}

	return (
		<article className='comments'>
			{posts.map((post) => (
				<Comment key={post.id} {...post} />
			))}
			<p>Total comments: {posts.length}</p>
			{!view ? (
				<button onClick={handleMore}>Toggle to see more</button>
			) : (
				<button onClick={handleLess}>Toggle to see less</button>
			)}
		</article>
	)
}