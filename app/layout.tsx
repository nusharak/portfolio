import type { Metadata } from "next";
import { profile } from "./portfolio";
import Layout from './components/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.summary,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased"><Layout>{children}</Layout></body>
    </html>
  );
}
