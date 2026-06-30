import { Link } from 'react-router-dom'
import './Error.sass'

function Error() {
    return (
        <header className='error'>
            <div className='error__content'>
                <h1 className='error__title error__title--size'>404</h1>
                <h2 className='error__title'>
                    Oups! La page que vous demandez n'existe pas.</h2>
                <Link to='/' className='error__link'>
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </header>
    )
}

export default Error