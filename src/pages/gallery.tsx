import Footer from '@/components/common/Footer'
import { HeroParallaxDemo } from '@/components/common/HeroParallax'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const gallery = () => {
  return (
    <div>
      <Navbar/>
      <section className="w-full flex flex-col justify-center px-4 py-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
          <HeroParallaxDemo/>
            </div>
            </div>
            </section>
      <Footer/>
    </div>
  )
}

export default gallery
