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
								<a href='/' className='footer__link'>
									Trang chủ
								</a>
							</li>
							 <li>
								<a href='/blog' className='footer__link'>
									Xàm xí
								</a>
							</li>
				
						</ul>

						<div className='footer__socials'>
							<a
								href='https://facebook.com/mok.stargold'
								target='_blank'
								rel='noreferrer'
								className='footer__social'
							>
								<i class='uil uil-facebook'></i>
							</a>
							<a
								href='https://www.instagram.com/system34z/'
								target='_blank'
								rel='noreferrer'
								className='footer__social'
							>
								<i class='uil uil-instagram'></i>
							</a>
							<a
								href='https://github.com/huancnttuet'
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
