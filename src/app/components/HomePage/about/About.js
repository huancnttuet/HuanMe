const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>About me</h2>
			<span className='section__subtitle'>
				There is no elevator to success — you have to take the stairs.
			</span>
			<div className='about__container container grid'>
				<img src='assets/img/huanpl3.png' alt='' className='about__img' />

				<div className='about__data'>
					<p className='about__description'>
						Don't cry because it's over, smile because it happened.
					</p>

					<div className='about__info'>
						<div>
							<span className='about__info-title'>02+</span>
							<span className='about__info-name'>
								Years
								<br /> Experian
							</span>
						</div>
						<div>
							<span className='about__info-title'>02+</span>
							<span className='about__info-name'>
								Years
								<br /> Projects
							</span>
						</div>
						<div>
							<span className='about__info-title'>02+</span>
							<span className='about__info-name'>
								Years
								<br /> Companies
							</span>
						</div>
					</div>

					<div className='about__buttons'>
						<a href='assets/pdf/HuanPL_CV.pdf' className='button button--flex'>
							Download CV<i class='uil uil-download-alt button__icon'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
