import About from '../../components/HomePage/about/About'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Home from '../../components/HomePage/home/Home'
import Qualification from '../../components/HomePage/qualification/Qualification'
import Services from '../../components/HomePage/services/Services'
import Skills from '../../components/HomePage/skills/Skills'

const HomePage = () => {
	return (
		<>
			<Header></Header>

			<main className='main'>
				<Home></Home>

				<About></About>

				<Skills></Skills>

				<Qualification></Qualification>

				<Services></Services>
			</main>

			<Footer></Footer>
		</>
	)
}

export default HomePage
