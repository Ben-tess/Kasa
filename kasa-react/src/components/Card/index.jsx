import { Link } from 'react-router-dom'
import './Card.sass'

const Card = ({ id, title, cover }) => {
    return (
        <Link to={`/rent/${id}`} className='card__id'>
            <img 
                className='card__cover' 
                src={cover} 
                alt={`${title} cover`} 
            />
            <span className='card__title'>{title}</span>
        </Link>
    )
}

export default Card;