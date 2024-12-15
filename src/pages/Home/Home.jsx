import React from 'react'
import Hero from '../../components/Hero/Hero'
 import Services from '../../components/services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
import Features from '../../components/Features/Features'
 import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    
    <div>
      <Hero/>
      <Services/> 
       <Testimonials/> 
      <Features/> 
       <Footer/>
    </div>

  )
}

export default Home