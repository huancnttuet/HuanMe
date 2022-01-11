import { useState } from 'react'

const Skills = () => {
	const mock = [
		{
			skill: 'Frontend Developer',
			subtitle: 'More than 2 years',
			icon: <i class='uil uil-brackets-curly skills__icon'></i>,
			open: true,
			details: [
				{ name: 'HTML', number: '50%' },
				{ name: 'CSS', number: '50%' },
				{ name: 'JavaScript', number: '60%' },
				{ name: 'React', number: '60%' }
			]
		},
		{
			skill: 'Backend Developer',
			subtitle: 'More than 2 years',
			icon: <i class='uil uil-server-network-alt skills__icon'></i>,
			open: false,
			details: [
				{ name: 'Nodejs', number: '50%' },
				{ name: 'Flask', number: '50%' },
				{ name: 'Python', number: '60%' },
				{ name: 'Docker', number: '40%' }
			]
		},
		{
			skill: 'Devops Developer',
			subtitle: 'More than 1 years',
			icon: <i class='uil uil-server-network-alt skills__icon'></i>,
			open: false,
			details: [
				{ name: 'Jenkins', number: '40%' },
				{ name: 'Docker', number: '40%' },
				{ name: 'AWS', number: '30%' },
				{ name: 'Azure', number: '30%' }
			]
		}
	]

	const [data, setData] = useState(mock)

	return (
		<section className='skills section' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<span className='section__subtitle'>My technical level</span>

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
