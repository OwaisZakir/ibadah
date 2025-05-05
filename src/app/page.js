import AboutUs from '@/components/AboutUs'
import Activities from '@/components/Activities'
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
      <div className='h-screen flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>Hello World</h1>
      </div>
    </>
  )
}

export default page