import React, { useEffect, useState } from 'react';

import Loads from './components/loads/Loads';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } 
  }, [isLoading])

  return (
    <>
      {
        isLoading ? 
        
        (<Loads />) 
        : 
        (
          <>
            <div className='bubble-container'>
              <div className='bubble bubble-1'></div>
              <div className='bubble bubble-3'></div>
              <div className='bubble bubble-2'></div>
              <div className='bubble bubble-4'></div>
              <div className='bubble bubble-5'></div>
              <div className='bubble bubble-6'></div>
              <div className='bubble bubble-7'></div>
              <div className='bubble bubble-8'></div>
              <div className='bubble bubble-9'></div>
              <div className='bubble bubble-10'></div>
              <div className='bubble bubble-11'></div>
              <div className='bubble bubble-12'></div>
              <div className='bubble bubble-13'></div>
              <div className='bubble bubble-14'></div>
              <div className='bubble bubble-15'></div>
              <div className='bubble bubble-16'></div>
              <div className='bubble bubble-17'></div>
              <div className='bubble bubble-18'></div>
              <div className='bubble bubble-19'></div>
              <div className='bubble bubble-20'></div>
              <div className='bubble bubble-21'></div>
              <div className='bubble bubble-22'></div>
              <div className='bubble bubble-23'></div>
              <div className='bubble bubble-24'></div>
              <div className='bubble bubble-25'></div>
              <div className='bubble bubble-26'></div>
              <div className='bubble bubble-27'></div>
              <div className='bubble bubble-28'></div>
              <div className='bubble bubble-29'></div>
              <div className='bubble bubble-30'></div>
            </div> 
                   
            <Header />
            <Nav />
            <About />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
          </>
        )
      }
    </>
  )
}

export default App;