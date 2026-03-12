import { Project } from '../data/projects'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './ProjectCard.css'

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article key={project.id} className="project-card">
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__tagline">{project.tagline}</p>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-card__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </article>
    )
}