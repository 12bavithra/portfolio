import { projects } from '../../data/projects.js'
import ProjectEntry from '../work/ProjectEntry.jsx'

function FeaturedProjects({ onNavigate }) {
  const featured = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section className="home-section" id="work">
      <div className="wrap">
        <h2 className="kicker section-label">Featured Projects</h2>
        <div className="work-layout">
          {featured ? (
            <ProjectEntry
              project={featured}
              featured={true}
              onNavigate={onNavigate}
            />
          ) : null}
          <div className="work-secondary">
            {otherProjects.map((project) => (
              <ProjectEntry
                key={project.id}
                project={project}
                featured={false}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
