
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActingCoder from './pages/ActingCoder.jsx';
import Creativity from './pages/creativity.jsx';
import MyProjects from './pages/MyProjects.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
ReactDOM.render(
 <Router>
  <Routes>
    <Route path = '/' element={<App/>}/>
    <Route path = '/about' element = {<About/>} />
    <Route path = '/actingCoder' element = {<ActingCoder/>} />
    <Route path = '/creativity' element = {<Creativity/>} />
    <Route path = '/myprojects' element = {<MyProjects/>} />
    <Route path = '/resume' element = {<Resume/>} />
    <Route path = '/contact' element = {<Contact/>} />

  </Routes>
 </Router>,

   document.getElementById('root')

);