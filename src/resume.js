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
          <span>
            GitHub:{' '}
            <a href="https://github.com/logiclayer1111" className="hover:text-teal-400 underline">
              github.com/logiclayer1111
            </a>
          </span>
          <span>Address: Warsaw, Mazowieckie, Poland</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold text-teal-400 mb-6 border-l-4 border-teal-400 pl-4">SUMMARY</h3>
        <p className="text-lg leading-relaxed text-gray-300">
          Full Stack Developer with 8 years of experience designing, building, and scaling modern web
          applications using advanced frontend and backend technologies. Specialized in JavaScript
          ecosystems, scalable backend architectures, API design, and high-performance UI development
          across complex enterprise systems. Demonstrates strong expertise in React, Vue.js, Node.js,
          TypeScript, RESTful APIs, cloud deployment, and database optimization, delivering secure and
          maintainable applications used by thousands of users.
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
            <p className="text-gray-400 mb-4">Rzeszow, Poland | 01/2024 - Present</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Architected scalable frontend and backend modules using React, Vue.js, Node.js, and TypeScript, improving application responsiveness by 35% across enterprise platforms.</li>
              <li>Designed modular UI component systems that accelerated frontend feature delivery by 40% across multiple product teams.</li>
              <li>Implemented optimized RESTful APIs supporting high-traffic enterprise systems handling 150K+ monthly users.</li>
              <li>Developed backend microservices using Node.js and NestJS, improving system scalability and reducing latency by 28%.</li>
              <li>Optimized database queries and indexing strategies within PostgreSQL, reducing complex query execution time by 45%.</li>
              <li>Integrated third-party APIs and internal services to streamline data synchronization across 5 distributed applications.</li>
              <li>Engineered secure authentication systems using JWT and OAuth2, strengthening access control for multi-tenant environments.</li>
              <li>Automated CI/CD pipelines using GitHub Actions and Docker, reducing deployment time from 45 minutes to 10 minutes.</li>
              <li>Refactored legacy frontend components into Vue.js and React modern architectures, improving maintainability and performance.</li>
              <li>Developed server-side rendering implementations that enhanced SEO performance and improved page load speed by 30%.</li>
              <li>Created reusable backend services enabling consistent data access across 12 internal applications.</li>
              <li>Implemented caching strategies using Redis, decreasing API response times by 25%.</li>
              <li>Built monitoring dashboards for application performance metrics and infrastructure visibility.</li>
              <li>Enhanced code quality standards by introducing automated testing frameworks with Jest and Cypress, increasing coverage to 85%.</li>
              <li>Guided architectural improvements in frontend state management using Redux and Pinia, improving maintainability across large codebases.</li>
              <li>Analyzed system bottlenecks and applied backend performance optimizations that reduced server resource consumption by 22%.</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-white mb-2">Netguru - Full Stack Engineer</h4>
            <p className="text-gray-400 mb-4">Poznan, Poland | 10/2020 - 12/2023</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Developed full-stack web applications using React, Vue.js, Node.js, and GraphQL, delivering scalable solutions for international clients.</li>
              <li>Constructed modular frontend interfaces using React component architecture, improving UI maintainability and development efficiency.</li>
              <li>Implemented backend APIs using Express.js and Node.js, enabling seamless communication between microservices.</li>
              <li>Optimized frontend rendering performance through code splitting and lazy loading, improving page load speeds by 38%.</li>
              <li>Engineered scalable database structures using PostgreSQL and MongoDB, supporting high-volume transactional systems.</li>
              <li>Integrated cloud services within AWS infrastructure, enabling reliable deployments and automated scaling.</li>
              <li>Developed reusable frontend UI libraries used across 8 internal projects.</li>
              <li>Constructed data processing pipelines that improved reporting performance for large datasets.</li>
              <li>Deployed containerized applications using Docker, improving development and staging environment consistency.</li>
              <li>Implemented automated testing strategies using Jest and Cypress, improving system reliability.</li>
              <li>Delivered secure API integrations with payment providers and authentication services supporting global SaaS platforms.</li>
              <li>Refined backend service architecture to improve system throughput and reduce API error rates by 18%.</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-white mb-2">Polcode - Intern & Software Engineer</h4>
            <p className="text-gray-400 mb-4">Lodz, Poland | 10/2018 - 09/2020</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Developed scalable front-end and back-end applications using JavaScript, React, Vue.js, and Node.js for international web platforms.</li>
              <li>Constructed dynamic user interfaces with Vue.js and modern JavaScript frameworks, improving user engagement metrics by 25%.</li>
              <li>Engineered backend RESTful services that supported high-volume data exchange between enterprise systems.</li>
              <li>Designed database schemas and optimized queries across MySQL and PostgreSQL environments.</li>
              <li>Delivered API integrations connecting applications with external SaaS platforms and payment systems.</li>
              <li>Improved frontend performance through asset optimization and advanced caching strategies.</li>
              <li>Developed reusable frontend component libraries used across multiple client projects.</li>
              <li>Implemented secure user authentication systems and access control mechanisms.</li>
              <li>Collaborated with cross-disciplinary engineering teams to deliver 20+ full-stack applications within tight project timelines.</li>
              <li>Optimized backend logic and server-side processing, improving API throughput by 30%.</li>
              <li>Established code review practices and Git workflows that improved development productivity and code maintainability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-3xl font-bold text-teal-400 mb-6 border-l-4 border-teal-400 pl-4">EDUCATION</h3>
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <h4 className="text-2xl font-bold text-white mb-2">Bachelor's degree in Computer Science</h4>
          <p className="text-gray-400 mb-2">10/2015 - 07/2018</p>
          <p className="text-lg font-semibold">Warsaw University of Technology, Warsaw, Poland</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
