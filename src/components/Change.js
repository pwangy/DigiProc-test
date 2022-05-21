export const Change = ({ id, first, last, comment, timestamp}) => {
    return (
        <div key={id}>
            <p><span>{first} {last}: </span>{comment}</p>
            <p>{timestamp} | {id}</p>
        </div>
    )
}