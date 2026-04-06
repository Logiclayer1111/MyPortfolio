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
      const jsPDFModule = await import('jspdf');
      const html2canvasModule = await import('html2canvas');
      const jsPDF = jsPDFModule.default || jsPDFModule.jsPDF;
      const html2canvas = html2canvasModule.default;
      
      const element = document.getElementById('resume-content');
      if (!element) {
        alert('Resume content not found');
        return;
      }
      
      // Scroll to top and hide scrollbars temporarily
      const originalScrollTop = element.scrollTop;
      const originalOverflow = element.style.overflow;
      element.scrollTop = 0;
      element.style.overflow = 'hidden';
      
      const canvas = await html2canvas(element, { 
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        width: element.scrollWidth,
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0,
      });
      
      // Restore
      element.scrollTop = originalScrollTop;
      element.style.overflow = originalOverflow;
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let positionY = 0;
      
      pdf.addImage(imgData, 'PNG', 0, positionY, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
      
      while (heightLeft >= 0) {
        positionY = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, positionY, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
      
      pdf.save('Antoni_Nowicki_Resume.pdf');
    } catch (error) {
      console.error('PDF generation error:', error);
      alert(`PDF failed: ${error.message}`);
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
             👋 I'm always excited to collaborate on innovative projects and explore
             new opportunities in technology. Feel free to check out my portfolio, and
             let’s create something amazing together!
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
          <div className="relative w-[19.2rem] h-[19.2rem] md:w-96 md:h-96 p-1 overflow-hidden">
            <MovingBorder duration={3000}>
              <img
                src={pic}
                alt="Profile"
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </MovingBorder>
          </div>
        </div>

        {/* Resume Modal */}
        {showModal && (
          <>
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={(e) => e.currentTarget === e.target && setShowModal(false)}
            >
              <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 max-w-6xl max-h-[90vh] w-full mx-4 relative shadow-2xl overflow-hidden">
                <button
                  className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/50 transition-colors z-10"
                  onClick={() => setShowModal(false)}
                  aria-label="Close modal"
                >
                  ×
                </button>
                <div id="resume-content" className="max-h-[70vh] overflow-y-auto pb-20">
                  <Resume />
                </div>
                <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 to-transparent pt-8 mt-8 pb-8 border-t border-gray-700 flex gap-4 justify-center">
                  <button
                    onClick={downloadPDF}
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2"
                  >
                    📄 Download PDF
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-8 py-3 bg-gray-700/50 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all border border-gray-600 hover:border-gray-500"
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
