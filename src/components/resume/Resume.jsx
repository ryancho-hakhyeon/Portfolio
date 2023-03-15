import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './resume.css';
import Loads from '../loads/Loads';
import AboutMe from '../../assets/me-about.jpg'
import CV from '../../assets/Ryan Hakhyeon Cho Resume.pdf'

import { IoMdMail } from 'react-icons/io';
import { MdSchool } from 'react-icons/md';
import { FaBriefcase, FaCertificate } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { GiEarthAmerica } from 'react-icons/gi';
import { BsPeopleFill, BsTelephoneFill, BsCalendar4Range } from 'react-icons/bs'
import { GrPersonalComputer, GrCertificate } from 'react-icons/gr'


const Skilllevel = (props) => {
    return (
        <div className={ `language-${props.name}` }>{ props.name }</div>
    )
}

const info_data = {
    info: {
        me: 'Hakhyeon Cho',
        location: 'Vancouver, BC',
        email: 'ryancho.hakhyeon@gmail.com',
        mobile: '+1) 604-349-8194'
    },
    skills: {
        programing: ['Python,', 'Javascript'],
        backend_frontend: ['React,', 'Angular,', 'Node.js,', 'express.js,', 'HTML/CSS,', 'MySQL,', 'mongodb,', 'Flask,', 'Chart.js,', 'JSON & APIs'],
        infrastructure: ['Ansible,', 'Docker,', 'Kubernetes,', 'AWS,', 'Azure,', 'Unbuntu,', 'Jenkins,', 'Jira,', 'Data-Analysis libraries,'],
        languague: [
            {
                languague: 'English',
                level: 'Fluent'
            },
            {
                languague: 'Korean',
                level: 'Native'
            }
        ],
    },
    summary: 'I\'ve spent the past two years studying software engineering and doing several projects, for instance, programming and web development, in college. During the project, it was focused on understanding provisioning and the CI/CD environment with relevant tools such as cloud computing, automation on deployment and management, etc. And, I learned how the development process works and the usage of engineering knowledge throughout the practicums. All those projects and practicums help me to get to the point where I could use my knowledge. So, I won\'t need much extra time to learn the ins and outs of the industry.',
    experience: [
        {
            title: 'Software Development',
            company: 'Singular Hearing',
            period: 'Sep 2021 - Dec 2021',
            descriptions: ['Improved the back-end more robust by the port-specific and the web server such as Nginx', 'Developed features - Added various modes selection, Added a progress bar when the audio file is denoised, Displayed each type of denoised audio result which is downloadable, and Compared them with the original file.']
        },
        {
            title: 'Software Development',
            company: 'CityStudio Vancouver',
            period: 'Jan 2021 - Apr 2021',
            descriptions: ['Developed an application for collecting data - https://citystudiovancouver.com/projects/pycity/', 'Implemented each city’s APIs which are given to grab published data.', 'Designed all collected data into an excel file sequentially by year and location.']
        },
        {
            title: 'Designing CI/CD Environment & Provisioning',
            company: 'BCIT project',
            period: 'Jan 2021 - Dec 2021',
            descriptions: ['Designed the CI/CD environment system through GitLab and Jenkins.', 'Implemented real-time notification using Discord.', 'Implemented a common CI/CD environment in multiple projects which is completely separated.']
        },
        {
            title: 'Developing game application and Data Analysis',
            company: 'BCIT project',
            period: 'Sep 2020 - Dec 2021',
            descriptions: ['Maze game written in Python and hang-man, whack-a-mole written in JavaScript in MVC concept.', 'Implemented position shuffling using random number generator, arrays, and images.', 'Analyzed several databases and determined the best analysis and prediction.', 'Designed object-oriented design in order for developing audio library etc.']
        },
        {
            title: 'First Lieutenant',
            company: 'Korea Army',
            period: 'Mar 2012 - Jun 2014',
            descriptions: ['As a head of the human resource department, managed over hundred units and made up the schedule of the base.', 'Collaborated with other departments, units, and government agencies to achieve operation.']
        }
    ],
    education: [
        {
            organization: 'FreeCodeCamp',
            years: '2022',
            program: 'Scientific Computing with Python & JavaScript Algorithms and Data Structure & Data Analysis with Python',
            descriptions: ''
        },
        {
            organization: 'British Columbia Institute of Technology',
            years: '2019',
            program: 'Computer Information Technology',
            descriptions: ['Learned the knowledge of programming design patterns. (OOP, MVC, Clear structure, etc.)', 'Worked under the program development life cycle in order to implement appropriate applications.']
        },
        {
            organization: 'Semyung University',
            years: '2007',
            program: 'Computer Science - Software',
            descriptions: ['Mostly learned about the knowledge of the theoretical algorithms.', 'Studied system designs based on engineering mathematics for understanding the hardware level.']
        }
    ]
}

