import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    fatherHusbandName: '',
    dob: '',
    email: '',
    phone: '',
    occupation: '',
    education: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add API call here
    alert('Thank you for your inquiry. We will get back to you soon!')
  }

  return (
    <section id="contact" className="contact-three">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="sidebar widget-title">Premium calculator</h3>
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="error-container"></div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      className="form-control form-control-name"
                      name="name"
                      placeholder="Name *"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Father/Husband name:</label>
                    <input
                      className="form-control"
                      name="fatherHusbandName"
                      placeholder="Father/Husband name *"
                      type="text"
                      value={formData.fatherHusbandName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>DOB:</label>
                    <input
                      className="form-control"
                      name="dob"
                      placeholder="Date of Birth *"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      className="form-control form-control-email"
                      name="email"
                      placeholder="Email *"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Phone:</label>
                    <input
                      className="form-control"
                      name="phone"
                      placeholder="Phone *"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Occupation:</label>
                    <input
                      className="form-control"
                      name="occupation"
                      placeholder="Occupation *"
                      type="text"
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Education:</label>
                    <input
                      className="form-control"
                      name="education"
                      placeholder="Education *"
                      type="text"
                      value={formData.education}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control form-control-message"
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <br />
                <input
                  type="submit"
                  name="btnSendContactEmail"
                  value="Send Message"
                  className="btn btn-primary solid blank"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

