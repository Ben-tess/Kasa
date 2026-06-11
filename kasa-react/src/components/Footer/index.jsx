import { Link } from 'react-router-dom'
import logo from '../../assets/logo-footer.svg'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <img src={logo} alt='Logo Kasa' id='logo-footer' />
                <p id='copyright'>2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer