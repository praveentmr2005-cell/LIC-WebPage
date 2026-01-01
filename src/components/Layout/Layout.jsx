import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ScriptLoader from '../ScriptLoader/ScriptLoader'

function Layout({ children }) {
  return (
    <>
      <ScriptLoader />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

