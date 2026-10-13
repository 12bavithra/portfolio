import { useState } from 'react'
import { site } from '../../data/site.js'

function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function goTo(item) {
    onNavigate(item.page, item.section)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="wrap header-inner">
        <button
          type="button"
          className="site-logo"
          onClick={() => goTo({ page: 'home' })}
        >
          {site.wordmark}
        </button>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="site-navigation"
          className={menuOpen ? 'header-nav is-open' : 'header-nav'}
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <button
              key={item.label}
              type="button"
              className={
                item.accent ? 'nav-link nav-link--accent' : 'nav-link'
              }
              aria-current={
                !item.section && currentPage === item.page ? 'page' : undefined
              }
              onClick={() => goTo(item)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
