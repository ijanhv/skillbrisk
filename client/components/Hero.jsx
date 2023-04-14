import Image from 'next/image'
import React from 'react'
// Import man from assests
import Man from '../assets/man.png'

const Hero = () => {
  return (
<div>
  <div className="flex flex-col  md:flex-row justify-center bg-purple-800">
    <div className="md:w-1/2 flex w-full items-center justify-center px-10 sm:mx-28">
      <div className='text-center sm:text-left text-white'>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 mt-24 font-sans">Find the perfect <span className='italic font-normal'>freelance </span>
        <span className="sm:text-6xl font-semibold mb-6 font-sans">services for your business</span> </h1>
        <input type="text" placeholder="Search" className="w-full h-12 my-5 px-4 rounded-lg border-2 border-purple-300 focus:outline-none focus:border-purple-400" />
      </div>
    </div>
    <div className="md:w-1/2 flex items-center justify-center" style={{ overflow: 'hidden' }}>
      <Image src={Man} alt="Hero image" style={{ transform: 'scale(0.8)', objectFit: 'cover', objectPosition: '50% 0' }} className="hidden md:block w-full" width={300} height={600} />
    </div>
  </div>
</div>
  )

}

export default Hero