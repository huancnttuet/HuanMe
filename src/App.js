import { Routes, Route } from 'react-router-dom'
import Funs from './app/views/Funs'
import Blog from './app/views/Blog'
import Home from './app/views/HomePage'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/funs' element={<Funs />} />
				<Route path='/blog' element={<Blog />} />

				{/* <Route path="about" element={<About />} /> */}
			</Routes>
		</>
	)
}

export default App
