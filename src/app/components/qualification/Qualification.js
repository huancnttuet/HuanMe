import { useState } from 'react'

const Qualification = () => {
	const [state, setState] = useState('education')
	const education = [
		{
			major: 'Information Techlonogy',
			university: 'Military Technical Academy',
			time: '2015-2017',
			left: true
		},
		{
			major: 'Information Techlonogy',
			university: 'University of Engineering and Technology - VNU',
			time: '2017-2022',
			left: false
		},
		// {
		// 	major: 'Information Techlonogy',
		// 	university: 'UET - VNU',
		// 	time: '2017-2021',
		// 	left: true
		// }
	]

	const work = [
		{
			major: 'Intern',
			university: 'Teko Vietnam Technology JSC',
			time: '06/2019 - 02/2020',
			left: true
		},
		{
			major: 'Software Engineer',
			university: 'Vingroup Advanced Analytics (Vantix Inc.)',
			time: ' 09/2020 - 02/2021',
			left: false
		},
		{
			major: 'Software Engineer',
			university: 'Viettel High Technology Industries Corporation',
			time: '04/2021 - 07/2021',
			left: true
		},
		{
			major: 'Software Engineer',
			university: 'Punch Entertainment Vietnam Co., Ltd',
			time: '08/2021 - present',
			left: false
		}
	]

	return (
		<section className='qualification section' id='qualification'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My personal journey</span>

			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div
						className={
							state === 'education'
								? 'qualification__button button--flex qualification__active'
								: 'qualification__button button--flex'
						}
						onClick={() => {
							setState('education')
						}}
					>
						<i class='uil uil-graduation-cap qualification__icon'></i>
						Education
					</div>

					<div
						className={
							state === 'work'
								? 'qualification__button button--flex qualification__active'
								: 'qualification__button button--flex'
						}
						onClick={() => {
							setState('work')
						}}
					>
						<i class='uil uil-briefcase-alt qualification__icon'></i>
						Work
					</div>
				</div>
				<div className='qualification__sections'>
					<div className='qualification__content' id='education'>
						{state === 'education'
							? education.map((element) => (
									<div className='qualification__data'>
										{!element.left ? (
											<>
												<div></div>
												<div>
													<span className='qualification__rounder'></span>
													<span className='qualification__line'></span>
												</div>
											</>
										) : (
											''
										)}
										<div style={{ textAlign: element.left ? 'end' : 'start' }}>
											<h3 className='qualification__title'>{element.major}</h3>
											<span className='qualification__subtitle'>
												{element.university}
											</span>
											<div className='qualification__calendar'>
												<i className='uil uil-calendar-alt'></i>
												{element.time}
											</div>
										</div>
										{element.left ? (
											<div>
												<span className='qualification__rounder'></span>
												<span className='qualification__line'></span>
											</div>
										) : (
											''
										)}
									</div>
							  ))
							: ''}
					</div>
					<div className='qualification__content' id='work'>
						{state === 'work'
							? work.map((element) => (
									<div className='qualification__data'>
										{!element.left ? (
											<>
												<div></div>
												<div>
													<span className='qualification__rounder'></span>
													<span className='qualification__line'></span>
												</div>
											</>
										) : (
											''
										)}
										<div style={{ textAlign: element.left ? 'end' : 'start' }}>
											<h3 className='qualification__title'>{element.major}</h3>
											<span className='qualification__subtitle'>
												{element.university}
											</span>
											<div className='qualification__calendar'>
												<i className='uil uil-calendar-alt'></i>
												{element.time}
											</div>
										</div>
										{element.left ? (
											<div>
												<span className='qualification__rounder'></span>
												<span className='qualification__line'></span>
											</div>
										) : (
											''
										)}
									</div>
							  ))
							: ''}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Qualification
