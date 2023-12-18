import React from 'react';
import NavBar from '../navigate/NavBar';
import ResumeSection from '../components/ResumeSection';
import ResumeSection2 from '../components/ResumeSection2';
import "/Users/lakshmikrishnan/Desktop/latest/src/style/resume.css";
const Resume = () => {
  return (
    <div className='resume-container'>
    

    <div className='nav-app'><NavBar/> </div>
    <h2 className = 'edu-title'>Education</h2>
      
      <p className = "edu-para">Hello, I am a Computer Science student at the University of Illinois at Chicago, set to graduate in May 2025 with a Bachelor of Science degree. My academic journey has equipped me with a robust foundation in key areas such as Data Structures & Algorithms, Machine Organization, Mathematical Foundations of Computing, Machine Learning, Object-Oriented Programming and Design, Languages and Automata, and Applied Statistical Methods.

I am passionate about leveraging technology to solve real-world problems and have demonstrated my skills by earning recognition for my work. Notably, I achieved the 2nd Best Project at the UIC Spark Hacks Hackathon, where I developed a Social Networking App. This experience has honed my ability to innovate, collaborate, and deliver impactful solutions in a competitive and dynamic environment.

As I progress toward graduation, I am eager to apply my knowledge and skills in the field of Computer Science, contributing to cutting-edge projects and pushing the boundaries of what technology can achieve.
</p>
      <div className='resume-swipe'><ResumeSection/></div>
      <div className='resume-swipe2'><ResumeSection2/></div>
      </div>
   
  );
};

export default Resume;