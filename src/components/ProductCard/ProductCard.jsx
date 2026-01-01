import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ image, title, link, categoryId }) {
  return (
    <div className="col-sm-3">
      <div className="product-card">
        <img className="img-responsive" src={image} alt={title} />
        <h4 className="product-title">{title}</h4>
        <p>
          <Link to={link || `/categories/${categoryId}/productlist.html`} className="btn btn-primary">
            Read More
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ProductCard

