import { Link } from 'react-router-dom'
import logo from '../../assets/logo-footer.svg'
import './Footer.sass'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <img src={logo} alt='Logo Kasa' id='footer__logo' />
                <p id='copyright'>2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer