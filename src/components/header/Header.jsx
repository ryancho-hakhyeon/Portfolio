import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import CTA from './CTA'
import IMG from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

// import { FaLocationArrow } from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai'

const Header = () => {  
  const [isClick, setIsClick] = useState(false)

  const handleClick = () => {
    setIsClick(!isClick)
  }

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

          <div className="me" onClick={handleClick}>
            <div className={`me-img ${isClick ? 'is-flipped' : ''}`}>
              <div className='img-face front-side'>
                <img src={IMG} alt='me'/>
              </div>

              <div className='img-face back-side'>
                <div className='card-box'>
                  <div className='card-img'>
                    <div className="card-border"></div>
                    <span className='card-text'>Ryan Cho</span>
                    
                    <div className='card-phone'>

                      <BsPhone className='card-phone-icon' />
                    </div>
                    <div className='card-email'>
                      <AiOutlineMail className='card-email-icon' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <HeaderSocial />

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Header