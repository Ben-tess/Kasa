import { Link } from 'react-router-dom'
import rentList from '../../data/data.json'
import PhotoMer from '../../assets/images/img-mer-cropped.jpg'
import Card from '../../components/Card'
import './Home.sass'
import '../../components/Card/Card.sass'

function Home() {
    return (
        <div className='home'>
            <div className='home__content'>
                <div className='home__banner'>
                    <img className='home__img' 
                        src={PhotoMer} 
                        alt='Photo de bord de mer' />
                    <p className='home__txt'>Chez vous, partout et ailleurs</p>
                </div>
                <div className='home__cards-container'>
                    {rentList.map(({id, title, cover}) =>
                    <Card 
                        id={id}
                        title={title}
                        cover={cover}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home