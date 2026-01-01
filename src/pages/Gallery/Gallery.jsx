import './Gallery.css'

function Gallery() {
  return (
    <section id="portfolio">
      <div className="container gallery-container">
        <div className="row text-center">
          <h2 className="title">
            <span className="title-head">Gallery</span>
          </h2>
        </div>
        <div className="row">
          <img
            src="/assets/organizations/7128/gallery/InGallery.jpg"
            alt="Gallery"
            style={{ width: '100%', maxWidth: '1400px', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery

