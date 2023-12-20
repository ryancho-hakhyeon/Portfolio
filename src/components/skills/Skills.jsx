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
                <span>With experience of <span className='skill-highlight'>Technologies - JavaScript and Python</span> and <span className='skill-highlight'>Frameworks - React, Angular, etc.</span>, to bulid responsive and interactive interfaces that run smoothly.</span>
              </div>

              <div>
                <h3><span>BackEnd</span> Skills</h3>
                <span>Responsible for implementing the <span className='skill-highlight'>server-side</span> of web application, using <span className='skill-highlight'>Node.js</span> and <span className='skill-highlight'>Flask</span> to build efficient backEnd systems.</span>
              </div>

              <div>
                <h3><span>Infrastructure</span></h3>
                <span>With a strong understanding of <span className='skill-highlight'>database design</span> and <span className='skill-highlight'>CI/CD design</span>, to bulid the concept of smooth provisioning and engineering. </span>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Skills
