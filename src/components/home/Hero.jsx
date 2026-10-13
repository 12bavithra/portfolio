import { site } from '../../data/site.js'

function Hero({ onNavigate }) {
  return (
    <section className="hero wrap" aria-labelledby="hero-statement">
      <div className="hero-copy">
        <p className="hero-education">
          {site.education[0].title} · {site.education[0].years}
        </p>
        <h1 id="hero-statement" className="display hero-statement">
          {site.statement}
        </h1>
        <p className="lede hero-summary">{site.heroLead}</p>
        <div className="hero-actions">
          <button
            type="button"
            className="link-arrow"
            onClick={() => onNavigate('home', 'work')}
          >
            Explore my work <span className="arrow" aria-hidden="true">→</span>
          </button>
          <a
            className="link-quiet"
            href="/resume/Bavithra.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume →
          </a>
        </div>
      </div>

      <div className="hero-portrait">
        <figure className="hero-photo">
          <img src="/images/Home.png" alt="Warm workspace illustration with books, charts, a plant, and notebook" />
        </figure>
      </div>
    </section>
  )
}

export default Hero
