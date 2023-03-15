import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

const Scene = () => {

  useEffect(() => {
    return () => {
      const container = ".tagcloud"
      const words = [
        'JavaScript', 'Python', 'React', 'Angular', 'NodeJs', 'ExpressJs', 'HTML', 'CSS/SCSS', 'MySQL', 'Mongodb', 'Flask', 'Bootstrap', 'Ansible', 'Docker', 'kubernetes', 'AWS', 'Azure', 'Ubuntu', 'Jenkins', 'Jira', 'Data Analysis', 'GitHub'
      ]
      const options = {
        radius: 220,
        direction: 195,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true
      }
      TagCloud(container, words, options)
    }
  }, [])

  return (    
    <>
      <span className='tagcloud'></span>
    </>
  )
}

export default Scene