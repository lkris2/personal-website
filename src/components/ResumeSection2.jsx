// ResumeSection.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "../style/Education.css"
const ResumeSection2 = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the threshold based on your needs
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
      <h2 className = 'edu-title'>Experience</h2>
      
      <div className = "edu-para"><h1>UIC Creative and Digital Services, Chicago, IL</h1>

<h2>Student Web Designer</h2>

<h1> Oct 2023 - Present</h1>

<li>Proficient in HTML, CSS, PHP, JavaScript, SQL, and WordPress CMS</li>

<li>Collaborating closely with Student Affairs and Campus Departments to maintain tailored websites.</li>

<li>Demonstrating expertise in technical troubleshooting ensuring smooth website operation.</li>

<h1>UIC College of Engineering, Chicago, IL Jul 2023 - Present</h1>

<h2>Research Assistant</h2>

<li>Identifying semantic relationship between sentences to work towards enhancing research methodology on an overall level using NLI models, involving Python.</li> 

<li> Skilled in NLI techniques and Data Manipulation</li> 

</div>

      {/* ... other resume details */}
    </motion.div>
  );
};

export default ResumeSection2;
