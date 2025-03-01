import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 
        p-3 md:p-4 lg:p-5 bg-blue-600 text-white rounded-full shadow-lg 
        transition-all duration-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"} 
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
    </button>
  );
};

export default Scroll;
