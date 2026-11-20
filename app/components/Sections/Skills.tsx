import { skills } from "../../portfolio";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <h2 id="skills-title" className="section-title">From interface to workflow<span>.</span></h2>
      <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name} data-motion="skill">
            <dt className="font-semibold text-accent">{skill.name}</dt>
            <dd className="mt-1 leading-relaxed text-muted">{skill.tools}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
