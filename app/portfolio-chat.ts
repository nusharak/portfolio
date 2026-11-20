import { education, experience, profile, projects, skills } from "./portfolio";

type ReplyLink = { href: string; label: string };
export type Reply = { text: string; link?: ReplyLink; links?: ReplyLink[] };

const projectQuestions = [
  { id: "hrms", match: /\b(hrms|hr|leave|whatsapp|approvals?|ai|agents?|saas|self.service)\b/ },
  { id: "fleet-dashboard", match: /\b(fleet|riders?|rms|vehicles?|salary)\b/ },
  { id: "queue-management", match: /\b(queues?|qms|tokens?|counters?|booking)\b/ },
  { id: "signwise", match: /\b(signwise|signboards?|installation)\b/ },
  { id: "restaurant-management", match: /\b(restaurant|kitchen)\b/ },
  { id: "retail-pos", match: /\bretail\b/ },
  { id: "wholesale-pos", match: /\bwholesale\b/ },
];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function totalExperienceMonths() {
  const workedMonths = new Set<number>();

  for (const { dates } of experience) {
    const [start, end] = dates.split(" – ").map((date) => {
      const [month, year] = date.split(" ");
      return Number(year) * 12 + monthNames.indexOf(month);
    });

    for (let month = start; month <= end; month += 1) {
      workedMonths.add(month);
    }
  }

  return workedMonths.size;
}

export function answerPortfolioQuestion(question: string, previousReply?: Reply): Reply {
  const query = question.toLowerCase().trim()
    .replace(/\b(contactb|conact|contat|contcat|conatct)\b/g, "contact")
    .replace(/\b(whats\s*app|whatapp|watsapp)\b/g, "whatsapp")
    .replace(/\b(e-mail|e mail|mail id)\b/g, "email")
    .replace(/\blinked\s+in\b/g, "linkedin");

  const asksForContact = /\b(contact|email|linkedin|reach|connect|hire|whatsapp|phone|mobile|call)\b/.test(query);
  const asksAboutIntegration = /\b(approvals?|workflows?|integration|integrated|hrms)\b/.test(query);
  if (asksForContact && !asksAboutIntegration) {
    return {
      text: "Here are Nushara’s contact details.",
      links: [
        { href: `mailto:${profile.email}`, label: `Email · ${profile.email}` },
        { href: profile.whatsapp.url, label: `WhatsApp · ${profile.whatsapp.number}` },
        { href: profile.linkedin, label: `LinkedIn · ${profile.name}` },
      ],
    };
  }

  if (/\b(education|degree|study|studied|university|m\.tech|b\.tech)\b/.test(query)) {
    return {
      text: education.map(({ degree, school, dates }) => `${degree} at ${school} (${dates}).`).join(" "),
      link: { href: "/#about", label: "See education" },
    };
  }

  const employer = experience.find(({ company }) =>
    query.includes(company.split(" ")[0].toLowerCase()) ||
    (company === "Freelance" && /\b(erp|freelancing)\b/.test(query)),
  );
  if (employer) {
    return {
      text: `${employer.role} · ${employer.company} (${employer.dates}). ${employer.description}`,
      link: { href: "/#about", label: "See experience" },
    };
  }

  const asksForTotalExperience =
    /\b(how (many years|much experience|long has she worked)|total (work |professional )?experience|years of (work |professional )?experience|experience in years|overall experience)\b/.test(query);

  if (asksForTotalExperience) {
    const months = totalExperienceMonths();
    const years = Math.floor(months / 12);
    const remainder = months % 12;
    const duration = [
      years ? `${years} year${years === 1 ? "" : "s"}` : "",
      remainder ? `${remainder} month${remainder === 1 ? "" : "s"}` : "",
    ].filter(Boolean).join(" and ");

    return {
      text: `Nushara has about ${duration} of professional experience based on the roles listed in her CV. This counts each month once and excludes gaps between roles.`,
      link: { href: "/#about", label: "See experience" },
    };
  }

  const projectMatch = projectQuestions.find(({ match }) => match.test(query));
  const followsProject = /\b(it|its|that|this|the project)\b/.test(query) &&
    /\b(stack|technologies|tools|languages?|details|more)\b/.test(query);
  const contextualProject = followsProject
    ? projects.find(({ id }) => previousReply?.link?.href === "/projects/" + id)
    : undefined;

  if (/\b(skills?|stack|technologies|tools|frameworks?|languages?)\b/.test(query) &&
      !projectMatch && !contextualProject) {
    return {
      text: `Nushara works across the stack. ${skills.slice(0, 4).map(({ name, tools }) => `${name}: ${tools}.`).join(" ")}`,
      link: { href: "/#skills", label: "See technical skills" },
    };
  }

  const project = projects.find(({ id }) => id === projectMatch?.id) ?? contextualProject;
  if (project) {
    const asksAboutTools = /\b(stack|technologies|tools|languages?)\b/.test(query);
    const technologySummary = project.technologies.length
      ? ` The project uses ${project.technologies.join(", ")}.`
      : " The portfolio does not list a technology stack for this project.";
    return {
      text: `${project.name}. ${project.details}${asksAboutTools ? technologySummary : ""}`,
      link: { href: `/projects/${project.id}`, label: "Read the project" },
    };
  }

  if (/\b(projects|portfolio|work|built|pos)\b/.test(query)) {
    return {
      text: `Nushara’s portfolio includes ${projects.map(({ name }) => name).join(", ")}. Ask about a specific project to learn what she built.`,
      link: { href: "/#projects", label: "Browse projects" },
    };
  }

  if (/\b(experience|jobs?|career|roles?|companies)\b/.test(query)) {
    return {
      text: experience.map(({ role, company, dates }) => `${role} · ${company} (${dates}).`).join(" "),
      link: { href: "/#about", label: "See experience" },
    };
  }

  if (/\b(location|based|live|dubai|uae)\b/.test(query)) {
    return { text: `Nushara is based in ${profile.location}.` };
  }

  if (/\b(introduce|background|about|who|name|tell me about yourself)\b/.test(query)) {
    return { text: `${profile.name} is a ${profile.role} based in ${profile.location}. ${profile.summary.replace("I build", "She builds").replace("My work", "Her work")}` };
  }

  return { text: "I can help with Nushara’s portfolio. Try asking about her AI work, project stack, previous roles, education, or contact details." };
}
