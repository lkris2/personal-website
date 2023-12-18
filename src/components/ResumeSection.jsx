// ResumeSection.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "../style/Education.css"
const ResumeSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {/* Your resume content goes here */}
      

      {/* ... other resume details */}
    </motion.div>
  );
};

export default ResumeSection;
