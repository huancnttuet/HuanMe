import { useState } from 'react'

const Services = () => {
	const [data, setData] = useState([
		{
			title: 'IO',
			description: [
				'I develop the user interface.',
				'I develop the user interface.',
				'I develop the user interface.'
			],
			modal: false
		},
		{
			title: 'IO',
			description: [
				'I develop the user interface.',
				'I develop the user interface.',
				'I develop the user interface.'
			],
			modal: false
		},
		{
			title: 'IO',
			description: [
				'I develop the user interface.',
				'I develop the user interface.',
				'I develop the user interface.'
			],
			modal: false
		}
	])

	return (
		<section className='services section' id='services'>
			<h2 className='section__title'>Services</h2>
			<span className='section__subtitle'>What i offer</span>
			<div className='services__container container grid'>
				{data
					? data.map((element, index) => (
							<div className='services__content'>
								<div>
									<i class='uil uil-web-grid services__icon'></i>
									<h3 className='services__title'>IO</h3>
								</div>

								<span
									className='button button--flex button--small button--link services__button'
									onClick={() => {
										let temp = data
										temp[index] = { ...temp[index], modal: true }
										setData([...temp])
									}}
								>
									View more
									<i className='uil uil-arrow-right button__icon'></i>
								</span>

								<div
									className='services__modal'
									style={{
										visibility: element.modal ? 'visible' : 'hidden',
										opacity: element.modal ? 1 : 0
									}}
								>
									<div className='services__modal-content'>
										<h4 className='services__modal-title'>UI</h4>

										<i
											class='uil uil-times services__modal-close'
											onClick={() => {
												let temp = data
												temp[index].modal = false
												setData([...temp])
											}}
										></i>

										<ul className='services__modal-services grid'>
											{element.description.map((ele) => (
												<li className='services__modal-service' style={{}}>
													<i class='uil uil-check-circle services__modal-icon'></i>
													<p>{ele}</p>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
					  ))
					: ''}
			</div>
		</section>
	)
}

export default Services
