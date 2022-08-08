import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
    return (
        <section id='about'>
            <h5> Get To Know </h5>
            <h2> About Me </h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About ME" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Bachelors / Diploma</h5>
                            <small>SeMyung University / BCIT College</small>
                        </article>

                        <article className='about__card'>
                            <FiUser className='about__icon'/>
                            <h5>Certificates</h5>
                            <small>freeCodeCamp</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>College Projects / Personal Projects</small>
                        </article>
                    </div>

                    <p>
                    I've spent the past two years studying computer engineering 
                    and doing several projects and labs in the college, 
                    some of which seem to be matched the role you find. 
                    So, I won't need much extra time to learn the ins and outs 
                    of the industry.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About