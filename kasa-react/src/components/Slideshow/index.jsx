import { useState } from "react"
import "./Slideshow.sass"

function Slideshow({ pictures, title }) {
    const [currentImage, setCurrentImage] = useState(0)
    const previousImage = () => {
        setCurrentImage(
            (currentImage - 1 + pictures.length) % pictures.length
        )
    }
    const nextImage = () => {
        setCurrentImage((currentImage + 1) % pictures.length)
    }

    return (
        <div className="slideshow">
            <img 
                src={pictures[currentImage]}
                alt={title}
            />
            {pictures.length > 1 && (
                <>
                    <button 
                        className="slideshow-arrow left"
                        onClick={previousImage}
                    >
                    </button>
                    <button 
                        className="slideshow-arrow right"
                        onClick={nextImage}
                    >
                    </button>
                    <p className="slideshow-count">
                        {currentImage + 1}/{pictures.length}
                    </p>
                </>
            )}
        </div>
    )
}

export default Slideshow