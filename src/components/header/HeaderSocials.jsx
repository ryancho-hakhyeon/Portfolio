import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_black"><BsLinkedin/></a>
        <a href='https://github.com' target="_black"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
