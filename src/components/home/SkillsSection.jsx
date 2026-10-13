const tools = [
  { name: 'Python', accent: 'py' },
  { name: 'Java', accent: 'java' },
  { name: 'SQL', accent: 'sql' },
  { name: 'Power BI', accent: 'power' },
  { name: 'Figma', accent: 'figma' },
  { name: 'Canva', accent: 'canva' },
]

function ToolIcon({ toolName }) {
  if (toolName === 'Python') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <path d="M16 10h7a5 5 0 0 1 5 5v4h-9v-3h-5v9h9v-3h5v4a5 5 0 0 1-5 5h-7a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M14 14.5h12M14 25.5h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )
  }

  if (toolName === 'Java') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <path d="M12 15c0-3 3-6 8-6h8c5 0 8 3 8 7v3H12v-4Zm-2 7h22v7c0 5-4 9-10 9H20c-6 0-10-4-10-9v-7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M14 23h12M9 18h2M29 18h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )
  }

  if (toolName === 'SQL') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <ellipse cx="20" cy="12" rx="11" ry="4" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 12v11c0 3 5 5 11 5s11-2 11-5V12M9 18c0 3 5 5 11 5s11-2 11-5M9 23c0 3 5 5 11 5s11-2 11-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  if (toolName === 'Power BI') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <path d="M10 28V16h5v12h-5Zm8-10V8h5v20h-5Zm8 4v-7h5v15h-5Z" fill="currentColor"/>
        <path d="M8 31h24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )
  }

  if (toolName === 'Figma') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <path d="M20 9a6 6 0 0 1 6 6H20V9Zm0 0a6 6 0 0 1-6 6h6V9Zm0 0v12h6a6 6 0 1 0 0-12h-6Zm0 12v12a6 6 0 1 0 0-12Zm-6 0a6 6 0 0 1 6-6v12a6 6 0 1 1-6-6Zm12 0a6 6 0 0 1-6 6v-12a6 6 0 1 1 6 6Z" fill="currentColor"/>
      </svg>
    )
  }

  if (toolName === 'Canva') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M22 14c-4-2-10 0-11 6-1 6 5 10 11 8 4-1 7-6 5-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  return null
}

function SkillsSection() {
  return (
    <section className="home-section tools-section" id="skills">
      <div className="wrap">
        <h2 className="kicker section-label">Tools I work with</h2>
        <ul className="tools-row" aria-label="Tool list">
          {tools.map((tool) => (
            <li className="tool-card" key={tool.name}>
              <span className={`tool-icon-shell tool-icon-shell--${tool.accent}`} aria-hidden="true">
                <ToolIcon toolName={tool.name} />
              </span>
              <span className="tool-name">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SkillsSection
