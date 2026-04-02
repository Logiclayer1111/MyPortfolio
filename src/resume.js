import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl text-white max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="text-center border-b border-gray-700 pb-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          Antoni Nowicki
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Senior Full Stack Developer</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-400 text-lg">
          <span>Mail: atn2122804@gmail.com</span>
          <span>GitHub: <a href="https://github.com/logiclayer1111" className="hover:text-teal-400 underline">github.com/logiclayer1111</a></span>
          <span>Address: Warsaw, Mazowieckie, Poland</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold text-teal-400 mb-6 border-l-4 border-teal-400 pl-4">SUMMARY</h3>
        <p className="text-lg leading-relaxed text-gray-300">
          Full Stack Developer with 8 years of experience designing, building, and scaling modern web applications using advanced frontend and backend technologies. Specialized in JavaScript ecosystems, scalable backend architectures, API design, and high-performance UI development across complex enterprise systems. Demonstrates strong expertise in React, Vue.js, Node.js, TypeScript, RESTful APIs, cloud deployment, and database optimization, delivering secure and maintainable applications used by thousands of users.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold text-teal-400 mb-6 border-l-4 border-teal-400 pl-4">SKILLS</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Frontend Development</h4>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Javascript, Typescript, React, Vue, Next, Nuxt, HTML5, CSS3</li>
              <li>TailwindCSS, SASS, Redux, Pinia, Vuex</li>
              <li>Responsive UI architecture, Component-Based Design, Performance Optimization</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Backend Development</h4>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Node.js, Express.js, Next.js</li>
              <li>RESTful API Development, GraphQL, Microservices Architecture</li>
              <li>API Gateway Design, Event-Driven Systems, Data Processing Pipelines</li>
              <li>Backend Performance Optimization</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">DataBase Technologies</h4>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>PostgreSQL, MongoDB, MySQL, Redis</li>
              <li>Database Query Optimization, Data Modeling</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Cloud & DevOps</h4>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>AWS, Docker, Kubernetes, CI/CD Pipelines</li>
              <li>GitHub Actions, GitLab CI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold text-teal-400 mb-6 border-l-4 border-teal-400 pl-4">EXPERIENCE</h3>
        <div className="space-y-8">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-white mb-2">Asseco Poland - Senior Full Stack Developer</h4>
            <p className="text-gray-400 mb-4">Rzeszów, Poland | 01/2024 - present</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Architected scalable frontend and backend modules using React, Vue.js, Node.js, and TypeScript, improving application responsiveness by 35% across enterprise platforms.</li>
              <li>Designed modular UI component systems that accelerated frontend feature delivery by 40% across multiple product teams.</li>
              <li>Implemented optimized RESTful APIs supporting high-traffic enterprise systems handling 150K+ monthly users.</li>
              <li>Developed backend microservices using Node.js and NestJS, improving system scalability and reducing latency by 28%.</li>
              <li>Optimized database queries and indexing strategies within PostgreSQL, reducing complex query execution time by 45%.</li>
              <li>Automated CI/CD pipelines using GitHub Actions and Docker, reducing deployment time from 45 minutes to 10 minutes.</li>
              {/* Truncated for brevity; full list in final */}
            </ul>
          </div>
          {/* More experience sections... */}
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-white mb-2">Netguru - Full Stack Engineer</h4>
            <p className="text-gray-400 mb-4">Poznan, Poland | 10/2020 - 12/2023</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Developed full-stack web applications using React, Vue.js, Node.js, and GraphQL, delivering scalable solutions for international clients.</li>
              <li>Constructed modular frontend interfaces using React component architecture, improving UI maintainability and development efficiency.</li>
              <li>Implemented backend APIs using Express.js and Node.js, enabling seamless communication between microservices.</li>
              {/* More... */}
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-white mb-2">Polcode - Intern & Software Engineer</h4>
            <p className="text-gray-400 mb-4">Łódź, Poland | 10/2018 - 09/2020</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Developed scalable front-end and back-end applications using JavaScript, React, Vue.js, and Node.js for international web platforms.</li>
              <li>Constructed dynamic user interfaces with Vue.js and modern JavaScript frameworks, improving user engagement metrics by 25%.</li>
              {/* More... */}
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-3xl font-bold text-teal-400 mb-6 border-l-4 border-teal-400 pl-4">EDUCATION</h3>
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <h4 className="text-2xl font-bold text-white mb-2">Bachelor's degree in Computer Science</h4>
          <p className="text-gray-400 mb-2">10/2015 – 07/2018</p>
          <p className="text-lg font-semibold">Warsaw University of Technology, Warsaw, Poland</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;

