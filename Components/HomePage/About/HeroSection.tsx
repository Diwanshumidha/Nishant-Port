"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import AOS from 'aos';



const HeroSection = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <ParallaxProvider>

   
    <div className=' w-full h-screen flex flex-col justify-center items-center'>
    <Parallax speed={30}>
    <div className='flex flex-col justify-center items-center gap-9'>
    <h1 className=' font-semibold'>Nishant</h1>
    <div>
      <nav>
        <ul className='flex space-x-4'>
          <li>Home</li>
          <Link href={'/contact'}>Contact</Link>
          <li>Resume</li>
        </ul>
      </nav>
    </div>
    </div>
    </Parallax>
  </div>
  </ParallaxProvider>
  )
}

export default HeroSection