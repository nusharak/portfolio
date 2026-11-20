import Link from "next/link";
import ScrollMotion from "../components/ScrollMotion";
import Projects from "../components/Sections/Projects";

export default function ProjectsPage() {
  return (
    <ScrollMotion className="frame pt-8">
      <Link href="/" className="mb-6 inline-block text-accent underline">Back to portfolio</Link>
      <Projects standalone />
    </ScrollMotion>
  );
}
