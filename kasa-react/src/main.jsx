import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Rent from './pages/Rent'
import Error from './pages/Error'
import Footer from './components/Footer'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)