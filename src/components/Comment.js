export const Comment = (props) => {
	const fullComment = props.comment
    let shorterComment = fullComment.slice(0, 73)+'...'

	return (
		<div key={props.id}>
			<p>
				<span>
					{props.first} {props.last}:{' '}
				</span>
				{shorterComment}
			</p>
		</div>
	)
}