import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/portfolio5.jpg'
import IMG5 from '../../assets/weather.jpg'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Schedule & Employee Management',
    status: 'Progress',
    github: 'https://github.com/ryancho-hakhyeon/SchedulerAndManagement',
    demo: 'https://github.com/ryancho-hakhyeon/SchedulerAndManagement'
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Task Management & Todo List',
    status: 'Progress(Task) & Update(Todo)',
    github: 'https://github.com/ryancho-hakhyeon/ToDo-list',
    demo: 'https://github.com'
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Pill Management',
    status: 'Concept',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Machine Learning',
    status: 'Progress',
    github: 'https://github.com/ryancho-hakhyeon/MachinLearning',
    demo: 'https://github.com'
  },
  {
    id: 5, 
    image: IMG5,
    title: 'Weather Forecast',
    status: 'Update',
    github: 'https://github.com/ryancho-hakhyeon/Weather-Forecast-app',
    demo: 'https://github.com/ryancho-hakhyeon/Weather-Forecast-app'
  },  
  {
    id: 6, 
    image: IMG6,
    title: 'Dashboards',
    status: 'Update',
    github: 'https://github.com/ryancho-hakhyeon/Income-Dashboard',
    demo: 'https://github.com/ryancho-hakhyeon/Income-Dashboard'
  },
]

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, status, github, demo}) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__items-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{status}</h4>
                <div className="portfolio__items-cta">
                  <a href={github} className='btn' rel="noopener noreferrer" target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' rel="noopener noreferrer" target='_blank'>Live Demo</a>
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