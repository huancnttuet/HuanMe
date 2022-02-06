import { Routes, Route } from 'react-router-dom'
import Funs from './app/views/Funs'
import Home from './app/views/HomePage'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/funs' element={<Funs />} />

				{/* <Route path="about" element={<About />} /> */}
			</Routes>
		</>
	)
}

export default App
