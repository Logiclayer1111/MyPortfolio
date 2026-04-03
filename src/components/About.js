const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8 md:mt-20 px-4 md:px-0">
          I'm a Full Stack Developer with 8 years of experience designing, building, and scaling modern web applications using advanced frontend and backend technologies. 
          Specialized in JavaScript ecosystems, scalable backend architectures, API design, and high-performance UI development across complex enterprise systems. 
          Demonstrates strong expertise in React, Vue.js, Node.js, TypeScript, RESTful APIs, cloud deployment, and database optimization, delivering secure and maintainable applications used by thousands of users.
        </p>
      </div>
    </div>
  );
};

export default About;
