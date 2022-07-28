import React from 'react'
import './header.css'
import CTA from './CTA'
import IMG from '../../assets/me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm </h5>
        <h1> Ryan Cho </h1>
        <h5 className='text-light'> Junior Developer </h5>
        <CTA />

        <div className="me">
          <img src={IMG} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header