const Footer = () => {
	return (
		<>
			<footer class='footer'>
				<div className='footer__bg'>
					<div className='footer__container container grid'>
						<div>
							<h1 className='footer__title'>Huan Mok</h1>
							<span className='footer__subtitle'>Developer</span>
						</div>
						<ul className='footer__links'>
							<li>
								<a href='#services' className='footer__link'>
									Services
								</a>
							</li>
							<li>
								<a href='#services' className='footer__link'>
									Services
								</a>
							</li>
							<li>
								<a href='#contact' className='footer__link'>
									Contactme
								</a>
							</li>
						</ul>

						<div className='footer__socials'>
							<a
								href='https://www/facebook.com/mok.stargold'
								target='_blank'
								rel='noreferrer'
								className='footer__social'
							>
								<i class='uil uil-facebook'></i>
							</a>
							<a
								href='https://www/facebook.com/mok.stargold'
								target='_blank'
								rel='noreferrer'
								className='footer__social'
							>
								<i class='uil uil-instagram'></i>
							</a>
							<a
								href='https://www/facebook.com/mok.stargold'
								target='_blank'
								rel='noreferrer'
								className='footer__social'
							>
								<i class='uil uil-github'></i>
							</a>
						</div>
					</div>
					<p className='footer__copy'>&#169; Bedimcode. All right reserved</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
