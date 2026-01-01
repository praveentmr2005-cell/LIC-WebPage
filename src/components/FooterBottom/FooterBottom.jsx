import './FooterBottom.css'

function FooterBottom() {
  return (
    <div className="footer-bottom" style={{
      paddingTop: '5px',
      paddingBottom: '5px',
      background: '#ddd !important',
      textAlign: 'center'
    }}>
      <a href="/dc/disclaimer.html" style={{ color: '#000' }} target="_blank" rel="noopener noreferrer">
        Disclaimer
      </a>
      <a href="/dc/privacypolicy.html" style={{ color: '#000' }} target="_blank" rel="noopener noreferrer">
        {' | Privacy Policy'}
      </a>
    </div>
  )
}

export default FooterBottom

