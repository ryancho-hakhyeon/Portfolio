import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lkw0hpp', 'template_xvnn6xx', form.current, 'UGMj_n6PCGLWPfkRi')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ryancho.hakhyeon@gmail.com</h5>
            <a href="mailto:ryancho.hakhyeon@gmail.com" rel="noopener noreferrer" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Ryan Hakhyeon Cho</h5>
            <a href="https://www.linkedin.com/in/ryan-hakhyeon-cho-9832a019b/" rel="noopener noreferrer" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Indeed</h4>
            <h5>Ryan Hakhyeon Cho</h5>
            <a href="/#" target="_blank">Sample</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact