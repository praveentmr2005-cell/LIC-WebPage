import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

const products = [
  { id: 17, title: 'Endowment', image: '/assets/category/17/17.png' },
  { id: 16, title: 'Children', image: '/assets/category/16/16.png' },
  { id: 18, title: 'Moneyback', image: '/assets/category/18/18.png' },
  { id: 33, title: 'ULIP', image: '/assets/category/33/33.png' },
  { id: 19, title: 'Pension', image: '/assets/category/19/19.png' },
  { id: 23, title: 'Whole Life', image: '/assets/category/23/23.png' },
  { id: 22, title: 'Health', image: '/assets/category/22/22.png' },
  { id: 20, title: 'Term Assurance', image: '/assets/category/20/20.png' }
]

function Home() {
  return (
    <>
      <Carousel />

      <section className="hero-cta">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-card">
              <div className="cta-icon">
                <i className="fa fa-shield"></i>
              </div>
              <h3>Comprehensive Coverage</h3>
              <p>Protect what matters most with our wide range of insurance solutions</p>
            </div>
            <div className="cta-card">
              <div className="cta-icon">
                <i className="fa fa-users"></i>
              </div>
              <h3>Expert Guidance</h3>
              <p>7+ years of experience helping families secure their future</p>
            </div>
            <div className="cta-card">
              <div className="cta-icon">
                <i className="fa fa-heart"></i>
              </div>
              <h3>Personalized Service</h3>
              <p>Tailored insurance plans designed for your unique needs</p>
            </div>
            <div className="cta-card">
              <div className="cta-icon">
                <i className="fa fa-phone"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>We're here to help with claims, queries, and policy updates</p>
            </div>
          </div>
        </div>
      </section>

      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row text-center">
            <div className="section-header">
              <span className="section-label">Get to Know Us</span>
              <h2 className="title">
                <span className="title-head">Your Trusted Insurance Partner</span>
              </h2>
              <p className="section-subtitle">Professional insurance consultancy with a personal touch</p>
            </div>
          </div>
          <div className="about-content">
            <div className="about-text-card">
              <div className="author-badge">
                <div className="author-icon">R</div>
                <div>
                  <h3 className="author-name">Raghunath T.M</h3>
                  <p className="author-title">Insurance Consultant</p>
                </div>
              </div>
              <p className="lead-text">
                Hello and welcome! I am an expert in Insurance Consultancy services, specializing in
                helping individuals and families secure their financial future through comprehensive
                insurance solutions.
              </p>
              <p>
                With over 7 years of experience, I've helped more than 200 individuals with retirement
                planning, children's education planning, health insurance, and financial protection
                against unforeseen events. I also assist corporates with Group Gratuity Schemes,
                Superannuation, and Group Term Insurance.
              </p>
              <div className="services-list">
                <div className="service-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Pension Plans</span>
                </div>
                <div className="service-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Health Insurance</span>
                </div>
                <div className="service-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Term Plans</span>
                </div>
                <div className="service-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Children's Education</span>
                </div>
                <div className="service-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Investment Planning</span>
                </div>
                <div className="service-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Corporate Solutions</span>
                </div>
              </div>
              <div className="cta-buttons">
                <Link className="btn btn-primary btn-lg" to="/about">
                  Learn More About Us
                  <i className="fa fa-arrow-right"></i>
                </Link>
                <Link className="btn btn-outline btn-lg" to="/contact">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product-area" className="product-area">
        <div className="container">
          <div className="row text-center">
            <h2 className="title">
              <span className="title-head" data-title="Product">Our Products</span>
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: 'var(--fs-lg)', marginTop: 'var(--spacing-md)' }}>
              Comprehensive insurance solutions tailored to your needs
            </p>
          </div>
          <div className="row" style={{ marginTop: 'var(--spacing-2xl)' }}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                categoryId={product.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

