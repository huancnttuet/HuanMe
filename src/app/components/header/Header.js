import { useState } from 'react'

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)

	const handleClick = () => {
		setOpenMenu(false)
	}
	return (
		<header className='header' id='header'>
			<nav className='nav container'>
				<a href='/#' className='nav__logo'>
					Mokieeeeeeeee
					<img src="\logo32.png" alt="" />
				</a>
				<div
					className={openMenu ? 'nav__menu show-menu' : 'nav__menu'}
					id='nav-menu'
				>
					<ul className='nav__list grid'>
						<li className='nav_item' onClick={handleClick}>
							<a href='/#home' className='nav__link'>
								<i class='uil uil-estate nav__icon'></i> Home
							</a>
						</li>
						<li className='nav_item' onClick={handleClick}>
							<a href='/#about' className='nav__link'>
								<i class='uil uil-user nav__icon'></i> About
							</a>
						</li>
						<li className='nav_item' onClick={handleClick}>
							<a href='/#skills' className='nav__link'>
								<i class='uil uil-file-alt nav__icon'></i> Skills
							</a>
						</li>
						<li className='nav_item' onClick={handleClick}>
							<a href='/#qualification' className='nav__link'>
								<i class='uil uil-briefcase-alt nav__icon'></i> Qualification
							</a>
						</li>
						<li className='nav_item' onClick={handleClick}>
							<a href='/blog' className='nav__link'>
								<i class='uil uil-scenery nav__icon'></i> Xàm
							</a>
						</li>
						<li className='nav_item' onClick={handleClick}>
							<a href='/#contact' className='nav__link'>
								<i class='uil uil-message nav__icon'></i> Contactme
							</a>
						</li>
					</ul>
					<i
						class='uil uil-times nav__close'
						id='nav-close'
						onClick={() => {
							setOpenMenu(false)
						}}
					></i>
				</div>
				<div
					className='nav__btns'
					onClick={() => {
						setOpenMenu(true)
					}}
				>
					<div className='nav__toggle' id='nav-toggle'>
						<i class='uil uil-apps'></i>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
