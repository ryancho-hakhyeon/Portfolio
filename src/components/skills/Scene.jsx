import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

const Scene = () => {

  useEffect(() => {
    const tagCloudContainer = ".tagcloud"
    const tagCloudWords = [
      'JavaScript', 'Python', 'React', 'Angular', 'NodeJs', 'ExpressJs', 'HTML', 'CSS/SCSS', 'MySQL', 'Mongodb', 'Flask', 'Bootstrap', 'Ansible', 'Docker', 'kubernetes', 'AWS', 'Azure', 'Ubuntu', 'Jenkins', 'Jira', 'Pandas', 'Numpy', 'Matplotlib', 'R', 'SQLight', 'Tableau', 'MS Office', 'GitHub'
    ]
    const tagCloudOptions = {
      radius: 220,
      direction: 135,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true
    }
    // console.log(tagCloudWords)
    TagCloud(tagCloudContainer, tagCloudWords, tagCloudOptions)
    // return () => {
    // }
  }, [])


  return (    
    <>
      <span className='tagcloud'></span>
    </>
  )
}

export default Scene