import { useState, useEffect } from 'react'
import FooterTop from '../FooterTop/FooterTop'
import FooterBottom from '../FooterBottom/FooterBottom'
import './Footer.css'

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <FooterTop />
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 footer-widget">
              <h3 className="widget-title">Important Links</h3>
              <div className="list-arrow" style={{ color: '#fff' }}>
                <ul>
                  <li>
                    <a href="http://www.licindia.in/" target="_blank" rel="noopener noreferrer">
                      LIC of India
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://licindia.in/Bottom-Links/Download-Forms" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LIC Forms
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://customer.onlinelic.in/LICEPS/appmanager/OnlinePayment/OnlinePaymentHome" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LIC Premium - Pay Direct
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://customer.onlinelic.in/LICEPS/portlets/visitor/updateContact/UpdateContactController.jpf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Update Contact Details at LIC
                    </a>
                  </li>
                  <li>
                    <a 
                      href="http://www.licindia.in/Customer-Services/Bonus-Information" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LIC Bonus Information
                    </a>
                  </li>
                  <li>
                    <a 
                      href="http://www.licindia.in/Customer-Services/Tax-Benefit" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LIC Policy Income Tax Rule
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 footer-widget">
              <div className="footer-social">
                <h3 className="widget-title">Stay Connected</h3>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-xs-12 col-sm-12">
              <div className="copyright-info" style={{ textAlign: 'center' }}>
                <div 
                  id="back-to-top" 
                  className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                >
                  <button 
                    className="btn btn-primary" 
                    title="Back to Top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Back to top"
                  >
                    <i className="fa fa-angle-double-up"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterBottom />
    </>
  )
}

export default Footer

