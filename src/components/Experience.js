const experiences = [
  {
    id: 1,
    company: "Asseco Poland",
    role: "Senior Full Stack Developer",
    location: "Rzeszow, Poland",
    period: "Jan 2024 - Present",
    summary:
      "Leading delivery across enterprise web platforms with a strong focus on scalable architecture, performance tuning, and faster release cycles.",
    stack: ["React", "Vue.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Docker", "GitHub Actions"],
    achievements: [
      "Architected scalable frontend and backend modules using React, Vue.js, Node.js, and TypeScript, improving application responsiveness by 35% across enterprise platforms.",
      "Designed modular UI component systems that accelerated frontend feature delivery by 40% across multiple product teams.",
      "Implemented optimized RESTful APIs supporting high-traffic enterprise systems handling 150K+ monthly users.",
      "Developed backend microservices using Node.js and NestJS, improving system scalability and reducing latency by 28%.",
      "Optimized PostgreSQL queries and indexing strategies, reducing complex query execution time by 45% for data-heavy workflows.",
      "Automated CI/CD pipelines with GitHub Actions and Docker, reducing deployment time from 45 minutes to 10 minutes.",
      "Coordinated closely with product owners, designers, and QA teams to break down large initiatives into deliverable milestones with predictable releases.",
      "Improved maintainability by standardizing coding patterns, API contracts, and shared UI building blocks across multiple internal products.",
    ],
  },
  {
    id: 2,
    company: "Netguru",
    role: "Full Stack Engineer",
    location: "Poznan, Poland",
    period: "Oct 2020 - Dec 2023",
    summary:
      "Delivered client-facing products for international teams, balancing polished frontend experiences with reliable backend integrations.",
    stack: ["React", "Vue.js", "Node.js", "Express.js", "GraphQL", "TypeScript", "PostgreSQL", "AWS"],
    achievements: [
      "Developed full-stack web applications using React, Vue.js, Node.js, and GraphQL, delivering scalable solutions for international clients.",
      "Constructed modular frontend interfaces using React component architecture, improving UI maintainability and development efficiency.",
      "Implemented backend APIs using Express.js and Node.js, enabling seamless communication between microservices.",
      "Translated product requirements into reusable features and dashboards that improved user workflows and reduced repetitive manual steps.",
      "Collaborated with distributed teams in agile delivery cycles, contributing to estimation, technical planning, and cross-functional reviews.",
      "Strengthened application quality through structured debugging, API validation, and iterative performance improvements across frontend and backend layers.",
      "Supported cloud-based deployments and monitored production stability to keep releases dependable as client needs evolved.",
    ],
  },
  {
    id: 3,
    company: "Polcode",
    role: "Intern & Software Engineer",
    location: "Lodz, Poland",
    period: "Oct 2018 - Sep 2020",
    summary:
      "Built a strong engineering foundation while contributing to production features, responsive interfaces, and maintainable service integrations.",
    stack: ["JavaScript", "React", "Vue.js", "Node.js", "HTML5", "CSS3", "REST APIs", "SQL"],
    achievements: [
      "Developed scalable front-end and back-end applications using JavaScript, React, Vue.js, and Node.js for international web platforms.",
      "Constructed dynamic user interfaces with Vue.js and modern JavaScript frameworks, improving user engagement metrics by 25%.",
      "Supported feature delivery across multiple client projects while strengthening testing, debugging, and collaboration practices.",
      "Worked on responsive layouts and interactive components that improved usability across desktop and mobile experiences.",
      "Integrated backend services and third-party APIs to support real-world product requirements and internal business workflows.",
      "Grew from internship responsibilities into broader software engineering ownership by contributing production-ready code and participating in reviews.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      name="experience"
      className="w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 py-16 text-white"
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4">
        <div className="mb-12 max-w-3xl">
          <p className="inline border-b-4 border-cyan-500 pb-2 text-4xl font-bold">Experience</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A timeline of the roles, systems, and teams that shaped my work as a full stack developer.
          </p>
        </div>

        <div className="relative ml-2 border-l border-cyan-500/40 pl-8 md:ml-6 md:pl-12">
          {experiences.map(({ id, company, role, location, period, summary, stack, achievements }) => (
            <article key={id} className="relative mb-12 last:mb-0">
              <div className="absolute -left-[2.65rem] top-8 h-4 w-4 rounded-full border-4 border-black bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.15)] md:-left-[3.15rem]" />

              <div className="overflow-hidden rounded-2xl border border-gray-700/80 bg-gray-900/70 shadow-2xl shadow-black/30 backdrop-blur-sm">
                <div className="border-b border-gray-700/80 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-transparent px-6 py-6">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{period}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">{role}</h3>
                      <p className="mt-1 text-lg text-gray-300">{company}</p>
                    </div>
                    <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
                      {location}
                    </div>
                  </div>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300">{summary}</p>
                </div>

                <div className="grid gap-8 px-6 py-6 lg:grid-cols-[1.7fr_0.9fr]">
                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3 text-gray-200">
                      {achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3 leading-7">
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                      Core Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
