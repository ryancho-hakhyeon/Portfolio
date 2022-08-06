import React from 'react'
import './experience.css'

import { SiCheckmarx } from 'react-icons/si'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    title: 'BCIT ISSP Projects',
    review: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample'
  },
  {
    title: 'BCIT Personal Projects - Provisioning',
    review: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample'
  },
  {
    title: 'BCIT Personal Projects - Data Analysis',
    review: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample'
  },
  {
    title: 'Code Challeges',
    review: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample'
  },
  {
    title: 'Personal Projects',
    review: 'sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample'
  }
]


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Have Done</h5>
      <h2>My Experience</h2>

      <Swiper className='container experience__container'
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            
            pagination={{ clickable: true }}>
        {
          data.map(({title, review}, index) => {
            return (
              <SwiperSlide key={index} className='experiences'>              
                <SiCheckmarx className='experience__detail-icon'/>
                <div className='experience__title'>
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