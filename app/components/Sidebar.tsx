import Image from "next/image";
import Link from "next/link";
import { profile } from "../portfolio";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Work" },
  { href: "/#about", label: "Experience" },
  { href: "/#skills", label: "Skills" },
];

export default function Sidebar() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-sidebar">
        <div className="frame sidebar-inner">
          <div className="sidebar-profile">
            <Link href="/#home" className="brand">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/nushara.jpeg`} alt="" width={128} height={128} unoptimized className="sidebar-portrait" />
              <span>{profile.name}</span>
            </Link>
            <div className="sidebar-contacts" role="group" aria-label="Contact Nushara">
              <a href={`tel:${profile.whatsapp.number.replace(/\s/g, "")}`} aria-label="Call Nushara" title="Call">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.1 3.8 5.5 3c-1.4 0-2.5 1-2.5 2.4C3 13.8 10.2 21 18.6 21c1.4 0 2.4-1.1 2.4-2.5l-.8-2.6-4.4-1.5-1.6 1.6a12 12 0 0 1-6.2-6.2l1.6-1.6-1.5-4.4Z" />
                </svg>
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email Nushara" title="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5.5" width="18" height="13" rx="2" />
                  <path d="m4.5 7 7.5 6 7.5-6" />
                </svg>
              </a>
              <a href={profile.whatsapp.url} aria-label="Message Nushara on WhatsApp" title="WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3.5 20.5l1.4-4.2a8.5 8.5 0 1 1 15.6-4.6Z" />
                  <path d="M9 7.7c-.9 0-1.5.7-1.5 1.6 0 2.9 4.3 7 7.2 7 .9 0 1.6-.6 1.6-1.5l-2.5-1.3-.9 1c-1.4-.6-2.7-1.9-3.3-3.3l1-.9L9.4 7.7H9Z" />
                </svg>
              </a>
              <a href={profile.linkedin} aria-label="Connect with Nushara on LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 9v10m5-10v10m0-6a4 4 0 0 1 8 0v6" />
                  <circle cx="5" cy="5.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
          <nav aria-label="Portfolio">
            {links.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </div>
      </header>
    </>
  );
}
