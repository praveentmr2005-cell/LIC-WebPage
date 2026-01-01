import { useState } from 'react'
import './TaxBenefits.css'

const taxData = {
  '2021-2022': {
    title: 'Income Tax Slabs 2021 - 2022 for Individuals & HUF below 60 Years of Age',
    slabs: [
      { income: 'Up to Rs. 2,50,000', existing: 'Nil', new: 'Nil' },
      { income: 'Rs. 2,50,001 to Rs. 5,00,000', existing: '5%', new: '5%' },
      { income: 'Rs. 5,00,001 to Rs. 7,50,000', existing: '20%', new: '10%' },
      { income: 'Rs. 7,50,001 to Rs. 10,00,000', existing: '20%', new: '15%' },
      { income: 'Rs. 10,00,001 to Rs. 12,50,000', existing: '30%', new: '20%' },
      { income: 'Rs. 12,50,001 to Rs. 15,00,000', existing: '30%', new: '25%' },
      { income: 'Above Rs. 15,00,000', existing: '30%', new: '30%' }
    ]
  },
  '2020-2021': {
    title: 'Income Tax Slabs 2020 - 2021',
    slabs: [
      { income: 'Up to Rs. 2,50,000', existing: 'Nil', new: 'Nil' },
      { income: 'Rs. 2,50,001 to Rs. 5,00,000', existing: '5%', new: '5%' },
      { income: 'Rs. 5,00,001 to Rs. 10,00,000', existing: '20%', new: '10%' },
      { income: 'Above Rs. 10,00,000', existing: '30%', new: '30%' }
    ]
  }
}

function TaxBenefits() {
  const [selectedYear, setSelectedYear] = useState('2021-2022')

  return (
    <section id="portfolio">
      <div className="container gallery-container">
        <div className="row text-center">
          <h2 className="title">
            <span className="title-head">Tax Information</span>
          </h2>
        </div>
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-md-12">
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Every year with Government budget, the most common expectation an Indian citizen has is 
              of 'change for better' in the Income tax slab. So to plan your investment strategy and 
              understand how much tax liability you will incur this year let's have a look at the tax 
              structure for different categories. These categories are created by the Government of 
              India for taxation purposes, and they are based on Gender and Age.
            </p>
          </div>
        </div>
        
        <div className="container taxinfo_tbMargin" style={{ marginTop: '30px' }}>
          <div className="row">
            <div className="col-md-12">
              <div className="btn-group" role="group" style={{ marginBottom: '20px' }}>
                {Object.keys(taxData).map((year) => (
                  <button
                    key={year}
                    type="button"
                    className={`btn ${selectedYear === year ? 'btn-primary' : 'btn-default'}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12">
              <h3>{taxData[selectedYear].title}</h3>
              <table className="table table-bordered" style={{ marginTop: '20px' }}>
                <thead>
                  <tr>
                    <th>Taxable income</th>
                    <th>Tax Rate (Existing Scheme)</th>
                    <th>Tax Rate (New Scheme)</th>
                  </tr>
                </thead>
                <tbody>
                  {taxData[selectedYear].slabs.map((slab, index) => (
                    <tr key={index}>
                      <td>{slab.income}</td>
                      <td>{slab.existing}</td>
                      <td>{slab.new}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TaxBenefits

