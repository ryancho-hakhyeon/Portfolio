// import useMightyMouse from "react-hook-mighty-mouse";
import React, { useState } from 'react'

import './about.css'

import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { MdWork } from 'react-icons/md'

const data_about = [
    {
        id: 1,
        icon: <FaAward className='about__icon'/>,
        title: "Education",
        contents: ['BCIT College - Diploma 2021', 'SeMyung University - Bachelors 2012'],
    },
    {
        id: 2,
        icon: <FiUser className='about__icon'/>,
        title: "Certificates",
        contents: ['freeCodeCamp 2022', 'Python & JavaScript & Data Analysis'],
    },
    {
        id: 3,
        icon: <MdWork className='about__icon'/>,
        title: "Experiences",
        contents: ['BCIT Practicums 2021', 'First Lieutenant 2012'],
    }
]

const About = () => {
    const [isEducation, setIsEducation] = useState(false)
    const [isCertificate, setIsCertificate] = useState(false)
    const [isExperience, setIsExperience] = useState(false)

    const handleMouseEnter = (id) => {
        if (id === 1) {
            setIsEducation(true)
        } 
        if (id === 2) {
            setIsCertificate(true)
        }
        if (id === 3) {
            setIsExperience(true)
        }
    }
    
    const handleMouseLeave = (id) => {
        if (id === 1) {
            setIsEducation(false)
        } 
        if (id === 2) {
            setIsCertificate(false)
        }
        if (id === 3) {
            setIsExperience(false)
        }
    }

    return (
        <section id='about'>
            <h5> Get To Know </h5>
            <h2> About Me </h2>

            <div className="container about__container">
                <div className="about__content">
                    <div className="about__cards">
                        {
                            data_about.map((data) => {
                                return (
                                    <div className='about__card' key={ data.id } onMouseEnter={() => handleMouseEnter(data.id)} onMouseLeave={() => handleMouseLeave(data.id)}>
                                        {data.icon}
                                        <h5>{data.title}</h5>
                                        <ul>
                                            {data.contents.map((content, idx) => <li key={idx}>{content}</li>)}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    <div className='about__timeline'>
                        <div className={`timeline-container right ${isEducation || isExperience ? "activate" : ""}`}>
                            <div className={`date ${isCertificate ? "activate" : ""}`}>Jul 2022</div>

                            <div className="timeline-content">
                                <h2>freeCodeCamp</h2>
                                <p>Python, JavaScript, Data Analysis</p>
                            </div>
                        </div>

                        <div className={`timeline-container left ${isCertificate || isExperience ? "activate" : ""}`}>
                            <div className={`date ${isEducation ? "activate" : ""}`}>Dec 2021</div>

                            <div className="timeline-content">
                                <h2>BCIT, Diploma</h2>
                                <p>Graduated, Computer Information Technology(CIT)</p>
                            </div>
                        </div>

                        <div className={`timeline-container right ${isEducation || isCertificate ? "activate" : ""}`}>
                            <div className={`date ${isExperience ? "activate" : ""}`}>Sep 2021</div>

                            <div className="timeline-content">
                                <h2>BCIT Practicum 2</h2>
                                <p>Software Development - Singular Hearing</p>
                            </div>
                        </div>

                        <div className={`timeline-container left ${isEducation || isCertificate ? "activate" : ""}`}>
                            <div className={`date ${isExperience ? "activate" : ""}`}>Jan 2021</div>

                            <div className="timeline-content">
                                <h2>BCIT Practicum 1</h2>
                                <p>Software Development - CityStudio Vancouver</p>
                            </div>
                        </div>

                        <div className={`timeline-container right ${isCertificate || isExperience ? "activate" : ""}`}>
                            <div className={`date ${isEducation ? "activate" : ""}`}>Sep 2019</div>

                            <div className="timeline-content">
                                <h2>British Columbia Institute of Technology</h2>
                                <p>Enrolled - Study CIT program</p>
                            </div>
                        </div>

                        <div className={`timeline-container left ${isEducation || isCertificate ? "activate" : ""}`}>
                            <div className={`date ${isExperience ? "activate" : ""}`}>Mar 2012</div>

                            <div className="timeline-content">
                                <h2>First Lieutenant</h2>
                                <p>Work at Korea Army</p>
                            </div>
                        </div>

                        <div className={`timeline-container right ${isCertificate || isExperience ? "activate" : ""}`}>
                            <div className={`date ${isEducation ? "activate" : ""}`}>Feb 2012</div>

                            <div className="timeline-content">
                                <h2>Semyung University, Bachelor</h2>
                                <p>Graduated, Computer Science - Software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About