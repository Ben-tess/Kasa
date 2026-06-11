import { Link } from 'react-router-dom'
import PhotoMountain from '../../assets/images/img-montagne-cropped.jpg'
import './About.css'

function About() {
    return (
        <header className='about'>
            <div className='about-content'>
                <div className='banner-about'>
                    <img className='img-about' 
                        src={PhotoMountain} 
                        alt='Photo de montagnes' />
                </div>
            </div>
        </header>
    )
}

export default About