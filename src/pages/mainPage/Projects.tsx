import { Link } from 'react-router-dom'
import { PROJECTS } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import './Projects.css'

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured)

  return (
    <section className="projects section" id="projects">
      <div className="section__inner">
        <h2>Projects</h2>
        <div className="projects__grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Link to="/projects" className="projects__view-all">
          View all projects <FaArrowRight />
        </Link>
      </div>
    </section>
  )
}
