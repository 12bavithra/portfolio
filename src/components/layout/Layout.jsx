import Header from './Header.jsx'
import Footer from './Footer.jsx'
import '../../styles/layout.css'

function Layout({ currentPage, onNavigate, children }) {
  return (
    <div className="site">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="site-main" id="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
