import { useState } from 'react'

function JourneySection() {
  const milestones = [
    {
      year: '2022–2026',
      title: 'B.Tech IT',
      detail: 'Velammal College of Engineering & Technology',
      type: 'education',
    },
    {
      year: '2023–2024',
      title: 'IoT & Android Internship',
      detail: 'NSIC Technical Services Centre',
      description: 'Internship focused on IoT and Android.',
      type: 'internship',
    },
    {
      year: '2024',
      title: 'Data Analysis Intern',
      detail: 'Elysium Technologies, Madurai',
      description: 'Internship focused on data analysis.',
      type: 'experience',
    },
  ]
  const [selectedMilestone, setSelectedMilestone] = useState(null)

  return (
    <section className="home-section" id="journey">
      <div className="wrap">
        <div className="journey-heading">
          <div>
            <h2 className="kicker section-label">Experience &amp; Journey</h2>
            <p className="journey-handwritten">Learning, by doing</p>
          </div>
          <p className="journey-intro">A few steps that shaped my path.</p>
        </div>
        <ol className="journey-timeline">
          {milestones.map((milestone) => (
            <li
              key={`${milestone.year}-${milestone.type}`}
              className={`journey-milestone journey-milestone--${milestone.type}${selectedMilestone === milestone.type ? ' journey-milestone--selected' : ''}`}
            >
              <span className="journey-milestone-year">{milestone.year}</span>
              <span className="journey-milestone-marker" aria-hidden="true" />
              <div className="journey-milestone-details">
                <button
                  className="journey-milestone-copy"
                  type="button"
                  aria-expanded={selectedMilestone === milestone.type}
                  aria-controls={milestone.description || milestone.detail ? `journey-detail-${milestone.type}` : undefined}
                  onClick={() => setSelectedMilestone(
                    selectedMilestone === milestone.type ? null : milestone.type,
                  )}
                >
                  <span className="journey-milestone-type">{milestone.type === 'education' ? 'Education' : 'Experience'}</span>
                  <h3>{milestone.title}</h3>
                  <span className="journey-milestone-prompt">
                    {selectedMilestone === milestone.type ? 'Hide details' : 'View details'}
                  </span>
                </button>
                {milestone.description || milestone.detail ? (
                  <div
                    className={`journey-milestone-detail${selectedMilestone === milestone.type ? ' journey-milestone-detail--open' : ''}`}
                    id={`journey-detail-${milestone.type}`}
                    aria-hidden={selectedMilestone !== milestone.type}
                  >
                    {milestone.description ? <p>{milestone.description}</p> : null}
                    {milestone.detail ? <p>{milestone.detail}</p> : null}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default JourneySection
