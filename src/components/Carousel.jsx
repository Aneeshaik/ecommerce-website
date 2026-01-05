import firstImage from '../assets/carousel/first-image.jpg';

const Carousel = () => {
    return (
        <img src={firstImage} alt="Carousel" className="w-full h-auto rounded-2xl mb-4" />
    )
}

export default Carousel;