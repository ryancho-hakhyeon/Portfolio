import React from 'react'
import './services.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What Skills I Have</h5>
      <h2>All Ability</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Basic Language</h3>
          </div>
          
          <div className='service__list'>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>Python</h3>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>JavaScript</h3>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>HTML/CSS</h3>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>SQL</h3>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
          </div>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Development Tools</h3>
          </div>

          <div className='service__list'>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>React</h3>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>Angular</h3>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>Node.js</h3>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>MySQL</h3>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>MongoDB</h3>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Other Tools</h3>
          </div>

          <div className='service__list'>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>Docker</h3>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>Ansible</h3>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>AWS / Azure</h3>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_list'>
              <BsPatchCheckFill className='service__list-icon'/>
              <div>
                <h3>Github</h3>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services