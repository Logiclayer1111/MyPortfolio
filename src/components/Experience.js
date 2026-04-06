const experiences = [
  {
    id: 1,
    company: "Asseco Poland",
    role: "Senior Full Stack Developer",
    location: "Rzeszow, Poland",
    period: "Jan 2024 - Present",
    summary:
      "Architecting and scaling enterprise-grade web platforms with modern frontend systems, optimized backend services, and resilient delivery pipelines.",
    stack: ["React", "Vue.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "Jest", "Cypress", "Redux", "Pinia", "JWT", "OAuth2"],
    achievements: [
      "Architected scalable frontend and backend modules using React, Vue.js, Node.js, and TypeScript, improving application responsiveness by 35% across enterprise platforms.",
      "Designed modular UI component systems that accelerated frontend feature delivery by 40% across multiple product teams.",
      "Implemented optimized RESTful APIs supporting high-traffic enterprise systems handling 150K+ monthly users.",
      "Developed backend microservices using Node.js and NestJS, improving system scalability and reducing latency by 28%.",
      "Optimized database queries and indexing strategies within PostgreSQL, reducing complex query execution time by 45%.",
      "Integrated third-party APIs and internal services to streamline data synchronization across 5 distributed applications.",
      "Engineered secure authentication systems using JWT and OAuth2, strengthening access control for multi-tenant environments.",
      "Automated CI/CD pipelines with GitHub Actions and Docker, reducing deployment time from 45 minutes to 10 minutes.",
      "Refactored legacy frontend components into Vue.js and React modern architectures, improving maintainability and performance.",
      "Developed server-side rendering implementations that enhanced SEO performance and improved page load speed by 30%.",
      "Created reusable backend services enabling consistent data access across 12 internal applications.",
      "Implemented caching strategies using Redis, decreasing API response times by 25%.",
      "Built monitoring dashboards for application performance metrics and infrastructure visibility.",
      "Enhanced code quality standards by introducing automated testing frameworks with Jest and Cypress, increasing coverage to 85%.",
      "Guided architectural improvements in frontend state management using Redux and Pinia, improving maintainability across large codebases.",
      "Analyzed system bottlenecks and applied backend performance optimizations that reduced server resource consumption by 22%.",
    ],
  },
  {
    id: 2,
    company: "Netguru",
    role: "Full Stack Engineer",
    location: "Poznan, Poland",
    period: "Oct 2020 - Dec 2023",
    summary:
      "Built scalable client products for international teams by pairing polished interface work with backend services, cloud deployment, and automated quality practices.",
    stack: ["React", "Vue.js", "Node.js", "Express.js", "GraphQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "Jest", "Cypress"],
    achievements: [
      "Developed full-stack web applications using React, Vue.js, Node.js, and GraphQL, delivering scalable solutions for international clients.",
      "Constructed modular frontend interfaces using React component architecture, improving UI maintainability and development efficiency.",
      "Implemented backend APIs using Express.js and Node.js, enabling seamless communication between microservices.",
      "Optimized frontend rendering performance through code splitting and lazy loading, improving page load speeds by 38%.",
      "Engineered scalable database structures using PostgreSQL and MongoDB, supporting high-volume transactional systems.",
      "Integrated cloud services within AWS infrastructure, enabling reliable deployments and automated scaling.",
      "Developed reusable frontend UI libraries used across 8 internal projects.",
      "Constructed data processing pipelines that improved reporting performance for large datasets.",
      "Deployed containerized applications using Docker, improving development and staging environment consistency.",
      "Implemented automated testing strategies using Jest and Cypress, improving system reliability.",
      "Delivered secure API integrations with payment providers and authentication services supporting global SaaS platforms.",
      "Refined backend service architecture to improve system throughput and reduce API error rates by 18%.",
    ],
  },
  {
    id: 3,
    company: "Polcode",
    role: "Intern & Software Engineer",
    location: "Lodz, Poland",
    period: "Oct 2018 - Sep 2020",
    summary:
      "Built a strong engineering foundation through hands-on delivery across frontend, backend, database, and team workflow improvements for production client projects.",
    stack: ["JavaScript", "React", "Vue.js", "Node.js", "MySQL", "PostgreSQL", "REST APIs", "Git"],
    achievements: [
      "Developed scalable front-end and back-end applications using JavaScript, React, Vue.js, and Node.js for international web platforms.",
      "Constructed dynamic user interfaces with Vue.js and modern JavaScript frameworks, improving user engagement metrics by 25%.",
      "Engineered backend RESTful services that supported high-volume data exchange between enterprise systems.",
      "Designed database schemas and optimized queries across MySQL and PostgreSQL environments.",
      "Delivered API integrations connecting applications with external SaaS platforms and payment systems.",
      "Improved frontend performance through asset optimization and advanced caching strategies.",
      "Developed reusable frontend component libraries used across multiple client projects.",
      "Implemented secure user authentication systems and access control mechanisms.",
      "Collaborated with cross-disciplinary engineering teams to deliver 20+ full-stack applications within tight project timelines.",
      "Optimized backend logic and server-side processing, improving API throughput by 30%.",
      "Established code review practices and Git workflows that improved development productivity and code maintainability.",
    ],
  },
];

const education = [
  {
    id: 1,
    degree: "Bachelor's Degree in Computer Science",
    school: "Warsaw University of Technology",
    location: "Warsaw, Poland",
    period: "Oct 2015 - Jul 2018",
    summary:
      "Built a strong computer science foundation across software engineering, algorithms, and systems design while preparing for full stack product work.",
  },
];

const Experience = () => {
  return (
    <section
      name="experience"
      className="w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 py-16 text-white"
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="inline border-b-4 border-cyan-500 pb-2 text-4xl font-bold">Experience</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
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

        <div className="mt-16 flex max-w-4xl flex-col items-center self-center text-center">
          <p className="inline border-b-4 border-cyan-500 pb-2 text-3xl font-bold">Education</p>
          <div className="mt-8 grid gap-6">
            {education.map(({ id, degree, school, location, period, summary }) => (
              <article
                key={id}
                className="overflow-hidden rounded-2xl border border-gray-700/80 bg-gray-900/70 shadow-2xl shadow-black/30 backdrop-blur-sm"
              >
                <div className="border-b border-gray-700/80 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-transparent px-6 py-6">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{period}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">{degree}</h3>
                      <p className="mt-1 text-lg text-gray-300">{school}</p>
                    </div>
                    <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
                      {location}
                    </div>
                  </div>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300">{summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
