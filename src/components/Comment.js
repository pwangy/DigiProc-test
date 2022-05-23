import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'

TimeAgo.addDefaultLocale(en)

export const Comment = (props) => {
    // const view, setView = useState(false)
	// something that detects view. default summary else, show all /full comments.
	// toggle function
	const formattedComment = props.comment
    let shownComment = formattedComment.slice(0, 73)+'...'


	return (
		<div key={props.id}>
			<p>
				<span>
					{props.first} {props.last}:{' '}
				</span>
				{shownComment}
			</p>
			<p>
				<ReactTimeAgo date={props.timestamp} locale='en-US' /> |{' '}
				{props.id}
			</p>
		</div>
	)
}