import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RentDetail from '../../pages/RentDetail'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Error from '../../pages/Error'

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/rent/:id' element={<RentDetail />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default AppRouter