const Resume = () => {
    const { state } = useLocation()
    const [isLoading, setIsLoading] = useState(state.loadingState)

    useEffect(() => {
        if(isLoading) {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
    }, [isLoading])
    
    return (
        <>
            {
                isLoading ?
                (<Loads />)
                :
                (
                    <>
                    <div className='resume__container'>
                        <div className="container__left">
                            <div className='profile_skills_box'>
                                <div className="profile__container">
                                    <div className="img-box">
                                        <div>
                                            <img src={ AboutMe } alt="me" />
                                        </div>
                                    </div>

                                    <div className="info-box">
                                        <div>
                                            <BsPeopleFill className='icon-img' id='info-icon'/>
                                            <span>{ info_data.info.me }</span>
                                        </div>

                                        <div>
                                            <AiFillHome className='icon-img' id='info-icon'/>
                                            <span>{ info_data.info.location }</span>
                                        </div>

                                        <div>
                                            <IoMdMail className='icon-img' id='info-icon'/>
                                            <span>{ info_data.info.email }</span>
                                        </div>
                                        
                                        <div>
                                            <BsTelephoneFill className='icon-img' id='info-icon'/>
                                            <span>{ info_data.info.mobile }</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="technologies__container">
                                    <div>
                                        <div>
                                            <h2 className='title-txt'><FaCertificate className='icon-img'/>Skills</h2>
                                        </div>

                                        <div className='skills-box'>
                                            <h3 className='subtitle-txt'>Programming Languages</h3>
                                            { info_data.skills.programing.map((lan, idx) => {
                                                return <span key={ idx }> { lan } </span>
                                            })}
                                            <h3 className='subtitle-txt'>Backend & Frontend</h3>
                                            { info_data.skills.backend_frontend.map((tools, idx) => {
                                                return <span key={ idx }> { tools } </span>
                                            })}
                                            <h3 className='subtitle-txt'>Infrastructure</h3>
                                            { info_data.skills.infrastructure.map((others, idx) => {
                                                return <span key={ idx }> { others } </span>
                                            })}
                                        </div>    
                                    </div>
                                    

                                    <div>
                                        <div>
                                            <h2 className='title-txt'><GiEarthAmerica className='icon-img'/>Languanges</h2>
                                        </div>

                                        <div className="languages-box">
                                            { info_data.skills.languague.map(({languague, level}, idx) => {
                                                return (
                                                    <div key={ idx }>
                                                        <h3 className='subtitle-txt'> { languague }</h3>
                                                        <div className='language-level'>
                                                            <Skilllevel name={ level } />
                                                        </div>
                                                    </div>
                                                )
                                            }) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="cv__container" >
                                <a href={CV} download className="cv_button">
                                    <span>DownLoad CV</span>
                                    <em></em>
                                </a>
                                
                                <Link to='/'>
                                    <div className="cv_button">
                                        <span>Go Home</span>
                                        <em></em>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="container__right">
                            <div className="summary__container">
                                <h2 className='title-txt'><FaCertificate className='icon-img'/>Key Summary</h2>
                                <div className='summary-box'>
                                    <p>{ info_data.summary }</p>
                                </div>
                            </div>

                            <div className="experience__container">
                                <h2 className='title-txt'><FaBriefcase className='icon-img'/>Experiences</h2>
                                { info_data.experience.map(({title, company, period, descriptions}, idx) => {
                                    return (
                                        <div className='experience-box' key={ idx }>
                                            <h3 className='subtitle-txt'><GrPersonalComputer className='sub-icon'/>{ title } - { company }</h3>
                                            <p className='period-box'><BsCalendar4Range className='sub-icon'/>{ period }</p>
                                            { descriptions.map((desc, idx) => {
                                                return <p key={ idx }>{ desc }</p>
                                            }) }
                                        </div>
                                    )
                                }) }
                            </div>

                            <div className="education__container">
                                <h2 className='title-txt'><MdSchool className='icon-img'/>Education & Certificates</h2>

                                { info_data.education.map(({organization, years, program, descriptions}, idx) => {
                                    return (
                                        <div className='education-box' key={ idx }>
                                            <h3 className='subtitle-txt'><GrCertificate className='sub-icon' />{ organization } - { years }</h3>
                                            <p className='program-title-txt'>{ program }</p>
                                            { descriptions !== '' ? descriptions.map((desc, idx) => {
                                                return (
                                                    <p key={idx}>{ desc }</p>
                                                )
                                            }) : ''}
                                        </div>
                                    )
                                }) }
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
        </>
        
    )
}

export default Resume