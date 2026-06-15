import { Link } from 'react-router-dom'
import rentList from '../../data/data.json'
import PhotoMer from '../../assets/images/img-mer-cropped.jpg'
import Card from '../../components/Card'
import './Home.css'
import '../../components/Card/Card.css'

function Home() {
    return (
        <div className='home'>
            <div className='home-content'>
                <div className='banner-home'>
                    <img className='img-home' 
                        src={PhotoMer} 
                        alt='Photo de bord de mer' />
                    <p className='txt-home'>Chez vous, partout et ailleurs</p>
                </div>
                <div className='cards-container'>
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