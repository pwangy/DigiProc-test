import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'

TimeAgo.addDefaultLocale(en)

export const FullComment = (props) => {
	return (
		<div key={props.id}>
			<p>
				<span>
					{props.first} {props.last}:{' '}
				</span>
				{props.comment}
			</p>
			<p className='timestamp'>
				<ReactTimeAgo date={props.timestamp} locale='en-US' />
			</p>
		</div>
	)
}