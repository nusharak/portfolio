import Link from "next/link";
import { education, experience, projects } from "../../portfolio";

export default function About() {
  return (
    <section id="about" aria-labelledby="experience-title" className="section grid gap-10 md:grid-cols-[2fr_1fr]">
      <div>
        <h2 id="experience-title" className="section-title">Experience</h2>
        <ol className="experience-timeline mt-6">
          {experience.map((job) => {
            const relatedProjects = projects.filter(({ id }) => job.projectIds?.includes(id));

            return (
              <li key={job.company} className="experience-entry" data-motion="experience">
                <article className="experience-card">
                  <header className="experience-card-header">
                    <div>
                      <p className="experience-company">{job.company}</p>
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                    </div>
                    <p className="experience-dates">{job.dates}</p>
                  </header>
                  {job.location && <p className="mt-2 text-sm text-muted">{job.location}</p>}
                  <p className="experience-description">{job.description}</p>
                  {relatedProjects.length > 0 && (
                    <div className="experience-projects">
                      <h4 className="font-semibold">Related projects</h4>
                      <ul className="mt-2 space-y-3">
                        {relatedProjects.map((project) => (
                          <li key={project.id}>
                            <Link href={`/projects/${project.id}`} className="experience-project-link">
                              {project.name}
                            </Link>
                            <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        <h2 className="section-title">Education</h2>
        <ul className="mt-6 space-y-5">
          {education.map((item) => (
            <li key={item.degree} data-motion="education">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="text-muted">{item.school}</p>
              <p className="mt-1 text-sm text-muted">{item.dates} · SGPA {item.sgpa}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
