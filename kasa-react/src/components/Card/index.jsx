import './Card.css'

const Card = ({id, title, cover}) => {
    return (
        <a key={id} className='card-id'>
            <img className='card-cover' src={cover} alt={`${title} cover`} />
            <span className='card-title'>{title}</span>
        </a>
    )
}

export default Card;