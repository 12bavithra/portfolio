const capabilities = [
  {
    number: '01',
    title: 'Build',
    area: 'Software Development',
    description: 'Designing and developing useful software experiences.',
    icon: (
      <>
        <path d="m9 8-4 4 4 4M15 8l4 4-4 4M14 5l-4 14" />
      </>
    ),
  },
  {
    number: '02',
    title: 'Discover',
    area: 'Data & Analytics',
    description: 'Finding patterns and insight in data.',
    icon: (
      <>
        <path d="M4 19h16M6 16V9m6 7V5m6 11v-4" />
        <path d="m5 7 6-3 6 3 3-2" />
      </>
    ),
  },
  {
    number: '03',
    title: 'Explore',
    area: 'Artificial Intelligence',
    description: 'Exploring intelligent applications and generative AI.',
    icon: (
      <>
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    number: '04',
    title: 'Validate',
    area: 'Software Testing',
    description: 'Testing for quality, usability, and reliability.',
    icon: (
      <>
        <path d="M7 3h8l4 4v14H7z" />
        <path d="M15 3v5h5m-10 5 2 2 4-4" />
      </>
    ),
  },
  {
    number: '05',
    title: 'Design',
    area: 'UI/UX & Digital Experiences',
    description: 'Shaping intuitive interfaces and digital experiences.',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16M9 9v11" />
      </>
    ),
  },
]

function SkillsSection() {
  return (
    <section className="home-section skills-section" id="skills">
      <div className="wrap">
        <p className="kicker section-label skills-label">A little about what I do</p>
        <h2 className="display skills-heading">
          Different ways of thinking.
          <span>One curiosity to create.</span>
        </h2>
        <ul className="skill-groups" aria-label="Capabilities">
          {capabilities.map((capability, index) => (
            <li
              className={`skill-group${index === 0 ? ' skill-group--featured' : ''}`}
              key={capability.number}
            >
              <span className="skill-number">{capability.number}</span>
              <span className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {capability.icon}
                </svg>
              </span>
              <div className="skill-copy">
                <h3 className="skill-group-title">
                  <span>{capability.title}:</span> {capability.area}
                </h3>
                <p className="skill-description">{capability.description}</p>
              </div>
              {index === 0 && <span className="skill-arrow" aria-hidden="true">↗</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SkillsSection
