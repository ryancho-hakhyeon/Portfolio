import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'

import Sample_IMG from "../../assets/laptop.png"
import Sample_MB from "../../assets/mobile2.png"
import './experience.css'

const project_data = [
  {
    project_title: 'Weather Forecast',
    image: ``,
    github_url: 'https://github.com/ryancho-hakhyeon/Weather-Forecast-app',
    contents: "To predict and see weather by the location where you want to know and search. The application shows various locations as options that are able to choose from. Also, It displays different modes as Dashboard and Mobile versions, and the background and weather icons are changed by the time and weather conditions.",
    technologies: ['React', 'Weather APIs', 'Geographic APIs']
  },
  {
    project_title: 'Budget Dashboard',
    image: ``,
    github_url: 'https://github.com/ryancho-hakhyeon/Income-Dashboard',
    contents: "Full stack application with a calculated budget you have and spend monthly and annually. The UI emulates a basic dashboard popularly used, and it shows concise and clear budget history with charts and tables. And, all data is ably exported in excel format, and it will be re-shaped to easily read and see.",
    technologies: ['Flask', 'Pandas', 'ChartJS', 'Bootstrap', 'Bootstrap-table']
  },
  {
    project_title: 'Management Application',
    image: ``,
    github_url: 'https://github.com/ryancho-hakhyeon/Management',
    contents: "Another full stack application with MEAN stack style to manage information under the web environments. This web application is able to access data through CRUD(Create, Read, Update, Delete) operations of persistent storage. It represents a clearly understandable UI that users must use for reading data, updating or editing data, and deleting data.",
    technologies: ['Angular','Materials', 'Bootstrap', 'Express', 'NodeJS', 'MongoDB']
  },
  {
    project_title: 'Provisioning & CI/CD',
    image: ``,
    github_url: '',
    contents: "Understanding automatic management of infrastructure by using cloud computing. This application simply shows the basic setup and procedure for managing web-based applications in the current industry's field used.",
    technologies: ['AWS', 'Azure', 'Docker', 'GitLab', 'Discord', 'Ubuntu', 'Ansible', 'Github']
  }
]

const Experience = () => {
  const [degree, setDegree] = useState(0)

  return (
    <section id='experience'>
        <h5> My Works </h5>
        <h2> Projects </h2>
        <div className='container myworks__container'>
            <div className='projects-container' style={ {transform: `translateZ(-491px) rotateY(${degree}deg)`}}>
                {
                  project_data.map((data, idx) => {
                    return (
                      <div className='project-item' key={ idx }>
                        <div className='project-img-container'>
                          <img src={ Sample_IMG } alt="sample" className='project-img laptop'/>
                          <img src={ Sample_MB } alt="phone" className='project-img phone'/>
                        </div>
                        <a href={ data.github_url } target="_blank" without="true" rel="noopener noreferrer" className='btn btn-source'>Source Code<FaGithub className='icon-source'/></a>
                        <div className='project-details'>
                          <h2>{ data.project_title }</h2>
                          <p>{ data.contents }</p>
                    
                          <p className='project-tech'>Technologies: </p> 
                          <div>
                            {
                              data.technologies.map((tech, idx) => {
                                return <span key={idx} className="tech-item">{tech}</span>
                              })
                            }
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
            </div>

            <div className='nav'>
                <button className='prev' onClick={() => setDegree(degree - 90)}>
                  <IoIosArrowBack className='nav-icon'/>
                </button>

                <button className='next' onClick={() => setDegree(degree + 90)}>
                  <IoIosArrowForward className='nav-icon' />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Experience