import Link from "next/link";
import { projects } from "../../portfolio";

export default function Projects({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  const ProjectHeading = standalone ? "h2" : "h3";

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <Heading id="projects-title" className="section-title">Selected work<span>.</span></Heading>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} data-motion="project">
            <article className="project-card h-full">
              <ProjectHeading className="text-xl font-semibold">
                <Link href={`/projects/${project.id}`} className="text-accent hover:underline">{project.name}</Link>
              </ProjectHeading>
              <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
              {project.technologies.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((technology) => <li key={technology} className="tech-tag">{technology}</li>)}
                </ul>
              )}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
