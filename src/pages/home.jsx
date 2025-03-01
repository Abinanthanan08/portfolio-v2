import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Home() {
  const [role, setRole] = useState('Web Designer');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRole(prevRole => (prevRole === 'Web Designer' ? 'Software Developer' : 'Web Designer'));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-yellow-50 font-Poppins text-4xl sm:text-5xl md:text-6xl">Abinanthanan.A</h1>
      <motion.p 
        key={role}
        className={`text-xl sm:text-2xl md:text-3xl mt-2 ${role === 'Web Designer' ? 'text-blue-400' : 'text-green-400'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        I'm {role}
      </motion.p>

      <a 
        href="/assets/Abinanthanan-Resume.pdf" 
        download
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
      
      <div className="flex space-x-6 mt-4">
        <a 
          href="https://github.com/Abinanthanan08" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl text-white hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.linkedin.com/in/abinanthanan-developer" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl text-white hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://www.instagram.com/abi_nanthanan/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl text-white hover:text-gray-400 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}

export default Home;
