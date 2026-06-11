import Header from './components/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'
import './index.css'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  )
}

export default App