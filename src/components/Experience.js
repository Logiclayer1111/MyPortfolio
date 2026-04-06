const experiences = [
  {
    id: 1,
    company: "Asseco Poland",
    role: "Senior Full Stack Developer",
    location: "Rzeszow, Poland",
    period: "01/2024 - Present",
    achievements: [
      "Architected scalable frontend and backend modules using React, Vue.js, Node.js, and TypeScript, improving application responsiveness by 35% across enterprise platforms.",
      "Designed modular UI component systems that accelerated frontend feature delivery by 40% across multiple product teams.",
      "Implemented optimized RESTful APIs supporting high-traffic enterprise systems handling 150K+ monthly users.",
      "Developed backend microservices using Node.js and NestJS, improving system scalability and reducing latency by 28%.",
      "Optimized PostgreSQL queries and indexing strategies, reducing complex query execution time by 45%.",
      "Automated CI/CD pipelines with GitHub Actions and Docker, reducing deployment time from 45 minutes to 10 minutes.",
    ],
  },
  {
    id: 2,
    company: "Netguru",
    role: "Full Stack Engineer",
    location: "Poznan, Poland",
    period: "10/2020 - 12/2023",
    achievements: [
      "Developed full-stack web applications using React, Vue.js, Node.js, and GraphQL, delivering scalable solutions for international clients.",
      "Constructed modular frontend interfaces using React component architecture, improving UI maintainability and development efficiency.",
      "Implemented backend APIs using Express.js and Node.js, enabling seamless communication between microservices.",
    ],
  },
  {
    id: 3,
    company: "Polcode",
    role: "Intern & Software Engineer",
    location: "Lodz, Poland",
    period: "10/2018 - 09/2020",
    achievements: [
      "Developed scalable front-end and back-end applications using JavaScript, React, Vue.js, and Node.js for international web platforms.",
      "Constructed dynamic user interfaces with Vue.js and modern JavaScript frameworks, improving user engagement metrics by 25%.",
      "Supported feature delivery across multiple client projects while strengthening testing, debugging, and collaboration practices.",
    ],
  },
];

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
          <p className="py-6">Highlights from my professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map(({ id, company, role, location, period, achievements }) => (
            <div key={id} className="rounded-xl bg-gray-900/60 border border-gray-700 p-6 shadow-md shadow-gray-900">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">{company}</h3>
                <p className="text-lg text-cyan-400">{role}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {location} | {period}
                </p>
              </div>

              <ul className="space-y-2 list-disc list-inside text-gray-300">
                {achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
