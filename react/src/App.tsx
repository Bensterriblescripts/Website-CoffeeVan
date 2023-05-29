import './index.css'
import Navbar from './Navbar'
import Home from './Pages/Home'
import Ordering from './Pages/Ordering'
import Pricing from './Pages/Pricing'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ordering" element={<Ordering />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
