import React from 'react'
import './experience.css'

import { SiCheckmarx } from 'react-icons/si'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'
import "swiper/modules/navigation/navigation.min.css";

const data = [
  {
    title: 'BCIT ISSP Practicums',
    review: 'During the BCIT program, it was the composition of the project was very similar to industry work. During 15 weeks with real clients, supervisors, and teammates, it was discussed technical opinions, demands, and possible results, and all those projects experiences were under the Agile methodology. I mostly took a part in catching errors and shaping data format. Also, I supported team mates to develop software in order to move next stage of development.'
  },
  {
    title: 'BCIT Personal Projects - Provision & CI/CD',
    review: 'Mostly focused on how to process between backend, frontend, and database services. The various development tools were used for different purposes like Python and Node.js for the backend, Angular and React for the frontend, MongoDB and MySQL for the database, and Ansible, Docker, and AWS / Azure for the deployment.'
  },
  {
    title: 'BCIT Personal Projects - Data Analysis',
    review: 'By using Python libraries such as Panda, Numpy, and Matplotlib, I analyzed data that get from the open data portal. I mostly focused on a re-shape of data in order for easily analyzing, then I made visualization outcomes that are easily understandable. '
  },
  {
    title: 'Self-Learning',
    review: 'Self-learning by the LeetCode and freeCodeCamp! - I am solving various algorithm-related problems which are mostly ranked easy, and medium levels that the LeetCode provides, and in the freeCodeCamp, I am trying to get a few certificates that are software development related. Now, I got programming languages(Python and JavaScript) certificates, and I am continuously doing my best to keep going to do.'
  },
  {
    title: 'Personal Projects',
    review: 'Way of keeping my interest! - It is able to check every project on Github. Most projects are built in JavaScript and Python programming languages, and I do both types of development like Web-based and App development. Moreover, the tools I use are below the skills section or described in the README.md file in each Github repository. '
  }
]


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Have Done</h5>
      <h2>My Experience</h2>

      <Swiper className='container experience__container'
            modules={[Pagination, Navigation]}
            navigation={true}
            spaceBetween={40}
            slidesPerView={1}
            
            pagination={{ type: "fraction", }}>
        {
          data.map(({title, review}, index) => {
            return (
              <SwiperSlide key={index} className='experiences'>              
                <div className='experience__title'>
                <SiCheckmarx className='experience__detail-icon'/>
                  <h3>{title}</h3>
                </div>
                <small className='experience__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Experience