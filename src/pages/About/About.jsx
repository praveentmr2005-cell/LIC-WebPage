import './About.css'

function About() {
  return (
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <div className="row text-center">
              <h2 className="title">
                <span className="title-head">About Us</span>
              </h2>
            </div>
            <div className="gap-40">&nbsp;</div>
            <div className="row">
              <div className="col-md-6 about-text solid-row">
                <h3 className="page-content-title-classic">Raghunath,</h3>
                <p>
                  <span style={{ fontSize: '12pt' }}>
                    Hello and welcome to our website!!
                    <br /><br />
                    I am Raghunath. T M an expert in Insurance Consultancy services for all types 
                    of Insurance, such as Pension Plans, Health Insurance, Term Plan, Children education 
                    / Marriage / Securing family's future etc.
                    <br /><br />
                    I can help you to achieve your long term and medium-term financial goals through 
                    life insurance and customized financial planning. From last 7 years, I have helped 
                    more than 200 individuals in retirement planning, child's education planning and 
                    financial protection against any unforeseen events etc.
                    <br /><br />
                    Also, I can help to Corporates to open Group Gratuity Schemes, Superannuation and 
                    Group Term Insurance for their employee's.
                    <br /><br />
                    Please feel free to get in touch with me for all services related to LIC & Health 
                    Insurance including help for Claim Settlement, Survival Benefit Dues, Maturity Dues, 
                    Loans on policies, surrender of policies, change of premium mode/nominee/address and 
                    multiple services at your door Steps.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

