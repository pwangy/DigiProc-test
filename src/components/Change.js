import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'

TimeAgo.addDefaultLocale(en)

export const Change = (props) => {
	// something that detects view. default summary else, show all /full comments.
	// toggle function

	return (
		<div key={props.id}>
			<p>
				<span>
					{props.first} {props.last}:{' '}
				</span>
				{props.comment}
			</p>
			<p>
				<ReactTimeAgo date={props.timestamp} locale='en-US' /> |{' '}
				{props.id}
			</p>
		</div>
	)
}
