import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ryan-hakhyeon-cho-9832a019b/' target="_black"><BsLinkedin/></a>
        <a href='https://github.com/ryancho-hakhyeon' target="_black"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
