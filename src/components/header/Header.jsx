import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import CTA from './CTA'
import IMG from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

// import { FaLocationArrow } from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Header = () => {  
  const [isHover, setIsHover] = useState(false)
  const [isClick, setIsClick] = useState(false)
  
  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const handleClick = () => {
    setIsClick(!isClick)
  }

  const filterOut = {
    transition: 'transform .5s ease',
    filter: isHover ? 'grayscale(0%)' : 'grayscale(80%)',
    transform: isHover ? 'scale(1.5)' : 'none',
  }

  return (
    <section id='header'>
      <div className="container header__container">
        
        <div className='explained__me-box'>
          <div className='explained__text'>
            <p className='text-me'><span>H</span><span>i</span><span>,</span></p>
            <p className='text-me'><span>I</span><span>'</span><span>m</span></p>
            <p className='text-me'><span>R</span><span>y</span><span>a</span><span>n</span> <span>C</span><span>h</span><span>o</span><span>,</span></p>
            <p className='text-me explained__text-effect' onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>Junior Developer!</p>

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
                <img src={IMG} alt='me' style={filterOut} />
              </div>

              <div className='img-face back-side'>
                <div className='card-box'>
                  <div className='card-img'>
                    <div className="card-border"></div>
                    <span>Ryan Cho</span>
                    <BsPhone className='card-phone' />
                    <AiOutlineMail className='card-email' />
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className='me-slide'>
              <div className='me-circle'>
                <div className='me-hide' onClick={handleClick}>
                  Click!
                </div>
                <div>
                  <FaLocationArrow className='me-icon'/>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
        <HeaderSocial />

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Header