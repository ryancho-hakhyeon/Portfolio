import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
//import {} from 'react-icons/'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__log'>RyanCho</a>
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/ryancho-hakhyeon"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/ryan-hakhyeon-cho-9832a019b/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RyanCho Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer