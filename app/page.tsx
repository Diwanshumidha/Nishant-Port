
import React from 'react'

import About from '@/Components/HomePage/About/About'
import HeroSection from '@/Components/HomePage/About/HeroSection'
import Knowledge from '@/Components/HomePage/About/Knowledge'
import SocialLinks from '@/Components/HomePage/About/SocialLinks'
// import font from '../public/GothamNights-e49g.ttf'

const page = () => {
  return (
    <div>
    <HeroSection/>
    <About/>
    <Knowledge/>
    <SocialLinks/>
    </div>
  )
}

export default page