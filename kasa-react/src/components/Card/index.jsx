import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ id, title, cover }) => {
    return (
        <Link to={`/rent/${id}`} className='card-id'>
            <img 
                className='card-cover' 
                src={cover} 
                alt={`${title} cover`} 
            />
            <span className='card-title'>{title}</span>
        </Link>
    )
}

export default Card;