import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import PortfolioChat from "./PortfolioChat";
import { profile } from "../portfolio";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="portfolio-layout">
      <Sidebar />
      <div className="portfolio-content">
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <footer className="border-t border-[var(--border)] px-6 py-6 text-center text-sm text-muted">
          {profile.name} · {profile.location}
        </footer>
      </div>
      <PortfolioChat />
    </div>
  );
}