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
                            <h5>Education</h5>
                            <small>SeMyung University - Bachelors 2012 / </small>
                            <small>BCIT College - Diploma 2021</small>
                        </article>

                        <article className='about__card'>
                            <FiUser className='about__icon'/>
                            <h5>Certificates</h5>
                            <small>freeCodeCamp 2022</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>College Projects 2021</small>
                            <small>Personal Projects 2022</small>
                        </article>
                    </div>

                    <p>
                    I am a type of person who is a passionate, strong mover, and enjoys the new challenge. </p>
                    <p> I am enjoying problem solving, so I am convinced that if I do not do anything there is nothing happend. </p>
                    <p>
                    With the past 2 years studying computer development, I'll not need much time to learn the ins and outs of the industry.
                    </p>

                    <p></p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About