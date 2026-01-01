import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Products from './pages/Products/Products'
import Gallery from './pages/Gallery/Gallery'
import Testimonials from './pages/Testimonials/Testimonials'
import TaxBenefits from './pages/TaxBenefits/TaxBenefits'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/taxbenefits" element={<TaxBenefits />} />
      </Routes>
    </Layout>
  )
}

export default App

