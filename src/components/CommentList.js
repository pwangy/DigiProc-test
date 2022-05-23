import { useState } from 'react'

import posts from '../data/comments.json'
import { Comment } from './Comment'
import { FullComment } from './FullComment'
import { Shape } from './Shape'

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

	const copyNames = []

	const names = posts.forEach((post) => {
		copyNames.push(post.first)
	})
	console.log(names)
	const trimTwo = copyNames.slice(-7)
	const unique = Array.from(new Set(trimTwo))
	const remainingCommenters = unique.length - 2
	const summary = ` + ${posts.length -3} more comments from ${unique.at(0)}, ${unique.at(
		1
	)} and ${remainingCommenters} others`

	return (
		<article className='comments'>
			{!view ? shortComments : longComments}
			<section className='row'>
				{!view ? <p className='summary'>{summary}</p> : <p>&nbsp;</p>}
				<div>
					{!view ? (
						<div className='button' onClick={handleMore}>
							View full activity log <Shape />
						</div>
					) : (
						<div className='button' onClick={handleLess}>
							View summary <Shape />
						</div>
					)}
				</div>
			</section>
		</article>
	)
}