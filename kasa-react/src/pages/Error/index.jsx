import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
    return (
        <header className='error'>
            <div className='error-content'>
                <h1 className='error-title'>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to='/' className='error-link'>
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </header>
    )
}

export default Error