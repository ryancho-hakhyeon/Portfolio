import React from 'react'
import './footer.css'
//import {} from 'react-icons/'
//import {} from 'react-icons/'
//import {} from 'react-icons/'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__log'>RyanCho</a>
      <ul className='permalinks'>
        <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#services"></a>Services</li>
        <li><a href="#portfolio"></a>Portfolio</li>
        <li><a href="#contact"></a>Contact</li>
      </ul>

      <div className="footer__socials">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RyanCho Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer