const Home = () => {
	return (
		<section className='home section' id='home'>
			<div className='home__container container grid'>
				<div className='home__content grid'>
					<div className='home__social'>
						<a
							href='https://www.linkedin.com/in/phan-l%C6%B0%C6%A1ng-hu%C3%A2n-48b429192/'
							rel='noreferrer'
							className='home__social-icon'
							target='_blank'
						>
							<i class='uil uil-linkedin'></i>
						</a>
						<a
							href='https://github.com/huancnttuet'
							rel='noreferrer'
							className='home__social-icon'
							target='_blank'
						>
							<i class='uil uil-github-alt'></i>
						</a>
						<a
							href='https://www.facebook.com/mok.stargold'
							rel='noreferrer'
							className='home__social-icon'
							target='_blank'
						>
							<i class='uil uil-facebook'></i>
						</a>
					</div>
					<div className='home__img'>
						<svg
							viewBox='0 0 200 187'
							xmlns='http://www.w3.org/2000/svg'
							className='home__blob'
						>
							<mask id='mask0' mask-type='alpha'>
								<path
									d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
								/>
							</mask>
							<g mask='url(#mask0)'>
								<path
									d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
								/>
								<image
									className='home__blob-img'
									x='-25'
									y='-50'
									href='assets/img/huanpl2.png'
								/>
							</g>
						</svg>
					</div>

					<div className='home__data'>
						<h1 className='home__title'>Hi, I'm Mokie</h1>
						<h3 className='home__subtitle'>Developer</h3>
						<p className='home__description'>
							The only person you should try to be better than is the person you
							were yesterday.
						</p>
						<a href='/#contact' className='button button--flex'>
							Contact Me <i class='uil uil-message button__icon'></i>
						</a>
						<div className='home__scroll'>
							<a href='/#about' className='home__scroll-button button--flex'>
								<i class='uil uil-mouse-alt home__scroll-mouse'></i>
								<span className='home__scroll-name'>Scroll down</span>
								<i class='uil uil-arrow-down home__scroll-arrow'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
