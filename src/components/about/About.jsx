import React, { useState } from 'react'
import './about.css'
import FreeCodeCamp from '../../assets/FreeCodeCamp_logo.png'
import FreeCodeCampLogo from '../../assets/freeCodeCamp_logo_fire.png'

import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {MdWork} from 'react-icons/md'
import {GoCheck} from 'react-icons/go'

const data_aboutMe = [
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
        title: "Works",
        contents: ['BCIT Practicums 2021', 'First Lieutenant 2012'],
    }
]

const About = () => {
    const [open, setOpen] = useState(false)
    const [openEducation, setOpenEducation] = useState(false)
    const [openCertificates, setOpenCertificates] = useState(false)
    const [openWorks, setOpenWorks] = useState(false)

    const handleOpen = (id) => {
        setOpen(!open)

        if (id === 1) {
            setOpenEducation(!openEducation)
            setOpenCertificates(false)
            setOpenWorks(false)
        } else if (id === 2) {
            setOpenCertificates(!openCertificates)
            setOpenEducation(false)
            setOpenWorks(false)
        } else {
            setOpenWorks(!openWorks)
            setOpenEducation(false)
            setOpenCertificates(false)
        }
        console.log(id)
    }
    
    return (
        <section id='about'>
            <h5> Get To Know </h5>
            <h2> About Me </h2>

            <div className="container about__container">
                <div className="about__content">
                    <div className="about__cards">
                        {
                            data_aboutMe.map((data) => (
                                <article key={data.id} className='about__card' onClick={() => handleOpen(data.id)} >
                                    {data.icon}
                                    <h5>{data.title}</h5>
                                    <ul>
                                        {data.contents.map((content, idx) => <li key={idx}>{content}</li>)}
                                    </ul>
                                </article>
                            ))
                        }
                    </div>
                    <div className="hide__container">
                        { openEducation ?
                            <div className="hide__contents">
                                <h3>British Columbia Institute of Technology 2019 - 2021</h3>
                                <p>Computer Information Technology Diploma</p>
                                <ul>
                                    <li><GoCheck className='hide-icons'/> Learned programming design patterns. (OOP, MVC, Clear structure, etc)</li>
                                    <li><GoCheck className='hide-icons'/> With the program development life cycle.</li>
                                    <li><GoCheck className='hide-icons'/> Relevant Courses: Object Oriented Programming, Database System, Applied Algorithms, Developing web applications, Enterprise System Integration, Data Analytics, Provisioning, Service Based, Cloud Computing.</li>
                                </ul>
                                <br></br>
                                <h3>SeMyung University 2007 - 2012</h3>
                                <p>Computer Science Bachelors</p>
                                <ul>
                                    <li><GoCheck className='hide-icons'/> Mostly learned about the knowledge of the theoretical algorithms.</li>
                                    <li><GoCheck className='hide-icons'/> Studied system designs based on engineering mathematics.</li>
                                </ul>
                            </div>
                            : 
                        openCertificates ?
                            <div className="hide__contents">
                                <h3>freeCodeCamp 2022</h3>
                                <p><GoCheck className='hide-icons'/> Scientific Computing with Python</p>
                                <a className="hide-links" href='https://www.freecodecamp.org/certification/RyanCho/scientific-computing-with-python-v7'> Click Hear !</a>
                                <p><GoCheck className='hide-icons'/> JavaScript Algorithms and Data Structure</p>
                                <a className="hide-links" href='https://www.freecodecamp.org/certification/RyanCho/javascript-algorithms-and-data-structures'> Click Hear !</a>
                                <p><GoCheck className='hide-icons'/> Data Analysis with Python</p>
                                <a className="hide-links" href='https://www.freecodecamp.org/certification/RyanCho/data-analysis-with-python-v7'> Click Hear !</a>
                                <img src={FreeCodeCampLogo} alt="" className="certificate__logo"/>
                                <img src={FreeCodeCamp} alt="" className='certificate__img'/>
                            </div>
                            :
                        openWorks ?
                            <div className="hide__contents">
                                <h3>BCIT Practicums 2021</h3>
                                <ul>
                                    <li>
                                        <p>Singular Hearing</p>
                                        <GoCheck className='hide-icons'/> Improved the back-end more robust by the port-specific and the web server such as Nginx.
                                        <br></br>
                                        <GoCheck className='hide-icons'/> Implemented features : Added mode selection and progress bar, Displayed denoised audio results (downloadable), Compared all results.
                                    </li>
                                    <li>
                                        <p>City Studio Vancouver</p>
                                        <GoCheck className='hide-icons'/> Built an application for collecting data - https://citystudiovancouver.com/projects/pycity/
                                        <br></br>
                                        <GoCheck className='hide-icons'/> Implemented each city’s APIs which are given to grab published data.<br></br>
                                        <GoCheck className='hide-icons'/> Saved all collected data into an excel file sequentially by year and location.
                                    </li>
                                </ul>
                                <br></br>
                                <h3>First Lieutenant 2012 - 2014</h3>
                                <p>Korea Army</p>
                                <ul>
                                    <li><GoCheck className='hide-icons'/> As a head of the HR, managed over hundred units and scheduled the missions.</li>
                                    <li><GoCheck className='hide-icons'/> Collaborated with various departsments to achieve operation.</li>
                                </ul>
                            </div>
                            :
                            <div className="default-contents">
                                Default
                            </div>
                        }
                    </div>
                    
                    

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About