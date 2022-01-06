import About from './app/components/about/About'
import Footer from './app/components/footer/Footer'
import Header from './app/components/header/Header'
import Home from './app/components/home/Home'
import Qualification from './app/components/qualification/Qualification'
import Services from './app/components/services/Services'
import Skills from './app/components/skills/Skills'
function App() {
	return (
		<div>
			<Header></Header>

			<main className='main'>
				<Home></Home>

				<About></About>

				<Skills></Skills>

				<Qualification></Qualification>

				<Services></Services>
			</main>

			<Footer></Footer>
		</div>
	)
}

export default App
