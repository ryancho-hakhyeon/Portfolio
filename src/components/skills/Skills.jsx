import React from 'react'

import Scene from './Scene'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h5> What I have </h5>
      <h2> Skills </h2>
      <div className='container skills__container'>
          <div className="tagcloud__container">
            <Scene />
          </div>

          <div className="skills__explanation">
              <div>
                <h3><span>FrontEnd</span> Skills</h3>
                <span>With experience of (Technologies - JavaScript and Python) and (Frameworks - React, Angular, etc.), to bulid responsive and interactive interfaces that run smoothly.</span>
              </div>

              <div>
                <h3><span>BackEnd</span> Skills</h3>
                <span>Responsible for implementing the (server-side) of web application, using (Node.js) and (Flask) to build efficient backEnd systems.</span>
              </div>

              <div>
                <h3><span>Infrastructure</span></h3>
                <span>With a strong understanding of database design and CI/CD design, to bulid the concept of smooth provisioning and engineering. </span>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Skills
