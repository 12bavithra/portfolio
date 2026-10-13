import { site } from '../../data/site.js'

function AboutSection() {
  return (
    <section className="home-section about-section" id="about">
      <div className="wrap about-story about-story--compact">
        <div className="about-story-copy">
          <p className="kicker section-label about-label">About</p>
          <h3 className="display about-heading">Designing ideas with clarity and heart.</h3>
          <p className="lede about-copy">
            I enjoy turning thoughtful concepts into useful, human-centered digital experiences.
          </p>
          <a className="about-link" href="#journey">
            More about me <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="about-visual-card" aria-label="Laptop workspace image">
          <img
            src="/images/Laptop.png"
            alt="Laptop workspace image"
            className="about-visual-image"
          />
        </div>

        <ul className="about-focus-list" aria-label="Focus areas">
          <li className="about-focus-item">
            <span className="about-focus-visual about-focus-visual--dev" aria-hidden="true">
              <span className="about-focus-shape" />
            </span>
            <span className="about-focus-copy">
              <span className="about-focus-text">Software Development</span>
              <span className="about-focus-description">Building useful and meaningful web applications.</span>
            </span>
          </li>
          <li className="about-focus-item">
            <span className="about-focus-visual about-focus-visual--data" aria-hidden="true">
              <span className="about-focus-shape" />
            </span>
            <span className="about-focus-copy">
              <span className="about-focus-text">Data Analysis</span>
              <span className="about-focus-description">Working with data to find patterns and insights.</span>
            </span>
          </li>
          <li className="about-focus-item">
            <span className="about-focus-visual about-focus-visual--ux" aria-hidden="true">
              <span className="about-focus-shape" />
            </span>
            <span className="about-focus-copy">
              <span className="about-focus-text">UI/UX Design</span>
              <span className="about-focus-description">Creating clean and intuitive digital experiences.</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
