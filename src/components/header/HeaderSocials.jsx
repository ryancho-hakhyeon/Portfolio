import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaBlogger } from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ryan-hakhyeon-cho/' target="_black" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/ryancho-hakhyeon' target="_black" rel="noopener noreferrer"><FaGithub/></a>
        <a href='https://ryanchohakhyeon.blog/' target='_blank' rel="noopener noreferrer"><FaBlogger/></a>
    </div>
  )
}

export default HeaderSocials
