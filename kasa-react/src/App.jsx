import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './components/AppRouter'
import './index.css'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App