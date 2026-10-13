function AchievementsSection() {
  return (
    <section className="home-section achievement-section" id="achievements">
      <div className="wrap">
        <header className="achievement-heading">
          <p className="kicker achievement-label">ACHIEVEMENTS</p>
          <h2 className="display achievement-section-title">Small Wins, Big Motivation</h2>
          <p className="achievement-intro">
            Every milestone reminds me to keep learning, building, and pushing my limits.
          </p>
        </header>
        <div className="achievement-feature">
          <div className="achievement-art">
            <img
              src="/images/achievement-techutsav.png"
              alt="Illustration of ideas, analysis, and growth leading toward impact"
            />
          </div>
          <div className="achievement-copy">
            <h3 className="display achievement-title">TechUtsav ’25</h3>
            <span className="achievement-award">1st Prize</span>
            <h4>From Raw Data to Real Insights</h4>
            <p className="achievement-description">
              Turning business data into a clearer story through Power BI. By bringing key metrics and trends to life with interactive dashboards, I earned 1st Prize at TechUtsav ’25 — a milestone that made data storytelling even more meaningful to me.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
