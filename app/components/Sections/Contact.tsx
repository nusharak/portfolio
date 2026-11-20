import { profile } from "../../portfolio";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section" data-motion="contact">
      <div className="contact-panel">
        <div>
          <h2 id="contact-title" className="section-title">Let’s talk<span>.</span></h2>
          <p className="mt-3 text-muted">Reach me by email, WhatsApp, or LinkedIn.</p>
        </div>
        <div className="actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="button" href={profile.whatsapp.url} aria-label="Message Nushara on WhatsApp" title="WhatsApp">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3.5 20.5l1.4-4.2a8.5 8.5 0 1 1 15.6-4.6Z" />
              <path d="M9 7.7c-.9 0-1.5.7-1.5 1.6 0 2.9 4.3 7 7.2 7 .9 0 1.6-.6 1.6-1.5l-2.5-1.3-.9 1c-1.4-.6-2.7-1.9-3.3-3.3l1-.9L9.4 7.7H9Z" />
            </svg>
          </a>
          <a className="button" href={profile.linkedin}>LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
