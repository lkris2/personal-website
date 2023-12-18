import React from 'react'
import {Link } from 'react-router-dom'
import"../navigate/NavBar.css"

export default function NavBar(){
 
  
      return (
        <div className = 'sum' >
          
          <div className = "logo">

          </div>
          <nav className='item'>
            <ul className = 'ul'>
              <li>
                <Link to = "/"> Home</Link>
              </li>
              <li>
                <Link to = "/about">About</Link>
              </li>
              <li>
                <Link to = "/actingCoder">The Acting Coder</Link>
              </li>
              <li>
                <Link to = "/creativity">Creativity</Link>
              </li>
              <li>
                <Link to = "/myProjects">MyProjects</Link>
              </li>
              <li>
                <Link to = "/resume">Resume</Link>
              </li>
              <li>
                <Link to = "/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
    
  
