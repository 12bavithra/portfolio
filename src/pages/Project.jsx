import '../styles/pages.css'
import { projects } from '../data/projects.js'

function Project({ projectId, onNavigate }) {
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return null
  }

  return (
    <section className="page page--project">
      <div className="wrap">
        <button
          type="button"
          className="project-back"
          onClick={() => onNavigate('home', 'work')}
        >
          Back to projects
        </button>
        <div className="project-detail">
          <div className="project-detail-visual">
            {project.image ? (
              <img src={project.image} alt={`${project.title} screenshot`} />
            ) : (
              <span className="project-visual-placeholder">{project.title}</span>
            )}
          </div>
          <div className="project-detail-copy">
            <p className="kicker">{project.category}</p>
            <h1 className="display page-intro">{project.title}</h1>
            {project.subtitle ? (
              <p className="project-subtitle">{project.subtitle}</p>
            ) : null}
            <div className="project-detail-description">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="project-detail-stack">{project.stack.join(' · ')}</p>
            <div className="project-detail-links">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              ) : null}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
