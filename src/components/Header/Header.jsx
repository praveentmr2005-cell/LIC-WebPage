import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header id="header" className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div id="top-bar" className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 top-social">
              <div className="unstyled"></div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 top-menu">
              <div className="unstyled">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <Link to="/">
              <img 
                className="main-logo" 
                src="/assets/organizations/7128/Logo.png" 
                alt="SECURE GAIN Logo"
              />
            </Link>
          </div>
          
          <div className="col-xs-12 col-sm-7 header-right">
            <ul className="top-info">
              <li>
                <div className="info-box">
                  <span className="info-icon">
                    <i className="fa fa-phone">&nbsp;</i>
                  </span>
                  <div className="info-box-content">
                    <p className="info-box-title">
                      <a className="list-contacts__link" href="tel:9092438096">9092438096</a>
                      <br />
                      <a className="list-contacts__link" href="tel:9962020171">9962020171</a>
                    </p>
                    <p className="info-box-subtitle">Phone Number</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="info-box">
                  <span className="info-icon">
                    <i className="fa fa-envelope-o">&nbsp;</i>
                  </span>
                  <div className="info-box-content">
                    <p className="info-box-title">
                      <a className="list-contacts__link" href="mailto:tmrlicservices@gmail.com">
                        tmrlicservices@gmail.com
                      </a>
                    </p>
                    <p className="info-box-subtitle">Email Address</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Navigation />
    </header>
  )
}

export default Header

