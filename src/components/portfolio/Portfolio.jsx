import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Sample data 1',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Sample data 2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Sample data 3',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Sample data 4',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5, 
    image: IMG5,
    title: 'Sample data 5',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' rel="noopener noreferrer" target='_blank'>Github</a>
                    <a href={demo} className='btn-primary' rel="noopener noreferrer" target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio