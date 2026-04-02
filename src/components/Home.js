import React, { useEffect, useRef, useState, useCallback } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import pic from "../assets/portpic.jpg";
import Resume from "../resume";
import Typed from "typed.js";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue } from "framer-motion";

const Home = () => {
  const typedRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const downloadPDF = useCallback(async () => {
    try {
      const { jsPDF } = await import('jspdf');
      const html2canvas = await import('html2canvas');
      const element = document.getElementById('resume-content');
      if (!element) {
        alert('Resume content not found');
        return;
      }
      const canvas = await html2canvas(element, { 
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#111827',
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }
      pdf.save('Antoni_Nowicki_Resume.pdf');
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF download failed. Please try again.');
    }
  }, []);


  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Software Engineer"
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 5000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const MovingBorder = ({ children, duration = 3000 }) => {
    const pathRef = useRef(null);
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
      const length = pathRef.current?.getTotalLength();
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
      const updatePosition = () => {
        if (pathRef.current) {
          const point = pathRef.current.getPointAtLength(progress.get());
          x.set(point.x);
          y.set(point.y);
        }
      };
      updatePosition();
      const unsubscribe = progress.on("change", updatePosition);
      return () => unsubscribe();
    }, [progress, x, y]);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx="9999" 
            ry="9999"
            ref={pathRef}
          />
        </svg>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          <div className="w-3 h-1 bg-cyan-500 rounded-full" />
        </motion.div>
        {children}
      </>
    );
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h5 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            I'm a{" "}
            <span
              ref={typedRef}
              className="text-teal-400 font-semibold whitespace-nowrap"
            ></span>
          </h5>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I'm a Full Stack Developer with 8 years of experience designing, building, and scaling modern web applications using advanced frontend and backend technologies. 
            Specialized in JavaScript ecosystems, scalable backend architectures, API design, and high-performance UI development across complex enterprise systems. Demonstrates strong expertise in React, Vue.js, Node.js, TypeScript, RESTful APIs, cloud deployment, and database optimization, delivering secure and maintainable applications used by thousands of users.
          </p>
          <div>
<button
              onClick={() => setShowModal(true)}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80 p-1 overflow-hidden">
            <MovingBorder duration={3000}>
              <img
                src={pic}
                alt="Profile"
                className="w-4/5 h-full object-cover rounded-full relative z-10"
              />
            </MovingBorder>
        </div>
        
        {/* Resume Modal */}
        {showModal && (
          <>
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={(e) => {
                if (e.target === e.currentTarget) setShowModal(false);
              }}
            >
              <div className="bg-gray-900/95 border border-gray-700 rounded-3xl p-8 w-full max-w-6xl max-h-[90vh] relative shadow-2xl mx-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute -top-12 right-0 text-gray-300 hover:text-white text-3xl font-bold p-2 hover:bg-gray-800/50 rounded-full transition-all z-10"
                >
                  ×
                </button>
                <div id="resume-content" className="pb-20">
                  <Resume />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-700 justify-center">
                  <button
                    onClick={downloadPDF}
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex-1 sm:flex-none"
                  >
                    📄 Download PDF
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all flex-1 sm:flex-none"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Home;