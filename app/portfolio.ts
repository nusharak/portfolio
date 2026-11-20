export const profile = {
  name: "Nushara Kampanthodi",
  role: "Full Stack Developer & AI Engineer",
  location: "Dubai, United Arab Emirates",
  email: "nusharak2014@gmail.com",
  linkedin: "https://linkedin.com/in/nushara-riyas",
  whatsapp: { number: "+971 55 398 1397", url: "https://wa.me/971553981397" },
  summary:
    "I build multi-tenant SaaS applications, REST APIs, and conversational AI agents for employee self-service. My work spans configurable HR software, fleet and queue operations, and approval workflows that connect WhatsApp and email.",
};

export const experience = [
  {
    company: "Nathan Digital",
    role: "Full Stack Developer",
    location: "Dubai, UAE",
    dates: "Oct 2025 – Nov 2026",
    projectIds: ["hrms"],
    description:
      "Built a multi-tenant HR management system with TypeScript, Node.js, and MongoDB. Designed reusable forms and REST APIs for configurable employee fields, access permissions, and approvals. Built a conversational leave-balance agent, integrated WhatsApp and email approvals, and worked with HR stakeholders to deliver the MVP.",
  },
  {
    company: "Gulfway Media and Marketing",
    role: "Full Stack Developer",
    location: "Dubai, UAE",
    dates: "Feb 2025 – Oct 2025",
    projectIds: ["fleet-dashboard", "queue-management"],
    description:
      "Developed rider and queue management applications with Next.js, TypeScript, Node.js, MySQL, and REST APIs. Built rider document and contract tracking, asset allocation, and salary calculations, along with appointment booking, token routing, and voice announcements.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    location: "",
    dates: "Jul 2024 – Feb 2025",
    description:
      "Worked on freelance website development and ERP-related web applications to support business workflows.",
  },
  {
    company: "Skyniche Technology",
    role: "Team Lead",
    location: "Ottapalam, India",
    dates: "Aug 2021 – Jul 2024",
    projectIds: ["signwise", "restaurant-management", "retail-pos", "wholesale-pos"],
    description:
      "Led web development with React.js, Node.js, Fastify, PHP CodeIgniter, MySQL, and MongoDB. Turned client requirements into development tasks, designed REST APIs, coordinated implementation, and mentored junior developers in component design, API integration, and debugging.",
  },
];

export const education = [
  {
    degree: "Master of Technology (M.Tech)",
    school: "APJ Abdul Kalam Technological University",
    dates: "2018–2020",
    sgpa: "8.22",
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "University of Calicut",
    dates: "2014–2018",
    sgpa: "8.01",
  },
];

export const skills = [
  { name: "Frontend", tools: "React.js, Next.js, Vue.js, Angular, TypeScript, JavaScript (ES6+), HTML, CSS, Redux, Context API, Bootstrap, Material UI" },
  { name: "Backend", tools: "Node.js, Express.js, Fastify, PHP, CodeIgniter, REST APIs, JWT authentication" },
  { name: "Databases", tools: "MySQL, MongoDB, Sequelize" },
  { name: "AI development", tools: "Task-specific AI agents, conversational interfaces, workflow automation, GitHub Copilot, Claude" },
  { name: "Architecture", tools: "Multi-tenant SaaS, MVC, reusable forms, REST API design" },
  { name: "Tools and platforms", tools: "Git, GitHub Actions, Postman, Jira, AWS EC2, cPanel, Google Maps API, WordPress" },
];

const operationsStack = ["Next.js", "TypeScript", "Node.js", "MySQL", "REST APIs", "Tailwind CSS"];
const posStack = ["React.js", "Material UI", "Node.js", "MySQL", "Tailwind CSS"];

export const projects = [
  {
    id: "hrms",
    name: "AI-enabled HR management system",
    description: "A multi-tenant HR platform with configurable employee records, approvals, and conversational self-service.",
    details: "Designed reusable forms and APIs for employee fields, permissions, and approval workflows. Built a conversational AI agent for employee leave-balance queries and integrated WhatsApp and email into approvals.",
    technologies: ["TypeScript", "Node.js", "MongoDB", "REST APIs", "AI agents", "Tailwind CSS"],
  },
  {
    id: "fleet-dashboard",
    name: "Rider management system",
    description: "A logistics application for rider onboarding, fleet operations, and salary calculations.",
    details: "Tracked rider documents, contracts, deposits, licensing, and project assignments. Implemented vehicle and equipment allocation, salary calculations, and installment deductions.",
    technologies: operationsStack,
  },
  {
    id: "queue-management",
    name: "Queue management system",
    description: "A configurable service queue platform with token routing, monitoring, and voice announcements.",
    details: "Built booking controls for office hours, slot capacity, and scheduling windows. Implemented queue monitoring, token prioritization, counter routing, and text-to-speech announcements.",
    technologies: operationsStack,
  },
  {
    id: "signwise",
    name: "Signwise Solutions",
    description: "An e-commerce application that manages signboard requests from customer submission through installation.",
    details: "Built workflows for material management, task assignment, scheduling, and cost estimation. Integrated Google Maps to support installation planning and route optimization.",
    technologies: ["React.js", "Redux", "Node.js", "Fastify", "MySQL", "REST APIs", "Google Maps API", "Tailwind CSS"],
  },
  {
    id: "restaurant-management",
    name: "Restaurant management system",
    description: "A point-of-sale system for restaurant, kitchen, and inventory operations.",
    details: "Added tools for managing customers, staff, expenses, purchases, and reports.",
    technologies: posStack,
  },
  {
    id: "retail-pos",
    name: "Retail POS",
    description: "A point-of-sale application for retail inventory and store operations.",
    details: "Developed tools for customer and staff management, expense tracking, purchasing, and reporting.",
    technologies: posStack,
  },
  {
    id: "wholesale-pos",
    name: "Wholesale POS",
    description: "Point-of-sale software for wholesale operations.",
    details: "Designed features for inventory management and customer enquiries.",
    technologies: ["React.js", "Material UI", "PHP", "CodeIgniter", "MySQL"],
  },
];
