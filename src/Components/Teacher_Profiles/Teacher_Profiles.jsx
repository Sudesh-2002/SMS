import React from 'react'
import './Teacher_Profiles.css'
import teacherImage from '../../assets/teacher.jpg'

const Teacher_Profiles = () => {
  return (
    <div className='teacher-profiles'>
      <div className='profile'>
      <div className='filter-options'>
        <input type='search' placeholder='type the course'></input>
        <select placeholder="Grade">
          <option value="Grade 6">Grade 6</option>
          <option value="Grade 7">Grade 7</option>
          <option value="Grade 8">Grade 8</option>
          <option value="Grade 9">Grade 9</option>
          <option value="Grade 10">Grade 10</option>
          <option value="Grade 11">Grade 11</option>
        </select>
      </div>
        <div className='teacher-card'>
          <img src={teacherImage} alt="Teacher" className='profile-img'/>
          <p className='teacher-name'>Name: Mr. John Doe</p>
          <hr />
        </div>
      </div>
      <div className='details'>
        <h2>
          Other details
        </h2><br />
        <p>
          Featuring air-conditioned auditoriums, advanced widescreen displays, and superior audio systems, it ensures a top-tier learning experience. 
          The institute also offers comfortable seating and a serene cafeteria, creating an ideal atmosphere for academic success and student relaxation.
        </p>
        <button className="read">Time table</button>
      </div>
    </div>
  )
}

export default Teacher_Profiles