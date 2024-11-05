import React from 'react'
import './About_Us.css'
import image from '../../assets/slider1.jpg'

const About_Us = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <p>
          Danuma Institute in Kadana provides a high-tech learning environment for first-time higher education students. 
        </p><br />
        <p>
          Featuring air-conditioned auditoriums, advanced widescreen displays, and superior audio systems, it ensures a top-tier learning experience. 
          The institute also offers comfortable seating and a serene cafeteria, creating an ideal atmosphere for academic success and student relaxation.
        </p>
        <button className="read">Read more</button>
      </div>
      <div className='about-right'>
        <img src={image} alt="" className='about-img'/>
      </div>
    </div>
  )
}

export default About_Us