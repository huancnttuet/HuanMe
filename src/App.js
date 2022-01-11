import { Routes, Route } from 'react-router-dom'
import Home from './app/views/HomePage'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path="about" element={<About />} /> */}
			</Routes>
		</>
	)
}

export default App
