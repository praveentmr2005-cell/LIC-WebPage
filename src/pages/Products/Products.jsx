import { Link } from 'react-router-dom'
import './Products.css'

const productCategories = [
  {
    id: 17,
    name: 'Endowment',
    image: '/assets/category/17/17.png',
    products: [
      { id: 9, name: 'New Endowment Assurance (914)', image: '/assets/product/9/9.png' },
      { id: 10, name: 'New Jeevan Anand (915)', image: '/assets/product/10/10.png' },
      { id: 11, name: 'New Single Endowment Assurance (917)', image: '/assets/product/11/11.png' },
      { id: 16, name: 'Jeevan Lakshya (933)', image: '/assets/product/16/16.png' },
      { id: 17, name: 'Jeevan Labh (936)', image: '/assets/product/17/17.png' },
      { id: 30, name: 'Aadhaar Stambh (943)', image: '/assets/product/30/30.png' },
      { id: 31, name: 'Aadhaar Shila (944)', image: '/assets/product/31/31.png' },
      { id: 95, name: 'Bachat Plus (861)', image: '/assets/product/95/95.png' },
      { id: 101, name: 'Dhan Sanchay (865)', image: '/assets/product/101/101.png' }
    ]
  },
  {
    id: 16,
    name: 'Children',
    image: '/assets/category/16/16.png',
    products: [
      { id: 12, name: 'New Children\'s Money Back (932)', image: '/assets/product/12/12.png' },
      { id: 13, name: 'Jeevan Tarun (934)', image: '/assets/product/13/13.png' }
    ]
  },
  {
    id: 18,
    name: 'Moneyback',
    image: '/assets/category/18/18.png',
    products: [
      { id: 19, name: 'New Bima Bachat (916)', image: '/assets/product/19/19.png' },
      { id: 20, name: 'New Money Back 20 Years (920)', image: '/assets/product/20/20.png' },
      { id: 21, name: 'New Money Back 25 Years (921)', image: '/assets/product/21/21.png' },
      { id: 35, name: 'Jeevan Shiromani (947)', image: '/assets/product/35/35.png' },
      { id: 36, name: 'Bima Shree (948)', image: '/assets/product/36/36.png' },
      { id: 99, name: 'Dhan Rekha (863)', image: '/assets/product/99/99.png' }
    ]
  },
  {
    id: 33,
    name: 'ULIP',
    image: '/assets/category/33/33.png',
    products: [
      { id: 29, name: 'New Endowment Plus (935)', image: '/assets/product/29/29.png' },
      { id: 89, name: 'Nivesh Plus (849)', image: '/assets/product/89/89.png' },
      { id: 90, name: 'SIIP (852)', image: '/assets/product/90/90.png' }
    ]
  },
  {
    id: 19,
    name: 'Pension',
    image: '/assets/category/19/19.png',
    products: [
      { id: 32, name: 'Pradhan Mantri Vaya Vandana Yojana (856)', image: '/assets/product/32/32.png' },
      { id: 94, name: 'Jeevan Akshay VII (857)', image: '/assets/product/94/94.png' },
      { id: 93, name: 'New Jeevan Shanti (858)', image: '/assets/product/93/93.png' },
      { id: 97, name: 'Saral Pension (862)', image: '/assets/product/97/97.png' }
    ]
  },
  {
    id: 23,
    name: 'Whole Life',
    image: '/assets/category/23/23.png',
    products: [
      { id: 33, name: 'Jeevan Umang (945)', image: '/assets/product/33/33.png' }
    ]
  },
  {
    id: 22,
    name: 'Health',
    image: '/assets/category/22/22.png',
    products: [
      { id: 38, name: 'Cancer Cover (905)', image: '/assets/product/38/38.png' },
      { id: 98, name: 'Arogya Rakshak (906)', image: '/assets/product/98/98.png' }
    ]
  },
  {
    id: 20,
    name: 'Term Assurance',
    image: '/assets/category/20/20.png',
    products: [
      { id: 47, name: 'Jeevan Amar (855)', image: '/assets/product/47/47.png' },
      { id: 96, name: 'Saral Jeevan Bima (859)', image: '/assets/product/96/96.png' }
    ]
  }
]

function Products() {
  return (
    <section id="content" className="shortcode-item">
      <div className="container">
        <div className="row text-center">
          <h2 className="title">
            <span className="title-head">Products</span>
          </h2>
        </div>
        {productCategories.map((category) => (
          <div key={category.id}>
            <div className="row">
              <div className="col-sm-12" style={{ display: 'inline-block', paddingTop: '20px' }}>
                <div className="product-item">
                  <div className="col-sm-4">
                    <Link to={`/categories/${category.id}/productlist.html`}>
                      <img
                        style={{ height: '200px !important', display: '-webkit-inline-box' }}
                        className="img-fluid img-responsive"
                        src={category.image}
                        alt={category.name}
                      />
                    </Link>
                  </div>
                  <div className="col-sm-8">
                    <h2 style={{ textAlign: 'left' }}>
                      <Link to={`/categories/${category.id}/productlist.html`}>
                        {category.name}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                {category.products.map((product) => (
                  <div key={product.id} className="col-sm-2 products-thums">
                    <div>
                      <Link to={`/categories/${category.id}/products/${product.id}.html`}>
                        <img
                          style={{ height: '150px !important', paddingTop: '40px' }}
                          className="img-fluid img-responsive"
                          src={product.image}
                          alt={product.name}
                        />
                      </Link>
                      <h4 style={{ textAlign: 'center' }}>
                        <Link to={`/categories/${category.id}/products/${product.id}.html`}>
                          {product.name}
                        </Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products

