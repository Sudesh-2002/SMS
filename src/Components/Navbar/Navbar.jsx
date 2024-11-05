import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Teacher Profiles</li>
        <li>Time table</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar