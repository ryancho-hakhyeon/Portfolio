import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaAws, FaBlogger } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__log'>RyanCho</a>
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/ryancho-hakhyeon" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/ryan-hakhyeon-cho/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://www.credly.com/badges/da4e2591-5df4-4550-8517-f1f71a82b60b/public_url' target='_blank' rel="noopener noreferrer"><FaAws/></a>
        <a href='https://ryanchohakhyeon.blog/' target='_blank' rel='noopener noreferrer'><FaBlogger/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RyanCho Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer