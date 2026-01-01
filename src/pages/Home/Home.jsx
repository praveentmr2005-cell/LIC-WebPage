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
      
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="row text-center">
                <h2 className="title">
                  <span className="title-head">About Us</span>
                </h2>
              </div>
              <div className="row solid-row" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <div className="col-md-6">
                  <h3 className="page-content-title first">Raghunath,</h3>
                  <p style={{ paddingRight: '50px' }}>
                    Hello and welcome to our website!! I am Raghunath. T M an expert in Insurance 
                    Consultancy services for all types of Insurance, such as Pension Plans, Health 
                    Insurance, Term Plan, Children education / Marriage / Securing family's future etc.
                  </p>
                  <p>
                    <Link className="btn btn-primary" to="/about">Read More</Link>
                  </p>
                </div>
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

