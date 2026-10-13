const projectHighlights = {
  medshare: 'Designed the recipient experience in Figma and built a web platform connecting medicine donors with people in need.',
  'electricity-usage-anomaly-detector': 'Flags unusual household power days from daily usage patterns.',
  consentsync: 'Checks privacy policies, cookies and site permissions in one place.',
}

function ProjectEntry({ project, featured, onNavigate }) {
  const className = featured
    ? 'project-entry project-entry--featured'
    : 'project-entry project-entry--compact'

  return (
    <article
      className={className}
      role="link"
      tabIndex={0}
      aria-label={`View ${project.title} project`}
      onClick={() => onNavigate('project', null, project.id)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onNavigate('project', null, project.id)
        }
      }}
    >
      <div className={`project-visual project-visual--${project.id}`} aria-hidden="true">
        <img src={project.image} alt="" loading={featured ? 'eager' : 'lazy'} />
        <span className="project-image-index">{project.number}</span>
      </div>
      <div className="project-details">
        <div className="project-heading">
          <div>
            <p className="project-category">{project.category}</p>
            <h3 className="project-title">{project.title}</h3>
            {project.subtitle ? (
              <p className="project-subtitle">{project.subtitle}</p>
            ) : null}
          </div>
          <div className="project-actions">
            <span className="project-explore">
              <span>Explore</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </span>
            {project.figmaUrl ? (
              <a
                className="project-explore project-figma-link"
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
              >
                View Figma Prototype ↗
              </a>
            ) : null}
          </div>
        </div>
        <p className="project-copy">{projectHighlights[project.id]}</p>
        <ul className="project-stack" aria-label="Technologies">
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ProjectEntry
