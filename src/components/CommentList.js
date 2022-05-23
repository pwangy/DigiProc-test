import { useState } from 'react'

import posts from '../data/comments.json'
import { Comment } from './Comment'
import { FullComment } from './FullComment'

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

	const shortComments = posts
		.slice(0, 3)
		.map((post) => <Comment key={post.id} {...post} />)

	const longComments = posts.map((post) => (
		<FullComment key={post.id} {...post} />
	))

	const names = () => {
		const copyNames = []

		posts.forEach((post) => {
			copyNames.push(post.first)
		})
		const trimTwo = copyNames.slice(-7)
		console.log(trimTwo)
		const unique = Array.from(new Set(trimTwo))
		console.log(unique)
		const remainingCommenters = unique.length - 2

		return `${unique.at(0)}, ${unique.at(
			1
		)} and ${remainingCommenters} others`
	}

	return (
		<article className='comments'>
			{/* array method to print out comments */}
			{!view ? shortComments : longComments}
			<section>
				{/* placeholder for X more comments from name name and name. */}
				<p>
					+ {posts.length - 3} more comments from {names}
				</p>
				{/* button to toggle view state */}
				{!view ? (
					<button onClick={handleMore}>View full activity log</button>
				) : (
					<button onClick={handleLess}>View summary</button>
				)}
			</section>
		</article>
	)
}
