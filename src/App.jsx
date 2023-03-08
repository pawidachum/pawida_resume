import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Profile from './page/Profile'
import AboutMe from './page/AboutMe'
import Passion from './page/Passions'
import Portfolio from './page/Portfolio'
import ContactMe from './page/ContactMe'
 
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
