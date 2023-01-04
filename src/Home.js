import React from 'react'
import AboutUs from './AboutUs'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import HowItWorks from './HowItWorks'
import Navbar from './navbar'
import Services from './Services'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <AboutUs/>
      <Services/>
      <Content/>
      <Footer/>
      
    </>
  )
}

export default Home
