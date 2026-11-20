import { profile } from "../../portfolio";
import WorkflowPreview from "./WorkflowPreview";

export default function Home() {
  return (
    <section id="home" aria-labelledby="home-title" className="hero">
      <div>
        <p className="eyebrow">{profile.location}</p>
        <h1 id="home-title">Software for complex <em>operations.</em></h1>
        <p className="hero-role">{profile.name} <span aria-hidden="true">/</span> {profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="actions">
          <a href="#projects" className="button button-primary">Explore my work</a>
          <a href="#contact" className="button">Get in touch</a>
        </div>
      </div>
      <WorkflowPreview />
    </section>
  );
}
