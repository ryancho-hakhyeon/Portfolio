import React from 'react'
import './footer.css'
//import {} from 'react-icons/'
//import {} from 'react-icons/'
//import {} from 'react-icons/'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__log'>RyanCho</a>
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="/#"></a>
        <a href="/#"></a>
        <a href="/#"></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; RyanCho Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer