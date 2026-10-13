import { site } from '../../data/site.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-mark">{site.wordmark}</p>
        <p className="footer-links">
          {site.social.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </p>
      </div>
    </footer>
  )
}

export default Footer
