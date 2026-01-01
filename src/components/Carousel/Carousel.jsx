import { useState, useEffect } from 'react'
import './Carousel.css'

const bannerImages = [
  '/assets/organizations/7128/banner/1.jpg',
  '/assets/organizations/7128/banner/3.jpg',
  '/assets/organizations/7128/banner/4.jpg',
  '/assets/organizations/7128/banner/5.jpg',
  '/assets/organizations/7128/banner/Untitled-3a.jpg'
]

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
  }

  return (
    <div id="main-slide" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators visible-lg visible-md">
        {bannerImages.map((_, index) => (
          <li
            key={index}
            data-target="#main-slide"
            data-slide-to={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => goToSlide(index)}
          ></li>
        ))}
      </ol>
      
      <div className="carousel-inner" style={{ textAlign: '-webkit-center' }}>
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <a 
        className="left carousel-control" 
        href="#main-slide" 
        onClick={(e) => {
          e.preventDefault()
          goToPrevious()
        }}
      >
        <span>
          <i className="fa fa-angle-left"></i>
        </span>
      </a>
      <a 
        className="right carousel-control" 
        href="#main-slide"
        onClick={(e) => {
          e.preventDefault()
          goToNext()
        }}
      >
        <span>
          <i className="fa fa-angle-right"></i>
        </span>
      </a>
      <span className="down-arrow-transparent"></span>
    </div>
  )
}

export default Carousel

