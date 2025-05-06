import AboutUs from '@/components/AboutUs'
import Activities from '@/components/Activities'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
// import React from 'react'
// import "./globals.css"

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Activities />
      <Contact />
      <Footer />
    </>
  )
}

export default page