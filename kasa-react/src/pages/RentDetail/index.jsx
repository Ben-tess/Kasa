import { useParams } from 'react-router-dom'
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Collapse from '../../components/Collapse'
import Error from '../Error'
import './RentDetail.css'

function RentDetail() {
    const { id } = useParams()
    const rent = data.find((item) => item.id === id)

    if (!rent) {
        return <Error />
    }

    return (
        <div className='rent'>
            <div className='rent-content'>
                <div className='rent-cover'>
                    <img 
                        src={rent.cover}
                        alt={rent.title}
                    />
                </div>
                <div className='rent-informations'>
                    <div className='rent-informations-top'>
                        <div className='rent-title'>
                            <h1>{rent.title}</h1>
                            <h2>{rent.location}</h2>
                        </div>
                        <div className='rent-host'>
                            <p>{rent.host.name}</p>
                            <img
                                src={rent.host.picture}
                            />
                        </div>
                    </div>
                    <div className='rent-informations-middle'>
                        <div className='rent-tags'>
                            {rent.tags.map((tag) => (                           
                                <span key={tag} className='rent-tag'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className='rent-rating'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FontAwesomeIcon 
                                    key={star}
                                    icon={faStar}
                                    className={
                                        star <= rent.rating ? "star active" : "star"
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className='rent-informations-bottom'>
                        <div className='rent-collapse-description'>
                            <Collapse title="Description">
                            {rent.description}
                        </Collapse>
                        </div>
                        <div className='rent-collapse-equipments'>
                            <Collapse title="Équipements">
                            <ul className='equipments-list'>
                                {rent.equipments.map((equipment) => (
                                    <li key={equipment}>{equipment}</li>
                                ))}
                            </ul>
                        </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentDetail