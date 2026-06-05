import { Link } from 'react-router-dom'
import logo from '../../assets/logo-header.svg'
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div className='header-content'>
                <img src={logo} alt='Logo Kasa' id='logo-header' />
                <nav className='nav'>
                    <Link to='/' className='nav-link' id='home'>Accueil</Link>
                    <Link to='/about' className='nav-link' id='about'>À propos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header