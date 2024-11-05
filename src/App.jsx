import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About_Us from './Components/About_Us/About_Us'
import Title from './Components/Title/Title'
import Teacher_Profiles from './Components/Teacher_Profiles/Teacher_Profiles'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title title='About Us'/>
        <About_Us />
        <Title title='Teacher Profiles'/>
        <Teacher_Profiles />
      </div>
    </div>
  )
}

export default App