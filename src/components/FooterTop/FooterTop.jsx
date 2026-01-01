import './FooterTop.css'

function FooterTop() {
  return (
    <section className="footer-top no-padding">
      <div className="container">
        <div className="footer-top-bg row">
          <div className="col-md-4 footer-box one">
            <i className="fa fa-map-marker">&nbsp;</i>
            <div className="footer-box-content">
              <p>
                1st Main Road Srinivasa Puram, Korattur
                <br />
                Chennai, Tamil Nadu 600076
                <br />
                Tamil Nadu, India
              </p>
            </div>
          </div>
          <div className="col-md-4 footer-box two">
            <i className="fa fa-phone">&nbsp;</i>
            <div className="footer-box-content">
              <p>
                <a className="list-contacts__link" href="tel:9092438096">9092438096</a>
                <br />
                <a className="list-contacts__link" href="tel:9962020171">9962020171</a>
              </p>
            </div>
          </div>
          <div className="col-md-4 footer-box three">
            <i className="fa fa-envelope-o">&nbsp;</i>
            <div className="footer-box-content">
              <p>
                <a className="list-contacts__link" href="mailto:tmrlicservices@gmail.com">
                  tmrlicservices@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterTop

