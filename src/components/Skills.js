import { SiReact, SiJavascript, SiNodedotjs, SiTailwindcss, SiMongodb, SiExpress, SiPython, SiCplusplus, SiAmazon, SiMysql, SiTableau, SiFirebase, SiStreamlit, SiOpencv, SiTensorflow, SiDeepnote, SiHtml5,SiNextdotjs,SiVuedotjs, SiGraphql,SiPostgresql,SiSupabase,SiTypescript,SiNuxtdotjs,SiRedux,SiRedis,SiWordpress,SiDjango,SiPhp,SiRust,SiAmazondynamodb } from "react-icons/si";
import { TbBrain } from "react-icons/tb"; // For Machine Learning
import { GiArtificialIntelligence } from "react-icons/gi"; // For Generative AI

const Skills=()=>{

const techs = [
  { id: 3, title: "React.js", style: "shadow-blue-500", icon: <SiReact /> },
  { id: 2, title: "JavaScript", style: "shadow-yellow-500", icon: <SiJavascript /> },
  { id: 13, title: "Node.js", style: "shadow-green-500", icon: <SiNodedotjs /> },
  { id: 6, title: "TailwindCss", style: "shadow-sky-500", icon: <SiTailwindcss /> },
  { id: 22, title: "MongoDB", style: "shadow-green-600", icon: <SiMongodb /> },
  { id: 14, title: "Express.js", style: "shadow-pink-400", icon: <SiExpress /> },
  { id: 15, title: "Python", style: "shadow-yellow-400", icon: <SiPython /> },
  { id: 5, title: "C++", style: "shadow-gray-300", icon: <SiCplusplus /> },
  { id: 34, title: "AWS CP", style: "shadow-orange-500", icon: <SiAmazon /> },
  { id: 10, title: "Power BI", style: "shadow-blue-700", icon: <SiTableau /> },
  { id: 21, title: "Microsoft SQL Server", style: "shadow-red-500", icon: <SiMysql /> },
  { id: 27, title: "Machine Learning", style: "shadow-blue-400", icon: <TbBrain /> },
  { id: 28, title: "Generative AI", style: "shadow-green-400", icon: <GiArtificialIntelligence /> },
  { id: 29, title: "Tableau", style: "shadow-gray-400", icon: <SiTableau /> },
  { id: 23, title: "Firebase", style: "shadow-amber-400", icon: <SiFirebase /> },
  { id: 30, title: "Streamlit", style: "shadow-pink-400", icon: <SiStreamlit /> },
  { id: 31, title: "OpenCv", style: "shadow-blue-500", icon: <SiOpencv /> },
  {id:32,title:"Tensorflow", style:"shadow-pink-400", icon:<SiTensorflow />},
  {id : 33,title:"Deeplearning", style:"shadow-red-500", icon:<SiDeepnote />},
  {id : 1,title:"HTML/CSS", style:"shadow-green-500", icon:<SiHtml5 />},
  {id : 16,title:"Next.js", style:"shadow-gray-500", icon:<SiNextdotjs />},
  {id : 8,title:"Vue.js", style:"shadow-green-500", icon:<SiVuedotjs />},
  {id : 9,title:"GraphQL", style:"shadow-pink-500", icon:<SiGraphql />},
  {id : 24,title:"PostgreSQL", style:"shadow-blue-500", icon:<SiPostgresql />},
  {id : 25,title:"Supabase", style:"shadow-green-500", icon:<SiSupabase />},
  {id : 10,title:"TypeScript", style:"shadow-blue-500", icon:<SiTypescript />},
  {id : 11,title:"Nuxt.js", style:"shadow-green-500", icon:<SiNuxtdotjs />},
  {id : 4,title:"Redux", style:"shadow-orange-500", icon:<SiRedux />},
  {id : 17,title:"Redis", style:"shadow-red-500", icon:<SiRedis />},
  {id : 12,title:"WordPress", style:"shadow-blue-500", icon:<SiWordpress />},
  {id : 18,title:"Django", style:"shadow-green-500", icon:<SiDjango />},
  {id : 19,title:"PHP", style:"shadow-blue-500", icon:<SiPhp />},
  {id : 20,title:"Rust", style:"shadow-orange-500", icon:<SiRust />},
  {id : 26,title:"Amazon DynamoDB", style:"shadow-orange-500", icon:<SiAmazondynamodb />},
];


  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-8">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-5 inline">Skills</p>
          <p className="py-6 mt-5">These are the technologies I've worked with</p>
        </div>

        <div className="perspective-1500px w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center px-4 sm:px-0">
          {techs.map(({ id, title, icon, style }) => (
            <div
              key={id}
              className={`group relative shadow-md py-4 rounded-lg ${style} transform transition-all duration-500 hover:scale-110 hover:rotate-x-6 hover:rotate-y-6`}
            >
              <div className="transform-gpu group-hover:scale-105 transition-all duration-500 flex flex-col items-center gap-2">
                {icon}
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
