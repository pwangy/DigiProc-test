export const FullComment = (props) => {
	return (
		<div key={props.id}>
			<p>
				<span>
					{props.first} {props.last}:{' '}
				</span>
				{props.comment}
			</p>
		</div>
	)
}