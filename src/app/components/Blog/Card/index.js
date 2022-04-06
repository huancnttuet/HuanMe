import './index.css'

const Card = ({ data }) => {
	return (
		<>
			{data ? (
				<div class='card'>
					<h2> {data.title}</h2>
					<h5>{data.subtitle}</h5>
					<img
						style={{ width: '100%', height: '200px', objectFit: 'cover' }}
						src={data.img}
						alt=''
					/>
					<div dangerouslySetInnerHTML={{ __html: data.content }} />
				</div>
			) : (
				''
			)}
		</>
	)
}

export default Card
