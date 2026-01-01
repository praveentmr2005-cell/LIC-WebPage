import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="site-navigation navigation">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="site-nav-inner pull-left">
              <button 
                type="button" 
                className={`navbar-toggle ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className={`collapse navbar-collapse navbar-responsive-collapse ${isOpen ? 'show' : ''}`}>
                <div className="nav navbar-nav">
                  <ul className="th-mainul">
                    <li>
                      <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                    </li>
                    <li>
                      <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
                    </li>
                    <li 
                      className={`dropdown ${activeDropdown === 'products' ? 'active' : ''}`}
                      onMouseEnter={() => setActiveDropdown('products')}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() => window.innerWidth < 992 && toggleDropdown('products')}
                    >
                      <Link to="/products" className={isActive('/products') ? 'active' : ''}>Products</Link>
                      <ul className="th-productul dropdown-menu">
                        <li>
                          <Link to="/products#endowment">Endowment</Link>
                        </li>
                        <li>
                          <Link to="/products#children">Children</Link>
                        </li>
                        <li>
                          <Link to="/products#moneyback">Moneyback</Link>
                        </li>
                        <li>
                          <Link to="/products#term">Term Assurance</Link>
                        </li>
                        <li>
                          <Link to="/products#health">Health</Link>
                        </li>
                        <li>
                          <Link to="/products#ulip">ULIP</Link>
                        </li>
                        <li>
                          <Link to="/products#pension">Pension</Link>
                        </li>
                        <li>
                          <Link to="/products#wholelife">Whole Life</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link>
                    </li>
                    <li 
                      className={`dropdown ${activeDropdown === 'resources' ? 'active' : ''}`}
                      onMouseEnter={() => setActiveDropdown('resources')}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() => window.innerWidth < 992 && toggleDropdown('resources')}
                    >
                      <Link to="#">Resource Centre</Link>
                      <ul className="th-productul dropdown-menu">
                        <li>
                          <Link to="/taxbenefits">Tax Info</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/testimonials" className={isActive('/testimonials') ? 'active' : ''}>Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

