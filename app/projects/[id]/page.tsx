import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../portfolio";

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
      <Link href="/projects" className="text-accent underline">Back to projects</Link>
      <h1 className="mt-6 section-title">{project.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
      <p className="mt-4 leading-relaxed text-muted">{project.details}</p>
      {project.technologies.length > 0 && (
        <>
          <h2 className="mt-8 text-xl font-semibold">Technologies</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="tech-tag">{technology}</li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}
