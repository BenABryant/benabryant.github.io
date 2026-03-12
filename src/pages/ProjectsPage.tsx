import { PROJECTS } from '../data/projects'
import PageLayout from '../components/PageLayout'
import ProjectCard from '../components/ProjectCard'
import './ProjectsPage.css'
 
export default function ProjectsPage() {
  return (
    <PageLayout>
      <section className="projects-page__main">
        <div className="projects-page__inner">
          <h1 className="projects-page__title">Projects</h1>
          <p className="projects-page__lead">
            A list of things I've built — side projects, coursework, and experiments.
          </p>
 
          <div className="all-projects__grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}