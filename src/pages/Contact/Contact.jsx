import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <>
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row text-center">
            <h2 className="title">
              <span className="title-head">Contact Us</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h3 className="sidebar widget-title">Find on Map</h3>
              <iframe
                style={{ height: '500px', width: '100%', border: '0' }}
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.8728975334527!2d80.18360875817504!3d13.11528384769049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526387cce679b1%3A0xad8f5f2723829092!2s1st%20Main%20Road%2C%20Srinivasa%20Puram%2C%20Korattur%2C%20Chennai%2C%20Tamil%20Nadu%20600080!5e0!3m2!1sen!2sin!4v1668759086096!5m2!1sen!2sin"
                title="Location Map"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar sidebar-right">
                <div className="widget">
                  <div className="contact-info-box">
                    <i className="fa fa-map-marker">&nbsp;</i>
                    <div className="contact-info-box-content">
                      <h4>
                        Reach us
                        <p>
                          <a>1st Main Road, Srinivasa Puram,<br /> Korattur,<br /></a>
                        </p>
                      </h4>
                      <p>
                        <a>Chennai-600076,<br />Tamil Nadu, India</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-box">
                    <i className="fa fa-phone">&nbsp;</i>
                    <div className="contact-info-box-content">
                      <h4>Phone</h4>
                      <p>
                        <a className="list-contacts__link" href="tel:9092438096">9092438096<br /></a>
                        <a className="list-contacts__link" href="tel:9962020171">9962020171<br /></a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-box">
                    <i className="fa fa-envelope">&nbsp;</i>
                    <div className="contact-info-box-content">
                      <h4>Email</h4>
                      <p>
                        <a className="list-contacts__link" href="mailto:tmrlicservices@gmail.com">
                          tmrlicservices@gmail.com
                        </a>
                      </p>
                      <h4>Social Media</h4>
                      <div style={{ marginTop: '10px' }}>
                        <a 
                          href="https://www.facebook.com/profile.php?id=100064204503017" 
                          className="fa fa-facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ marginRight: '10px', fontSize: '20px' }}
                        ></a>
                        <a 
                          href="https://twitter.com/tmr_lic" 
                          className="fa fa-twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ marginRight: '10px', fontSize: '20px' }}
                        ></a>
                        <a 
                          href="https://www.linkedin.com/company/14392462/admin/" 
                          className="fa fa-linkedin"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ marginRight: '10px', fontSize: '20px' }}
                        ></a>
                        <a 
                          href="https://www.instagram.com/thenmozhi_r_1978/" 
                          className="fa fa-instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ marginRight: '10px', fontSize: '20px' }}
                        ></a>
                        <a 
                          href="https://insurance-and-investment-consultant-your.business.site/" 
                          className="fa fa-google"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '20px' }}
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm />
    </>
  )
}

export default Contact

