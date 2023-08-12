import Image from 'next/image'
import React from 'react'
import BatSignal from '../../public/AboutLogos/BatSignal1.png'

const Footer = () => {
  return (
    <footer className='bg-[#3185FC]'>

    <div className=' flex justify-between items-end container px-10 mx-auto  pb-4 text--2  '>
        <span>© 2023 Nishant</span>
        <span className=' max-sm:hidden'>Funded By Wayne Enterprises</span>
        
        <span>
            <Image src={BatSignal} width={60} height={60} alt='Bat signal' className=' scale-x-[-1]'/>
        </span>
    </div>
    </footer>
  )
}

export default Footer