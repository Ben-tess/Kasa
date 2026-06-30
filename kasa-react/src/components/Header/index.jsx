import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-header.svg'
import './Header.sass'

function Header() {
    return (
        <header className='header'>
            <div className='header__content'>
                <img src={logo} alt='Logo Kasa' id='header__logo' />
                <nav className='nav'>
                    <NavLink to='/' className='nav__link' id='home'>Accueil</NavLink>
                    <NavLink to='/about' className='nav__link' id='about'>À propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header