const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>About me</h2>
			<span className='section__subtitle'>My introduction</span>
			<div className='about__container container grid'>
				<img src='assets/img/huanpl3.jpg' alt='' className='about__img' />

				<div className='about__data'>
					<p className='about__description'>
						Note that the development build is not optimized. To create a
						production build, use npm run build.
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
						<a href='asset/pdf/huanpl-cv.pdf' className='button button--flex'>
							Download CV<i class='uil uil-download-alt button__icon'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
