import React from 'react'
import CV from '../../assets/Ryan Hakhyeon Cho Resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's a Talk</a>
    </div>
  )
}

export default CTA