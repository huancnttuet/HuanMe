import { useState } from 'react'

const Skills = () => {
	const mock = [
		{
			skill: 'Frontend Developer',
			subtitle: 'More than 2 years',
			icon: <i class='uil uil-brackets-curly skills__icon'></i>,
			open: true,
			details: [
				{ name: 'HTML', number: '70%' },
				{ name: 'CSS', number: '80%' },
				{ name: 'JavaScript', number: '60%' },
				{ name: 'React', number: '95%' }
			]
		},
		{
			skill: 'Backend Developer',
			subtitle: 'More than 2 years',
			icon: <i class='uil uil-server-network-alt skills__icon'></i>,
			open: false,
			details: [
				{ name: 'HTML', number: '90%' },
				{ name: 'HTML', number: '90%' },
				{ name: 'HTML', number: '90%' },
				{ name: 'HTML', number: '90%' }
			]
		},
		{
			skill: 'Frontend Developer',
			subtitle: 'More than 2 years',
			icon: <i class='uil uil-server-network-alt skills__icon'></i>,
			open: false,
			details: [
				{ name: 'HTML', number: '90%' },
				{ name: 'HTML', number: '90%' },
				{ name: 'HTML', number: '90%' },
				{ name: 'HTML', number: '90%' }
			]
		}
	]

	const [data, setData] = useState(mock)

	return (
		<section className='skills section' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<span className='section__subtitle'>My technical leve l</span>

			<div className='skills__container container grid'>
				<div>
					{data
						? data.map((element, index) => (
								<div
									className={
										element.open
											? 'skills__content skills__open'
											: 'skills__content skills__close'
									}
								>
									<div
										className='skills__header'
										onClick={() => {
											let temp = data
											temp[index] = { ...temp[index], open: !element.open }
											setData([...temp])
										}}
									>
										{element.icon}
										<div>
											<h1 className='skills__title'>{element.skill}</h1>
											<span className='skills__subtitle'>
												{element.subtitle}
											</span>
										</div>
										<i class='uil uil-arrow-down skills__arrow'></i>
									</div>

									<div className='skills__list grid'>
										{element.details.map((e) => (
											<div className='skills__data'>
												<div className='skills__title'>
													<h3 className='skills__name'>{e.name}</h3>
													<span className='skills__number'>{e.number}</span>
												</div>
												<div className='skills__bar'>
													<span
														className='skills__percentage'
														style={{ width: e.number }}
													></span>
												</div>
											</div>
										))}
									</div>
								</div>
						  ))
						: ''}
				</div>
			</div>
		</section>
	)
}

export default Skills
