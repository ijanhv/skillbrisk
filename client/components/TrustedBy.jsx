import Image from 'next/image'
import React from 'react'

const TrustedBy = () => {
  return (
    <div className='flex justify-around px-72 h-10 py-10 items-center bg-gray-100'>
        <Image className='w-36 mx-4' 
        width={28}
        height={28}
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" />
        <Image className='w-28 mx-4' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="" />
        <Image className='w-28 mx-4' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" />
        <Image className='w-20 mx-4' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" />
        <Image className='w-32 mx-4' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" />
    </div>
  )
}

export default TrustedBy