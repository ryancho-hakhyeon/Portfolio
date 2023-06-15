import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'

// 
import Weather from '../../assets/weather.png'
import CityStudio from '../../assets/city_studio.png'
import Singular from '../../assets/singular_hearing.png'
import Sample_IMG from "../../assets/laptop.png"

import './experience.css'

const project_data = [
  {
    project_title: 'Weather Forecast',
    image: Weather,
    url: 'https://github.com/ryancho-hakhyeon/Weather-Forecast-app',
    contents: "To predict and see weather by the location where you are and where you want. The application shows various locations as options that are able to choose from. Also, It displays different modes as Dashboard and Web Application versions, and the background and weather icons are changed by the time and weather conditions.",
    technologies: ['React', 'ChartJs', 'Weather APIs', 'Geographic APIs']
  },
  {
    project_title: 'City Studio Vancouver',
    image: CityStudio,
    url: 'https://citystudiovancouver.com/projects/pycity/',
    contents: "Developing the backend part of the application with the team at the college. The application collects the specific data by forming JSON format, and in order to use all collected data for analyzing purposes the results reprocess to save Excel file.",
    technologies: ['JSON', 'Open APIs', 'Python']
  },
  {
    project_title: 'Singular Hearing',
    image: Singular,
    url: 'https://www.youtube.com/watch?v=o1QyyBPeFL4',
    contents: "Developing the web application to improve the backend and frontend parts. Mostly, I contributed the frontend that users are able to use easily. As the results of that, the visualizing of the application became more understandable and clear.",
    technologies: ['JavaScript', 'Linux', 'Network']
  },
  {
    project_title: 'Provisioning & CI/CD',
    image: Sample_IMG,
    url: '',
    contents: "Understanding automatic management of infrastructure by using cloud computing. This application simply shows the basic setup and procedure for managing web-based applications in the current industry's field used.",
    technologies: ['AWS', 'Azure', 'Docker', 'GitLab', 'Discord', 'Ubuntu', 'Ansible', 'Github']
  }
]

const Experience = () => {
  const [degree, setDegree] = useState(0)

  return (
    <section id='experience'>
        <h5> I've been working on </h5>
        <h2> Projects </h2>
        <div className='container myworks__container'>
            <div className='projects-container' style={ {transform: `translateZ(-491px) rotateY(${degree}deg)`}}>
                {
                  project_data.map((data, idx) => {
                    return (
                      <div className='project-item' key={ idx }>
                        <div className='project-img-container'>
                          <img src={ data.image } alt="sample" className='project-img laptop'/>
                        </div>
                        <a href={ data.url } target="_blank" without="true" rel="noopener noreferrer" className='btn btn-source'>Details<FaGithub className='icon-source'/></a>
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