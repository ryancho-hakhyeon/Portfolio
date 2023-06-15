import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import CTA from './CTA'
import IMG from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'

const Header = () => {  

  return (
    <section id='header'>
      <div className="container header__container">
        
        <div className='explained__me-box'>
          <div className='explained__text'>
            
            <div className='short-desc-box'>
              <div className='short-desc'>
                <span className='short-desc-highlight'>Junior Developer,</span>
                <p>passionate and enjoying new challenge. With 2 years studies about software engineering and programming, it helped me more to develop problem solving and logical thinking skills.</p>
                <p>I believe that there is nothing I can't do before I give up. </p>
              </div>

              <div className='desc-click'>
                <span>Show contact info.</span>
                <span className='desc-click-icon-box'><AiOutlineArrowRight className='desc-click-icon'/></span>
              </div>
            </div>

            <Link to="/resume" state={{ loadingState: true }} >
              <div className='link-online-resume' >
                <span>View Online Resume</span>
              </div>
            </Link>
    
            <CTA/>
          </div>

          {/* Profile Image card */}
          <div className='cards cards__me'>
            <img src={IMG} alt="" className='img__me'/>
            <span className='cards__me__react-1'>
              <span className='react-1__shadow'></span>
              <p>Ryan Hakhyeon Cho</p>
            </span>
            <span className='cards__me__react-2'>
              <span className='react-2__shadow'></span>
            </span>
            <span className='cards__me__circle'></span>
            <ul className='cards__me__list'>
              <li><BsLinkedin /></li>
              <li><FaGithub /></li>
              <li><SiMinutemailer /></li>
            </ul>
          </div>
        </div>
        
        <HeaderSocial />

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Header