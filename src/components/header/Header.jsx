import React from 'react'
import './header.css'
import CTA from './CTA'
import IMG from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {  
  return (
    <header>
      <div className="container header__container">
        
        <div className='explained__me-box'>
          <div className='explained__text'>
            <span>Hello !</span>
            <p>I'm Ryan Cho,</p>
            <p className='explained__text-effect'>Junior Developer!</p>

            <div className='explained__me-words'>
              <div className='small-size-img'></div>
              <span>P</span>
              <span>a</span>
              <span>s</span>
              <span>s</span>
              <span>i</span>
              <span>o</span>
              <span>n</span>
              <span>,</span><br></br>
              <span>C</span>
              <span>h</span>
              <span>e</span>
              <span>l</span>
              <span>l</span>
              <span>e</span>
              <span>g</span>
              <span>e</span>
              <span>,</span><br></br>
              <span>P</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              <span>c</span>
              <span>e</span>
              <span>.</span>
            </div>

            <CTA/>
          </div>

          <div className="me">
            <img src={IMG} alt='me' className="me-img"/>
            <div className='me-img-shadow'></div>
          </div>
        </div>
        
        <HeaderSocial />

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header