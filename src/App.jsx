import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Profile from './pages/Profile'
import AboutMe from './pages/AboutMe'
import Passion from './pages/Passions'
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/passions" element={<Passion />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactMe />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
